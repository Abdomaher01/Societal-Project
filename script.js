/* global QUIZ_DATA */
(function () {
  const THEME_KEY = "quizWheel.theme";
  const LANG_KEY = "quizWheel.lang";

  const POINTER_DEG = -90; // top pointer
  const SEGMENT_START_DEG = -90; // slice 0 boundary at the top
  const WHEEL_SPINS_MIN = 5;
  const WHEEL_SPINS_EXTRA = 2;

  const els = {
    themeToggle: document.getElementById("themeToggle"),
    themeToggleIcon: document.getElementById("themeToggleIcon"),
    themeToggleText: document.getElementById("themeToggleText"),
    langToggle: document.getElementById("langToggle"),
    langToggleText: document.getElementById("langToggleText"),

    wheelWrapper: document.getElementById("wheelWrapper"),
    wheelCanvas: document.getElementById("wheelCanvas"),
    wheelCenterOverlay: document.getElementById("wheelCenterOverlay"),
    wheelSelectedIcon: document.getElementById("wheelSelectedIcon"),
    wheelSelectedName: document.getElementById("wheelSelectedName"),

    spinBtn: document.getElementById("spinBtn"),

    questionTitle: document.querySelector(".questionCard__title"),
    questionMeta: document.getElementById("questionMeta"),
    questionText: document.getElementById("questionText"),
    choices: document.getElementById("choices"),
    feedback: document.getElementById("feedback")
  };

  const state = {
    lang: "en",
    isDark: false,
    categories: [],

    phase: "idle", // idle | spinning | question
    isReducedMotion: false,

    selectedCategoryIndex: 0,

    currentCategoryIndex: null,
    currentQuestion: null,

    // wheel rotation at rest (normalized) and during animation (can include full rotations)
    wheelRotationModDeg: 0,
    wheelRotationTotalDeg: 0
  };

  const i18n = {
    en: {
      brand: "TreeVenture",
      spin: "Spin",
      themeDark: "Dark",
      themeLight: "Light",
      langButton: "العربية",
      questionTitle: "Question",
      categoryLabel: "Category",
      clickWheel: "Click the wheel to start!",
      correct: "Correct!",
      wrong: "Wrong!"
    },
    ar: {
      brand: "عجلة الاختبار",
      spin: "تدوير",
      themeDark: "داكن",
      themeLight: "فاتح",
      langButton: "English",
      questionTitle: "سؤال",
      categoryLabel: "التصنيف",
      clickWheel: "اضغط على العجلة للبدء!",
      correct: "إجابة صحيحة!",
      wrong: "إجابة خاطئة!"
    }
  };

  const audio = {
    ctx: null,
    ensure() {
      if (this.ctx) return this.ctx;
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      this.ctx = new Ctx();
      return this.ctx;
    },
    async resume() {
      const ctx = this.ensure();
      if (!ctx) return false;
      if (ctx.state === "suspended") await ctx.resume();
      return true;
    },
    setGain(gainNode, t, from, to, dur) {
      gainNode.gain.setValueAtTime(from, t);
      gainNode.gain.exponentialRampToValueAtTime(Math.max(to, 0.0001), t + dur);
    }
  };

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function degToRad(d) {
    return (d * Math.PI) / 180;
  }

  function radToDeg(r) {
    return (r * 180) / Math.PI;
  }

  function easeOutCubic(t) {
    // t in [0..1]
    return 1 - Math.pow(1 - t, 3);
  }

  function debounce(fn, delayMs) {
    let t = null;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), delayMs);
    };
  }

  function setReducedMotionFlag() {
    state.isReducedMotion = Boolean(
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function applyTranslations() {
    const t = i18n[state.lang];

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (t[key] != null) node.textContent = t[key];
    });

    els.themeToggleText.textContent = state.isDark ? t.themeLight : t.themeDark;
    els.themeToggleIcon.textContent = state.isDark ? "☀️" : "🌙";
    els.langToggleText.textContent = t.langButton;
  }

  function setLang(lang) {
    state.lang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    applyTranslations();

    // Re-render wheel + center label + question language content in-place, without changing question.
    wheelUI.render();
    const centerIndex = state.currentCategoryIndex != null ? state.currentCategoryIndex : state.selectedCategoryIndex;
    if (centerIndex != null) {
      updateCenterContent(centerIndex);
    }

    if (state.currentQuestion && state.currentCategoryIndex != null) {
      const category = state.categories[state.currentCategoryIndex];
      renderQuestion(state.currentQuestion, category);
    } else {
      els.questionText.textContent = i18n[state.lang].clickWheel;
      typesetMath();
    }
  }

  function setTheme(isDark) {
    state.isDark = isDark;
    document.body.classList.toggle("dark", isDark);
    applyTranslations();
    wheelUI.render();
  }

  async function playSpinSound() {
    if (!(await audio.resume())) return;
    const ctx = audio.ctx;
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.5);

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(400, now);
    filter.Q.setValueAtTime(1.2, now);

    gain.gain.setValueAtTime(0.0001, now);
    audio.setGain(gain, now, 0.0001, 0.22, 0.20);
    audio.setGain(gain, now + 0.20, 0.22, 0.0001, 0.28);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.58);
  }

  async function playCorrectSound() {
    if (!(await audio.resume())) return;
    const ctx = audio.ctx;
    if (!ctx) return;
    const now = ctx.currentTime;

    const freqs = state.isDark ? [620, 980] : [560, 920];
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(f, now + i * 0.06);
      gain.gain.setValueAtTime(0.0001, now + i * 0.06);
      audio.setGain(gain, now + i * 0.06, 0.0001, 0.26, 0.07);
      audio.setGain(gain, now + i * 0.13, 0.26, 0.0001, 0.10);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.06);
      osc.stop(now + 0.25);
    });
  }

  async function playWrongSound() {
    if (!(await audio.resume())) return;
    const ctx = audio.ctx;
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "square";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(130, now + 0.18);
    osc.frequency.exponentialRampToValueAtTime(170, now + 0.40);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(520, now);
    filter.Q.setValueAtTime(0.85, now);

    gain.gain.setValueAtTime(0.0001, now);
    audio.setGain(gain, now, 0.0001, 0.26, 0.06);
    audio.setGain(gain, now + 0.06, 0.26, 0.0001, 0.30);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.50);
  }

  function updateCenterContent(index) {
    const cat = state.categories[index];
    if (!cat) return;
    els.wheelSelectedIcon.textContent = cat.icon;
    els.wheelSelectedName.textContent = cat.name[state.lang] || cat.name.en || "";
  }

  function updateCenterRotation(deg, withTransition) {
    if (!els.wheelCenterOverlay) return;
    if (withTransition) {
      els.wheelCenterOverlay.style.transition = "transform 560ms cubic-bezier(.15,.72,.2,1)";
    } else {
      els.wheelCenterOverlay.style.transition = "none";
    }
    els.wheelCenterOverlay.style.transform = `translate(-50%, -50%) rotate(${deg}deg)`;
  }

  const wheelUI = {
    ctx: null,
    dpr: 1,
    sizePx: 0,
    wheelGeom: { cx: 0, cy: 0, R: 0 },

    init() {
      this.ctx = els.wheelCanvas.getContext("2d");
    },

    resize() {
      const rect = els.wheelWrapper.getBoundingClientRect();
      const cssSize = Math.max(200, Math.floor(rect.width));
      this.dpr = window.devicePixelRatio || 1;
      this.sizePx = cssSize;

      els.wheelCanvas.width = Math.floor(cssSize * this.dpr);
      els.wheelCanvas.height = Math.floor(cssSize * this.dpr);

      const R = (els.wheelCanvas.width / this.dpr) / 2;
      this.wheelGeom = {
        cx: els.wheelCanvas.width / (2 * this.dpr),
        cy: els.wheelCanvas.height / (2 * this.dpr),
        R
      };
    },

    drawRingWedge(a0, a1, innerR, outerR, fill, stroke, lineWidth) {
      const ctx = this.ctx;
      const { cx, cy } = this.wheelGeom;
      ctx.beginPath();

      // Outer arc
      ctx.arc(cx, cy, outerR, a0, a1, false);

      // Inner arc (reverse direction)
      ctx.arc(cx, cy, innerR, a1, a0, true);
      ctx.closePath();

      ctx.fillStyle = fill;
      ctx.fill();

      if (stroke) {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = stroke;
        ctx.stroke();
      }
    },

    render() {
      if (!this.ctx) this.init();
      if (!state.categories.length) return;

      const ctx = this.ctx;
      const { cx, cy, R } = this.wheelGeom;

      const dpr = this.dpr;
      // Clear in device pixels, then draw in CSS pixels.
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, els.wheelCanvas.width, els.wheelCanvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels

      const n = state.categories.length;
      const segAngleDeg = 360 / n;
      const segAngleRad = degToRad(segAngleDeg);

      const rotationRad = degToRad(state.wheelRotationModDeg);
      const baseRad = degToRad(SEGMENT_START_DEG);

      const outerR = R * 0.98;
      const innerR = R * 0.22;
      const borderW = clamp(R * 0.010, 2, 6);

      const textColor = state.isDark ? "rgba(238,242,255,.94)" : "rgba(10,16,34,.92)";
      const strokeBase = state.isDark ? "rgba(238,242,255,.30)" : "rgba(12,18,34,.18)";

      // Wheel subtle glow
      ctx.save();
      ctx.shadowColor = state.isDark ? "rgba(79,124,255,.30)" : "rgba(79,124,255,.25)";
      ctx.shadowBlur = R * 0.08;
      ctx.beginPath();
      ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = "transparent";
      ctx.restore();

      for (let i = 0; i < n; i += 1) {
        const cat = state.categories[i];
        const a0 = baseRad + i * segAngleRad + rotationRad;
        const a1 = a0 + segAngleRad;

        const isSelected = i === state.selectedCategoryIndex;
        const stroke = isSelected ? (state.isDark ? "rgba(255,255,255,.55)" : "rgba(255,255,255,.78)") : strokeBase;
        const lineWidth = isSelected ? borderW + 1 : borderW;

        this.drawRingWedge(a0, a1, innerR, outerR, cat.color, stroke, lineWidth);

        // Icon
        const midRad = (a0 + a1) / 2;
        const iconR = innerR + (outerR - innerR) * 0.42;
        const iconX = cx + Math.cos(midRad) * iconR;
        const iconY = cy + Math.sin(midRad) * iconR;

        const fontIconPx = clamp(R * 0.10, 18, 42);
        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `700 ${fontIconPx}px ${getComputedStyle(document.body).fontFamily}`;
        ctx.fillStyle = textColor;
        ctx.shadowColor = state.isDark ? "rgba(0,0,0,.45)" : "rgba(0,0,0,.12)";
        ctx.shadowBlur = R * 0.02;
        ctx.fillText(cat.icon, iconX, iconY);
        ctx.restore();

        // Text label (tangent to the segment)
        const label = (cat.name && (cat.name[state.lang] || cat.name.en)) ? cat.name[state.lang] || cat.name.en : "";
        const textR = innerR + (outerR - innerR) * 0.70;
        const textX = cx + Math.cos(midRad) * textR;
        const textY = cy + Math.sin(midRad) * textR;

        let tangentialRad = midRad + Math.PI / 2;
        let rotDeg = radToDeg(tangentialRad);
        rotDeg = ((rotDeg + 180) % 360) - 180; // -> [-180..180]
        if (rotDeg > 90) rotDeg -= 180;
        if (rotDeg < -90) rotDeg += 180;
        const rot = degToRad(rotDeg);

        const maxTextWidth = R * 0.33;
        let fontSize = clamp(R * 0.075, 12, 26);
        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.direction = state.lang === "ar" ? "rtl" : "ltr";
        ctx.shadowColor = state.isDark ? "rgba(0,0,0,.50)" : "rgba(0,0,0,.15)";
        ctx.shadowBlur = R * 0.020;

        // Fit font size to avoid overflow.
        while (fontSize > 10) {
          ctx.font = `900 ${Math.round(fontSize)}px ${getComputedStyle(document.body).fontFamily}`;
          const w = ctx.measureText(label).width;
          if (w <= maxTextWidth) break;
          fontSize -= 1.2;
        }

        ctx.font = `900 ${Math.round(fontSize)}px ${getComputedStyle(document.body).fontFamily}`;
        ctx.fillStyle = textColor;
        ctx.translate(textX, textY);
        ctx.rotate(rot);
        ctx.fillText(label, 0, 0);
        ctx.restore();
      }

      // Outer ring and inner cut
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
      ctx.closePath();
      ctx.strokeStyle = state.isDark ? "rgba(238,242,255,.25)" : "rgba(255,255,255,.70)";
      ctx.lineWidth = clamp(R * 0.010, 2, 5);
      ctx.stroke();
      ctx.restore();
    }
  };

  function disableAnswerButtons(disabled) {
    els.choices.querySelectorAll("button").forEach((btn) => {
      btn.disabled = disabled;
    });
  }

  function renderQuestion(question, category) {
    const t = i18n[state.lang];
    els.questionMeta.textContent = `${t.categoryLabel}: ${category.name[state.lang] || category.name.en || ""}`;
    els.questionText.textContent = question.question[state.lang] || question.question.en || "";
    els.feedback.classList.remove("good", "bad");
    els.feedback.textContent = "";

    els.choices.innerHTML = "";
    question.choices.forEach((choice, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choiceBtn";
      btn.textContent = choice[state.lang] || choice.en || "";
      btn.dataset.choiceIndex = String(idx);
      els.choices.appendChild(btn);
    });

    // Render LaTeX math expressions if MathJax is loaded.
    typesetMath();
  }

  function typesetMath() {
    if (window.MathJax && typeof MathJax.typesetPromise === "function") {
      MathJax.typesetPromise([els.questionText, els.questionMeta, els.choices]).catch((error) => {
        console.warn("MathJax typeset failed:", error);
      });
    } else {
      // Retry until MathJax is loaded.
      setTimeout(typesetMath, 80);
    }
  }

  function showQuestionForCategory(categoryIndex) {
    const category = state.categories[categoryIndex];
    if (!category) return;

    state.currentCategoryIndex = categoryIndex;
    state.currentQuestion = pickRandom(category.questions);

    renderQuestion(state.currentQuestion, category);

    // Disable spin during answering (strict requirement).
    state.phase = "question";
    els.spinBtn.disabled = true;
    disableAnswerButtons(false);
  }

  async function onChooseAnswer(choiceIndex) {
    if (state.phase !== "question" || !state.currentQuestion) return;

    disableAnswerButtons(true);

    const correctIndex = state.currentQuestion.correctAnswer;
    const btns = els.choices.querySelectorAll("button");

    btns.forEach((btn) => {
      btn.classList.remove("correct", "wrong");
      btn.setAttribute("aria-disabled", "true");
    });

    btns.forEach((btn) => {
      const idx = Number(btn.dataset.choiceIndex);
      if (idx === correctIndex) btn.classList.add("correct");
      if (idx === choiceIndex && idx !== correctIndex) btn.classList.add("wrong");
    });

    const isCorrect = choiceIndex === correctIndex;
    if (isCorrect) {
      els.feedback.classList.remove("bad");
      els.feedback.classList.add("good");
      els.feedback.textContent = i18n[state.lang].correct;
      await playCorrectSound();
    } else {
      els.feedback.classList.remove("good");
      els.feedback.classList.add("bad");
      els.feedback.textContent = i18n[state.lang].wrong;
      await playWrongSound();
    }

    // Now allow spinning again.
    state.phase = "idle";
    state.currentQuestion = null;
    els.spinBtn.disabled = false;
  }

  function computeSelectedIndexFromRotationMod(rotationModDeg) {
    const n = state.categories.length;
    const segAngleDeg = 360 / n;
    // pointer is at top (-90). With our slice start at top, pointer sees -rotation.
    const idx = Math.floor(mod(-rotationModDeg, 360) / segAngleDeg);
    return mod(idx, n);
  }

  function startSpin() {
    if (state.phase === "spinning") return;
    if (!state.categories.length) return;
    if (state.phase === "question") return; // strict: disable while answering

    const n = state.categories.length;
    const segAngleDeg = 360 / n;
    state.phase = "spinning";
    els.spinBtn.disabled = true;
    disableAnswerButtons(true);
    els.feedback.textContent = "";

    // Choose a random category and a small random offset inside that slice
    // to guarantee the final angle is not landing on an exact boundary.
    const chosenIndex = Math.floor(Math.random() * n);
    const offset = (Math.random() * 2 - 1) * segAngleDeg * 0.16;

    state.selectedCategoryIndex = chosenIndex;
    // Do not reveal the chosen category until the wheel stops.
    // (Center overlay will remain a generic placeholder during spinning.)
    els.wheelSelectedIcon.textContent = state.lang === "ar" ? "🎲" : "🎲";
    els.wheelSelectedName.textContent = "";

    // Sync center rotation with the current wheel orientation instantly (no transition).
    updateCenterRotation(state.wheelRotationTotalDeg, false);

    // Audio must be tied to user gesture; this runs inside click.
    void playSpinSound();

    const startTotal = state.wheelRotationTotalDeg;
    const currentMod = state.wheelRotationModDeg;

    // Base rotation (mod) that places chosenIndex center under the pointer:
    // wheelRotation ≡ -(i + 0.5) * segAngle   (mod 360)
    const baseTargetMod = mod(-(chosenIndex + 0.5) * segAngleDeg, 360);
    const targetMod = mod(baseTargetMod + offset, 360);
    const deltaMod = mod(targetMod - currentMod, 360);

    const spins = WHEEL_SPINS_MIN + Math.floor(Math.random() * (WHEEL_SPINS_EXTRA + 1));
    const targetTotal = startTotal + spins * 360 + deltaMod;

    const durationMs = state.isReducedMotion ? 800 : clamp(3800 + spins * 180, 4200, 5600);
    const startTime = performance.now();

    function frame(now) {
      const t = clamp((now - startTime) / durationMs, 0, 1);
      const eased = easeOutCubic(t);

      const curTotal = startTotal + (targetTotal - startTotal) * eased;
      state.wheelRotationTotalDeg = curTotal;
      state.wheelRotationModDeg = mod(curTotal, 360);

      wheelUI.render();
      // While spinning: center rotates with the wheel.
      updateCenterRotation(curTotal, false);

      if (t < 1) {
        window.requestAnimationFrame(frame);
        return;
      }

      // End: normalize wheel for stable future spins.
      state.wheelRotationTotalDeg = mod(targetTotal, 360);
      state.wheelRotationModDeg = mod(targetTotal, 360);

      // Detect selected segment from the final rotation (strict requirement).
      const selectedFromRotation = computeSelectedIndexFromRotationMod(state.wheelRotationModDeg);
      state.selectedCategoryIndex = selectedFromRotation;
      updateCenterContent(selectedFromRotation);

      // Re-render final wheel at normalized rotation.
      wheelUI.render();

      // Smoothly rotate center back upright to 0deg.
      updateCenterRotation(0, true);

      // Show question after wheel stops.
      showQuestionForCategory(selectedFromRotation);
    }

    window.requestAnimationFrame(frame);
  }

  function initInteractions() {
    els.spinBtn.addEventListener("click", startSpin);
    els.wheelWrapper.addEventListener("click", (e) => {
      // Ignore clicks on buttons (none inside wrapper) but keep gesture consistent.
      if (e.target && e.target.closest && e.target.closest("button")) return;
      startSpin();
    });

    els.choices.addEventListener("click", (e) => {
      const btn = e.target && e.target.closest ? e.target.closest("button.choiceBtn") : null;
      if (!btn) return;
      if (btn.disabled) return;
      const idx = Number(btn.dataset.choiceIndex);
      void onChooseAnswer(idx);
    });

    els.themeToggle.addEventListener("click", () => {
      setTheme(!state.isDark);
      localStorage.setItem(THEME_KEY, !state.isDark ? "dark" : "light");
    });

    els.langToggle.addEventListener("click", () => {
      const next = state.lang === "ar" ? "en" : "ar";
      setLang(next);
      localStorage.setItem(LANG_KEY, next);
    });
  }

  function initThemeAndLang() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const savedLang = localStorage.getItem(LANG_KEY);

    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;
    const lang = savedLang === "ar" ? "ar" : "en";

    setReducedMotionFlag();
    setTheme(isDark);
    setLang(lang);
  }

  function init() {
    state.categories = (window.QUIZ_DATA && window.QUIZ_DATA.categories) ? window.QUIZ_DATA.categories : [];
    if (!state.categories.length) {
      els.questionText.textContent = "No quiz data found.";
      els.spinBtn.disabled = true;
      return;
    }

    // Initial UI
    els.questionText.textContent = i18n[state.lang].clickWheel;
    updateCenterContent(0);
    updateCenterRotation(0, true);
    typesetMath();

    // Canvas
    wheelUI.init();
    wheelUI.resize();
    wheelUI.render();

    // Theme + language after first render so canvas uses correct colors.
    applyTranslations();
    initThemeAndLang();
    wheelUI.render();
    els.questionText.textContent = i18n[state.lang].clickWheel;

    // Resize handling
    const onResize = debounce(() => {
      wheelUI.resize();
      wheelUI.render();
    }, 120);
    window.addEventListener("resize", onResize);

    initInteractions();
    applyTranslations();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
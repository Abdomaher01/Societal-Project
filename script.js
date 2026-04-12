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

    startRoundBtn: document.getElementById("startRoundBtn"),
    playerCountInput: document.getElementById("playerCountInput"),
    homeFeedback: document.getElementById("homeFeedback"),
    homeSection: document.getElementById("homeSection"),
    gameArea: document.getElementById("gameArea"),
    turnInfo: document.getElementById("turnInfo"),
    timerInfo: document.getElementById("timerInfo"),
    spinBtn: document.getElementById("spinBtn"),

    questionTitle: document.querySelector(".questionCard__title"),
    questionMeta: document.getElementById("questionMeta"),
    questionText: document.getElementById("questionText"),
    choices: document.getElementById("choices"),
    feedback: document.getElementById("feedback"),
    luckyCardContainer: document.getElementById("luckyCardContainer")
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
    currentQuestionIndex: null,

    // round game state
    roundActive: false,
    playerCount: 1,
    playerScores: [],
    currentPlayer: 1,
    turnsTotal: 0,
    currentTurn: 0,
    askedQuestions: new Set(),
    questionTimerId: null,

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
      wrong: "Wrong!",
      timeUp: "Time's up!",
      homeText: "Enter number of players (2-4). Each player gives 5 turns.",
      playerCountLabel: "Number of players",
      startRound: "Start Round",
      playerTurn: "Player {player} • Turn {turn}/{total}",
      timer: "Timer: {seconds}s",
      winnerPrefix: "Winner: ",
      tiePrefix: "Tie:",
      pointsText: "points",
      luckyCard: "Lucky Card",
      spinForNext: "Spin the wheel for the next question.",
      spinForFirst: "Spin the wheel to get your first question."
    },
    ar: {
      brand: "شجرة المغامرات",
      spin: "تدوير",
      themeDark: "داكن",
      themeLight: "فاتح",
      langButton: "English",
      questionTitle: "سؤال",
      categoryLabel: "التصنيف",
      clickWheel: "اضغط على العجلة للبدء!",
      correct: "إجابة صحيحة!",
      wrong: "إجابة خاطئة!",
      timeUp: "انتهى الوقت!",
      homeText: "أدخل عدد اللاعبين (2-4). كل لاعب يحصل على 5 جولات.",
      playerCountLabel: "عدد اللاعبين",
      startRound: "ابدأ الجولة",
      playerTurn: "اللاعب {player} • الجولة {turn}/{total}",
      timer: "الوقت المتبقي: {seconds}s",
      winnerPrefix: "الفائز: ",
      tiePrefix: "تعادل:",
      pointsText: "نقاط",
      luckyCard: "كارت الحظ",
      spinForNext: "ادر العجلة للحصول على السؤال التالي.",
      spinForFirst: "ادر العجلة للحصول على سؤالك الأول."
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

    if (state.phase === "question" && state.currentQuestion && state.currentCategoryIndex != null) {
      const category = state.categories[state.currentCategoryIndex];
      renderQuestion(state.currentQuestion, category);
    } else {
      els.questionText.textContent = i18n[state.lang].clickWheel;
      typesetMath();
    }

    // Update round status and timer for new language
    if (state.roundActive) {
      updateRoundStatus();
      if (!state.questionTimerId) {
        els.timerInfo.textContent = i18n[state.lang].timer.replace("{seconds}", 15);
      }
    } else {
      showHomeScreen();
    }
  }

  function setTheme(isDark) {
    state.isDark = isDark;
    document.body.classList.toggle("dark", isDark);
    applyTranslations();
    wheelUI.render();
  }

  async function playSpinSound() {
    const audio = new Audio("spin.wav");
    audio.volume = 0.7;
    audio.playbackRate = 1.2; // Speed up by 20% to match wheel rotation
    try {
      await audio.play();
    } catch (e) {
      console.warn("Failed to play spin sound:", e);
    }
  }

  async function playCorrectSound() {
    const audio = new Audio("win.wav");
    audio.volume = 0.7;
    try {
      await audio.play();
    } catch (e) {
      console.warn("Failed to play win sound:", e);
    }
  }

  async function playWrongSound() {
    const audio = new Audio("wrong.wav");
    audio.volume = 0.7;
    try {
      await audio.play();
    } catch (e) {
      console.warn("Failed to play wrong sound:", e);
    }
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

  function revealCorrectAnswer() {
    const correctIndex = state.currentQuestion ? state.currentQuestion.correctAnswer : null;
    if (correctIndex == null) return;

    els.choices.querySelectorAll("button").forEach((btn) => {
      const idx = Number(btn.dataset.choiceIndex);
      if (idx === correctIndex) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
      }
      btn.disabled = true;
    });
  }

  function showHomeScreen() {
    const t = i18n[state.lang];
    state.roundActive = false;
    els.homeSection.classList.remove("hidden");
    els.gameArea.classList.add("hidden");
    els.spinBtn.disabled = true;
    els.homeFeedback.textContent = "";
    els.turnInfo.textContent = t.playerTurn
      .replace("{player}", 0)
      .replace("{turn}", 0)
      .replace("{total}", 0);
    els.timerInfo.textContent = t.timer.replace("{seconds}", 15);
  }

  function updateRoundStatus() {
    const t = i18n[state.lang];
    els.turnInfo.textContent = t.playerTurn
      .replace("{player}", state.currentPlayer)
      .replace("{turn}", state.currentTurn)
      .replace("{total}", state.turnsTotal);
  }

  function stopQuestionTimer() {
    if (state.questionTimerId) {
      clearInterval(state.questionTimerId);
      state.questionTimerId = null;
    }
  }

  function startQuestionTimer() {
    stopQuestionTimer();
    let remaining = 15;
    els.timerInfo.textContent = i18n[state.lang].timer.replace("{seconds}", remaining);
    state.questionTimerId = setInterval(() => {
      remaining -= 1;
      if (remaining >= 0) {
        els.timerInfo.textContent = i18n[state.lang].timer.replace("{seconds}", remaining);
      }
      if (remaining <= 0) {
        stopQuestionTimer();
        onQuestionTimeout();
      }
    }, 1000);
  }

  function getAvailableCategoryIndex(preferredIndex) {
    const total = state.categories.length;
    const start = preferredIndex != null ? preferredIndex : 0;
    for (let offset = 0; offset < total; offset += 1) {
      const idx = (start + offset) % total;
      const category = state.categories[idx];
      if (!category) continue;
      const hasLeft = category.questions.some((_, qIdx) => !state.askedQuestions.has(`${idx}-${qIdx}`));
      if (hasLeft) return idx;
    }
    return null;
  }

  function chooseQuestionFromCategory(categoryIndex) {
    const category = state.categories[categoryIndex];
    if (!category) return null;
    const available = category.questions
      .map((q, qIdx) => ({ q, qIdx }))
      .filter(({qIdx}) => !state.askedQuestions.has(`${categoryIndex}-${qIdx}`));
    if (!available.length) return null;
    const pick = available[Math.floor(Math.random() * available.length)];
    return { question: pick.q, categoryIndex, questionIndex: pick.qIdx };
  }

  function completeRound() {
    stopQuestionTimer();
    state.roundActive = false;

    els.homeSection.classList.remove("hidden");
    els.gameArea.classList.add("hidden");
    els.spinBtn.disabled = true;
    els.questionText.textContent = i18n[state.lang].clickWheel;
    els.feedback.textContent = "";
  }

  function handleTurnComplete() {
    stopQuestionTimer();
    state.currentTurn += 1;
    updateRoundStatus();

    const totalQuestions = state.categories.reduce((sum, c) => sum + (c.questions ? c.questions.length : 0), 0);
    if (state.currentTurn > state.turnsTotal || state.askedQuestions.size >= totalQuestions) {
      completeRound();
      return;
    }

    state.phase = "idle";
    state.currentPlayer = (state.currentPlayer % state.playerCount) + 1;
    state.currentQuestion = null;
    state.currentQuestionIndex = null;
    updateRoundStatus();
    els.feedback.textContent = "";
    els.questionText.textContent = i18n[state.lang].spinForNext;
    els.questionMeta.textContent = "";
    els.choices.innerHTML = "";
    els.spinBtn.disabled = false;
    els.timerInfo.textContent = i18n[state.lang].timer.replace("{seconds}", 15);
  }

  function startRound() {
    const players = Number(els.playerCountInput.value);
    if (!Number.isInteger(players) || players < 2 || players > 4) {
      els.homeFeedback.textContent = "Please enter an integer from 2 to 4.";
      return;
    }

    state.playerCount = players;
    state.playerScores = new Array(players).fill(0);
    state.currentPlayer = 1;
    state.turnsTotal = players * 5;
    const totalQuestions = state.categories.reduce((sum, c) => sum + (c.questions ? c.questions.length : 0), 0);
    if (state.turnsTotal > totalQuestions) {
      state.turnsTotal = totalQuestions;
      els.homeFeedback.textContent = `Only ${totalQuestions} unique questions available; round turns adjusted to ${totalQuestions}.`;
    }
    state.currentTurn = 1;
    state.askedQuestions = new Set();
    state.roundActive = true;
    state.phase = "idle";
    state.currentCategoryIndex = null;
    state.currentQuestion = null;
    state.currentQuestionIndex = null;

    els.homeSection.classList.add("hidden");
    els.gameArea.classList.remove("hidden");
    // make sure visible wheel has exact device-scaled resolution
    wheelUI.resize();
    wheelUI.render();

    els.feedback.textContent = "";
    document.getElementById("roundWinner").textContent = "";

    updateRoundStatus();
    els.questionText.textContent = i18n[state.lang].spinForFirst;
    els.questionMeta.textContent = "";
    els.choices.innerHTML = "";
    els.spinBtn.disabled = false;
    els.homeFeedback.textContent = "";
  }

  async function onQuestionTimeout() {
    if (state.phase !== "question") return;

    revealCorrectAnswer();
    els.feedback.classList.remove("good");
    els.feedback.classList.add("bad");
    const t = i18n[state.lang];
    els.feedback.textContent = `${t.timeUp} ${t.wrong}`;
    await playWrongSound();

    // Mark current question as asked (if set)
    if (state.currentCategoryIndex != null && state.currentQuestionIndex != null) {
      state.askedQuestions.add(`${state.currentCategoryIndex}-${state.currentQuestionIndex}`);
    }

    // Delay to show the correct answer before proceeding
    setTimeout(() => {
      handleTurnComplete();
    }, 2000);
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
    const availableIndex = getAvailableCategoryIndex(categoryIndex);
    if (availableIndex == null) {
      completeRound();
      return;
    }

    const chosen = chooseQuestionFromCategory(availableIndex);
    if (!chosen) {
      completeRound();
      return;
    }

    state.currentCategoryIndex = availableIndex;
    state.currentQuestion = chosen.question;
    state.currentQuestionIndex = chosen.questionIndex;

    renderQuestion(state.currentQuestion, state.categories[availableIndex]);

    state.phase = "question";
    els.spinBtn.disabled = true;
    disableAnswerButtons(false);

    startQuestionTimer();
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
    stopQuestionTimer();

    if (isCorrect) {
      els.feedback.classList.remove("bad");
      els.feedback.classList.add("good");
      els.feedback.textContent = i18n[state.lang].correct;
      state.playerScores[state.currentPlayer - 1] += 1;
      await playCorrectSound();
    } else {
      els.feedback.classList.remove("good");
      els.feedback.classList.add("bad");
      els.feedback.textContent = i18n[state.lang].wrong;
      await playWrongSound();
    }

    if (state.currentCategoryIndex != null && state.currentQuestionIndex != null) {
      state.askedQuestions.add(`${state.currentCategoryIndex}-${state.currentQuestionIndex}`);
    }

    // Prepare next turn; enough feedback time to read it.
    setTimeout(() => {
      handleTurnComplete();
    }, 2000);
  }

  function showLuckyCard() {
    // 30% chance to show lucky card
    if (Math.random() > 0.3) return;

    const t = i18n[state.lang];
    const luckyCard = document.createElement("div");
    luckyCard.className = "luckyCard";
    luckyCard.innerHTML = `
      <div class="luckyCardInner">
        <div class="luckyCardGoldenTag">✨ ${t.luckyCard} ✨</div>
        <div class="luckyCardContent">
          🍀
        </div>
      </div>
    `;

    els.luckyCardContainer.innerHTML = "";
    els.luckyCardContainer.appendChild(luckyCard);
    els.luckyCardContainer.classList.remove("hidden");

    // Auto-hide after 2 seconds
    setTimeout(() => {
      els.luckyCardContainer.classList.add("hidden");
    }, 2000);
  }

  function computeSelectedIndexFromRotationMod(rotationModDeg) {
    const n = state.categories.length;
    const segAngleDeg = 360 / n;
    // pointer is at top (-90). With our slice start at top, pointer sees -rotation.
    const idx = Math.floor(mod(-rotationModDeg, 360) / segAngleDeg);
    return mod(idx, n);
  }

  function startSpin() {
    if (!state.roundActive) return;
    if (state.phase === "spinning") return;
    if (!state.categories.length) return;
    if (state.phase === "question") return; // strict: disable while answering
    if (!state.roundActive) return;
    if (state.currentTurn > state.turnsTotal) {
      completeRound();
      return;
    }

    const n = state.categories.length;
    const segAngleDeg = 360 / n;
    state.phase = "spinning";
    els.spinBtn.disabled = true;
    disableAnswerButtons(true);
    els.feedback.textContent = "";

    // Disable toggles during spinning
    els.langToggle.disabled = true;
    els.themeToggle.disabled = true;

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
    playSpinSound();

    const startTotal = state.wheelRotationTotalDeg;
    const currentMod = state.wheelRotationModDeg;

    // Base rotation (mod) that places chosenIndex center under the pointer:
    // wheelRotation ≡ -(i + 0.5) * segAngle   (mod 360)
    const baseTargetMod = mod(-(chosenIndex + 0.5) * segAngleDeg, 360);
    const targetMod = mod(baseTargetMod + offset, 360);
    const deltaMod = mod(targetMod - currentMod, 360);

    const spins = WHEEL_SPINS_MIN + Math.floor(Math.random() * (WHEEL_SPINS_EXTRA + 1));
    const targetTotal = startTotal + spins * 360 + deltaMod;

    // Duration synced to spin.wav with 1.2x playback speed (14950ms / 1.2 ≈ 12500ms)
    // Both wheel and voice speed up together for tighter synchronization
    const durationMs = state.isReducedMotion ? 1000 : 12500;
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

      // Show lucky card randomly
      showLuckyCard();

      // Show question after wheel stops.
      showQuestionForCategory(selectedFromRotation);

      // Re-enable toggles after spinning
      els.langToggle.disabled = false;
      els.themeToggle.disabled = false;
    }

    window.requestAnimationFrame(frame);
  }

  function initInteractions() {
    els.startRoundBtn.addEventListener("click", startRound);
    els.playerCountInput.addEventListener("input", () => {
      els.homeFeedback.textContent = "";
    });

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
    showHomeScreen();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
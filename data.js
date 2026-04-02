/* global window */
window.QUIZ_DATA = {
  categories: [
    {
      id: "math",
      name: { en: "Math", ar: "رياضيات" },
      icon: "🧮",
      color: "#4f7cff",
      questions: [
        {
          question: { en: "What is 2 + 2?", ar: "ما ناتج ٢ + ٢؟" },
          choices: [
            { en: "3", ar: "٣" },
            { en: "4", ar: "٤" },
            { en: "5", ar: "٥" },
            { en: "6", ar: "٦" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "What is the value of 10 - 3?", ar: "ما قيمة ١٠ - ٣؟" },
          choices: [
            { en: "6", ar: "٦" },
            { en: "7", ar: "٧" },
            { en: "8", ar: "٨" },
            { en: "9", ar: "٩" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which number is prime?", ar: "أي عدد هو عدد أولي؟" },
          choices: [
            { en: "9", ar: "٩" },
            { en: "10", ar: "١٠" },
            { en: "11", ar: "١١" },
            { en: "12", ar: "١٢" }
          ],
          correctAnswer: 2
        }
      ]
    },
    {
      id: "science",
      name: { en: "Science", ar: "علوم" },
      icon: "🔬",
      color: "#20c997",
      questions: [
        {
          question: { en: "What planet is known as the Red Planet?", ar: "أي كوكب يُعرف بالكوكب الأحمر؟" },
          choices: [
            { en: "Venus", ar: "الزهرة" },
            { en: "Mars", ar: "المريخ" },
            { en: "Jupiter", ar: "المشتري" },
            { en: "Saturn", ar: "زحل" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Water boils at what temperature (at sea level)?", ar: "عند أي درجة يغلي الماء (عند مستوى سطح البحر)؟" },
          choices: [
            { en: "90°C", ar: "٩٠°م" },
            { en: "95°C", ar: "٩٥°م" },
            { en: "100°C", ar: "١٠٠°م" },
            { en: "105°C", ar: "١٠٥°م" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "What is the main gas in the Earth's atmosphere?", ar: "ما الغاز الرئيسي في الغلاف الجوي للأرض؟" },
          choices: [
            { en: "Oxygen", ar: "الأكسجين" },
            { en: "Nitrogen", ar: "النيتروجين" },
            { en: "Carbon Dioxide", ar: "ثاني أكسيد الكربون" },
            { en: "Helium", ar: "الهيليوم" }
          ],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "history",
      name: { en: "History", ar: "تاريخ" },
      icon: "🏛️",
      color: "#ff4fd8",
      questions: [
        {
          question: { en: "The ancient Egyptians built the pyramids in order to…", ar: "بنى المصريون القدماء الأهرامات من أجل…" },
          choices: [
            { en: "Fishing", ar: "الصيد" },
            { en: "Tombs for pharaohs", ar: "قبور الفراعنة" },
            { en: "Training soldiers", ar: "تدريب الجنود" },
            { en: "Water storage", ar: "تخزين المياه" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which year marks the start of World War II (commonly cited)?", ar: "أي سنة تُعد بداية الحرب العالمية الثانية (بشكل شائع)؟" },
          choices: [
            { en: "1914", ar: "١٩١٤" },
            { en: "1939", ar: "١٩٣٩" },
            { en: "1945", ar: "١٩٤٥" },
            { en: "1951", ar: "١٩٥١" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "The Renaissance is associated with which European region?", ar: "يرتبط عصر النهضة بأي منطقة في أوروبا؟" },
          choices: [
            { en: "Italy", ar: "إيطاليا" },
            { en: "Russia", ar: "روسيا" },
            { en: "Sweden", ar: "السويد" },
            { en: "Greece", ar: "اليونان" }
          ],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "geography",
      name: { en: "Geography", ar: "جغرافيا" },
      icon: "🌍",
      color: "#f7b731",
      questions: [
        {
          question: { en: "Which continent is the Sahara Desert located in?", ar: "في أي قارة يقع صحراء الصحراء الكبرى؟" },
          choices: [
            { en: "Asia", ar: "آسيا" },
            { en: "Africa", ar: "أفريقيا" },
            { en: "Europe", ar: "أوروبا" },
            { en: "Australia", ar: "أستراليا" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "What is the capital of Japan?", ar: "ما عاصمة اليابان؟" },
          choices: [
            { en: "Seoul", ar: "سيول" },
            { en: "Beijing", ar: "بكين" },
            { en: "Tokyo", ar: "طوكيو" },
            { en: "Bangkok", ar: "بانكوك" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which ocean is the largest on Earth?", ar: "أي محيط هو الأكبر على الأرض؟" },
          choices: [
            { en: "Atlantic Ocean", ar: "المحيط الأطلسي" },
            { en: "Indian Ocean", ar: "المحيط الهندي" },
            { en: "Arctic Ocean", ar: "المحيط المتجمد الشمالي" },
            { en: "Pacific Ocean", ar: "المحيط الهادئ" }
          ],
          correctAnswer: 3
        }
      ]
    },
    {
      id: "english",
      name: { en: "English", ar: "إنجليزي" },
      icon: "✍️",
      color: "#7c4dff",
      questions: [
        {
          question: { en: "Choose the correct sentence.", ar: "اختر الجملة الصحيحة." },
          choices: [
            { en: "She go to school.", ar: "She go to school." },
            { en: "She goes to school.", ar: "She goes to school." },
            { en: "She going to school.", ar: "She going to school." },
            { en: "She went to school yesterday.", ar: "She went to school yesterday." }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "What is the opposite of 'hot'?", ar: "ما عكس كلمة 'hot'؟" },
          choices: [
            { en: "Cold", ar: "بارد" },
            { en: "Warm", ar: "دافئ" },
            { en: "Sweet", ar: "حلو" },
            { en: "Fast", ar: "سريع" }
          ],
          correctAnswer: 0
        },
        {
          question: { en: "Pick the correct spelling: 'beautiful'", ar: "اختر التهجئة الصحيحة: 'beautiful'" },
          choices: [
            { en: "Beautifull", ar: "Beautifull" },
            { en: "Beautiful", ar: "Beautiful" },
            { en: "Beautifulll", ar: "Beautifulll" },
            { en: "Beautifull2", ar: "Beautifull2" }
          ],
          correctAnswer: 1
        }
      ]
    },
    {
      id: "sports",
      name: { en: "Sports", ar: "رياضة" },
      icon: "🏅",
      color: "#00d2ff",
      questions: [
        {
          question: { en: "How many players are on a soccer team on the field?", ar: "كم عدد اللاعبين في فريق كرة القدم داخل الملعب؟" },
          choices: [
            { en: "9", ar: "٩" },
            { en: "10", ar: "١٠" },
            { en: "11", ar: "١١" },
            { en: "12", ar: "١٢" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "In which sport do you serve a shuttlecock?", ar: "في أي رياضة تُقدَّم الكرة (الريشة) بالضرب للإرسال؟" },
          choices: [
            { en: "Tennis", ar: "التنس" },
            { en: "Badminton", ar: "الريشة الطائرة" },
            { en: "Basketball", ar: "كرة السلة" },
            { en: "Swimming", ar: "السباحة" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "A standard basketball has how many points for a free throw?", ar: "كم نقطة تمنح الرمية الحرة في كرة السلة القياسية؟" },
          choices: [
            { en: "1 point", ar: "نقطة واحدة" },
            { en: "2 points", ar: "نقطتان" },
            { en: "3 points", ar: "ثلاث نقاط" },
            { en: "4 points", ar: "أربع نقاط" }
          ],
          correctAnswer: 0
        }
      ]
    }
  ]
};


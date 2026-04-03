/* global window */
window.QUIZ_DATA = {
  categories: [
    {
      id: "math",
      name: { en: "Math", ar: "رياضيات" },
      icon: "🧮",
      color: "#0A3323",
      questions: [
        {
          question: { en: "How many faces does a regular icosahedron have?", ar: "كم عدد الأوجه في المجسم (Icosahedron)؟" },
          choices: [
            { en: "8", ar: "٨" },
            { en: "12", ar: "١٢" },
            { en: "20", ar: "٢٠" },
            { en: "24", ar: "٢٤" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "In probability, the 'Birthday Paradox' states that to have a 50% chance of two people sharing a birthday, a room only needs to have how many people?", ar: "في الاحتمالات، تنص 'مفارقة يوم الميلاد' على أنه للحصول على فرصة بنسبة ٥٠٪ أن يتشارك شخصان نفس يوم الميلاد، يجب أن تحتوي الغرفة على كم شخص فقط؟" },
          choices: [
            { en: "23", ar: "٢٣" },
            { en: "50", ar: "٥٠" },
            { en: "183", ar: "١٨٣" },
            { en: "365", ar: "٣٦٥" }
          ],
          correctAnswer: 0
        },
        {
          question: { en: "What is the value of $\\cos(120^\\circ)$?", ar: "ما هي قيمة $\\cos(١٢٠^\\circ)$؟" },
          choices: [
            { en: "0.5", ar: "٠.٥" },
            { en: "-0.5", ar: "-٠.٥" },
            { en: "0.866", ar: "٠.٨٦٦" },
            { en: "-0.866", ar: "-٠.٨٦٦" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "In linear algebra, what is the trace of a square matrix?", ar: "في الجبر الخطي، ما هو 'أثر المصفوفة' (Trace of a matrix) المربعة؟" },
          choices: [
            { en: "The product of its diagonal elements", ar: "حاصل ضرب عناصر قطرها الرئيسي" },
            { en: "The determinant of the matrix", ar: "محدد المصفوفة" },
            { en: "The sum of its main diagonal elements", ar: "مجموع عناصر قطرها الرئيسي" },
            { en: "The inverse of the matrix", ar: "معكوس المصفوفة" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "What does the limit of $(1 + 1/n)^n$ approach as $n$ approaches infinity?", ar: "إلى ماذا تؤول نهاية الدالة $(١ + ١/n)^n$ عندما تقترب $n$ من المالانهاية؟" },
          choices: [
            { en: "0", ar: "٠" },
            { en: "1", ar: "١" },
            { en: "π", ar: "π" },
            { en: "e", ar: "e (العدد النيبيري)" }
          ],
          correctAnswer: 3
        },
        {
          question: { en: "What is the approximate value of the Golden Ratio ($\phi$)?", ar: "ما هي القيمة التقريبية للنسبة الذهبية ($\phi$)؟" },
          choices: [
            { en: "1.414", ar: "١.٤١٤" },
            { en: "1.618", ar: "١.٦١٨" },
            { en: "2.718", ar: "٢.٧١٨" },
            { en: "3.141", ar: "٣.١٤١" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "What is the period of the trigonometric tangent function, $\\tan(x)$?", ar: "ما هي دورة الدالة المثلثية الظل $\\tan(x)$؟" },
          choices: [
            { en: "π/2", ar: "π/٢" },
            { en: "π", ar: "π" },
            { en: "2π", ar: "٢π" },
            { en: "4π", ar: "٤π" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "In complex numbers, what is the value of $i^4$ (where $i$ is the imaginary unit)?", ar: "في الأعداد المركبة، ما هي قيمة $i^٤$ (حيث $i$ هو الوحدة التخيلية)؟" },
          choices: [
            { en: "1", ar: "١" },
            { en: "-1", ar: "-١" },
            { en: "i", ar: "i" },
            { en: "-i", ar: "-i" }
          ],
          correctAnswer: 0
        },
        {
          question: { en: "Which conic section is formed when a plane intersects a cone parallel to its slant edge (generator)?", ar: "أي قطع مخروطي يتشكل عندما يقطع مستوىً مخروطًا بشكل موازٍ لراسمه (حافته المائلة)؟" },
          choices: [
            { en: "Circle", ar: "دائرة" },
            { en: "Ellipse", ar: "قطع ناقص" },
            { en: "Parabola", ar: "قطع مكافئ" },
            { en: "Hyperbola", ar: "قطع زائد" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "In combinatorics, what is the number of combinations for choosing 2 items out of 5?", ar: "في التوافيق، ما هو عدد طرق اختيار عنصرين من أصل ٥ عناصر؟" },
          choices: [
            { en: "10", ar: "١٠" },
            { en: "20", ar: "٢٠" },
            { en: "60", ar: "٦٠" },
            { en: "120", ar: "١٢٠" }
          ],
          correctAnswer: 0
        },
        {
          question: { en: "What is the mathematical name for a polygon that has exactly 12 sides?", ar: "ما هو الاسم الرياضي للمضلع الذي يحتوي على ١٢ ضلعًا بالضبط؟" },
          choices: [
            { en: "Decagon", ar: "عشاري الأضلاع" },
            { en: "Dodecagon", ar: "اثنا عشري الأضلاع" },
            { en: "Heptagon", ar: "سباعي الأضلاع" },
            { en: "Icosagon", ar: "عشريني الأضلاع" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "In topology, what is the name of a non-orientable surface that has only one side and one boundary edge?", ar: "في الطوبولوجيا، ما اسم السطح غير القابل للتوجيه والذي يمتلك وجهًا واحدًا وحافة حدودية واحدة فقط؟" },
          choices: [
            { en: "Klein bottle", ar: "زجاجة كلاين" },
            { en: "Torus", ar: "الطارة" },
            { en: "Möbius strip", ar: "شريط موبيوس" },
            { en: "Sphere", ar: "الكرة" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "In Boolean algebra, what is the logical result of the expression A AND (NOT A)?", ar: "في الجبر البولياني، ما هي النتيجة المنطقية للتعبير A AND (NOT A)؟" },
          choices: [
            { en: "True", ar: "صحيح" },
            { en: "False", ar: "خطأ" },
            { en: "A", ar: "A" },
            { en: "NOT A", ar: "NOT A" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "The Fundamental Theorem of Arithmetic states that every integer greater than 1 is either prime or can be represented uniquely as a product of what?", ar: "تنص المبرهنة الأساسية في الحساب على أن كل عدد صحيح أكبر من ١ هو إما عدد أولي أو يمكن تمثيله بشكل فريد كحاصل ضرب ماذا؟" },
          choices: [
            { en: "Rational numbers", ar: "أعداد نسبية" },
            { en: "Prime numbers", ar: "أعداد أولية" },
            { en: "Even numbers", ar: "أعداد زوجية" },
            { en: "Complex numbers", ar: "أعداد مركبة" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "What is the value of $\\log_{10}(1000)$?", ar: "ما هي قيمة لوغاريتم ١٠٠٠ للأساس ١٠؟" },
          choices: [
            { en: "2", ar: "٢" },
            { en: "3", ar: "٣" },
            { en: "10", ar: "١٠" },
            { en: "100", ar: "١٠٠" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "What is the sum of the interior angles of a regular pentagon (5 sides)?", ar: "ما هو مجموع الزوايا الداخلية للشكل الخماسي المنتظم (٥ أضلاع)؟" },
          choices: [
            { en: "360 degrees", ar: "٣٦٠ درجة" },
            { en: "540 degrees", ar: "٥٤٠ درجة" },
            { en: "720 degrees", ar: "٧٢٠ درجة" },
            { en: "900 degrees", ar: "٩٠٠ درجة" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "If a coin is tossed twice, what is the probability of getting 'Heads' both times?", ar: "إذا تم رمي عملة معدنية مرتين، فما هو احتمال ظهور 'الصورة' في المرتين؟" },
          choices: [
            { en: "1/2", ar: "١/٢" },
            { en: "1/4", ar: "١/٤" },
            { en: "1/8", ar: "١/٨" },
            { en: "3/4", ar: "٣/٤" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "A number is divisible by 9 if:", ar: "يكون العدد قابلاً للقسمة على ٩ إذا كان:" },
          choices: [
            { en: "It ends in 9", ar: "ينتهي بالرقم ٩" },
            { en: "It is an odd number", ar: "عدداً فردياً" },
            { en: "The sum of its digits is divisible by 9", ar: "مجموع أرقامه يقبل القسمة على ٩" },
            { en: "It is divisible by 27", ar: "يقبل القسمة على ٢٧" }
          ],
          correctAnswer: 2
        }
      ]
    },
    {
      id: "science",
      name: { en: "Science", ar: "علوم" },
      icon: "🔬",
      color: "#839958",
      questions: [
      {
        question: { en: "Which organ is responsible for pumping blood throughout the human body?", ar: "ما هو العضو المسؤول عن ضخ الدم إلى جميع أنحاء جسم الإنسان؟" },
        choices: [
          { en: "Lungs", ar: "الرئتين" },
          { en: "Liver", ar: "الكبد" },
          { en: "Heart", ar: "القلب" },
          { en: "Stomach", ar: "المعدة" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "What is the chemical formula for water?", ar: "ما هي الصيغة الكيميائية للماء؟" },
        choices: [
          { en: "CO2", ar: "ثاني أكسيد الكربون" },
          { en: "H2O", ar: "الماء" },
          { en: "NaCl", ar: "كلوريد الصوديوم" },
          { en: "O2", ar: "الأكسجين" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "Which planet in our solar system is known as the 'Red Planet'?", ar: "أي كوكب في نظامنا الشمسي يُعرف بـ 'الكوكب الأحمر'؟" },
        choices: [
          { en: "Jupiter", ar: "المشتري" },
          { en: "Mars", ar: "المريخ" },
          { en: "Venus", ar: "الزهيرة" },
          { en: "Saturn", ar: "زحل" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "What is the standard unit of force in the International System of Units (SI)?", ar: "ما هي الوحدة القياسية للقوة في النظام الدولي للوحدات (SI)؟" },
        choices: [
          { en: "Joule", ar: "جول" },
          { en: "Watt", ar: "واط" },
          { en: "Newton", ar: "نيوتن" },
          { en: "Pascal", ar: "باسكال" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "Matter that has a definite shape and a definite volume is in which state?", ar: "المادة التي لها شكل محدد وحجم محدد تكون في أي حالة؟" },
        choices: [
          { en: "Gas", ar: "غازية" },
          { en: "Liquid", ar: "سائلة" },
          { en: "Solid", ar: "صلبة" },
          { en: "Plasma", ar: "بلازما" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "Which gas do plants absorb from the atmosphere for photosynthesis?", ar: "ما هو الغاز الذي تمتصه النباتات من الغلاف الجوي لعملية البناء الضوئي؟" },
        choices: [
          { en: "Oxygen", ar: "الأكسجين" },
          { en: "Nitrogen", ar: "النيتروجين" },
          { en: "Carbon dioxide", ar: "ثاني أكسيد الكربون" },
          { en: "Hydrogen", ar: "الهيدروجين" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "Where is the genetic information (DNA) stored in an animal cell?", ar: "أين تُخزن المعلومات الوراثية (DNA) في الخلية الحيوانية؟" },
        choices: [
          { en: "Cytoplasm", ar: "السيتوبلازم" },
          { en: "Nucleus", ar: "النواة" },
          { en: "Cell membrane", ar: "غشاء الخلية" },
          { en: "Mitochondria", ar: "الميتوكوندريا" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "What is the fastest thing in the universe?", ar: "ما هو أسرع شيء في الكون؟" },
        choices: [
          { en: "Sound", ar: "الصوت" },
          { en: "Light", ar: "الضوء" },
          { en: "Electricity", ar: "الكهرباء" },
          { en: "Wind", ar: "الرياح" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "Which of the following materials is a good conductor of electricity?", ar: "أي من المواد التالية تُعتبر موصلًا جيدًا للكهرباء؟" },
        choices: [
          { en: "Wood", ar: "الخشب" },
          { en: "Plastic", ar: "البلاستيك" },
          { en: "Copper", ar: "النحاس" },
          { en: "Rubber", ar: "المطاط" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "What is the process called when a liquid turns into a gas?", ar: "ماذا تسمى العملية عندما يتحول السائل إلى غاز؟" },
        choices: [
          { en: "Freezing", ar: "التجمد" },
          { en: "Evaporation", ar: "التبخر" },
          { en: "Condensation", ar: "التكثف" },
          { en: "Melting", ar: "الانصهار" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "Which organ is responsible for pumping blood throughout the human body?", ar: "ما هو العضو المسؤول عن ضخ الدم إلى جميع أنحاء جسم الإنسان؟" },
        choices: [
          { en: "Lungs", ar: "الرئتين" },
          { en: "Liver", ar: "الكبد" },
          { en: "Heart", ar: "القلب" },
          { en: "Stomach", ar: "المعدة" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "What is the chemical formula for water?", ar: "ما هي الصيغة الكيميائية للماء؟" },
        choices: [
          { en: "CO2", ar: "ثاني أكسيد الكربون" },
          { en: "H2O", ar: "الماء" },
          { en: "NaCl", ar: "كلوريد الصوديوم" },
          { en: "O2", ar: "الأكسجين" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "Which planet in our solar system is known as the 'Red Planet'?", ar: "أي كوكب في نظامنا الشمسي يُعرف بـ 'الكوكب الأحمر'؟" },
        choices: [
          { en: "Jupiter", ar: "المشتري" },
          { en: "Mars", ar: "المريخ" },
          { en: "Venus", ar: "الزهيرة" },
          { en: "Saturn", ar: "زحل" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "What is the standard unit of force in the International System of Units (SI)?", ar: "ما هي الوحدة القياسية للقوة في النظام الدولي للوحدات (SI)؟" },
        choices: [
          { en: "Joule", ar: "جول" },
          { en: "Watt", ar: "واط" },
          { en: "Newton", ar: "نيوتن" },
          { en: "Pascal", ar: "باسكال" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "Matter that has a definite shape and a definite volume is in which state?", ar: "المادة التي لها شكل محدد وحجم محدد تكون في أي حالة؟" },
        choices: [
          { en: "Gas", ar: "غازية" },
          { en: "Liquid", ar: "سائلة" },
          { en: "Solid", ar: "صلبة" },
          { en: "Plasma", ar: "بلازما" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "Which gas do plants absorb from the atmosphere for photosynthesis?", ar: "ما هو الغاز الذي تمتصه النباتات من الغلاف الجوي لعملية البناء الضوئي؟" },
        choices: [
          { en: "Oxygen", ar: "الأكسجين" },
          { en: "Nitrogen", ar: "النيتروجين" },
          { en: "Carbon dioxide", ar: "ثاني أكسيد الكربون" },
          { en: "Hydrogen", ar: "الهيدروجين" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "Where is the genetic information (DNA) stored in an animal cell?", ar: "أين تُخزن المعلومات الوراثية (DNA) في الخلية الحيوانية؟" },
        choices: [
          { en: "Cytoplasm", ar: "السيتوبلازم" },
          { en: "Nucleus", ar: "النواة" },
          { en: "Cell membrane", ar: "غشاء الخلية" },
          { en: "Mitochondria", ar: "الميتوكوندريا" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "What happens to the Reducing Agent during a chemical reaction?", ar: "ماذا يحدث للعامل المختزل أثناء التفاعل الكيميائي؟" },
        choices: [
          { en: "It gains electrons and is reduced.", ar: "يكتسب إلكترونات ويُختزل." },
          { en: "It loses electrons and is oxidized.", ar: "يفقد إلكترونات ويتأكسد." },
          { en: "Its atomic mass increases significantly.", ar: "تزداد كتلته الذرية بشكل كبير." },
          { en: "It always turns into a noble gas.", ar: "يتحول دائمًا إلى غاز خامل." }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "Which of the following materials is a good conductor of electricity?", ar: "أي من المواد التالية تُعتبر موصلًا جيدًا للكهرباء؟" },
        choices: [
          { en: "Wood", ar: "الخشب" },
          { en: "Plastic", ar: "البلاستيك" },
          { en: "Copper", ar: "النحاس" },
          { en: "Rubber", ar: "المطاط" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "What is the process called when a liquid turns into a gas?", ar: "ماذا تسمى العملية عندما يتحول السائل إلى غاز؟" },
        choices: [
          { en: "Freezing", ar: "التجمد" },
          { en: "Evaporation", ar: "التبخر" },
          { en: "Condensation", ar: "التكثف" },
          { en: "Melting", ar: "الانصهار" }
        ],
        correctAnswer: 1
      }
    ]
    },
    {
      id: "history",
      name: { en: "History", ar: "تاريخ" },
      icon: "🏛️",
      color: "#F7F4D5",
      questions: [
        {
          question: { en: "Which polymath from the Islamic Golden Age is often called the 'Father of Optics' for his work 'Book of Optics'?", ar: "من هو العالم الموسوعي الذي يُلقب بـ 'أبو البصريات' بسبب كتابه 'كتاب المناظر'؟" },
          choices: [
            { en: "Al-Kindi", ar: "الكندي" },
            { en: "Ibn al-Haytham (Alhazen)", ar: "ابن الهيثم" },
            { en: "Ibn Sina", ar: "ابن سينا" },
            { en: "Al-Biruni", ar: "البيروني" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "In which year did the French Revolution officially begin?", ar: "في أي عام بدأت الثورة الفرنسية رسمياً؟" },
          choices: [
            { en: "1776", ar: "١٧٧٦" },
            { en: "1804", ar: "١٨٠٤" },
            { en: "1789", ar: "١٧٨٩" },
            { en: "1812", ar: "١٨١٢" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which Pharaoh fought the Hittites at the Battle of Kadesh, leading to the world's first recorded peace treaty?", ar: "أي فرعون حارب الحيثيين في موقعة قادش، مما أدى إلى أول معاهدة سلام مسجلة في العالم؟" },
          choices: [
            { en: "Thutmose III", ar: "تحتمس الثالث" },
            { en: "Ramses II", ar: "رمسيس الثاني" },
            { en: "Akhenaten", ar: "أخناتون" },
            { en: "Seti I", ar: "سيتي الأول" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Who was the first Emperor of Rome?", ar: "من كان أول إمبراطور لروما؟" },
          choices: [
            { en: "Julius Caesar", ar: "يوليوس قيصر" },
            { en: "Augustus Caesar", ar: "أغسطس قيصر" },
            { en: "Nero", ar: "نيرو" },
            { en: "Marcus Aurelius", ar: "ماركوس أوريليوس" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which leader recaptured Jerusalem from the Crusaders in 1187?", ar: "من هو القائد الذي استعاد القدس من الصليبيين عام ١١٨٧؟" },
          choices: [
            { en: "Nur ad-Din Zangi", ar: "نور الدين زنكي" },
            { en: "Salah ad-Din (Saladin)", ar: "صلاح الدين الأيوبي" },
            { en: "Baibars", ar: "الظاهر بيبرس" },
            { en: "Saif ad-Din Qutuz", ar: "سيف الدين قطز" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which Ottoman Sultan conquered Constantinople in 1453?", ar: "أي سلطان عثماني فتح القسطنطينية عام ١٤٥٣؟" },
          choices: [
            { en: "Suleiman the Magnificent", ar: "سليمان القانوني" },
            { en: "Selim I", ar: "سليم الأول" },
            { en: "Mehmed II (The Conqueror)", ar: "محمد الثاني (الفاتح)" },
            { en: "Murad II", ar: "مراد الثاني" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which ancient civilization developed the 'Cuneiform' script?", ar: "أي حضارة قديمة طورت الخط 'المسماري'؟" },
          choices: [
            { en: "Sumerian", ar: "السومرية" },
            { en: "Phoenician", ar: "الفينيقية" },
            { en: "Mayan", ar: "المايا" },
            { en: "Indus Valley", ar: "وادي السند" }
          ],
          correctAnswer: 0
        },
        {
          question: { en: "At which 1815 battle was Napoleon Bonaparte definitively defeated?", ar: "في أي معركة عام ١٨١٥ هُزم نابليون بونابرت نهائياً؟" },
          choices: [
            { en: "Battle of Austerlitz", ar: "معركة أوسترليتز" },
            { en: "Battle of Waterloo", ar: "معركة واترلو" },
            { en: "Battle of Leipzig", ar: "معركة لايبزيغ" },
            { en: "Battle of Borodino", ar: "معركة بورودينو" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which Asian nation modernized its military and society in the late 19th century?", ar: "أي أمة آسيوية حدثت جيشها ومجتمعها في أواخر القرن التاسع عشر؟" },
          choices: [
            { en: "China", ar: "الصين" },
            { en: "Korea", ar: "كوريا" },
            { en: "Japan", ar: "اليابان" },
            { en: "Thailand", ar: "تايلاند" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which Egyptian leader planned the surprise crossing of the Suez Canal?", ar: "أي قائد مصري خطط للعبور المفاجئ لقناة السويس؟" },
          choices: [
            { en: "Gamal Abdel Nasser", ar: "جمال عبد الناصر" },
            { en: "Anwar Sadat", ar: "أنور السادات" },
            { en: "Hosni Mubarak", ar: "حسني مبارك" },
            { en: "Saad el-Shazly", ar: "سعد الدين الشاذلي" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "The 'Cold War' was a period of political tension mainly between which two countries?", ar: "كانت 'الحرب الباردة' فترة توتر سياسي بشكل أساسي بين أي دولتين؟" },
          choices: [
            { en: "Germany and France", ar: "ألمانيا وفرنسا" },
            { en: "USA and Soviet Union", ar: "الولايات المتحدة والاتحاد السوفيتي" },
            { en: "UK and China", ar: "بريطانيا والصين" },
            { en: "Japan and Italy", ar: "اليابان وإيطاليا" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Who was the first Emperor of Rome?", ar: "من هو أول إمبراطور لروما؟" },
          choices: [
            { en: "Julius Caesar", ar: "يوليوس قيصر" },
            { en: "Augustus Caesar", ar: "أغسطس قيصر" },
            { en: "Nero", ar: "نيرو" },
            { en: "Marcus Aurelius", ar: "ماركوس أوريليوس" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which explorer was the first to reach India by sea via the Cape of Good Hope?", ar: "أي مستكشف كان أول من وصل إلى الهند بحراً عبر طريق رأس الرجاء الصالح؟" },
          choices: [
            { en: "Christopher Columbus", ar: "كريستوفر كولومبوس" },
            { en: "Ferdinand Magellan", ar: "فرديناند ماجلان" },
            { en: "Vasco da Gama", ar: "فاسكو دي جاما" },
            { en: "Amerigo Vespucci", ar: "أميريغو فيسبوتشي" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Who was the last active ruler of the Ptolemaic Kingdom of Egypt?", ar: "من كان آخر حاكم فعلي للمملكة البطلمية في مصر؟" },
          choices: [
            { en: "Nefertiti", ar: "نفرتيتي" },
            { en: "Cleopatra VII", ar: "كليوباترا السابعة" },
            { en: "Hatshepsut", ar: "حتشبسوت" },
            { en: "Meritethis", ar: "ميريت إيتس" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "In what year did World War II officially end?", ar: "في أي عام انتهت الحرب العالمية الثانية رسمياً؟" },
          choices: [
            { en: "1918", ar: "١٩١٨" },
            { en: "1939", ar: "١٩٣٩" },
            { en: "1945", ar: "١٩٤٥" },
            { en: "1950", ar: "١٩٥٠" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which empire was ruled by Alexander the Great?", ar: "أي إمبراطورية حكمها الإسكندر الأكبر؟" },
          choices: [
            { en: "The Persian Empire", ar: "الإمبراطورية الفارسية" },
            { en: "The Roman Empire", ar: "الإمبراطورية الرومانية" },
            { en: "The Ottoman Empire", ar: "الإمبراطورية العثمانية" },
            { en: "The Macedonian Empire", ar: "الإمبراطورية المقدونية" }
          ],
          correctAnswer: 3
        },
        {
          question: { en: "Which ancient Mesopotamian king is famous for creating one of the earliest written legal codes?", ar: "أي ملك في بلاد الرافدين القديمة اشتهر بوضع واحد من أوائل القوانين المكتوبة؟" },
          choices: [
            { en: "Sargon the Great", ar: "سرجون الأكادي" },
            { en: "Hammurabi", ar: "حمورابي" },
            { en: "Nebuchadnezzar II", ar: "نبوخذ نصر الثاني" },
            { en: "Gilgamesh", ar: "جلجامش" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Who was the primary leader who unified the Mongol Empire?", ar: "من هو القائد الرئيسي الذي وحد الإمبراطورية المغولية؟" },
          choices: [
            { en: "Kublai Khan", ar: "قوبلاي خان" },
            { en: "Genghis Khan", ar: "جنكيز خان" },
            { en: "Attila the Hun", ar: "أتيلا الهوني" },
            { en: "Tamerlane", ar: "تيمورلنك" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which ancient Babylonian wonder was considered one of the seven wonders of the ancient world?", ar: "أي من عجائب بابل القديمة تعتبر واحدة من عجائب الدنيا السبع القديمة؟" },
          choices: [
            { en: "The Lighthouse of Alexandria", ar: "منارة الإسكندرية" },
            { en: "The Hanging Gardens of Babylon", ar: "حدائق بابل المعلقة" },
            { en: "The Colossus of Rhodes", ar: "عملاق رودس" },
            { en: "The Temple of Artemis", ar: "معبد أرتميس" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which female scientist was the first person to win two Nobel prizes in two different fields?", ar: "من هي العالمة التي كانت أول شخص يفوز بجائزتي نوبل في مجالين مختلفين؟" },
          choices: [
            { en: "Marie Curie", ar: "ماري كوري" },
            { en: "Rosalind Franklin", ar: "روزاليند فرانكلين" },
            { en: "Ada Lovelace", ar: "آدا لوفليس" },
            { en: "Jane Goodall", ar: "جين جودال" }
          ],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "geography",
      name: { en: "Geography", ar: "جغرافيا" },
      icon: "🌍",
      color: "#D3968C",
      questions: [
        {
          question: { en: "Which country has the only non-rectangular national flag in the world?", ar: "ما هي الدولة التي تمتلك العلم الوحيد غير المستطيل في العالم؟" },
          choices: [
            { en: "Nepal", ar: "نيبال" },
            { en: "Switzerland", ar: "سويسرا" },
            { en: "Bhutan", ar: "بوتان" },
            { en: "Vatican City", ar: "الفاتيكان" }
          ],
          correctAnswer: 0
        },
        {
          question: { en: "What is the largest landlocked country in the world?", ar: "ما هي أكبر دولة غير ساحلية (حبيسة) في العالم؟" },
          choices: [
            { en: "Mongolia", ar: "منغوليا" },
            { en: "Chad", ar: "تشاد" },
            { en: "Kazakhstan", ar: "كازاخستان" },
            { en: "Bolivia", ar: "بوليفيا" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which of these African countries is completely surrounded by one other country?", ar: "أي من هذه الدول الأفريقية محاطة بالكامل بدولة واحدة أخرى؟" },
          choices: [
            { en: "Eswatini", ar: "إسواتيني" },
            { en: "Lesotho", ar: "ليسوتو" },
            { en: "Burundi", ar: "بوروندي" },
            { en: "Rwanda", ar: "رواندا" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "What strait separates Russia and the USA (Alaska)?", ar: "ما هو المضيق الذي يفصل بين روسيا والولايات المتحدة الأمريكية (ألاسكا)؟" },
          choices: [
            { en: "Strait of Magellan", ar: "مضيق ماجلان" },
            { en: "Bering Strait", ar: "مضيق بيرينغ" },
            { en: "Strait of Malacca", ar: "مضيق ملقا" },
            { en: "Bosporus Strait", ar: "مضيق البوسفور" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which country spans the most time zones (including its overseas territories)?", ar: "أي دولة تغطي أكبر عدد من المناطق الزمنية (بما في ذلك أقاليمها وراء البحار)؟" },
          choices: [
            { en: "Russia", ar: "روسيا" },
            { en: "USA", ar: "الولايات المتحدة" },
            { en: "France", ar: "فرنسا" },
            { en: "UK", ar: "المملكة المتحدة" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "What is the only continent with land in all four hemispheres?", ar: "ما هي القارة الوحيدة التي تقع أجزاء منها في نصف الكرة الأرضية الشمالي والجنوبي والشرقي والغربي؟" },
          choices: [
            { en: "Asia", ar: "آسيا" },
            { en: "Africa", ar: "أفريقيا" },
            { en: "Europe", ar: "أوروبا" },
            { en: "South America", ar: "أمريكا الجنوبية" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "What is the deepest oceanic trench in the Atlantic Ocean?", ar: "ما هو أعمق خندق محيطي في المحيط الأطلسي؟" },
          choices: [
            { en: "Mariana Trench", ar: "خندق ماريانا" },
            { en: "Tonga Trench", ar: "خندق تونغا" },
            { en: "Puerto Rico Trench", ar: "خندق بورتوريكو" },
            { en: "Java Trench", ar: "خندق جاوة" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Mount Vinson is the highest peak in which continent?", ar: "جبل فينسون هو أعلى قمة جبلية في أي قارة؟" },
          choices: [
            { en: "Australia", ar: "أستراليا" },
            { en: "South America", ar: "أمريكا الجنوبية" },
            { en: "Antarctica", ar: "أنتاركتيكا" },
            { en: "Europe", ar: "أوروبا" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which country is known as the 'Land of a Thousand Lakes'?", ar: "أي دولة تُعرف بلقب 'أرض الألف بحيرة'؟" },
          choices: [
            { en: "Canada", ar: "كندا" },
            { en: "Finland", ar: "فنلندا" },
            { en: "Sweden", ar: "السويد" },
            { en: "Norway", ar: "النرويج" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "What is the world's largest inland body of water (lake) by surface area?", ar: "ما هو أكبر مسطح مائي مغلق (بحيرة) في العالم من حيث المساحة؟" },
          choices: [
            { en: "Lake Superior", ar: "بحيرة سوبيريور" },
            { en: "Caspian Sea", ar: "بحر قزوين" },
            { en: "Lake Victoria", ar: "بحيرة فيكتوريا" },
            { en: "Aral Sea", ar: "بحر آرال" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which country contains the largest number of pyramids in the world?", ar: "أي دولة تحتوي على أكبر عدد من الأهرامات في العالم؟" },
          choices: [
            { en: "Egypt", ar: "مصر" },
            { en: "Mexico", ar: "المكسيك" },
            { en: "Sudan", ar: "السودان" },
            { en: "Peru", ar: "بيرو" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "The Danube River flows through or borders many countries, how many?", ar: "يتدفق نهر الدانوب عبر العديد من الدول، كم عدد الدول التي يمر بها أو يحاذيها؟" },
          choices: [
            { en: "5 countries", ar: "٥ دول" },
            { en: "8 countries", ar: "٨ دول" },
            { en: "10 countries", ar: "١٠ دول" },
            { en: "12 countries", ar: "١٢ دولة" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "The island of Borneo is shared by three countries, which of these is NOT one of them?", ar: "جزيرة بورنيو تتقاسمها ثلاث دول، أي من هذه الدول ليست واحدة منها؟" },
          choices: [
            { en: "Indonesia", ar: "إندونيسيا" },
            { en: "Malaysia", ar: "ماليزيا" },
            { en: "Brunei", ar: "بروناي" },
            { en: "Philippines", ar: "الفلبين" }
          ],
          correctAnswer: 3
        },
        {
          question: { en: "What is the only African country where Spanish is an official language?", ar: "ما هي الدولة الأفريقية الوحيدة التي لغتها الرسمية هي الإسبانية؟" },
          choices: [
            { en: "Morocco", ar: "المغرب" },
            { en: "Equatorial Guinea", ar: "غينيا الاستوائية" },
            { en: "Angola", ar: "أنغولا" },
            { en: "Mozambique", ar: "موزمبيق" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "What is the name of the strait that separates India and Sri Lanka?", ar: "ما هو اسم المضيق الذي يفصل بين الهند وسريلانكا؟" },
          choices: [
            { en: "Strait of Hormuz", ar: "مضيق هرمز" },
            { en: "Palk Strait", ar: "مضيق بالك" },
            { en: "Strait of Malacca", ar: "مضيق ملقا" },
            { en: "Taiwan Strait", ar: "مضيق تايوان" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which of the following South American countries does NOT share a land border with Brazil?", ar: "أي من دول أمريكا الجنوبية التالية لا تشترك في حدود برية مع البرازيل؟" },
          choices: [
            { en: "Chile", ar: "تشيلي" },
            { en: "Argentina", ar: "الأرجنتين" },
            { en: "Venezuela", ar: "فنزويلا" },
            { en: "Colombia", ar: "كولومبيا" }
          ],
          correctAnswer: 0
        },
        {
          question: { en: "What is the second highest mountain in the world after Mount Everest?", ar: "ما هو ثاني أعلى جبل في العالم بعد قمة إفرست؟" },
          choices: [
            { en: "Kangchenjunga", ar: "كانغشينجونغا" },
            { en: "Makalu", ar: "ماكالو" },
            { en: "K2", ar: "كي ٢" },
            { en: "Kilimanjaro", ar: "كليمنجارو" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which of these countries is NOT considered part of the 'Horn of Africa'?", ar: "أي من هذه الدول لا تعتبر جزءاً من منطقة 'القرن الأفريقي'؟" },
          choices: [
            { en: "Somalia", ar: "الصومال" },
            { en: "Ethiopia", ar: "إثيوبيا" },
            { en: "Djibouti", ar: "جيبوتي" },
            { en: "Kenya", ar: "كينيا" }
          ],
          correctAnswer: 3
        },
        {
          question: { en: "What is the microstate situated entirely within Italy besides the Vatican?", ar: "ما هي الدولة الصغيرة التي تقع بالكامل داخل حدود دولة إيطاليا بجانب الفاتيكان؟" },
          choices: [
            { en: "Andorra", ar: "أندورا" },
            { en: "Monaco", ar: "موناكو" },
            { en: "San Marino", ar: "سان مارينو" },
            { en: "Malta", ar: "مالطا" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "The world's largest river delta is formed by the Ganges and which other river?", ar: "أكبر دلتا نهرية في العالم تشكلت بواسطة نهري الجانج و..؟" },
          choices: [
            { en: "Indus", ar: "السند" },
            { en: "Brahmaputra", ar: "براهمابوترا" },
            { en: "Mekong", ar: "الميكونغ" },
            { en: "Yangtze", ar: "اليانغتسي" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "What is the capital of Canada?", ar: "ما هي عاصمة كندا؟" },
          choices: [
            { en: "Toronto", ar: "تورونتو" },
            { en: "Vancouver", ar: "فانكوفر" },
            { en: "Montreal", ar: "مونتريال" },
            { en: "Ottawa", ar: "أوتاوا" }
          ],
          correctAnswer: 3
        },
        {
          question: { en: "The Ural Mountains, forming the traditional boundary between Europe and Asia, are in which country?", ar: "تقع جبال الأورال في أي دولة وتشكل الحدود التقليدية بين أوروبا وآسيا؟" },
          choices: [
            { en: "Russia", ar: "روسيا" },
            { en: "Turkey", ar: "تركيا" },
            { en: "Kazakhstan", ar: "كازاخستان" },
            { en: "Ukraine", ar: "أوكرانيا" }
          ],
          correctAnswer: 0
        },
        {
          question: { en: "Which Central American country does NOT have a Caribbean coastline?", ar: "أي دولة من دول أمريكا الوسطى لا تطل على البحر الكاريبي؟" },
          choices: [
            { en: "El Salvador", ar: "السلفادور" },
            { en: "Honduras", ar: "هندوراس" },
            { en: "Nicaragua", ar: "نيكاراغوا" },
            { en: "Costa Rica", ar: "كوستاريكا" }
          ],
          correctAnswer: 0
        }
      ]
    },
    {
      id: "sport",
      name: { en: "Sport", ar: "رياضة" },
      icon: "⚽",
      color: "#105666",
      questions: [
      {
        question: { en: "Which country has won the most FIFA World Cup titles?", ar: "ما هو المنتخب الذي فاز بأكبر عدد من ألقاب كأس العالم لكرة القدم؟" },
        choices: [
          { en: "Germany", ar: "ألمانيا" },
          { en: "Italy", ar: "إيطاليا" },
          { en: "Brazil", ar: "البرازيل" },
          { en: "Argentina", ar: "الأرجنتين" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "In which sport would you use a 'racket' and a 'shuttlecock'?", ar: "في أي رياضة نستخدم 'المضرب' و 'المكوك' (الريشة)؟" },
        choices: [
          { en: "Tennis", ar: "تنس" },
          { en: "Badminton", ar: "بادتمنتون" },
          { en: "Squash", ar: "سكواش" },
          { en: "Table Tennis", ar: "تنس طاولة" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "Who is often called 'The Greatest of All Time' in professional boxing?", ar: "من الذي يُلقب غالباً بـ 'الأعظم على الإطلاق' في الملاكمة المحترفة؟" },
        choices: [
          { en: "Mike Tyson", ar: "مايك تايسون" },
          { en: "Muhammad Ali Clay", ar: "محمد علي كلاي" },
          { en: "Floyd Mayweather", ar: "فلويد مايويذر" },
          { en: "Rocky Marciano", ar: "روكي مارسيانو" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "In American Football, how many points is a 'Touchdown' worth?", ar: "في كرة القدم الأمريكية، كم عدد النقاط التي يمنحها الـ 'تاتش داون'؟" },
        choices: [
          { en: "3 points", ar: "٣ نقاط" },
          { en: "6 points", ar: "٦ نقاط" },
          { en: "7 points", ar: "٧ نقاط" },
          { en: "2 points", ar: "نقطتان" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "Which country will host the 2026 FIFA World Cup (together with USA and Mexico)?", ar: "أي دولة ستستضيف كأس العالم ٢٠٢٦ بالاشتراك مع الولايات المتحدة والمكسيك؟" },
        choices: [
          { en: "Brazil", ar: "البرازيل" },
          { en: "Germany", ar: "ألمانيا" },
          { en: "Canada", ar: "كندا" },
          { en: "Argentina", ar: "الأرجنتين" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "From which Italian club did Mohamed Salah move to Liverpool in 2017?", ar: "من أي نادٍ إيطالي انتقل محمد صلاح إلى ليفربول في عام ٢٠١٧؟" },
        choices: [
          { en: "AC Milan", ar: "إيه سي ميلان" },
          { en: "Inter Milan", ar: "إنتر ميلان" },
          { en: "AS Roma", ar: "روما" },
          { en: "Fiorentina", ar: "فيورنتينا" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "In which sport did Feryal Abdelaziz win Egypt's first female gold medal in Tokyo 2020?", ar: "في أي رياضة فازت فريال عبد العزيز بأول ميدالية ذهبية نسائية لمصر في طوكيو ٢٠٢٠؟" },
        choices: [
          { en: "Swimming", ar: "السباحة" },
          { en: "Weightlifting", ar: "رفع الأثقال" },
          { en: "Karate", ar: "الكاراتيه" },
          { en: "Fencing", ar: "المبارزة" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "Sara Ahmed (Sara Samir) won an Olympic medal in Rio 2016 and Paris 2024. What is her sport?", ar: "فازت سارة أحمد 'سارة سمير' بميدالية أولمبية في ريو ٢٠١٦ وباريس ٢٠٢٤. ما هي رياضتها؟" },
        choices: [
          { en: "Gymnastics", ar: "الجمباز" },
          { en: "Weightlifting", ar: "رفع الأثقال" },
          { en: "Boxing", ar: "الملاكمة" },
          { en: "Fencing", ar: "المبارزة" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "Who was the coach of Al Ahly when they won the 'CAF Champions League' title in 2020 against Zamalek?", ar: "من كان مدرب النادي الأهلي عندما فاز بلقب دوري أبطال أفريقيا عام ٢٠٢٠ أمام الزمالك؟" },
        choices: [
          { en: "Marcel Koller", ar: "مارسيل كولر" },
          { en: "René Weiler", ar: "رينيه فايلر" },
          { en: "Pitso Mosimane", ar: "بيتسو موسيماني" },
          { en: "Patrice Carteron", ar: "باتريس كارتيرون" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "Which club has won the most UEFA Champions League titles in history?", ar: "ما هو النادي الذي فاز بأكبر عدد من ألقاب دوري أبطال أوروبا في التاريخ؟" },
        choices: [
          { en: "AC Milan", ar: "إيه سي ميلان" },
          { en: "Liverpool", ar: "ليفربول" },
          { en: "Bayern Munich", ar: "بايرن ميونخ" },
          { en: "Real Madrid", ar: "ريال مدريد" }
        ],
        correctAnswer: 3
      },
      {
        question: { en: "In the 2024 UEFA Champions League Final, which team did Real Madrid defeat to win their 15th title?", ar: "في نهائي دوري أبطال أوروبا ٢٠٢٤، أي فريق هزمه ريال مدريد ليفوز بلقبه الـ ١٥؟" },
        choices: [
          { en: "Manchester City", ar: "مانشستر سيتي" },
          { en: "Bayern Munich", ar: "بايرن ميونخ" },
          { en: "Borussia Dortmund", ar: "بوروسيا دورتموند" },
          { en: "Liverpool", ar: "ليفربول" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "Cristiano Ronaldo recently reached a legendary milestone. How many career goals has he surpassed?", ar: "وصل رونالدو مؤخراً لرقم أسطوري، ما هو عدد الأهداف التي تخطاها في مسيرته الاحترافية؟" },
        choices: [
          { en: "500 goals", ar: "٥٠٠ هدف" },
          { en: "700 goals", ar: "٧٠٠ هدف" },
          { en: "800 goals", ar: "٨٠٠ هدف" },
          { en: "900 goals", ar: "٩٠٠ هدف" }
        ],
        correctAnswer: 3
      },
      {
        question: { en: "How many Ballon d'Or (Golden Ball) awards has Cristiano Ronaldo won in his career?", ar: "كم عدد جوائز الكرة الذهبية 'بالون دور' التي فاز بها رونالدو في مسيرته؟" },
        choices: [
          { en: "3 times", ar: "٣ مرات" },
          { en: "4 times", ar: "٤ مرات" },
          { en: "5 times", ar: "٥ مرات" },
          { en: "7 times", ar: "٧ مرات" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "Who won the Gold medal in the Men's 100m sprint in Paris 2024 (The fastest man in the world)?", ar: "من فاز بالميدالية الذهبية في سباق ١٠٠ متر عدو رجال في باريس ٢٠٢٤؟" },
        choices: [
          { en: "Usain Bolt", ar: "يوسين بولت" },
          { en: "Noah Lyles", ar: "نوا لايلز" },
          { en: "Kishane Thompson", ar: "كيشان طومسون" },
          { en: "Marcell Jacobs", ar: "مارسيل جاكوبس" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "What is the name of the famous Egyptian basketball club that won the 'BAL' in 2023?", ar: "ما اسم النادي المصري الشهير الذي فاز بلقب دوري أفريقيا لكرة السلة BAL عام ٢٠٢٣؟" },
        choices: [
          { en: "Zamalek SC", ar: "نادي الزمالك" },
          { en: "Al Ahly SC", ar: "النادي الأهلي" },
          { en: "Al Ittihad Alexandria", ar: "الاتحاد السكندري" },
          { en: "Gezira SC", ar: "نادي الجزيرة" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "How many points is a shot worth if taken from outside the large arc in basketball?", ar: "كم عدد النقاط التي تحتسب للرمية إذا تم تصويبها من خارج القوس الكبير في كرة السلة؟" },
        choices: [
          { en: "1 point", ar: "نقطة واحدة" },
          { en: "2 points", ar: "نقطتان" },
          { en: "3 points", ar: "٣ نقاط" },
          { en: "4 points", ar: "٤ نقاط" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "In which sport is the term 'Checkmate' used to end the game?", ar: "في أي رياضة يُستخدم مصطلح 'كش ملك' لإنهاء اللعبة؟" },
        choices: [
          { en: "Tennis", ar: "تنس" },
          { en: "Chess", ar: "شطرنج" },
          { en: "Fencing", ar: "مبارزة" }
        ],
        correctAnswer: 1
      },
      {
        question: { en: "Which country is world-famous for its 'Sumo' wrestling tradition?", ar: "أي دولة تشتهر عالمياً بتقاليد مصارعة 'السومو'؟" },
        choices: [
          { en: "China", ar: "الصين" },
          { en: "South Korea", ar: "كوريا الجنوبية" },
          { en: "Japan", ar: "اليابان" },
          { en: "Thailand", ar: "تايلاند" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "Which swimming stroke is considered the fastest and most common in competitions?", ar: "أي نوع من أنواع السباحة يُعتبر الأسرع والأكثر شيوعاً في المسابقات؟" },
        choices: [
          { en: "Breaststroke", ar: "سباحة الصدر" },
          { en: "Butterfly", ar: "سباحة الفراشة" },
          { en: "Freestyle / Front Crawl", ar: "السباحة الحرة" },
          { en: "Backstroke", ar: "سباحة الظهر" }
        ],
        correctAnswer: 2
      },
      {
        question: { en: "Which world-famous football award is presented annually by the magazine 'France Football'?", ar: "ما هي الجائزة العالمية الشهيرة التي تقدمها مجلة 'فرانس فوتبول' سنوياً؟" },
        choices: [
          { en: "The Best", ar: "الأفضل (ذا بيست)" },
          { en: "Golden Boot", ar: "الحذاء الذهبي" },
          { en: "Ballon d'Or", ar: "الكرة الذهبية" },
          { en: "Globe Soccer", ar: "جلوب سوكر" }
        ],
        correctAnswer: 2
      }
    ]
    },
    {
      id: "art",
      name: { en: "Art", ar: "فن" },
      icon: "🎨",
      color: "#6B705C",
      questions: [
        {
          question: { en: "Who is the first Arab writer to win the Nobel Prize in Literature?", ar: "من هو أول كاتب عربي يفوز بجائزة نوبل في الأدب؟" },
          choices: [
            { en: "Taha Hussein", ar: "طه حسين" },
            { en: "Naguib Mahfouz", ar: "نجيب محفوظ" },
            { en: "Gibran Khalil Gibran", ar: "جبران خليل جبران" },
            { en: "Mahmoud Darwish", ar: "محمود درويش" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Who directed the legendary crime movie 'The Godfather' (1972)?", ar: "من أخرج فيلم الجريمة الأسطوري 'الأب الروحي' (١٩٧٢)؟" },
          choices: [
            { en: "Martin Scorsese", ar: "مارتن سكورسيزي" },
            { en: "Steven Spielberg", ar: "ستيفن سبيلبرغ" },
            { en: "Francis Ford Coppola", ar: "فرانسيس فورد كوبولا" },
            { en: "Alfred Hitchcock", ar: "ألفريد هيتشكوك" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which French author wrote the classic novel 'Les Misérables'?", ar: "أي كاتب فرنسي ألف الرواية الكلاسيكية 'البؤساء'؟" },
          choices: [
            { en: "Albert Camus", ar: "ألبير كامو" },
            { en: "Voltaire", ar: "فولتير" },
            { en: "Alexandre Dumas", ar: "ألكسندر دوما" },
            { en: "Victor Hugo", ar: "فيكتور هوغو" }
          ],
          correctAnswer: 3
        },
        {
          question: { en: "Which singer is famous for the hit song 'Batwanes Beek'?", ar: "أي مطربة تشتهر بالأغنية الناجحة 'بتونس بيك'؟" },
          choices: [
            { en: "Warda", ar: "وردة" },
            { en: "Sabah", ar: "صباح" },
            { en: "Mayada El Hennawy", ar: "ميادة الحناوي" },
            { en: "Fayza Ahmed", ar: "فايزة أحمد" }
          ],
          correctAnswer: 0
        },
        {
          question: { en: "Who is the iconic Egyptian director behind the movie 'Cairo Station' (Bab El Hadid)?", ar: "من هو المخرج المصري الأيقوني لفيلم 'باب الحديد'؟" },
          choices: [
            { en: "Salah Abu Seif", ar: "صلاح أبو سيف" },
            { en: "Hassan Imam", ar: "حسن الإمام" },
            { en: "Youssef Chahine", ar: "يوسف شاهين" },
            { en: "Henry Barakat", ar: "هنري بركات" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which classical composer created some of his greatest symphonies after going completely deaf?", ar: "أي ملحن كلاسيكي أبدع بعضاً من أعظم سيمفونياته بعد أن أصيب بالصمم التام؟" },
          choices: [
            { en: "Wolfgang Amadeus Mozart", ar: "فولفغانغ أماديوس موتسارت" },
            { en: "Johann Sebastian Bach", ar: "يوهان سباستيان باخ" },
            { en: "Frédéric Chopin", ar: "فريدريك شوبان" },
            { en: "Ludwig van Beethoven", ar: "لودفيج فان بيتهوفن" }
          ],
          correctAnswer: 3
        },
        {
          question: { en: "Which Egyptian writer is widely known as the 'Dean of Arabic Literature'?", ar: "أي كاتب مصري يُعرف على نطاق واسع بلقب 'عميد الأدب العربي'؟" },
          choices: [
            { en: "Abbas Mahmoud al-Aqqad", ar: "عباس محمود العقاد" },
            { en: "Taha Hussein", ar: "طه حسين" },
            { en: "Tawfiq al-Hakim", ar: "توفيق الحكيم" },
            { en: "Ihsan Abdel Quddous", ar: "إحسان عبد القدوس" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Who painted the famous fresco 'The Creation of Adam' on the ceiling of the Sistine Chapel?", ar: "من رسم اللوحة الجدارية الشهيرة 'خلق آدم' على سقف كنيسة سيستين؟" },
          choices: [
            { en: "Leonardo da Vinci", ar: "ليوناردو دا فينشي" },
            { en: "Raphael", ar: "رافاييل" },
            { en: "Michelangelo", ar: "مايكل أنجلو" },
            { en: "Sandro Botticelli", ar: "ساندرو بوتيتشيلي" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which movie was the first to ever win the Academy Award for Best Animated Feature?", ar: "ما هو أول فيلم يفوز على الإطلاق بجائزة الأوسكار لأفضل فيلم رسوم متحركة؟" },
          choices: [
            { en: "Toy Story", ar: "حكاية لعبة" },
            { en: "Shrek", ar: "شريك" },
            { en: "Finding Nemo", ar: "البحث عن نيمو" },
            { en: "The Lion King", ar: "الأسد الملك" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Who is the Brazilian author of the globally successful novel 'The Alchemist'?", ar: "من هو المؤلف البرازيلي للرواية الناجحة عالمياً 'الخيميائي'؟" },
          choices: [
            { en: "Gabriel García Márquez", ar: "غابرييل غارثيا ماركيث" },
            { en: "Paulo Coelho", ar: "باولو كويلو" },
            { en: "Jorge Amado", ar: "خورخي أمادو" },
            { en: "Mario Vargas Llosa", ar: "ماريو فارغاس يوسا" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which actor won a posthumous Oscar for his brilliant portrayal of the Joker in 'The Dark Knight' (2008)?", ar: "أي ممثل فاز بجائزة أوسكار بعد وفاته عن تجسيده لشخصية الجوكر في فيلم 'فارس الظلام' (٢٠٠٨)؟" },
          choices: [
            { en: "Joaquin Phoenix", ar: "خواكين فينيكس" },
            { en: "Jack Nicholson", ar: "جاك نيكلسون" },
            { en: "Jared Leto", ar: "جاريد ليتو" },
            { en: "Heath Ledger", ar: "هيث ليدجر" }
          ],
          correctAnswer: 3
        },
        {
          question: { en: "Who is the British author often called the 'Queen of Mystery' for her detective novels?", ar: "من هي الكاتبة البريطانية التي تُلقب غالباً بـ 'ملكة الغموض' بسبب رواياتها البوليسية؟" },
          choices: [
            { en: "Jane Austen", ar: "جين أوستن" },
            { en: "Agatha Christie", ar: "أغاثا كريستي" },
            { en: "Virginia Woolf", ar: "فرجينيا وولف" },
            { en: "Mary Shelley", ar: "ماري شيلي" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Who is the author of the epic fantasy book series 'A Song of Ice and Fire'?", ar: "من هو مؤلف سلسلة كتب الفانتازيا الملحمية 'أغنية الجليد والنار'؟" },
          choices: [
            { en: "J.R.R. Tolkien", ar: "ج. ر. ر. تولكين" },
            { en: "George R.R. Martin", ar: "جورج ر. ر. مارتن" },
            { en: "C.S. Lewis", ar: "سي. إس. لويس" },
            { en: "Stephen King", ar: "ستيفن كينغ" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "The art movement characterized by dream-like, illogical scenes is called:", ar: "الحركة الفنية التي تتميز بمشاهد تشبه الأحلام وغير منطقية تسمى:" },
          choices: [
            { en: "Cubism", ar: "التكعيبية" },
            { en: "Realism", ar: "الواقعية" },
            { en: "Surrealism", ar: "السريالية" },
            { en: "Impressionism", ar: "الانطباعية" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which Arab filmmaker directed the historic epic movie 'The Message' (Al Risalah)?", ar: "أي صانع أفلام عربي أخرج الفيلم الملحمي التاريخي 'الرسالة'؟" },
          choices: [
            { en: "Youssef Chahine", ar: "يوسف شاهين" },
            { en: "Moustapha Akkad", ar: "مصطفى العقاد" },
            { en: "Nadine Labaki", ar: "نادين لبكي" },
            { en: "Hany Abu-Assad", ar: "هاني أبو أسعد" }
          ],
          correctAnswer: 1
        },
        {
          question: { en: "Which classic dystopian novel by George Orwell introduced the concept of 'Big Brother'?", ar: "ما هي الرواية الديستوبية الكلاسيكية لجورج أورويل التي قدمت مفهوم 'الأخ الأكبر'؟" },
          choices: [
            { en: "Brave New World", ar: "عالم جديد شجاع" },
            { en: "Fahrenheit 451", ar: "فهرنهايت ٤٥١" },
            { en: "Animal Farm", ar: "مزرعة الحيوان" },
            { en: "1984", ar: "١٩٨٤" }
          ],
          correctAnswer: 3
        },
        {
          question: { en: "What is the name of the fictional magical school in the 'Harry Potter' movies?", ar: "ما اسم مدرسة السحر الخيالية في سلسلة أفلام 'هاري بوتر'؟" },
          choices: [
            { en: "Narnia", ar: "نارنيا" },
            { en: "Middle-earth", ar: "ميدل إيرث" },
            { en: "Hogwarts", ar: "هوجورتس" },
            { en: "Gotham", ar: "جوثام" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Which Disney animated movie features the famous song 'Let It Go'?", ar: "أي فيلم رسوم متحركة من ديزني يضم الأغنية الشهيرة 'دعه يذهب' (Let It Go)؟" },
          choices: [
            { en: "Moana", ar: "موانا" },
            { en: "Tangled", ar: "تانجلد" },
            { en: "Frozen", ar: "فروزن (ملكة الثلج)" },
            { en: "Mulan", ar: "مولان" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "What is the name of the fictional city that Batman protects?", ar: "ما اسم المدينة الخيالية التي يحميها باتمان؟" },
          choices: [
            { en: "Metropolis", ar: "ميتروبوليس" },
            { en: "Star City", ar: "ستار سيتي" },
            { en: "Gotham City", ar: "مدينة جوثام" },
            { en: "Central City", ar: "سنترال سيتي" }
          ],
          correctAnswer: 2
        },
        {
          question: { en: "Who directed the blockbuster movies 'Titanic' and 'Avatar'?", ar: "من أخرج الفيلمين الناجحين جداً 'تيتانيك' و 'أفاتار'؟" },
          choices: [
            { en: "Steven Spielberg", ar: "ستيفن سبيلبرغ" },
            { en: "Christopher Nolan", ar: "كريستوفر نولان" },
            { en: "James Cameron", ar: "جيمس كاميرون" },
            { en: "Martin Scorsese", ar: "مارتن سكورسيزي" }
          ],
          correctAnswer: 2
        }
      ]
    }
  ]
};

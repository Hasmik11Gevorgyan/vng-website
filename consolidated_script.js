    (function () {
      const burger = document.getElementById("burger");
      const nav = document.getElementById("main-nav");
      const langSwitcher = document.querySelector(".lang-switcher");
      const langMenu = document.getElementById("langMenu");
      const langButton = document.getElementById("langButton");
      const langCurrentFlag = document.getElementById("langCurrentFlag");
      const langCurrentText = document.getElementById("langCurrentText");

      const modal = document.getElementById("moduleModal");
      const backdrop = document.getElementById("moduleBackdrop");
      const closeButton = document.getElementById("moduleClose");
      const modalContent = document.getElementById("modalContent");

      const modalTitle = document.getElementById("moduleModalTitle");
      const modalDescription = document.getElementById("moduleDescription");
      const modalDetects = document.getElementById("moduleDetects");
      const modalPurpose = document.getElementById("modulePurpose");
      const modalAreas = document.getElementById("moduleAreas");
      const modalEyebrow = document.getElementById("moduleEyebrow");
      const modalFooter = document.getElementById("moduleFooter");
      const modalNote = document.getElementById("moduleNote");
      const moduleDemoLink = document.getElementById("moduleDemoLink");

      const modalVideo = document.getElementById("moduleVideo");
      const modalVideoSource = document.getElementById("moduleVideoSource");

      const moduleDetectsTitle = document.getElementById("moduleDetectsTitle");
      const modulePurposeTitle = document.getElementById("modulePurposeTitle");
      const moduleAreasTitle = document.getElementById("moduleAreasTitle");

      let lastFocusedCard = null;
      let currentModuleKey = null;

      const languageMeta = {
        ru: { code: "RU", flag: "🇷🇺", htmlLang: "ru" },
        en: { code: "EN", flag: "🇬🇧", htmlLang: "en" },
        zh: { code: "ZH", flag: "🇨🇳", htmlLang: "zh" },
        kk: { code: "KK", flag: "🇰🇿", htmlLang: "kk" }
      };

      const uiTranslations = {
        ru: {
          logoTitle: "Vengeea®",
          logoSubtitle: "ПРОГНОЗИРОВАНИЕ БУДУЩИХ СОБЫТИЙ",
          navHome: "Главная",
          navAbout: "О нас",
          navModules: "Модули",
          navCalculator: "Калькулятор",
          navContacts: "Контакты",
          requestSolution: "Запросить решение",
          viewModules: "Посмотреть модули",
          heroTitle: "Vengeea® — компания, разрабатывающая технологии будущего.",
          heroText: "Мы работаем с 2020 года и создаем AI-решения для видеоаналитики, автоматизации мониторинга и предотвращения инцидентов.",
          ctaTitle: "Покажем, как решение будет работать на вашем объекте",
          ctaText: "Проверим применимость сценария на ваших камерах, зонах контроля и типовых рисках объекта.",
          pageEyebrow: "Модули",
          pageTitle: "Модули видеоаналитики AI",
          pageText: "Выберите сценарий обнаружения для вашего объекта: от утечек и дыма до краж, вторжений и актов вандализма.",
          cardTag: "AI-модуль",
          cardLeakTitle: "Утечка жидкости",
          cardLeakText: "Выявление разливов и утечек в критических зонах объекта.",
          cardFireTitle: "Дым и огонь",
          cardFireText: "Раннее обнаружение задымления и открытого пламени.",
          cardIntrusionTitle: "Вторжение",
          cardIntrusionText: "Фиксация несанкционированного проникновения на объект.",
          cardFightTitle: "Драка и вандализм",
          cardFightText: "Обнаружение агрессивных и разрушительных действий.",
          cardTheftTitle: "Воровство",
          cardTheftText: "Выявление сценариев, связанных с хищением имущества.",
          cardFaceTitle: "Распознавание и детекция лица",
          cardFaceText: "Фиксация лица, повторных появлений и контроль по собственным спискам наблюдения.",
          contactUs: "Связаться с нами",
          detectsTitle: "Что обнаруживает",
          purposeTitle: "Зачем нужен",
          areasTitle: "Где применяется",
          demoButton: "Запросить демо модуля",
          closeLabel: "Закрыть окно",
          footerTitle: "AI-платформа видеоаналитики",
          footerText: "Обнаружение утечек и развитие в сторону предиктивного предотвращения инцидентов"
        },
        en: {
          logoTitle: "Vengeea®",
          logoSubtitle: "FORECASTING FUTURE EVENTS",
          navHome: "Home",
          navAbout: "About",
          navModules: "Modules",
          navCalculator: "Calculator",
          navContacts: "Contacts",
          requestSolution: "Request a solution",
          viewModules: "View modules",
          heroTitle: "Vengeea® — a company developing technologies of the future.",
          heroText: "We have been operating since 2020 and build AI solutions for video analytics, monitoring automation, and incident prevention.",
          stepNext: "Next",
          stepNextTitle: "Transition to predictive analytics and autonomous decisions",
          stepNextText: "Understanding behavior, context, and event development with the ability to predict an incident before it actually begins.",
          stepGoal: "Goal",
          stepGoalTitle: "Autonomous risk prevention",
          stepGoalText: "The system is capable not only of detecting threats, but also of independently initiating measures to prevent them before damage occurs.",
          ctaTitle: "We’ll show how the solution will work at your facility",
          ctaText: "We will assess the applicability of the scenario on your cameras, control zones, and typical facility risks. We’ll demonstrate the key leak-detection scenario and discuss how the solution can evolve for your infrastructure.",
          pageEyebrow: "Modules",
          pageTitle: "AI Video Analytics Modules",
          pageText: "Choose a detection scenario for your facility: from leaks and smoke to theft, intrusion, vandalism, and face recognition workflows.",
          cardTag: "AI Module",
          cardLeakTitle: "Liquid Leak",
          cardLeakText: "Detection of spills and leaks in critical facility areas.",
          cardFireTitle: "Smoke and Fire",
          cardFireText: "Early detection of smoke and open flame.",
          cardIntrusionTitle: "Intrusion",
          cardIntrusionText: "Detection of unauthorized entry to the facility.",
          cardFightTitle: "Fight and Vandalism",
          cardFightText: "Detection of aggressive and destructive actions.",
          cardTheftTitle: "Theft",
          cardTheftText: "Detection of scenarios related to property theft.",
          cardFaceTitle: "Face Recognition and Detection",
          cardFaceText: "Face detection and recognition, returning appearance tracking, and monitoring through custom watchlists.",
          contactUs: "Contact us",
          detectsTitle: "What it detects",
          purposeTitle: "Why it matters",
          areasTitle: "Where it is used",
          demoButton: "Request module demo",
          closeLabel: "Close window",
          footerTitle: "AI video analytics platform",
          footerText: "Leak detection and development toward predictive incident prevention"
        },
        zh: {
          logoTitle: "Vengeea®",
          logoSubtitle: "预测未来事件",
          navHome: "首页",
          navAbout: "关于我们",
          navModules: "模块",
          navCalculator: "计算器",
          navContacts: "联系我们",
          requestSolution: "申请方案",
          viewModules: "查看模块",
          heroTitle: "Vengeea® — 一家开发未来技术的公司。",
          heroText: "我们自2020年开始运营，并为视频分析、监控自动化和事故预防构建人工智能解决方案。",
          monitoringTitle: "在泄漏发生时即时检测",
          monitoringText: "系统在真实视频流中的两种工作场景：泄漏检测与自动事件记录，以便后续响应。",
          leakDetectionTitle: "画面中的泄漏检测",
          leakDetectionText: "系统分析视频流，跟踪监控区域内液体的出现，并在无需操作员参与的情况下生成事件。",
          eventFixTitle: "事件记录与通知",
          eventFixText: "检测到后，系统会保存视频片段、生成事件元数据，并将警报发送给操作员，以便快速评估情况。",
          futureTitle: "从异常与行为识别到主动预防",
          futureText: "系统能够实时识别偏差和异常行为，并立即通知操作员。下一步是预测性分析：在风险演变为事件之前识别出来。",
          predictiveContour: "预测性模块",
          predictiveSub: "从事件记录转向风险早期预警",
          stepNow: "当前",
          stepNowTitle: "在事件出现时即时记录",
          stepNowText: "在视频流中检测泄漏并立即通知操作员。",
          stepNext: "下一步",
          stepNextTitle: "转向预测分析与自主决策",
          stepNextText: "理解行为、上下文和事件发展，并能够在事件真正开始之前进行预测。",
          stepGoal: "目标",
          stepGoalTitle: "自主风险预防",
          stepGoalText: "系统不仅能够识别威胁，还能够在损失发生前自主启动预防措施。",
          ctaTitle: "我们将展示该方案如何在您的设施中运行",
          ctaText: "我们会根据您的摄像头、控制区域和典型风险评估该场景的适用性。展示关键的泄漏检测场景，并讨论如何针对您的基础设施扩展该方案。",
          pageEyebrow: "模块",
          pageTitle: "AI 视频分析模块",
          pageText: "为您的设施选择检测场景：从泄漏和烟雾到盗窃、入侵、破坏以及人脸识别流程。",
          cardTag: "AI 模块",
          cardLeakTitle: "液体泄漏",
          cardLeakText: "检测设施关键区域中的泄漏和溢出。",
          cardFireTitle: "烟雾和火焰",
          cardFireText: "及早发现烟雾和明火。",
          cardIntrusionTitle: "入侵",
          cardIntrusionText: "检测未经授权进入设施的行为。",
          cardFightTitle: "打斗与破坏",
          cardFightText: "检测攻击性和破坏性行为。",
          cardTheftTitle: "盗窃",
          cardTheftText: "识别与财产盗窃相关的场景。",
          cardFaceTitle: "人脸识别与检测",
          cardFaceText: "人脸捕捉、重复出现跟踪以及基于自定义观察名单的监控。",
          contactUs: "联系我们",
          detectsTitle: "检测内容",
          purposeTitle: "价值与作用",
          areasTitle: "应用场景",
          demoButton: "申请模块演示",
          closeLabel: "关闭窗口",
          footerTitle: "AI 视频分析平台",
          footerText: "泄漏检测以及向预测性事故预防方向发展"
        },
        kk: {
          logoTitle: "Vengeea®",
          logoSubtitle: "БОЛАШАҚ ОҚИҒАЛАРДЫ БОЛЖАУ",
          navHome: "Басты бет",
          navAbout: "Біз туралы",
          navModules: "Модульдер",
          navCalculator: "Калькулятор",
          navContacts: "Байланыс",
          requestSolution: "Шешімге сұраныс",
          viewModules: "Модульдерді қарау",
          heroTitle: "Vengeea® — болашақ технологияларын әзірлейтін компания.",
          heroText: "Біз 2020 жылдан бері жұмыс істейміз және бейнеаналитика, мониторингті автоматтандыру және инциденттердің алдын алу үшін AI-шешімдерді жасаймыз.",
          monitoringTitle: "Ағып кетуді пайда болған сәтте тіркеу",
          monitoringText: "Жүйенің нақты бейнеағында жұмыс істеуінің екі сценарийі: ағып кетуді анықтау және кейінгі әрекет ету үшін оқиғаны автоматты түрде тіркеу.",
          leakDetectionTitle: "Кадрдағы ағып кетуді анықтау",
          leakDetectionText: "Жүйе бейнеағынды талдайды, бақылау аймағында сұйықтықтың пайда болуын қадағалайды және оператордың қатысуынсыз оқиға қалыптастырады.",
          eventFixTitle: "Оқиғаны тіркеу және хабарлау",
          eventFixText: "Анықталғаннан кейін жүйе бейнесценарийді сақтайды, оқиға метадеректерін қалыптастырады және жағдайды жедел бағалау үшін операторға сигнал жібереді.",
          futureTitle: "Аномалиялар мен мінез-құлықты анықтаудан — олардың алдын алуға дейін",
          futureText: "Жүйе нақты уақытта ауытқулар мен әдеттен тыс әрекеттерді тіркеп, операторға бірден хабар береді. Келесі қадам — предиктивті аналитика: тәуекелдерді инцидентке айналмай тұрып анықтау.",
          predictiveContour: "Предиктивті контур",
          predictiveSub: "Оқиғаны тіркеуден тәуекелді ертерек ескертуге көшу",
          stepNow: "Қазір",
          stepNowTitle: "Инцидентті пайда болған сәтте тіркеу",
          stepNowText: "Бейнеағында ағып кетуді анықтау және операторға жедел хабарлау.",
          stepNext: "Келесі",
          stepNextTitle: "Болжамды аналитика мен автономды шешімдерге көшу",
          stepNextText: "Инцидент нақты басталғанға дейін оны болжау мүмкіндігімен мінез-құлықты, контексті және оқиғалардың дамуын түсіну.",
          stepGoal: "Мақсат",
          stepGoalTitle: "Тәуекелдерді автономды түрде болдырмау",
          stepGoalText: "Жүйе түгелдей қауіптерді анықтап қана қоймай, залал туындағанға дейін олардың алдын алу шараларын өздігінен іске қоса алады.",
          ctaTitle: "Шешімнің сіздің нысаныңызда қалай жұмыс істейтінін көрсетеміз",
          ctaText: "Сценарийдің сіздің камераларыңызда, бақылау аймақтарыңызда және нысанға тән тәуекелдерде қолданылуын тексереміз. Ағып кету бойынша негізгі сценарийді көрсетіп, шешімді сіздің инфрақұрылымыңызға бейімдеу жолдарын талқылаймыз.",
          pageEyebrow: "Модульдер",
          pageTitle: "AI-бейнеаналитика модульдері",
          pageText: "Нысаныңыз үшін анықтау сценарийін таңдаңыз: ағып кетуден және түтіннен бастап ұрлық, басып кіру, вандализм және бетті тану процестеріне дейін.",
          cardTag: "AI-модуль",
          cardLeakTitle: "Сұйықтықтың ағуы",
          cardLeakText: "Нысанның маңызды аймақтарындағы төгілулер мен ағып кетулерді анықтау.",
          cardFireTitle: "Түтін және өрт",
          cardFireText: "Түтін мен ашық жалынды ерте анықтау.",
          cardIntrusionTitle: "Басып кіру",
          cardIntrusionText: "Нысанға рұқсатсыз кіруді тіркеу.",
          cardFightTitle: "Төбелес және вандализм",
          cardFightText: "Агрессивті және қиратушы әрекеттерді анықтау.",
          cardTheftTitle: "Ұрлық",
          cardTheftText: "Мүлікті ұрлауға байланысты сценарийлерді анықтау.",
          cardFaceTitle: "Бетті тану және анықтау",
          cardFaceText: "Бетті тіркеу, қайталанатын пайда болуды бақылау және жеке бақылау тізімдері арқылы мониторинг.",
          contactUs: "Бізбен байланысу",
          detectsTitle: "Нені анықтайды",
          purposeTitle: "Не үшін керек",
          areasTitle: "Қайда қолданылады",
          demoButton: "Модуль демосын сұрау",
          closeLabel: "Терезені жабу",
          footerTitle: "AI-бейнеаналитика платформасы",
          footerText: "Ағып кетуді анықтау және инциденттердің алдын алуға бағытталған даму"
        }
      };

      const modules = {
        leak: {
          video: "videos/leak_video.MP4",
          ru: {
            eyebrow: "AI-модуль",
            shortTitle: "Утечка жидкости",
            title: "Обнаружение утечки до того, как она станет проблемой",
            description: "Одна незаметная протечка — и уже через минуты вы теряете оборудование, продукцию или останавливаете процесс. Система фиксирует появление жидкости в момент её возникновения — без задержек и без человеческого фактора. Вы узнаёте об инциденте раньше, чем он превращается в убытки. Это не просто обнаружение — это контроль над ситуацией до того, как она выходит из-под контроля.",
            detects: "Утечки, разливы, появление жидкости, скопление опасных следов в зоне контроля.",
            purpose: "Чтобы сократить простой, защитить оборудование, снизить ущерб и не дать небольшой проблеме превратиться в дорогую аварию.",
            areas: "Производство, склады, серверные, инженерные помещения, технические зоны, инфраструктурные объекты.",
            footer: "Чем раньше обнаружена утечка, тем меньше стоимость последствий. В этом и есть настоящая ценность системы.",
            note: "Маленькая утечка редко остаётся маленькой. Поэтому выигрывает тот, кто видит её первым."
          },
          en: {
            eyebrow: "AI Module",
            shortTitle: "Liquid Leak",
            title: "Detect leaks before they become a crisis",
            description: "A single unnoticed leak can damage equipment, destroy products, or stop operations within minutes. The system detects the appearance of liquid the moment it happens — without delays and without relying on human attention. You learn about the incident before it turns into loss. This is not just detection — it is control before the situation gets out of control.",
            detects: "Leaks, spills, liquid appearance, and hazardous traces in the monitored area.",
            purpose: "To reduce downtime, protect equipment, limit damage, and prevent a small issue from becoming an expensive failure.",
            areas: "Production sites, warehouses, server rooms, engineering facilities, technical zones, and infrastructure assets.",
            footer: "The earlier a leak is detected, the lower the cost of the consequences. That is the real value of the system.",
            note: "A small leak rarely stays small. The advantage belongs to the one who sees it first."
          },
          zh: {
            eyebrow: "AI 模块",
            shortTitle: "液体泄漏",
            title: "在泄漏演变成问题之前发现它",
            description: "一次不起眼的泄漏，几分钟内就可能导致设备受损、产品报废或流程中断。系统会在液体出现的瞬间完成识别——没有延迟，也不依赖人工注意力。您会在事故演变为损失之前得到预警。这不仅是检测，更是在局势失控之前重新掌握主动权。",
            detects: "泄漏、溢出、液体出现，以及监控区域中的危险液体痕迹。",
            purpose: "用于减少停机时间、保护设备、降低损失，并防止小问题演变成昂贵事故。",
            areas: "生产现场、仓库、机房、工程设施、技术区域和基础设施对象。",
            footer: "泄漏发现得越早，后果成本越低。这正是系统真正的价值所在。",
            note: "小泄漏很少会一直保持“小”。优势永远属于最早发现它的人。"
          },
          kk: {
            eyebrow: "AI-модуль",
            shortTitle: "Сұйықтықтың ағуы",
            title: "Ағып кетуді үлкен мәселеге айналмай тұрып анықтау",
            description: "Көзге түспеген бір ғана ағу бірнеше минут ішінде жабдыққа зиян келтіріп, өнімді жоғалтып немесе процесті тоқтатуы мүмкін. Жүйе сұйықтықтың пайда болуын дәл сол сәтте анықтайды — кешігусіз және адам факторына тәуелсіз. Сіз инцидент туралы оның шығынға айналуынан бұрын білесіз. Бұл жай анықтау емес — жағдай бақылаудан шықпай тұрып оны басқару.",
            detects: "Ағып кету, төгілу, сұйықтықтың пайда болуы және бақылау аймағындағы қауіпті іздер.",
            purpose: "Тоқтап қалуды азайту, жабдықты қорғау, шығынды төмендету және шағын мәселенің қымбат апатқа айналуына жол бермеу үшін.",
            areas: "Өндіріс, қоймалар, серверлік бөлмелер, инженерлік нысандар, техникалық аймақтар және инфрақұрылым объектілері.",
            footer: "Ағып кету неғұрлым ерте анықталса, салдарының құны соғұрлым аз болады. Жүйенің нағыз құндылығы осында.",
            note: "Кішкентай ағу сирек жағдайда кішкентай болып қалады. Артықшылық оны бірінші болып көрген жақта."
          }
        },
        fire: {
          video: "videos/smokeandfire_video.MP4",
          ru: {
            eyebrow: "AI-модуль",
            shortTitle: "Дым и огонь",
            title: "Когда секунды решают всё",
            description: "Пожар не начинается с пламени — он начинается с момента, который обычно никто не замечает. Система выявляет дым и признаки возгорания на ранней стадии, когда ещё есть время предотвратить катастрофу. Вы реагируете не тогда, когда уже горит — а тогда, когда ещё можно остановить. Это разница между инцидентом и разрушением бизнеса.",
            detects: "Дым, открытое пламя, визуальные признаки возгорания, ранние опасные изменения в кадре.",
            purpose: "Чтобы сократить время реакции персонала, минимизировать ущерб и защитить объект до развития критического сценария.",
            areas: "Склады, производство, паркинги, торговые площади, общественные пространства, объекты с повышенным риском возгорания.",
            footer: "Огонь выигрывает у тех, кто замечает его слишком поздно. Этот модуль нужен, чтобы вы были быстрее.",
            note: "Иногда между тревогой и катастрофой — всего несколько секунд. Именно их система и покупает для вас."
          },
          en: {
            eyebrow: "AI Module",
            shortTitle: "Smoke and Fire",
            title: "When seconds decide everything",
            description: "Fire does not start with flames — it starts with the moment no one notices. The system detects smoke and signs of ignition at an early stage, when there is still time to prevent disaster. You respond not when everything is already burning, but while it can still be stopped. That is the difference between an incident and business destruction.",
            detects: "Smoke, open flame, visual signs of ignition, and early dangerous changes in the frame.",
            purpose: "To reduce response time, minimize damage, and protect the facility before the situation becomes critical.",
            areas: "Warehouses, production sites, parking areas, retail spaces, public environments, and high fire-risk facilities.",
            footer: "Fire wins against those who notice it too late. This module exists to make you faster.",
            note: "Sometimes only a few seconds stand between an alarm and a catastrophe. This system buys those seconds for you."
          },
          zh: {
            eyebrow: "AI 模块",
            shortTitle: "烟雾和火焰",
            title: "当每一秒都决定结果",
            description: "火灾并不是从明火开始，而是从那个通常无人察觉的瞬间开始。系统能够在早期识别烟雾和起火迹象，在灾难发生前为您争取反应时间。您不是在已经燃烧时才行动，而是在仍然可以阻止的时候就开始处理。这就是事故与业务毁灭之间的区别。",
            detects: "烟雾、明火、起火视觉迹象，以及画面中的早期危险变化。",
            purpose: "用于缩短响应时间、减少损失，并在局势升级前保护现场。",
            areas: "仓库、生产现场、停车场、零售空间、公共区域以及高火灾风险设施。",
            footer: "火焰总是战胜那些发现得太晚的人。这个模块的意义，就是让您更快一步。",
            note: "有时候，警报与灾难之间只差几秒。系统为您赢回的正是这几秒。"
          },
          kk: {
            eyebrow: "AI-модуль",
            shortTitle: "Түтін және өрт",
            title: "Секундтар бәрін шешетін сәт",
            description: "Өрт жалыннан басталмайды — ол әдетте ешкім байқамайтын сәттен басталады. Жүйе түтін мен тұтану белгілерін ерте кезеңде анықтайды, яғни апатты тоқтатуға әлі уақыт бар кезде. Сіз бәрі жанып кеткенде емес, оны әлі тоқтатуға болатын кезде әрекет етесіз. Бұл инцидент пен бизнестің күйреуі арасындағы айырмашылық.",
            detects: "Түтін, ашық жалын, тұтанудың визуалды белгілері және кадрдағы ерте қауіпті өзгерістер.",
            purpose: "Жауап беру уақытын қысқарту, шығынды азайту және жағдай ушығып кетпей тұрып нысанды қорғау үшін.",
            areas: "Қоймалар, өндіріс орындары, паркингтер, сауда алаңдары, қоғамдық кеңістіктер және өрт қаупі жоғары объектілер.",
            footer: "Өрт оны тым кеш байқағандарды әрқашан жеңеді. Бұл модуль сіздің тезірек әрекет етуіңіз үшін жасалған.",
            note: "Кейде дабыл мен апаттың арасында бірнеше секунд қана болады. Жүйе сізге дәл сол секундтарды алып береді."
          }
        },
        intrusion: {
          video: "videos/intrusion_video.MP4",
          ru: {
            eyebrow: "AI-модуль",
            shortTitle: "Вторжение",
            title: "Контроль границ, которые нельзя нарушать",
            description: "Любое несанкционированное проникновение — это риск: от краж до аварий и прямых угроз безопасности. Система мгновенно фиксирует появление человека или техники в запрещённой зоне. Вы видите нарушение в момент, когда оно происходит — не после. Контроль становится непрерывным, а не реактивным.",
            detects: "Вторжение, пересечение заданных линий, проникновение в запрещённые зоны, присутствие в неположенное время.",
            purpose: "Чтобы защитить объект, усилить периметр, снизить вероятность инцидентов и дать службе безопасности время на действие.",
            areas: "Промышленные территории, склады, стройплощадки, режимные объекты, логистические зоны, закрытые пространства.",
            footer: "Безопасность заканчивается там, где нарушение замечают слишком поздно. Этот модуль меняет правило игры.",
            note: "Если угроза уже внутри периметра, значит сигнал пришёл поздно. Здесь всё устроено наоборот."
          },
          en: {
            eyebrow: "AI Module",
            shortTitle: "Intrusion",
            title: "Control the boundaries that must not be crossed",
            description: "Any unauthorized entry is a risk — from theft and operational disruption to direct safety threats. The system instantly detects a person or vehicle appearing in a restricted zone. You see the violation when it happens, not after it is too late. Security becomes continuous instead of reactive.",
            detects: "Intrusion, line crossing, entry into restricted areas, and presence at unauthorized times.",
            purpose: "To protect the site, strengthen the perimeter, reduce incident probability, and give security teams time to act.",
            areas: "Industrial sites, warehouses, construction zones, restricted facilities, logistics areas, and controlled spaces.",
            footer: "Security ends where a breach is noticed too late. This module changes that rule.",
            note: "If the threat is already inside the perimeter, the signal came too late. Here, the logic is the opposite."
          },
          zh: {
            eyebrow: "AI 模块",
            shortTitle: "入侵",
            title: "守住不可被突破的边界",
            description: "任何未经授权的进入都意味着风险——从盗窃、事故到直接的安全威胁。系统会即时发现人员或设备出现在受限区域中。您看到的是违规发生的当下，而不是事后追查。安全不再是被动反应，而是持续控制。",
            detects: "入侵、越线、进入禁区、以及不合规时间段内的出现。",
            purpose: "用于保护场地、加强周界、降低事故概率，并为安保团队争取反应时间。",
            areas: "工业场地、仓库、施工区、受限设施、物流区域和受控空间。",
            footer: "当违规被发现得太晚时，安全就已经失守。这个模块改变了这一点。",
            note: "如果威胁已经进入周界，说明信号来得太晚。这里的逻辑恰恰相反。"
          },
          kk: {
            eyebrow: "AI-модуль",
            shortTitle: "Басып кіру",
            title: "Бұзуға болмайтын шекараларды бақылау",
            description: "Кез келген рұқсатсыз кіру — бұл тәуекел: ұрлықтан бастап апаттарға және тікелей қауіпсіздік қатерлеріне дейін. Жүйе тыйым салынған аймақта адамның немесе техниканың пайда болуын бірден анықтайды. Сіз бұзушылықты кейін емес, дәл сол сәтте көресіз. Қауіпсіздік реактивті емес, үздіксіз бақылауға айналады.",
            detects: "Басып кіру, сызықтан өту, тыйым салынған аймаққа ену және рұқсат етілмеген уақытта болу.",
            purpose: "Нысанды қорғау, периметрді күшейту, инцидент ықтималдығын азайту және қауіпсіздік қызметіне әрекет етуге уақыт беру үшін.",
            areas: "Өнеркәсіптік аумақтар, қоймалар, құрылыс алаңдары, режимдік объектілер, логистикалық аймақтар және жабық кеңістіктер.",
            footer: "Бұзушылық тым кеш байқалған жерде қауіпсіздік аяқталады. Бұл модуль сол ережені өзгертеді.",
            note: "Егер қауіп периметрдің ішінде болса, демек белгі тым кеш келген. Мұнда бәрі керісінше жұмыс істейді."
          }
        },
        fight: {
          video: "videos/fight_video.mp4",
          ru: {
            eyebrow: "AI-модуль",
            shortTitle: "Драка и вандализм",
            title: "Опасность, которую нельзя игнорировать",
            description: "Конфликт начинается за секунды — последствия остаются надолго. Система выявляет агрессию, драки и разрушительные действия в реальном времени. Вы реагируете сразу, а не разбираетесь с последствиями позже. Это позволяет не только защитить людей, но и сохранить репутацию, имущество и контроль над пространством.",
            detects: "Агрессивное поведение, физические конфликты, драки, резкие всплески активности, акты вандализма.",
            purpose: "Чтобы остановить эскалацию на ранней стадии, сократить ущерб и вовремя подключить охрану или ответственный персонал.",
            areas: "Торговые центры, жилые комплексы, транспортные узлы, улицы, общественные пространства, учебные учреждения.",
            footer: "Когда ситуация выходит из-под контроля, цена промедления всегда выше. Поэтому реакция должна начинаться в момент события.",
            note: "Сильная безопасность — это не та, что разбирается после. Это та, что успевает вмешаться вовремя."
          },
          en: {
            eyebrow: "AI Module",
            shortTitle: "Fight and Vandalism",
            title: "A threat you cannot afford to ignore",
            description: "Conflict starts in seconds, but the consequences can last much longer. The system detects aggression, fights, and destructive actions in real time. You respond immediately instead of dealing with the aftermath later. This helps protect people, preserve reputation, safeguard property, and maintain control over the environment.",
            detects: "Aggressive behavior, physical conflicts, fights, sudden activity spikes, and acts of vandalism.",
            purpose: "To stop escalation early, reduce damage, and involve security or responsible staff before the situation worsens.",
            areas: "Shopping malls, residential complexes, transport hubs, streets, public environments, and educational institutions.",
            footer: "When a situation gets out of control, the cost of delay is always higher. Response must begin the moment the event starts.",
            note: "Strong security is not the one that investigates after the fact. It is the one that intervenes in time."
          },
          zh: {
            eyebrow: "AI 模块",
            shortTitle: "打斗与破坏",
            title: "无法被忽视的危险",
            description: "冲突往往只需几秒钟就会爆发，但后果却会持续很久。系统能够实时识别攻击性行为、打斗和破坏行为。您不是在事后处理后果，而是在事件发生时立即响应。这不仅保护人员安全，也能保护声誉、财产和对场景的控制。",
            detects: "攻击性行为、肢体冲突、打斗、异常活动激增和破坏行为。",
            purpose: "用于在早期阻止局势升级、减少损失，并及时通知安保或责任人员。",
            areas: "购物中心、住宅区、交通枢纽、街道、公共区域和教育机构。",
            footer: "当局势失控时，拖延的代价永远更高。因此反应必须从事件发生的那一刻开始。",
            note: "真正强大的安全，不是事后调查，而是来得及在关键时刻介入。"
          },
          kk: {
            eyebrow: "AI-модуль",
            shortTitle: "Төбелес және вандализм",
            title: "Елемеуге болмайтын қауіп",
            description: "Қақтығыс бірнеше секундта басталады, ал салдары ұзақ сақталады. Жүйе агрессияны, төбелесті және қиратушы әрекеттерді нақты уақытта анықтайды. Сіз кейін салдармен күреспей, сол сәтте әрекет етесіз. Бұл адамдарды қорғап қана қоймай, беделді, мүлікті және кеңістікке бақылауды сақтауға көмектеседі.",
            detects: "Агрессивті мінез-құлық, физикалық қақтығыстар, төбелестер, белсенділіктің күрт өсуі және вандализм актілері.",
            purpose: "Эскалацияны ерте тоқтату, шығынды азайту және қауіпсіздік қызметін немесе жауапты персоналды уақтылы қосу үшін.",
            areas: "Сауда орталықтары, тұрғын кешендер, көлік тораптары, көшелер, қоғамдық кеңістіктер және оқу орындары.",
            footer: "Жағдай бақылаудан шыққанда, кешігу бағасы әрқашан қымбатқа түседі. Сондықтан әрекет оқиға басталған сәттен басталуы тиіс.",
            note: "Күшті қауіпсіздік — кейін тексеретін жүйе емес. Ол — уақытында араласа алатын жүйе."
          }
        },
        theft: {
          video: "videos/shoplift_video.mp4",
          ru: {
            eyebrow: "AI-модуль",
            shortTitle: "Воровство",
            title: "Когда потери происходят незаметно",
            description: "Кражи редко выглядят как преступление — чаще как обычное поведение. Система выявляет подозрительные действия и сценарии, связанные с хищением. Вы получаете сигнал до того, как товар или имущество покидают зону контроля. Это превращает безопасность из пассивной в проактивную.",
            detects: "Подозрительное поведение, скрытие товара, несанкционированный вынос имущества, сценарии потенциального хищения.",
            purpose: "Чтобы снижать потери, усиливать контроль активов и предотвращать инциденты ещё до фактического ущерба.",
            areas: "Ритейл, склады, офисы, пункты выдачи, зоны хранения, пространства с материальными ценностями.",
            footer: "Самые дорогие потери — те, которые происходят тихо. Этот модуль помогает видеть то, что обычно замечают слишком поздно.",
            note: "Тихие потери опаснее громких — потому что их замечают слишком поздно. Здесь именно это и решается."
          },
          en: {
            eyebrow: "AI Module",
            shortTitle: "Theft",
            title: "When losses happen quietly",
            description: "Theft rarely looks like a crime in real time — it often looks like ordinary behavior. The system detects suspicious actions and scenarios associated with stealing. You receive a signal before goods or property leave the control zone. This turns security from passive observation into proactive prevention.",
            detects: "Suspicious behavior, concealment of goods, unauthorized removal of property, and potential theft scenarios.",
            purpose: "To reduce losses, strengthen asset control, and prevent incidents before actual damage occurs.",
            areas: "Retail, warehouses, offices, pickup points, storage areas, and environments with valuable assets.",
            footer: "The most expensive losses are the silent ones. This module helps you see what is usually noticed too late.",
            note: "Quiet losses are more dangerous than loud ones because they are discovered too late. That is exactly what this module solves."
          },
          zh: {
            eyebrow: "AI 模块",
            shortTitle: "盗窃",
            title: "当损失悄无声息地发生",
            description: "盗窃在实时场景中很少看起来像犯罪，更多时候它只是看起来像普通行为。系统能够识别与盗窃有关的可疑动作和场景。在货物或财产离开控制区域之前，您就会收到提醒。这让安全从被动观察升级为主动预防。",
            detects: "可疑行为、藏匿商品、未经授权搬离财产，以及潜在盗窃场景。",
            purpose: "用于减少损失、加强资产控制，并在实际损害发生前阻止事件。",
            areas: "零售、仓库、办公室、自提点、存储区域和有贵重资产的场景。",
            footer: "最昂贵的损失，往往是那些悄悄发生的损失。这个模块帮助您看到那些通常被发现得太晚的事情。",
            note: "安静发生的损失比明显的损失更危险，因为它们总是在太晚时才被发现。这正是这里要解决的问题。"
          },
          kk: {
            eyebrow: "AI-модуль",
            shortTitle: "Ұрлық",
            title: "Шығындар үнсіз болатын кезде",
            description: "Ұрлық нақты уақытта қылмыс сияқты көрінбейді — көбіне ол жай ғана қалыпты әрекетке ұқсайды. Жүйе күмәнді қимылдарды және ұрлықпен байланысты сценарийлерді анықтайды. Сіз тауар немесе мүлік бақылау аймағынан шықпай тұрып белгі аласыз. Бұл қауіпсіздікті пассивті бақылаудан проактивті алдын алуға айналдырады.",
            detects: "Күдікті мінез-құлық, тауарды жасыру, мүлікті рұқсатсыз алып шығу және ықтимал ұрлық сценарийлері.",
            purpose: "Шығынды азайту, активтерді бақылауды күшейту және нақты зиян келмей тұрып инциденттердің алдын алу үшін.",
            areas: "Ритейл, қоймалар, кеңселер, а пункттері, сақтау аймақтары және құнды активтері бар кеңістіктер.",
            footer: "Ең қымбат шығындар — үнсіз болатын шығындар. Бұл модуль әдетте тым кеш байқалатын нәрсені көруге көмектеседі.",
            note: "Үнсіз шығындар қатты байқалатын шығындарға қарағанда қауіпті, өйткені олар тым кеш анықталады. Дәл осы мәселе осында шешіледі."
          }
        },
        face: {
          video: "videos/face-detect.mp4",
          ru: {
            eyebrow: "AI-модуль",
            shortTitle: "Распознавание и детекция лица",
            title: "Когда важно не только событие — но и контекст происходящего",
            description: "Не все сценарии требуют идентификации человека. Система фиксирует присутствие людей в кадре и связывает события между собой, формируя целостную картину происходящего. Вы видите не отдельные тревоги, а взаимосвязанные действия и контекст.",
            detects: "Присутствие людей в зоне наблюдения, их перемещение и участие в событиях, а также взаимосвязь между инцидентами во времени.",
            purpose: "Чтобы анализировать происходящее без необходимости идентификации личности, соблюдать требования законодательства и при этом сохранять контроль над ситуацией.",
            areas: "Склады, производство, офисы, общественные пространства, инфраструктурные объекты, зоны повышенного контроля.",
            footer: "Иногда важно не знать, кто именно находится в кадре, а понимать, что происходит.",
            note: "Система по умолчанию не использует биометрические данные. При необходимости функции работы с лицами могут быть ограничены или настроены оператором в соответствии с требованиями законодательства."
          },
          en: {
            eyebrow: "AI Module",
            shortTitle: "Face Recognition and Detection",
            title: "When it’s not just the event — but the context behind it",
            description: "Not every scenario requires identifying a person. The system detects human presence and connects events over time, providing a complete understanding of what is happening. You see not isolated alerts, but patterns and context.",
            detects: "Human presence in monitored areas, movement, involvement in events, and relationships between incidents over time.",
            purpose: "To analyze situations without requiring identity recognition, comply with privacy regulations, and maintain full operational awareness.",
            areas: "Retail, warehouses, production sites, offices, public spaces, infrastructure facilities, and high-security zones.",
            footer: "Sometimes it’s not about who is in the frame — but about understanding what is happening.",
            note: "The system does not rely on biometric identification by default. Facial data visibility can be limited or disabled by the operator in accordance with local regulations."
          },
          zh: {
            eyebrow: "AI 模块",
            shortTitle: "人脸识别与检测",
            title: "重要的不只是发生了什么，而是谁又回来了",
            description: "事件很少只发生一次。人会返回、重复行为并再次出现。系统会捕捉画面中的人脸，并支持在不同事件中跟踪同一个人。它可用于重复出现匹配、自定义观察名单流程、基于特定场景的自动人脸录入，以及当某人再次进入受控区域时发出提醒。",
            detects: "画面中的人脸、出现在监控区域中的人员、同一人在不同事件中的重复出现，以及与用户自定义观察名单的匹配。",
            purpose: "不仅用于对事件做出反应，还用于识别重复场景、跟踪返回人员，并在系统内使用自定义观察名单。",
            areas: "零售、仓库、生产现场、办公室、公共空间、基础设施以及高安全区域。",
            footer: "有时候重要的不只是看到一个人，而是知道他以前已经来过这里。",
            note: "系统默认不使用生物识别数据。操作员可根据当地法规限制或关闭人脸显示。"
          },
          kk: {
            eyebrow: "AI-модуль",
            shortTitle: "Бетті тану және анықтау",
            title: "Маңыздысы тек не болғаны емес — кімнің қайта келгені",
            description: "Инциденттер сирек бір рет болады. Адамдар қайта келеді, әрекеттерді қайталайды және қайта көрінеді. Жүйе кадрдағы бетті тіркеп, бір адамды әртүрлі оқиғалар арасында бақылауға мүмкіндік береді. Ол қайталанатын пайда болуды салыстыруға, жеке watchlist қолдануға, таңдалған сценарийлер бойынша бетті автоматты түрде қосуға және адам бақылау аймағына қайта келгенде хабар беруге пайдаланылуы мүмкін.",
            detects: "Кадрдағы беттерді, бақылау аймағындағы адамдарды, бір адамның әртүрлі оқиғаларда қайта пайда болуын және пайдаланушы жасаған бақылау тізімдерімен сәйкестікті анықтайды.",
            purpose: "Оқиғаға жай ғана жауап беру үшін емес, қайталанатын сценарийлерді бақылау, қайта оралған адамдарды анықтау және жүйе ішіндегі жеке watchlist-пен жұмыс істеу үшін.",
            areas: "Ритейл, қоймалар, өндіріс орындары, кеңселер, қоғамдық кеңістіктер, инфрақұрылым нысандары және жоғары бақылау аймақтары.",
            footer: "Кейде адамды көру жеткіліксіз — оның мұнда бұрын болғанын білу маңызды.",
            note: "Жүйе әдепкі бойынша биометриялық деректерді қолданбайды. Оператор заң талаптарына сәйкес беттерді көрсету функциясын шектей немесе өшіре алады."
          }
        }
      };

      function setVideoSource(src) {
        if (!modalVideo || !modalVideoSource) return;
        modalVideo.pause();
        modalVideoSource.src = src;
        modalVideo.load();
      }

      function setModalContent(moduleKey) {
        const moduleData = modules[moduleKey];
        if (!moduleData) return;

        const lang = localStorage.getItem("site-language") || "ru";
        const localized = moduleData[lang] || moduleData.ru;

        modalEyebrow.textContent = localized.eyebrow;
        modalTitle.textContent = localized.title;
        modalDescription.textContent = localized.description;
        modalDetects.textContent = localized.detects;
        modalPurpose.textContent = localized.purpose;
        modalAreas.textContent = localized.areas;
        modalFooter.textContent = localized.footer;
        modalNote.textContent = localized.note;

        if (moduleDetectsTitle) moduleDetectsTitle.textContent = uiTranslations[lang].detectsTitle;
        if (modulePurposeTitle) modulePurposeTitle.textContent = uiTranslations[lang].purposeTitle;
        if (moduleAreasTitle) moduleAreasTitle.textContent = uiTranslations[lang].areasTitle;
        if (moduleDemoLabel) moduleDemoLabel.textContent = uiTranslations[lang].demoButton;

        const subject = encodeURIComponent(`${uiTranslations[lang].demoButton}: ${localized.shortTitle}`);
        moduleDemoLink.href = `mailto:support@vengeea.com?subject=${subject}`;
      }

      function applyTranslations(lang) {
        const selectedLang = uiTranslations[lang] ? lang : "ru";
        const dict = uiTranslations[selectedLang];
        const meta = languageMeta[selectedLang];

        document.documentElement.lang = meta.htmlLang;
        if (langCurrentFlag) langCurrentFlag.textContent = meta.flag;
        if (langCurrentText) langCurrentText.textContent = meta.code;

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
          const key = el.getAttribute("data-i18n");
          if (dict[key]) {
            el.textContent = dict[key];
          }
        });

        if (currentModuleKey) {
          setModalContent(currentModuleKey);
        }

        localStorage.setItem("site-language", selectedLang);
      }

      function openModal(moduleKey, triggerElement) {
        const moduleData = modules[moduleKey];
        if (!moduleData) return;

        lastFocusedCard = triggerElement || null;

        if (!modal.classList.contains("is-open")) {
          currentModuleKey = moduleKey;
          setModalContent(moduleKey);
          setVideoSource(moduleData.video);

          modal.classList.add("is-open");
          modal.setAttribute("aria-hidden", "false");
          document.body.classList.add("modal-open");
          closeButton.focus();
          return;
        }

        if (currentModuleKey !== moduleKey) {
          currentModuleKey = moduleKey;
          modalContent.classList.add("is-switching");

          window.setTimeout(() => {
            setModalContent(moduleKey);
            setVideoSource(moduleData.video);
            modalContent.classList.remove("is-switching");
          }, 180);
        }
      }

      function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
        modalVideo.pause();
        modalVideo.currentTime = 0;

        if (lastFocusedCard) {
          lastFocusedCard.focus();
        }
      }

      if (burger && nav) {
        burger.addEventListener("click", () => {
          const isOpen = nav.classList.toggle("is-open");
          document.body.classList.toggle("menu-open", isOpen);
          burger.setAttribute("aria-expanded", String(isOpen));
        });

        nav.querySelectorAll("a").forEach(function (link) {
          link.addEventListener("click", function () {
            if (window.innerWidth <= 1180) {
              nav.classList.remove("is-open");
              document.body.classList.remove("menu-open");
              burger.setAttribute("aria-expanded", "false");
            }
          });
        });
      }

      if (langSwitcher && langButton && langMenu) {
        langButton.addEventListener("click", (event) => {
          event.stopPropagation();
          const isOpen = langSwitcher.classList.toggle("is-open");
          langButton.setAttribute("aria-expanded", String(isOpen));
        });

        langMenu.querySelectorAll("[data-lang]").forEach((button) => {
          button.addEventListener("click", () => {
            const lang = button.getAttribute("data-lang") || "ru";
            applyTranslations(lang);
            langSwitcher.classList.remove("is-open");
            langButton.setAttribute("aria-expanded", "false");
          });
        });

        document.addEventListener("click", (event) => {
          if (!langSwitcher.contains(event.target)) {
            langSwitcher.classList.remove("is-open");
            langButton.setAttribute("aria-expanded", "false");
          }
        });
      }

      document.querySelectorAll(".solution-card").forEach((card) => {
        card.addEventListener("click", () => {
          const moduleKey = card.dataset.module;
          openModal(moduleKey, card);
        });
      });

      if (closeButton) closeButton.addEventListener("click", closeModal);
      if (backdrop) backdrop.addEventListener("click", closeModal);

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          if (modal && modal.classList.contains("is-open")) {
            closeModal();
          }
          if (langSwitcher && langSwitcher.classList.contains("is-open")) {
            langSwitcher.classList.remove("is-open");
            langButton.setAttribute("aria-expanded", "false");
          }
        }
      });

      const reveals = document.querySelectorAll(".reveal");
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          function (entries, obs) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.14,
            rootMargin: "0px 0px -40px 0px"
          }
        );
        reveals.forEach(function (item) {
          observer.observe(item);
        });
      } else {
        reveals.forEach(function (item) {
          item.classList.add("is-visible");
        });
      }

      const savedLanguage = localStorage.getItem("site-language") || "ru";
      applyTranslations(savedLanguage);
    })();

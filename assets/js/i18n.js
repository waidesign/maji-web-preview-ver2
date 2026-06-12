/* =========================================================
   MAJI WELLNESS — Internationalisation Engine
   Languages: English · Thai · 中文 · Русский
   ========================================================= */

(function () {
  'use strict';

  /* ---- Translation Strings ---- */
  var T = {

    /* =====================================================
       SHARED — NAVIGATION
    ===================================================== */
    nav_journey:      { en: 'The Journey',        th: 'การเดินทาง',       zh: '热疗之旅',     ru: 'Путешествие' },
    nav_services:     { en: 'Services',            th: 'บริการ',           zh: '服务',         ru: 'Услуги' },
    nav_h2_baths:     { en: 'Hydrogen Baths',      th: 'อาบน้ำไฮโดรเจน', zh: '氢气浴',       ru: 'Водородные ванны' },
    nav_h2_inhale:    { en: 'Hydrogen Inhalation', th: 'สูดไฮโดรเจน',    zh: '氢气吸入',     ru: 'Ингаляция водородом' },
    nav_saunas:       { en: 'Saunas of the World', th: 'ซาวน่าทั่วโลก',  zh: '世界桑拿',     ru: 'Сауны мира' },
    nav_pools:        { en: 'Contrast Pools',      th: 'สระน้ำคอนทราสต์', zh: '冷热交替池',   ru: 'Контрастные бассейны' },
    nav_kitchen:      { en: 'Kitchen',             th: 'ห้องครัว',        zh: '餐厅',         ru: 'Кухня' },
    nav_science:      { en: 'Science',             th: 'วิทยาศาสตร์',     zh: '科学依据',     ru: 'Наука' },
    nav_guide:        { en: 'Phuket Guide',        th: 'คู่มือภูเก็ต',    zh: '普吉岛指南',   ru: 'Гид по Пхукету' },
    nav_reserve:      { en: 'Reserve',             th: 'จอง',             zh: '预订',         ru: 'Бронировать' },
    nav_saunas_short: { en: 'Saunas',              th: 'ซาวน่า',          zh: '桑拿',         ru: 'Сауны' },
    nav_pools_short:  { en: 'Pools',               th: 'สระน้ำ',          zh: '水疗池',       ru: 'Бассейны' },

    /* =====================================================
       SHARED — LANGUAGE SWITCHER
    ===================================================== */
    lang_label:       { en: 'Language',  th: 'ภาษา',  zh: '语言',  ru: 'Язык' },

    /* =====================================================
       SHARED — FOOTER
    ===================================================== */
    footer_tagline:       { en: "Phuket's premier thermal recovery oasis. Ancient traditions. Modern recovery science.", th: 'โอเอซิสฟื้นฟูความร้อนชั้นนำของภูเก็ต ประเพณีโบราณ วิทยาศาสตร์การฟื้นฟูสมัยใหม่', zh: '普吉岛顶级热疗恢复绿洲。古老传统，现代康复科学。', ru: 'Ведущий термальный оазис восстановления на Пхукете. Древние традиции. Современная наука восстановления.' },
    footer_experiences:   { en: 'Experiences',   th: 'ประสบการณ์',    zh: '体验项目',       ru: 'Опыт' },
    footer_oasis:         { en: 'The Oasis',     th: 'โอเอซิส',       zh: '度假村',         ru: 'Оазис' },
    footer_hours_title:   { en: 'Hours',         th: 'เวลาทำการ',     zh: '营业时间',       ru: 'Часы работы' },
    footer_daily:         { en: 'Daily · 10:00 — 22:00', th: 'ทุกวัน · 10:00 — 22:00', zh: '每日 · 10:00 — 22:00', ru: 'Ежедневно · 10:00 — 22:00' },
    footer_ep_credit:     { en: 'Made with love by', th: 'สร้างด้วยความรักโดย', zh: '由……用心打造', ru: 'Сделано с любовью' },
    footer_copyright:     { en: '© 2025 Maji Recovery Oasis. All rights reserved.', th: '© 2025 Maji Recovery Oasis สงวนลิขสิทธิ์', zh: '© 2025 Maji Recovery Oasis 版权所有', ru: '© 2025 Maji Recovery Oasis. Все права защищены.' },
    footer_privacy:       { en: 'Privacy Policy', th: 'นโยบายความเป็นส่วนตัว', zh: '隐私政策', ru: 'Политика конфиденциальности' },
    footer_terms:         { en: 'Terms of Use',   th: 'เงื่อนไขการใช้งาน',    zh: '使用条款',   ru: 'Условия использования' },
    footer_thermal:       { en: 'The Thermal Journey',   th: 'การเดินทางความร้อน', zh: '热疗之旅',     ru: 'Тепловой маршрут' },
    footer_h2baths:       { en: 'Hydrogen Baths',        th: 'อาบน้ำไฮโดรเจน',  zh: '氢气浴',       ru: 'Водородные ванны' },
    footer_h2inhale:      { en: 'Hydrogen Inhalation',   th: 'สูดไฮโดรเจน',     zh: '氢气吸入',     ru: 'Ингаляция водородом' },
    footer_saunas:        { en: 'Saunas of the World',   th: 'ซาวน่าทั่วโลก',   zh: '世界桑拿',     ru: 'Сауны мира' },
    footer_pools:         { en: 'Contrast Pools',        th: 'สระน้ำคอนทราสต์',  zh: '冷热交替池',   ru: 'Контрастные бассейны' },
    footer_kitchen:       { en: 'Maji Kitchen',          th: 'ห้องครัวมาจิ',     zh: 'Maji 餐厅',    ru: 'Кухня Maji' },
    footer_phuket_guide:  { en: 'Phuket Wellness Guide', th: 'คู่มือสุขภาพภูเก็ต', zh: '普吉岛健康指南', ru: 'Оздоровительный гид по Пхукету' },
    footer_science:       { en: 'The Science',           th: 'วิทยาศาสตร์',      zh: '科学依据',     ru: 'Наука' },
    footer_contact:       { en: 'Reserve & Contact',     th: 'จองและติดต่อ',      zh: '预订与联系',   ru: 'Бронирование и контакты' },

    /* =====================================================
       SHARED — CALLOUT / CTA SECTION
    ===================================================== */
    btn_reserve_session:  { en: 'Reserve a Session',  th: 'จองเซสชัน',        zh: '预约疗程',     ru: 'Забронировать сеанс' },
    btn_reserve_table:    { en: 'Reserve a Table',    th: 'จองโต๊ะ',          zh: '预订餐位',     ru: 'Забронировать столик' },
    btn_explore_journey:  { en: 'Explore the Journey', th: 'สำรวจการเดินทาง', zh: '探索疗程',     ru: 'Изучить маршрут' },
    crumb_home:           { en: 'Home',                th: 'หน้าหลัก',         zh: '首页',         ru: 'Главная' },
    crumb_services:       { en: 'Services',            th: 'บริการ',            zh: '服务',         ru: 'Услуги' },

    /* =====================================================
       HOME PAGE
    ===================================================== */
    home_eyebrow:         { en: 'Phuket, Thailand · Est. Recovery Oasis', th: 'ภูเก็ต ประเทศไทย · โอเอซิสฟื้นฟู', zh: '泰国普吉岛 · 康复绿洲', ru: 'Пхукет, Таиланд · Оазис восстановления' },
    home_hero_title:      { en: 'Where ancient heat<br><em>meets cellular science.</em>', th: 'ที่ซึ่งความร้อนโบราณ<br><em>พบกับวิทยาศาสตร์เซลล์</em>', zh: '古老热力<br><em>与细胞科学的交汇</em>', ru: 'Где древнее тепло<br><em>встречается с клеточной наукой.</em>' },
    home_hero_subtitle:   { en: "Maji is Phuket's most advanced thermal recovery oasis. A deliberate circuit of Russian Banya, Finnish Sauna, Hammam, contrast plunge pools, and molecular hydrogen therapy — engineered to reset the body at a cellular level.", th: 'มาจิคือโอเอซิสฟื้นฟูความร้อนที่ล้ำสมัยที่สุดในภูเก็ต วงจรที่ออกแบบมาอย่างพิถีพิถันจากรัสเซียนบันยา ฟินแลนด์ซาวน่า ฮัมมัม สระน้ำเย็นร้อน และบำบัดด้วยโมเลกุลไฮโดรเจน ออกแบบมาเพื่อรีเซ็ตร่างกายในระดับเซลล์', zh: 'Maji是普吉岛最先进的热疗恢复绿洲。精心设计的俄罗斯浴、芬兰桑拿、土耳其浴、冷热交替池与分子氢疗法回路——从细胞层面重置身体。', ru: 'Maji — самый передовой термальный оздоровительный оазис Пхукета. Тщательно выверенный цикл из русской Бани, финской Сауны, Хаммама, контрастных бассейнов и молекулярно-водородной терапии — для сброса напряжения на клеточном уровне.' },
    home_hero_book:       { en: 'Book a Session',     th: 'จองเซสชัน',       zh: '预约疗程',    ru: 'Забронировать сеанс' },
    home_hero_explore:    { en: 'Explore the Journey', th: 'สำรวจการเดินทาง', zh: '探索疗程',    ru: 'Изучить маршрут' },
    home_hero_scroll:     { en: 'Scroll to discover', th: 'เลื่อนเพื่อค้นพบ', zh: '滑动探索',    ru: 'Прокрутите вниз' },

    home_intro_label:     { en: 'Our Philosophy',     th: 'ปรัชญาของเรา',    zh: '我们的理念',  ru: 'Наша философия' },
    home_intro_heading:   { en: 'Recovery is not rest.<br>Recovery is <em>deliberate transformation.</em>', th: 'การฟื้นฟูไม่ใช่การพัก<br>การฟื้นฟูคือ<em>การเปลี่ยนแปลงอย่างตั้งใจ</em>', zh: '恢复不是休息。<br>恢复是<em>有意识的蜕变。</em>', ru: 'Восстановление — это не отдых.<br>Восстановление — это <em>целенаправленная трансформация.</em>' },
    home_intro_body1:     { en: 'At Maji, every element of the thermal circuit serves a precise biochemical purpose. Heat opens vascular pathways and unlocks deep tissue tension. Cold drives circulation inward, triggering hormetic adaptation. Molecular hydrogen dissolves through skin and lung tissue, neutralising reactive oxygen species at the source.', th: 'ที่มาจิ ทุกองค์ประกอบของวงจรความร้อนมีวัตถุประสงค์ทางชีวเคมีที่แม่นยำ ความร้อนเปิดเส้นทางหลอดเลือดและคลายความตึงเครียดของเนื้อเยื่อลึก ความเย็นขับเคลื่อนการไหลเวียนเลือดเข้าด้านใน กระตุ้นการปรับตัวแบบฮอร์เมซิส โมเลกุลไฮโดรเจนซึมผ่านผิวหนังและเนื้อเยื่อปอด ทำให้สารอนุมูลอิสระที่มีปฏิกิริยาเป็นกลางที่ต้นทาง', zh: '在Maji，热疗回路的每个环节都有精确的生化目的。热力打开血管通道，释放深层组织张力。冷刺激将血液循环导向内部，触发荷尔蒙适应。分子氢穿透皮肤和肺部组织，在源头中和活性氧自由基。', ru: 'В Maji каждый элемент термального цикла выполняет точную биохимическую функцию. Тепло открывает сосудистые пути и снимает глубокое мышечное напряжение. Холод направляет кровообращение внутрь, запуская гормезисную адаптацию. Молекулярный водород проникает через кожу и лёгочную ткань, нейтрализуя активные формы кислорода у самого источника.' },
    home_intro_body2:     { en: 'This is not a spa. This is a recovery system — built for athletes, biohackers, executives, and anyone who demands more from their body\'s capacity to heal.', th: 'นี่ไม่ใช่สปา นี่คือระบบฟื้นฟู สร้างขึ้นสำหรับนักกีฬา ไบโอแฮ็กเกอร์ ผู้บริหาร และทุกคนที่ต้องการมากกว่าจากความสามารถในการรักษาตัวของร่างกาย', zh: '这不是一家水疗中心。这是一套恢复系统——专为运动员、生物黑客、高管，以及所有对身体自愈能力有更高期待的人打造。', ru: 'Это не спа. Это система восстановления — созданная для спортсменов, биохакеров, руководителей и всех, кто требует от своего тела большего.' },
    home_intro_cta:       { en: 'Understand the Protocol', th: 'ทำความเข้าใจโปรโตคอล', zh: '了解疗程方案', ru: 'Узнать о протоколе' },

    home_stats_label:        { en: 'By the numbers',     th: 'ตัวเลขที่น่าสนใจ',   zh: '数据说话',       ru: 'Цифры' },
    home_stats_traditions:   { en: 'Heat Traditions',    th: 'ประเพณีความร้อน',     zh: '热疗传统',       ru: 'Тепловых традиции' },
    home_stats_molecule:     { en: 'nm — Smallest Molecule', th: 'นาโนเมตร — โมเลกุลที่เล็กที่สุด', zh: 'nm — 最小分子',   ru: 'нм — наименьшая молекула' },
    home_stats_reach:        { en: 'Cellular Reach',     th: 'การเข้าถึงระดับเซลล์', zh: '细胞级渗透',     ru: 'Клеточный охват' },
    home_stats_circuit:      { en: 'The complete thermal circuit — from peak heat <em>to deep restoration</em> — in a single visit.', th: 'วงจรความร้อนที่สมบูรณ์ — จากความร้อนสูงสุด<em>ถึงการฟื้นฟูลึก</em> — ในการเยือนครั้งเดียว', zh: '完整的热疗回路——从峰值热力<em>到深度修复</em>——一次完成。', ru: 'Полный термальный цикл — от пиковой температуры <em>до глубокого восстановления</em> — за одно посещение.' },

    home_services_label:   { en: 'What We Offer',      th: 'สิ่งที่เรานำเสนอ',   zh: '我们的服务',    ru: 'Наши предложения' },
    home_services_heading: { en: 'The Full Thermal Arsenal', th: 'คลังแสงความร้อนเต็มรูปแบบ', zh: '完整热疗武库', ru: 'Полный термальный арсенал' },
    home_services_cta:     { en: 'See the full journey', th: 'ดูการเดินทางทั้งหมด', zh: '查看完整疗程', ru: 'Полный маршрут' },

    home_sc01_title:  { en: 'Hydrogen Bath Therapy',      th: 'บำบัดด้วยน้ำไฮโดรเจน',    zh: '氢气浴疗法',         ru: 'Водородная ванна' },
    home_sc02_title:  { en: 'Hydrogen Inhalation Therapy', th: 'บำบัดด้วยการสูดไฮโดรเจน',  zh: '氢气吸入疗法',       ru: 'Ингаляция водородом' },
    home_sc03_title:  { en: 'Saunas of the World',         th: 'ซาวน่าทั่วโลก',             zh: '世界桑拿',           ru: 'Сауны мира' },
    home_sc04_title:  { en: 'Contrast Pools & Cold Plunge', th: 'สระน้ำคอนทราสต์และพลันจ์เย็น', zh: '冷热交替池',      ru: 'Контрастные бассейны и холодное погружение' },
    home_sc05_title:  { en: 'The Thermal Journey',         th: 'การเดินทางความร้อน',         zh: '热疗之旅',           ru: 'Тепловой маршрут' },
    home_sc06_title:  { en: 'Maji Kitchen',                th: 'ห้องครัวมาจิ',               zh: 'Maji 餐厅',          ru: 'Кухня Maji' },

    home_sc01_link:   { en: 'Discover the bath',      th: 'สำรวจการอาบน้ำ',       zh: '探索氢气浴',     ru: 'Узнать о ванне' },
    home_sc02_link:   { en: 'Explore inhalation',     th: 'สำรวจการสูด',           zh: '探索吸入疗法',   ru: 'Об ингаляции' },
    home_sc03_link:   { en: 'Explore the saunas',     th: 'สำรวจซาวน่า',           zh: '探索桑拿',       ru: 'О саунах' },
    home_sc04_link:   { en: 'Explore the pools',      th: 'สำรวจสระน้ำ',           zh: '探索水疗池',     ru: 'О бассейнах' },
    home_sc05_link:   { en: 'Learn the sequence',     th: 'เรียนรู้ลำดับ',          zh: '了解疗程顺序',   ru: 'Узнать о последовательности' },
    home_sc06_link:   { en: 'Explore the kitchen',    th: 'สำรวจห้องครัว',         zh: '探索餐厅',       ru: 'О кухне' },

    home_h2_label:    { en: 'Signature Therapy',      th: 'การบำบัดหลัก',          zh: '招牌疗法',       ru: 'Фирменная терапия' },
    home_h2_heading:  { en: "The world's smallest molecule.<br><em>The body's deepest repair.</em>", th: 'โมเลกุลที่เล็กที่สุดในโลก<br><em>การซ่อมแซมที่ลึกที่สุดของร่างกาย</em>', zh: '世界上最小的分子。<br><em>身体最深层的修复。</em>', ru: 'Наименьшая молекула в мире.<br><em>Самое глубокое восстановление тела.</em>' },

    home_protocol_label:   { en: 'The Protocol',        th: 'โปรโตคอล',              zh: '疗程方案',       ru: 'Протокол' },
    home_protocol_heading: { en: 'Three stages.<br>One complete <em>physiological reset.</em>', th: 'สามขั้นตอน<br>การรีเซ็ตสรีรวิทยา<em>อย่างสมบูรณ์</em>', zh: '三个阶段。<br>一次完整的<em>生理重置。</em>', ru: 'Три этапа.<br>Один полный <em>физиологический сброс.</em>' },
    home_protocol_cta:     { en: 'Read the full protocol', th: 'อ่านโปรโตคอลทั้งหมด', zh: '阅读完整疗程方案', ru: 'Читать полный протокол' },

    home_step1_title: { en: 'Heat',    th: 'ความร้อน', zh: '热',   ru: 'Тепло' },
    home_step2_title: { en: 'Cold',    th: 'ความเย็น', zh: '冷',   ru: 'Холод' },
    home_step3_title: { en: 'Restore', th: 'ฟื้นฟู',   zh: '修复', ru: 'Восстановление' },

    home_dining_label:   { en: 'Maji Kitchen',    th: 'ห้องครัวมาจิ',    zh: 'Maji 餐厅',    ru: 'Кухня Maji' },
    home_dining_heading: { en: 'Nutrition engineered<br>for the <em>recovering body.</em>', th: 'โภชนาการที่ออกแบบมา<br>สำหรับ<em>ร่างกายที่กำลังฟื้นฟู</em>', zh: '为<em>恢复中的身体</em><br>精心设计的营养方案', ru: 'Питание, созданное<br>для <em>восстанавливающегося тела.</em>' },
    home_dining_cta:     { en: 'Explore the Kitchen', th: 'สำรวจห้องครัว', zh: '探索餐厅', ru: 'Изучить кухню' },

    home_location_label:   { en: 'Location',       th: 'ที่ตั้ง',         zh: '地点',           ru: 'Местоположение' },
    home_location_heading: { en: 'Cherngtalay, Phuket', th: 'เฉิงทาเลย ภูเก็ต', zh: '普吉岛清塔莱', ru: 'Черенталей, Пхукет' },
    home_location_cta1:    { en: 'Get Directions',  th: 'รับเส้นทาง',     zh: '获取路线',       ru: 'Как добраться' },
    home_location_cta2:    { en: 'Phuket Wellness Guide', th: 'คู่มือสุขภาพภูเก็ต', zh: '普吉岛健康指南', ru: 'Гид по Пхукету' },

    home_cta_eyebrow: { en: 'Begin your recovery',  th: 'เริ่มการฟื้นฟูของคุณ', zh: '开始您的恢复疗程', ru: 'Начните восстановление' },
    home_cta_heading: { en: 'Reserve your place in the thermal circuit.', th: 'จองที่นั่งของคุณในวงจรความร้อน', zh: '预订您的热疗疗程席位', ru: 'Забронируйте место в термальном цикле.' },
    home_cta_body:    { en: 'Sessions at Maji are available daily from 10:00 to 22:00. Reserve in advance to secure your preferred time and thermal sequence.', th: 'เซสชันที่มาจิเปิดให้บริการทุกวันตั้งแต่ 10:00 ถึง 22:00 จองล่วงหน้าเพื่อให้ได้เวลาและลำดับความร้อนที่ต้องการ', zh: 'Maji每日10:00至22:00开放。请提前预约，以确保您心仪的时段和热疗顺序。', ru: 'Сеансы в Maji доступны ежедневно с 10:00 до 22:00. Бронируйте заранее, чтобы обеспечить удобное время и последовательность процедур.' },

    /* =====================================================
       THERMAL JOURNEY PAGE
    ===================================================== */
    journey_crumb:          { en: 'The Thermal Journey',   th: 'การเดินทางความร้อน',    zh: '热疗之旅',    ru: 'Тепловой маршрут' },
    journey_eyebrow:        { en: 'The Protocol',          th: 'โปรโตคอล',               zh: '疗程方案',    ru: 'Протокол' },
    journey_h1:             { en: 'The Thermal<br><em>Journey</em>', th: 'การเดินทาง<br><em>ความร้อน</em>', zh: '热疗<br><em>之旅</em>', ru: 'Тепловой<br><em>Маршрут</em>' },
    journey_subtitle:       { en: 'A deliberate physiological circuit — not a menu of isolated treatments. Every stage of the Maji thermal journey amplifies the biological output of the stage before it.', th: 'วงจรสรีรวิทยาที่ตั้งใจ — ไม่ใช่เมนูการรักษาแบบแยกส่วน ทุกขั้นตอนของการเดินทางความร้อนของมาจิขยายผลลัพธ์ทางชีววิทยาของขั้นตอนก่อนหน้า', zh: '一套有意而为的生理回路——而非孤立疗程的菜单。Maji热疗之旅的每个阶段都在放大前一阶段的生物效益。', ru: 'Целенаправленный физиологический цикл — не набор разрозненных процедур. Каждый этап термального маршрута Maji усиливает биологический эффект предыдущего.' },
    journey_intro_label:    { en: 'Why sequence matters',  th: 'ทำไมลำดับถึงสำคัญ',      zh: '顺序为何重要',ru: 'Почему важна последовательность' },
    journey_intro_heading:  { en: 'The body responds to<br>deliberate <em>thermal stress.</em>', th: 'ร่างกายตอบสนองต่อ<br><em>ความเครียดความร้อน</em>ที่ตั้งใจ', zh: '身体对有意施加的<br><em>热力刺激</em>产生反应', ru: 'Тело реагирует<br>на целенаправленный <em>тепловой стресс.</em>' },
    journey_phase1_label:   { en: 'Phase 01',   th: 'ระยะที่ 01',   zh: '阶段 01',  ru: 'Фаза 01' },
    journey_phase1_dur:     { en: 'Duration: 10–20 minutes', th: 'ระยะเวลา: 10–20 นาที', zh: '时长：10–20分钟', ru: 'Длительность: 10–20 минут' },
    journey_phase1_heading: { en: 'Heat:<br>Open, Prime, <em>Activate.</em>', th: 'ความร้อน:<br>เปิด เตรียม <em>กระตุ้น</em>', zh: '热力：<br>开启、激活、<em>准备。</em>', ru: 'Тепло:<br>Открыть, подготовить, <em>активировать.</em>' },
    journey_phase2_label:   { en: 'Phase 02',   th: 'ระยะที่ 02',   zh: '阶段 02',  ru: 'Фаза 02' },
    journey_phase2_dur:     { en: 'Duration: 1–3 minutes', th: 'ระยะเวลา: 1–3 นาที', zh: '时长：1–3分钟', ru: 'Длительность: 1–3 минуты' },
    journey_phase2_heading: { en: 'Cold:<br>Constrict, Flush, <em>Adapt.</em>', th: 'ความเย็น:<br>หดตัว ล้าง <em>ปรับตัว</em>', zh: '冷：<br>收缩、冲刷、<em>适应。</em>', ru: 'Холод:<br>Сжать, промыть, <em>адаптироваться.</em>' },
    journey_phase3_label:   { en: 'Phase 03',   th: 'ระยะที่ 03',   zh: '阶段 03',  ru: 'Фаза 03' },
    journey_phase3_dur:     { en: 'Duration: 20–40 minutes', th: 'ระยะเวลา: 20–40 นาที', zh: '时长：20–40分钟', ru: 'Длительность: 20–40 минут' },
    journey_phase3_heading: { en: 'Restore:<br>Neutralise, Repair, <em>Rebuild.</em>', th: 'ฟื้นฟู:<br>ทำให้เป็นกลาง ซ่อมแซม <em>สร้างใหม่</em>', zh: '修复：<br>中和、修复、<em>重建。</em>', ru: 'Восстановление:<br>Нейтрализовать, восстановить, <em>перестроить.</em>' },
    journey_circuit_label:  { en: 'The Complete Circuit', th: 'วงจรที่สมบูรณ์', zh: '完整回路', ru: 'Полный цикл' },
    journey_circuit_heading:{ en: 'One session. Three phases.<br><em>A complete biological reset.</em>', th: 'หนึ่งเซสชัน สามระยะ<br><em>การรีเซ็ตทางชีววิทยาที่สมบูรณ์</em>', zh: '一次疗程，三个阶段，<br><em>完整的生理重置。</em>', ru: 'Один сеанс. Три фазы.<br><em>Полный биологический сброс.</em>' },
    journey_circuit_book:   { en: 'Reserve the Full Circuit', th: 'จองวงจรทั้งหมด', zh: '预约完整回路疗程', ru: 'Забронировать полный цикл' },
    journey_circuit_science:{ en: 'Read the science', th: 'อ่านวิทยาศาสตร์', zh: '阅读科学依据', ru: 'Читать о науке' },
    journey_faq_label:      { en: 'Common Questions', th: 'คำถามที่พบบ่อย', zh: '常见问题', ru: 'Частые вопросы' },
    journey_faq_heading:    { en: 'Everything you need<br><em>before your first visit.</em>', th: 'ทุกสิ่งที่คุณต้องการ<br><em>ก่อนการเยือนครั้งแรก</em>', zh: '首次到访前<br><em>您需要了解的一切</em>', ru: 'Всё, что нужно знать<br><em>перед первым визитом.</em>' },
    journey_faq_q1:         { en: 'How many times should I cycle through heat and cold?', th: 'ฉันควรวนซ้ำระหว่างความร้อนและความเย็นกี่ครั้ง?', zh: '热冷循环应该进行几次？', ru: 'Сколько раз нужно чередовать тепло и холод?' },
    journey_faq_q2:         { en: 'Can I do the thermal journey every day?', th: 'ฉันสามารถทำการเดินทางความร้อนทุกวันได้หรือไม่?', zh: '我可以每天进行热疗之旅吗？', ru: 'Можно ли проходить тепловой маршрут каждый день?' },
    journey_faq_q3:         { en: 'What should I eat or drink before the thermal journey?', th: 'ฉันควรกินหรือดื่มอะไรก่อนการเดินทางความร้อน?', zh: '热疗前应该吃喝什么？', ru: 'Что есть и пить перед тепловым маршрутом?' },
    journey_faq_q4:         { en: 'Does hydrogen therapy work better before or after the thermal circuit?', th: 'การบำบัดด้วยไฮโดรเจนได้ผลดีกว่าก่อนหรือหลังวงจรความร้อน?', zh: '氢气疗法在热疗前还是热疗后效果更好？', ru: 'Когда водородная терапия эффективнее — до или после термального цикла?' },
    journey_faq_q5:         { en: 'Who should avoid the thermal circuit?', th: 'ใครควรหลีกเลี่ยงวงจรความร้อน?', zh: '哪些人应避免热疗回路？', ru: 'Кому следует избегать термального цикла?' },
    journey_cta_eyebrow:    { en: 'Begin the protocol', th: 'เริ่มโปรโตคอล', zh: '开始疗程方案', ru: 'Начать протокол' },
    journey_cta_heading:    { en: 'Reserve your thermal journey today.', th: 'จองการเดินทางความร้อนของคุณวันนี้', zh: '立即预约您的热疗之旅', ru: 'Забронируйте тепловой маршрут сегодня.' },
    journey_cta_body:       { en: 'Sessions available daily from 10:00 to 22:00 at Maji, Cherngtalay, Phuket.', th: 'เซสชันเปิดให้บริการทุกวันตั้งแต่ 10:00 ถึง 22:00 ที่มาจิ เฉิงทาเลย ภูเก็ต', zh: 'Maji清塔莱普吉岛每日10:00至22:00开放预约', ru: 'Сеансы доступны ежедневно с 10:00 до 22:00 в Maji, Черенталей, Пхукет.' },

    /* =====================================================
       DINING PAGE
    ===================================================== */
    dining_crumb:           { en: 'Maji Kitchen',    th: 'ห้องครัวมาจิ',  zh: 'Maji 餐厅',  ru: 'Кухня Maji' },
    dining_eyebrow:         { en: 'Post-Treatment Dining', th: 'การรับประทานอาหารหลังการรักษา', zh: '疗后餐饮',  ru: 'Питание после процедур' },
    dining_h1:              { en: 'Maji<br><em>Kitchen</em>', th: 'มาจิ<br><em>คิทเช่น</em>', zh: 'Maji<br><em>餐厅</em>', ru: 'Кухня<br><em>Maji</em>' },
    dining_subtitle:        { en: 'The recovery protocol does not end at the hydrogen bath. What you nourish the body with in the hour following thermal therapy determines how completely the cellular restoration cycle completes. Maji Kitchen is the nutritional continuation of everything that happens in the water.', th: 'โปรโตคอลการฟื้นฟูไม่สิ้นสุดที่การอาบน้ำไฮโดรเจน สิ่งที่คุณบำรุงร่างกายในชั่วโมงหลังจากการบำบัดความร้อนกำหนดว่าวงจรการฟื้นฟูเซลล์จะสมบูรณ์เพียงใด ห้องครัวมาจิคือการต่อเนื่องทางโภชนาการของทุกสิ่งที่เกิดขึ้นในน้ำ', zh: '恢复疗程不止于氢气浴。热疗后一小时内为身体提供的营养，决定了细胞修复周期能否彻底完成。Maji餐厅是水中一切发生的营养延续。', ru: 'Протокол восстановления не заканчивается водородной ванной. То, чем вы питаете тело в час после тепловой терапии, определяет полноту завершения клеточного цикла восстановления. Кухня Maji — это питательное продолжение всего, что происходит в воде.' },
    dining_phil_label:      { en: 'The Philosophy',   th: 'ปรัชญา',         zh: '理念',        ru: 'Философия' },
    dining_phil_heading:    { en: 'Food made without shortcuts.<br><em>Nutrition built for repair.</em>', th: 'อาหารที่ทำโดยไม่มีทางลัด<br><em>โภชนาการสร้างขึ้นเพื่อการซ่อมแซม</em>', zh: '不走捷径的食物。<br><em>为修复而生的营养。</em>', ru: 'Еда без компромиссов.<br><em>Питание, созданное для восстановления.</em>' },
    dining_menu_label:      { en: 'The Menu',          th: 'เมนู',            zh: '菜单',        ru: 'Меню' },
    dining_menu_heading:    { en: 'Every dish engineered<br>for the <em>post-thermal state.</em>', th: 'ทุกจานออกแบบมา<br>สำหรับ<em>สภาวะหลังความร้อน</em>', zh: '每道菜肴<br>专为<em>热疗后状态</em>设计', ru: 'Каждое блюдо создано<br>для <em>состояния после термального цикла.</em>' },
    dining_bev_label:       { en: 'The Beverage Programme', th: 'โปรแกรมเครื่องดื่ม', zh: '饮品项目', ru: 'Напитки' },
    dining_bev_heading:     { en: 'Every glass chosen<br>with <em>biological intent.</em>', th: 'ทุกแก้วเลือกด้วย<em>เจตนาทางชีววิทยา</em>', zh: '每一杯饮品<br>均经<em>生物学考量</em>精选', ru: 'Каждый бокал выбран<br>с <em>биологическим умыслом.</em>' },
    dining_herb_label:      { en: 'Herbal Infusion Programme', th: 'โปรแกรมชาสมุนไพร', zh: '草本滋补项目', ru: 'Программа травяных настоев' },
    dining_herb_heading:    { en: 'Detoxification through<br><em>the botanical archive.</em>', th: 'การล้างพิษผ่าน<em>คลังพฤกษศาสตร์</em>', zh: '通过<em>植物宝库</em>排毒', ru: 'Детоксикация через<br><em>ботанический архив.</em>' },
    dining_cta_eyebrow:     { en: 'Continue the recovery', th: 'ต่อเนื่องการฟื้นฟู', zh: '延续恢复疗程', ru: 'Продолжить восстановление' },
    dining_cta_heading:     { en: 'The meal is part of the protocol.', th: 'มื้ออาหารเป็นส่วนหนึ่งของโปรโตคอล', zh: '餐饮是疗程的一部分', ru: 'Питание — часть протокола.' },
    dining_cta_body:        { en: 'Maji Kitchen is open daily from 10:00 to 22:00. Walk-ins are welcome; reservations are recommended for groups and post-treatment dining sequences.', th: 'ห้องครัวมาจิเปิดทุกวันตั้งแต่ 10:00 ถึง 22:00 ยินดีต้อนรับผู้เดินทางมาโดยไม่ได้นัด แนะนำให้จองล่วงหน้าสำหรับกลุ่มและลำดับการรับประทานอาหารหลังการรักษา', zh: 'Maji餐厅每日10:00至22:00开放。欢迎散客光临；团体及疗后用餐建议预订。', ru: 'Кухня Maji открыта ежедневно с 10:00 до 22:00. Гости без предварительной записи приветствуются; для групп и пострецептурного питания рекомендуется бронирование.' },

    /* =====================================================
       SCIENCE PAGE
    ===================================================== */
    science_crumb:         { en: 'The Science',      th: 'วิทยาศาสตร์',     zh: '科学依据',   ru: 'Наука' },
    science_eyebrow:       { en: 'Clinical Evidence · E-E-A-T Foundation', th: 'หลักฐานทางคลินิก · รากฐาน E-E-A-T', zh: '临床证据 · E-E-A-T基础', ru: 'Клинические данные · Научная база' },
    science_h1:            { en: 'The Science<br><em>Behind Maji</em>', th: 'วิทยาศาสตร์<br><em>เบื้องหลังมาจิ</em>', zh: 'Maji背后<br><em>的科学</em>', ru: 'Наука<br><em>в основе Maji</em>' },
    science_subtitle:      { en: 'Every protocol at Maji is grounded in peer-reviewed research. This page documents the clinical evidence base underpinning the Maji thermal circuit.', th: 'ทุกโปรโตคอลที่มาจิมีพื้นฐานจากการวิจัยที่ผ่านการตรวจสอบโดยผู้เชี่ยวชาญ', zh: 'Maji的每项疗程均以同行评审研究为基础。', ru: 'Каждый протокол Maji основан на рецензируемых исследованиях.' },
    science_cat1_label:    { en: 'Category 01',       th: 'หมวดหมู่ที่ 01',  zh: '类别 01',    ru: 'Категория 01' },
    science_cat1_heading:  { en: 'Molecular Hydrogen<br><em>Therapy Research</em>', th: 'การวิจัยการบำบัด<br><em>ด้วยไฮโดรเจนโมเลกุล</em>', zh: '分子氢<br><em>疗法研究</em>', ru: 'Исследования<br><em>молекулярно-водородной терапии</em>' },
    science_cat2_label:    { en: 'Category 02',       th: 'หมวดหมู่ที่ 02',  zh: '类别 02',    ru: 'Категория 02' },
    science_cat2_heading:  { en: 'Sauna & Thermal<br><em>Therapy Research</em>', th: 'การวิจัยซาวน่า<br><em>และการบำบัดความร้อน</em>', zh: '桑拿与热疗<br><em>研究</em>', ru: 'Исследования<br><em>сауны и тепловой терапии</em>' },
    science_cat3_label:    { en: 'Category 03',       th: 'หมวดหมู่ที่ 03',  zh: '类别 03',    ru: 'Категория 03' },
    science_cat3_heading:  { en: 'Cold Immersion<br><em>& Contrast Therapy Research</em>', th: 'การวิจัยการแช่น้ำเย็น<br><em>และการบำบัดแบบคอนทราสต์</em>', zh: '冷水浸泡<br><em>与对比疗法研究</em>', ru: 'Исследования холодного<br><em>погружения и контрастной терапии</em>' },
    science_cta_eyebrow:   { en: 'From evidence to experience', th: 'จากหลักฐานสู่ประสบการณ์', zh: '从证据到体验', ru: 'От доказательств к опыту' },
    science_cta_heading:   { en: 'The research is compelling.<br>The protocol is available now.', th: 'การวิจัยน่าเชื่อถือ โปรโตคอลพร้อมให้บริการแล้ว', zh: '研究结果令人信服。疗程即刻可用。', ru: 'Исследования убедительны.<br>Протокол доступен уже сейчас.' },
    science_cta_body:      { en: 'Every session at Maji is the application of this evidence in a precisely engineered environment. The thermal circuit is available daily in Phuket.', th: 'ทุกเซสชันที่มาจิคือการนำหลักฐานนี้ไปใช้ในสภาพแวดล้อมที่ออกแบบอย่างแม่นยำ', zh: 'Maji的每次疗程都是在精心设计的环境中应用这些证据。热疗回路每日开放。', ru: 'Каждый сеанс в Maji — это применение этих данных в точно спроектированной среде.' },

    /* =====================================================
       CONTACT PAGE
    ===================================================== */
    contact_crumb:         { en: 'Reserve & Contact', th: 'จองและติดต่อ', zh: '预订与联系', ru: 'Бронирование и контакты' },
    contact_eyebrow:       { en: 'Begin your recovery', th: 'เริ่มการฟื้นฟูของคุณ', zh: '开始您的恢复', ru: 'Начните восстановление' },
    contact_h1:            { en: 'Reserve<br><em>Your Session</em>', th: 'จอง<br><em>เซสชันของคุณ</em>', zh: '预约<br><em>您的疗程</em>', ru: 'Забронировать<br><em>Ваш сеанс</em>' },
    contact_subtitle:      { en: 'Sessions at Maji are available daily from 10:00 to 22:00 in Cherngtalay, Phuket. Advance reservation is recommended for the full thermal circuit and Banya with Steammaster.', th: 'เซสชันที่มาจิเปิดให้บริการทุกวันตั้งแต่ 10:00 ถึง 22:00 ที่เฉิงทาเลย ภูเก็ต แนะนำให้จองล่วงหน้าสำหรับวงจรความร้อนเต็มรูปแบบและบันยาพร้อมสตีมมาสเตอร์', zh: 'Maji每日10:00至22:00在普吉岛清塔莱开放预约。完整热疗回路和搭配蒸汽师的俄式浴建议提前预订。', ru: 'Сеансы в Maji доступны ежедневно с 10:00 до 22:00 в Черенталей, Пхукет. Рекомендуется заблаговременное бронирование для полного термального цикла и Бани со Стимастером.' },
    contact_form_label:    { en: 'Reserve a Session',   th: 'จองเซสชัน',      zh: '预约疗程',    ru: 'Забронировать сеанс' },
    contact_select_session:{ en: 'Select your session', th: 'เลือกเซสชันของคุณ', zh: '选择疗程',   ru: 'Выберите сеанс' },
    contact_full_circuit:  { en: 'Full Thermal Circuit', th: 'วงจรความร้อนเต็มรูปแบบ', zh: '完整热疗回路', ru: 'Полный термальный цикл' },
    contact_h2_therapy:    { en: 'Hydrogen Therapy',    th: 'การบำบัดด้วยไฮโดรเจน', zh: '氢气疗法',   ru: 'Водородная терапия' },
    contact_sauna_session: { en: 'Sauna Session',       th: 'เซสชันซาวน่า',    zh: '桑拿疗程',    ru: 'Сеанс в сауне' },
    contact_kitchen_dining:{ en: 'Kitchen Dining',      th: 'รับประทานอาหารที่ห้องครัว', zh: '餐厅用餐', ru: 'Ужин в ресторане' },
    contact_fname:         { en: 'First Name',          th: 'ชื่อ',             zh: '名',          ru: 'Имя' },
    contact_lname:         { en: 'Last Name',           th: 'นามสกุล',          zh: '姓',          ru: 'Фамилия' },
    contact_email:         { en: 'Email Address',       th: 'ที่อยู่อีเมล',     zh: '电子邮箱',    ru: 'Адрес электронной почты' },
    contact_phone:         { en: 'Phone (including country code)', th: 'โทรศัพท์ (รวมรหัสประเทศ)', zh: '电话（含国家代码）', ru: 'Телефон (с кодом страны)' },
    contact_date:          { en: 'Preferred Date',      th: 'วันที่ต้องการ',    zh: '偏好日期',    ru: 'Предпочтительная дата' },
    contact_time:          { en: 'Preferred Time',      th: 'เวลาที่ต้องการ',   zh: '偏好时间',    ru: 'Предпочтительное время' },
    contact_select_time:   { en: 'Select a time',       th: 'เลือกเวลา',        zh: '选择时间',    ru: 'Выберите время' },
    contact_guests:        { en: 'Number of Guests',    th: 'จำนวนผู้เข้าพัก',  zh: '访客人数',    ru: 'Количество гостей' },
    contact_notes:         { en: 'Special requests or health notes', th: 'คำขอพิเศษหรือบันทึกสุขภาพ', zh: '特殊要求或健康备注', ru: 'Особые пожелания или медицинские примечания' },
    contact_submit:        { en: 'Confirm Reservation Request', th: 'ยืนยันคำขอจอง', zh: '确认预约申请', ru: 'Подтвердить заявку на бронирование' },
    contact_confirm_note:  { en: 'Our team will confirm your booking within 4 hours via email or WhatsApp.', th: 'ทีมงานของเราจะยืนยันการจองของคุณภายใน 4 ชั่วโมงทางอีเมลหรือ WhatsApp', zh: '我们的团队将在4小时内通过电子邮件或WhatsApp确认您的预约。', ru: 'Наша команда подтвердит бронирование в течение 4 часов по электронной почте или WhatsApp.' },
    contact_info_label:    { en: 'Oasis Information',   th: 'ข้อมูลโอเอซิส',   zh: '度假村信息',  ru: 'Информация об оазисе' },
    contact_addr_label:    { en: 'Address',             th: 'ที่อยู่',           zh: '地址',        ru: 'Адрес' },
    contact_tel_label:     { en: 'Telephone',           th: 'โทรศัพท์',         zh: '电话',        ru: 'Телефон' },
    contact_whatsapp:      { en: 'WhatsApp available',  th: 'มี WhatsApp',      zh: '支持WhatsApp', ru: 'Доступен WhatsApp' },
    contact_email_label:   { en: 'Email',               th: 'อีเมล',            zh: '邮件',        ru: 'Электронная почта' },
    contact_hours_label:   { en: 'Hours',               th: 'เวลาทำการ',        zh: '营业时间',    ru: 'Часы работы' },
    contact_last_entry:    { en: 'Last circuit entry 20:00', th: 'เข้าวงจรครั้งสุดท้าย 20:00', zh: '最晚入场时间 20:00', ru: 'Последний вход в цикл 20:00' },
    contact_getting_here:  { en: 'Getting Here',        th: 'วิธีการเดินทาง',   zh: '如何到达',    ru: 'Как добраться' },
    contact_parking:       { en: 'Parking',             th: 'ที่จอดรถ',          zh: '停车',        ru: 'Парковка' },
    contact_parking_desc:  { en: 'Complimentary on-site parking available. Motorbike and bicycle storage also provided.', th: 'มีที่จอดรถฟรีในสถานที่ มีพื้นที่เก็บมอเตอร์ไซค์และจักรยานด้วย', zh: '提供免费停车位，以及摩托车和自行车存放处。', ru: 'Бесплатная парковка на территории. Также предусмотрено хранение мотоциклов и велосипедов.' },
    contact_maps_link:     { en: 'Open in Google Maps →', th: 'เปิดใน Google Maps →', zh: '在Google地图中打开 →', ru: 'Открыть в Google Maps →' },

    /* =====================================================
       PHUKET WELLNESS GUIDE PAGE
    ===================================================== */
    guide_crumb:           { en: 'Phuket Wellness Guide', th: 'คู่มือสุขภาพภูเก็ต', zh: '普吉岛健康指南', ru: 'Гид по оздоровлению Пхукета' },
    guide_eyebrow:         { en: 'Local Authority · Phuket, Thailand', th: 'หน่วยงานท้องถิ่น · ภูเก็ต ประเทศไทย', zh: '本地权威 · 泰国普吉岛', ru: 'Местный авторитет · Пхукет, Таиланд' },
    guide_h1:              { en: 'Phuket Wellness<br><em>& Biohacking Guide</em>', th: 'คู่มือสุขภาพ<br><em>และไบโอแฮ็กกิ้งภูเก็ต</em>', zh: '普吉岛健康<br><em>与生物黑客指南</em>', ru: 'Гид по оздоровлению<br><em>и биохакингу Пхукета</em>' },
    guide_subtitle:        { en: "Phuket is one of Southeast Asia's most concentrated convergences of wellness, longevity, and performance optimisation culture. Here is how to use it intelligently — with Maji as your primary recovery anchor.", th: 'ภูเก็ตเป็นหนึ่งในจุดรวมตัวที่หนาแน่นที่สุดของวัฒนธรรมสุขภาพ อายุยืน และการเพิ่มประสิทธิภาพการทำงานในเอเชียตะวันออกเฉียงใต้', zh: '普吉岛是东南亚健康、长寿与性能优化文化最集中的汇聚地之一。以下是如何以Maji为主要恢复基地，智慧地利用这片宝地。', ru: 'Пхукет — одно из наиболее насыщенных мест Юго-Восточной Азии с точки зрения культуры здоровья, долголетия и оптимизации производительности.' },
    guide_position_label:  { en: "Maji's Position",     th: 'ตำแหน่งของมาจิ',    zh: 'Maji的定位',  ru: 'Позиция Maji' },
    guide_position_heading:{ en: "Phuket's most advanced<br><em>recovery oasis.</em>", th: 'โอเอซิสฟื้นฟูที่ก้าวหน้าที่สุด<br><em>ในภูเก็ต</em>', zh: '普吉岛最先进的<br><em>恢复绿洲</em>', ru: 'Самый продвинутый<br><em>оздоровительный оазис Пхукета.</em>' },
    guide_tropical_label:  { en: 'Tropical Recovery Science', th: 'วิทยาศาสตร์การฟื้นฟูในเขตร้อน', zh: '热带恢复科学', ru: 'Тропическая наука восстановления' },
    guide_tropical_heading:{ en: 'The tropics change how<br><em>the body recovers.</em>', th: 'เขตร้อนเปลี่ยนวิธีที่<em>ร่างกายฟื้นฟู</em>', zh: '热带气候改变<br><em>身体的恢复方式</em>', ru: 'Тропики меняют то,<br><em>как восстанавливается тело.</em>' },
    guide_itinerary_label: { en: 'Wellness Itineraries',  th: 'แผนการท่องเที่ยวเพื่อสุขภาพ', zh: '健康行程', ru: 'Оздоровительные маршруты' },
    guide_itinerary_heading:{ en: 'A week in Phuket,<br><em>built around recovery.</em>', th: 'หนึ่งสัปดาห์ในภูเก็ต<br><em>สร้างขึ้นรอบการฟื้นฟู</em>', zh: '一周普吉岛，<br><em>以恢复为核心</em>', ru: 'Неделя на Пхукете,<br><em>выстроенная вокруг восстановления.</em>' },
    guide_bio_label:       { en: 'Phuket Biohacking Protocol', th: 'โปรโตคอลไบโอแฮ็กกิ้งภูเก็ต', zh: '普吉岛生物黑客方案', ru: 'Протокол биохакинга Пхукета' },
    guide_bio_heading:     { en: "The intelligent visitor's<br><em>recovery stack for the tropics.</em>", th: 'สแต็กการฟื้นฟู<em>ในเขตร้อน</em>สำหรับนักท่องเที่ยวที่ชาญฉลาด', zh: '聪明访客的<br><em>热带恢复方案</em>', ru: 'Стек восстановления<br><em>для умного путешественника в тропиках.</em>' },
    guide_cta_eyebrow:     { en: 'Anchor your Phuket recovery', th: 'ยึดมั่นในการฟื้นฟูภูเก็ตของคุณ', zh: '锚定您的普吉岛恢复疗程', ru: 'Основа вашего восстановления на Пхукете' },
    guide_cta_heading:     { en: 'Maji is open daily in Cherngtalay, Phuket.', th: 'มาจิเปิดให้บริการทุกวันที่เฉิงทาเลย ภูเก็ต', zh: 'Maji每日在普吉岛清塔莱开放。', ru: 'Maji открыт ежедневно в Черенталей, Пхукет.' },

    /* =====================================================
       HYDROGEN BATHS PAGE
    ===================================================== */
    h2bath_crumb:          { en: 'Hydrogen Bath Therapy', th: 'บำบัดด้วยน้ำไฮโดรเจน', zh: '氢气浴疗法', ru: 'Водородная ванна' },
    h2bath_eyebrow:        { en: 'Signature Treatment · Phase 03', th: 'การรักษาหลัก · ระยะที่ 03', zh: '招牌疗法 · 第三阶段', ru: 'Фирменная процедура · Фаза 03' },
    h2bath_h1:             { en: 'Hydrogen<br><em>Bath Therapy</em>', th: 'การบำบัด<br><em>ด้วยน้ำไฮโดรเจน</em>', zh: '氢气<br><em>浴疗法</em>', ru: 'Водородная<br><em>ванна</em>' },
    h2bath_subtitle:       { en: 'Hand-carved stone. Billions of nanoscopic hydrogen bubbles. A warm immersion that penetrates further than any topical treatment can reach.', th: 'หินแกะสลักด้วยมือ ฟองไฮโดรเจนนาโนสโคปิกหลายพันล้านฟอง การแช่น้ำอุ่นที่ซึมลึกได้ไกลกว่าการรักษาเฉพาะจุดใดๆ', zh: '手工雕刻的石材。数十亿纳米氢气泡。温浸渗透深度超越任何外用疗法。', ru: 'Высеченный вручную камень. Миллиарды наноразмерных пузырьков водорода. Тёплое погружение, проникающее глубже любого местного средства.' },
    h2bath_vessel_label:   { en: 'The Apparatus',    th: 'อุปกรณ์',              zh: '装置',          ru: 'Устройство' },
    h2bath_vessel_heading: { en: 'Stone sculpted to hold<br><em>billions of molecules.</em>', th: 'หินแกะสลักเพื่อกักเก็บ<em>โมเลกุลหลายพันล้าน</em>', zh: '石材雕刻<br>以容纳<em>数十亿分子</em>', ru: 'Камень, созданный хранить<br><em>миллиарды молекул.</em>' },
    h2bath_science_label:  { en: 'The Science',      th: 'วิทยาศาสตร์',           zh: '科学原理',       ru: 'Наука' },
    h2bath_science_heading:{ en: 'How molecular hydrogen<br>enters the body through <em>warm water.</em>', th: 'ไฮโดรเจนโมเลกุลเข้าสู่ร่างกายผ่าน<em>น้ำอุ่น</em>อย่างไร', zh: '分子氢如何通过<em>温水</em><br>进入人体', ru: 'Как молекулярный водород<br>проникает в тело через <em>тёплую воду.</em>' },
    h2bath_benefits_label: { en: 'Clinical Evidence',  th: 'หลักฐานทางคลินิก',   zh: '临床证据',        ru: 'Клинические данные' },
    h2bath_benefits_heading:{ en: 'Measured outcomes from<br><em>hydrogen bath therapy.</em>', th: 'ผลลัพธ์ที่วัดได้จาก<em>การบำบัดด้วยน้ำไฮโดรเจน</em>', zh: '氢气浴疗法<br>的量化效果', ru: 'Измеримые результаты<br><em>водородной ванны.</em>' },
    h2bath_ideal_label:    { en: 'Ideal Candidates',  th: 'ผู้ที่เหมาะสม',         zh: '适用人群',        ru: 'Кому подходит' },
    h2bath_ideal_heading:  { en: 'The hydrogen bath restores<br><em>anyone carrying oxidative burden.</em>', th: 'การอาบน้ำไฮโดรเจนฟื้นฟู<em>ผู้ที่มีภาระออกซิเดชัน</em>', zh: '氢气浴修复<br><em>所有承受氧化负担的人</em>', ru: 'Водородная ванна восстанавливает<br><em>каждого, кто несёт окислительную нагрузку.</em>' },
    h2bath_pairing_label:  { en: 'Pair It With',      th: 'จับคู่กับ',              zh: '搭配项目',        ru: 'Сочетайте с' },
    h2bath_pairing_heading:{ en: 'Amplify the effect.', th: 'ขยายผลลัพธ์', zh: '放大效果', ru: 'Усилить эффект.' },
    h2bath_cta_eyebrow:    { en: 'Reserve your session', th: 'จองเซสชันของคุณ', zh: '预约您的疗程', ru: 'Забронируйте сеанс' },
    h2bath_cta_heading:    { en: 'Immerse. Restore. Repeat.', th: 'แช่น้ำ ฟื้นฟู ทำซ้ำ', zh: '浸入。修复。重复。', ru: 'Погрузитесь. Восстановитесь. Повторите.' },
    h2bath_cta_body:       { en: 'The stone hydrogen bath is available daily as a standalone session or as part of the complete Maji thermal circuit.', th: 'การอาบน้ำไฮโดรเจนหินพร้อมให้บริการทุกวันเป็นเซสชันเดี่ยวหรือเป็นส่วนหนึ่งของวงจรความร้อนมาจิที่สมบูรณ์', zh: '石材氢气浴每日开放，可单独预约，也可作为Maji完整热疗回路的组成部分。', ru: 'Каменная водородная ванна доступна ежедневно как отдельный сеанс или в составе полного термального цикла Maji.' },
    h2bath_reserve_btn:    { en: 'Reserve a Bath Session', th: 'จองเซสชันอาบน้ำ', zh: '预约浴疗疗程', ru: 'Забронировать сеанс ванны' },

    /* =====================================================
       HYDROGEN INHALATION PAGE
    ===================================================== */
    inhale_crumb:          { en: 'Hydrogen Inhalation Therapy', th: 'บำบัดด้วยการสูดไฮโดรเจน', zh: '氢气吸入疗法', ru: 'Ингаляция водородом' },
    inhale_eyebrow:        { en: 'Neurological Recovery · Phase 03', th: 'การฟื้นฟูระบบประสาท · ระยะที่ 03', zh: '神经系统修复 · 第三阶段', ru: 'Неврологическое восстановление · Фаза 03' },
    inhale_h1:             { en: 'Hydrogen<br><em>Inhalation Therapy</em>', th: 'การบำบัด<br><em>ด้วยการสูดไฮโดรเจน</em>', zh: '氢气<br><em>吸入疗法</em>', ru: 'Ингаляция<br><em>водородом</em>' },
    inhale_molecule_label: { en: 'The Molecule',    th: 'โมเลกุล',     zh: '分子',    ru: 'Молекула' },
    inhale_molecule_heading:{ en: 'Smaller than any cell.<br><em>Larger than any supplement.</em>', th: 'เล็กกว่าเซลล์ใดๆ<br><em>ยิ่งใหญ่กว่าผลิตภัณฑ์เสริมอาหารใดๆ</em>', zh: '小于任何细胞。<br><em>超越任何补充剂。</em>', ru: 'Меньше любой клетки.<br><em>Значимее любой добавки.</em>' },
    inhale_mech_label:     { en: 'The Mechanism',  th: 'กลไก',         zh: '作用机制', ru: 'Механизм' },
    inhale_mech_heading:   { en: 'From lung to cell.<br><em>In seconds.</em>', th: 'จากปอดสู่เซลล์<br><em>ในไม่กี่วินาที</em>', zh: '从肺部到细胞。<br><em>仅需数秒。</em>', ru: 'От лёгких к клетке.<br><em>За секунды.</em>' },
    inhale_compare_label:  { en: 'Two Delivery Pathways', th: 'สองเส้นทางการส่งมอบ', zh: '两种给药途径', ru: 'Два пути доставки' },
    inhale_compare_heading:{ en: 'Inhalation and bath therapy<br><em>are complementary, not competing.</em>', th: 'การสูดและการอาบน้ำบำบัด<em>เสริมซึ่งกันและกัน ไม่ใช่แข่งขัน</em>', zh: '吸入疗法与浴疗<br><em>相辅相成，而非相互竞争</em>', ru: 'Ингаляция и водородная ванна<br><em>дополняют, а не конкурируют.</em>' },
    inhale_neuro_label:    { en: 'Neurological Outcomes', th: 'ผลลัพธ์ทางระบบประสาท', zh: '神经系统效果', ru: 'Неврологические результаты' },
    inhale_neuro_heading:  { en: 'The brain clears.<br><em>The mind sharpens.</em>', th: 'สมองใส<em>จิตใจคมชัดขึ้น</em>', zh: '大脑澄清。<br><em>思维锐化。</em>', ru: 'Мозг проясняется.<br><em>Разум обостряется.</em>' },
    inhale_cta_eyebrow:    { en: 'Restore your neural clarity', th: 'ฟื้นฟูความชัดเจนของระบบประสาท', zh: '恢复神经清晰度', ru: 'Восстановите нейронную ясность' },
    inhale_cta_heading:    { en: 'Breathe. Clear. Restore.', th: 'หายใจ ใส ฟื้นฟู', zh: '呼吸。澄清。修复。', ru: 'Дышите. Очищайтесь. Восстанавливайтесь.' },
    inhale_cta_body:       { en: 'Hydrogen inhalation therapy is available daily at Maji as a standalone session or as part of the complete thermal circuit.', th: 'การบำบัดด้วยการสูดไฮโดรเจนพร้อมให้บริการทุกวันที่มาจิ', zh: 'Maji每日提供氢气吸入疗法，可单独预约或作为完整热疗回路的一部分。', ru: 'Ингаляция водородом доступна ежедневно в Maji как отдельный сеанс или в составе полного цикла.' },
    inhale_reserve_btn:    { en: 'Reserve an Inhalation Session', th: 'จองเซสชันสูดไฮโดรเจน', zh: '预约吸入疗程', ru: 'Забронировать ингаляционный сеанс' },

    /* =====================================================
       SAUNAS PAGE
    ===================================================== */
    sauna_crumb:           { en: 'Saunas of the World', th: 'ซาวน่าทั่วโลก', zh: '世界桑拿', ru: 'Сауны мира' },
    sauna_eyebrow:         { en: 'Thermal Heat · Phase 01', th: 'ความร้อน · ระยะที่ 01', zh: '热力 · 第一阶段', ru: 'Тепловая терапия · Фаза 01' },
    sauna_h1:              { en: 'Saunas<br><em>of the World</em>', th: 'ซาวน่า<br><em>ทั่วโลก</em>', zh: '世界<br><em>桑拿</em>', ru: 'Сауны<br><em>Мира</em>' },
    sauna_subtitle:        { en: 'Three civilisations. Three distinct heat philosophies. Unified at Maji as the foundational phase of the thermal journey.', th: 'สามอารยธรรม สามปรัชญาความร้อนที่แตกต่างกัน รวมกันที่มาจิเป็นระยะพื้นฐานของการเดินทางความร้อน', zh: '三种文明。三种不同的热力哲学。在Maji汇聚为热疗之旅的基础阶段。', ru: 'Три цивилизации. Три различные философии тепла. Объединены в Maji как основополагающая фаза термального маршрута.' },
    sauna_three_label:     { en: 'Three Traditions', th: 'สามประเพณี', zh: '三种传统', ru: 'Три традиции' },
    sauna_overview_heading:{ en: 'Heat has been used to heal<br><em>across every culture that survived the cold.</em>', th: 'ความร้อนถูกใช้เพื่อรักษา<em>ในทุกวัฒนธรรมที่รอดชีวิตจากความหนาวเย็น</em>', zh: '在每一个经历过严寒的文化中，<br><em>热力始终是治愈的工具。</em>', ru: 'Тепло использовалось для исцеления<br><em>во всех культурах, выживших в холоде.</em>' },
    sauna_finnish_label:   { en: '01 — Finnish Sauna',  th: '01 — ซาวน่าฟินแลนด์',  zh: '01 — 芬兰桑拿', ru: '01 — Финская сауна' },
    sauna_finnish_heading: { en: 'Dry heat.<br><em>Deep stillness.</em>', th: 'ความร้อนแห้ง<br><em>ความสงบลึก</em>', zh: '干热。<br><em>深度静谧。</em>', ru: 'Сухое тепло.<br><em>Глубокое спокойствие.</em>' },
    sauna_finnish_book:    { en: 'Reserve the Finnish Sauna', th: 'จองซาวน่าฟินแลนด์', zh: '预约芬兰桑拿', ru: 'Забронировать финскую сауну' },
    sauna_banya_label:     { en: '02 — Russian Banya',  th: '02 — รัสเซียนบันยา',  zh: '02 — 俄罗斯浴', ru: '02 — Русская баня' },
    sauna_banya_heading:   { en: 'Humid ritual.<br><em>Mastered steam.</em>', th: 'พิธีกรรมชื้น<br><em>ไอน้ำที่เชี่ยวชาญ</em>', zh: '湿热仪式。<br><em>精控蒸汽。</em>', ru: 'Влажный ритуал.<br><em>Мастерство пара.</em>' },
    sauna_banya_book:      { en: 'Reserve the Banya',   th: 'จองบันยา',  zh: '预约俄罗斯浴', ru: 'Забронировать баню' },
    sauna_hammam_label:    { en: '03 — Hammam',         th: '03 — ฮัมมัม', zh: '03 — 土耳其浴', ru: '03 — Хаммам' },
    sauna_hammam_heading:  { en: 'Stone, steam,<br><em>and the bones warm slowly.</em>', th: 'หิน ไอน้ำ<br><em>และกระดูกอุ่นขึ้นช้าๆ</em>', zh: '石材、蒸汽，<br><em>骨骼缓缓温热。</em>', ru: 'Камень, пар,<br><em>и кости медленно согреваются.</em>' },
    sauna_hammam_book:     { en: 'Reserve the Hammam',  th: 'จองฮัมมัม', zh: '预约土耳其浴', ru: 'Забронировать хаммам' },
    sauna_continue_label:  { en: 'Continue the Journey', th: 'ต่อเนื่องการเดินทาง', zh: '继续疗程', ru: 'Продолжить маршрут' },
    sauna_continue_heading:{ en: 'Heat opens the circuit.<br><em>Cold and hydrogen complete it.</em>', th: 'ความร้อนเปิดวงจร<em>ความเย็นและไฮโดรเจนทำให้สมบูรณ์</em>', zh: '热力开启回路。<br><em>冷与氢气完成它。</em>', ru: 'Тепло открывает цикл.<br><em>Холод и водород завершают его.</em>' },
    sauna_cta_eyebrow:     { en: 'Choose your heat tradition', th: 'เลือกประเพณีความร้อนของคุณ', zh: '选择您的热疗传统', ru: 'Выберите свою тепловую традицию' },
    sauna_cta_heading:     { en: 'Every great recovery begins<br>with deliberate heat.', th: 'การฟื้นฟูที่ดีทุกครั้งเริ่มต้นด้วยความร้อนที่ตั้งใจ', zh: '每一次出色的恢复<br>都从有意的热力开始', ru: 'Каждое великое восстановление начинается<br>с целенаправленного тепла.' },
    sauna_cta_body:        { en: 'Reserve your preferred sauna tradition at Maji — Finnish, Banya, or Hammam — and let our team guide you through the full thermal circuit.', th: 'จองประเพณีซาวน่าที่คุณชื่นชอบที่มาจิ — ฟินแลนด์ บันยา หรือฮัมมัม — และให้ทีมงานของเรานำทางผ่านวงจรความร้อนทั้งหมด', zh: '预约Maji您偏好的桑拿传统——芬兰桑拿、俄罗斯浴或土耳其浴——由我们的团队引导您完成完整热疗回路。', ru: 'Забронируйте в Maji предпочтительную традицию сауны — финскую, баню или хаммам — и наша команда проведёт вас через весь термальный цикл.' },

    /* =====================================================
       POOLS PAGE
    ===================================================== */
    pools_crumb:           { en: 'Contrast Pools', th: 'สระน้ำคอนทราสต์', zh: '冷热交替池', ru: 'Контрастные бассейны' },
    pools_eyebrow:         { en: 'Hydrotherapy · Phase 02', th: 'ไฮโดรเทราพี · ระยะที่ 02', zh: '水疗 · 第二阶段', ru: 'Гидротерапия · Фаза 02' },
    pools_h1:              { en: 'Contrast Pools<br><em>& Hydro-Massage</em>', th: 'สระน้ำคอนทราสต์<br><em>และไฮโดรมาสซาจ</em>', zh: '冷热交替池<br><em>与水疗按摩</em>', ru: 'Контрастные бассейны<br><em>и гидромассаж</em>' },
    pools_subtitle:        { en: 'The precise physiological shock of cold water entering a heat-primed body is one of the most powerful recovery stimuli in sports science. At Maji, we have engineered the complete contrast arc.', th: 'การช็อคสรีรวิทยาที่แม่นยำของน้ำเย็นที่เข้าสู่ร่างกายที่เตรียมพร้อมด้วยความร้อนเป็นหนึ่งในตัวกระตุ้นการฟื้นฟูที่ทรงพลังที่สุดในวิทยาศาสตร์การกีฬา', zh: '在经热力准备的身体中注入冷水所产生的精准生理冲击，是运动科学中最强大的恢复刺激之一。', ru: 'Точный физиологический шок от погружения в холодную воду после прогрева тела — один из самых мощных стимулов восстановления в спортивной науке.' },
    pools_principle_label: { en: 'The Principle', th: 'หลักการ', zh: '原则', ru: 'Принцип' },
    pools_principle_heading:{ en: 'The blood vessels are<br><em>the engine of recovery.</em>', th: 'หลอดเลือดคือ<em>เครื่องยนต์การฟื้นฟู</em>', zh: '血管是<br><em>恢复的引擎</em>', ru: 'Кровеносные сосуды —<br><em>двигатель восстановления.</em>' },
    pools_cold_label:      { en: '01 — Cold Plunge', th: '01 — พลันจ์เย็น', zh: '01 — 冷水浸泡', ru: '01 — Холодное погружение' },
    pools_cold_heading:    { en: 'Shock the system.<br><em>Unlock the chemistry.</em>', th: 'กระตุ้นระบบ<br><em>ปลดล็อคเคมี</em>', zh: '冲击系统。<br><em>激活化学反应。</em>', ru: 'Встряхнуть систему.<br><em>Разблокировать химию.</em>' },
    pools_hot_label:       { en: '02 — Hot Immersion Pool', th: '02 — สระน้ำร้อนแช่ตัว', zh: '02 — 热水浸泡池', ru: '02 — Горячий бассейн' },
    pools_hot_heading:     { en: 'Rebound. Release.<br><em>Flood the tissue.</em>', th: 'ฟื้นคืน คลาย<br><em>ท่วมท้นเนื้อเยื่อ</em>', zh: '反弹。释放。<br><em>充盈组织。</em>', ru: 'Отдача. Расслабление.<br><em>Наводнение ткани.</em>' },
    pools_jacuzzi_label:   { en: '03 — Jacuzzi Hydro-Massage', th: '03 — จากุซซี่ไฮโดรมาสซาจ', zh: '03 — 按摩浴缸', ru: '03 — Джакузи гидромассаж' },
    pools_jacuzzi_heading: { en: 'Targeted pressure.<br><em>Deep muscle release.</em>', th: 'แรงดันที่กำหนดเป้าหมาย<br><em>การคลายกล้ามเนื้อลึก</em>', zh: '精准压力。<br><em>深层肌肉释放。</em>', ru: 'Целевое давление.<br><em>Глубокое расслабление мышц.</em>' },
    pools_cta_eyebrow:     { en: 'Begin the contrast protocol', th: 'เริ่มโปรโตคอลคอนทราสต์', zh: '开始对比疗法方案', ru: 'Начать контрастный протокол' },
    pools_cta_heading:     { en: 'Cold enters. Heat follows.<br>The body transforms.', th: 'ความเย็นเข้ามา ความร้อนตามมา ร่างกายเปลี่ยนแปลง', zh: '冷入。热随。<br>身体蜕变。', ru: 'Холод входит. Тепло следует.<br>Тело трансформируется.' },
    pools_cta_body:        { en: 'The contrast pool arc is available daily at Maji as part of the thermal circuit or as a standalone hydrotherapy session.', th: 'วงจรสระน้ำคอนทราสต์พร้อมให้บริการทุกวันที่มาจิเป็นส่วนหนึ่งของวงจรความร้อนหรือเซสชันไฮโดรเทราพีเดี่ยว', zh: '对比浴疗回路每日在Maji开放，可作为热疗回路的一部分或单独水疗疗程。', ru: 'Цикл контрастных бассейнов доступен ежедневно в Maji в составе термального цикла или как самостоятельный сеанс гидротерапии.' }

  }; /* end T */

  /* ---- Engine ---- */

  var STORAGE_KEY = 'maji_lang';
  var SUPPORTED   = ['en', 'th', 'zh', 'ru'];

  function getLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    return (saved && SUPPORTED.indexOf(saved) > -1) ? saved : 'en';
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function t(key, lang) {
    var entry = T[key];
    if (!entry) return null;
    return entry[lang] || entry['en'] || null;
  }

  function applyLang(lang) {
    /* Update <html> lang attribute */
    document.documentElement.lang = lang;

    /* Text content */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n'), lang);
      if (val !== null) el.textContent = val;
    });

    /* Inner HTML (allows <br>, <em> etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-html'), lang);
      if (val !== null) el.innerHTML = val;
    });

    /* Placeholder text */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-placeholder'), lang);
      if (val !== null) el.placeholder = val;
    });

    /* Update switcher active state */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      btn.classList.toggle('lang-btn--active', isActive);
    });
  }

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', function () {
    var lang = getLang();

    /* Wire up all switcher buttons (nav + footer) */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(this.getAttribute('data-lang'));
      });
    });

    /* Apply on load */
    applyLang(lang);
  });

  /* Expose for external use */
  window.majiLang = { set: setLang, get: getLang };

})();

// مرجع المعادلات المحاسبية المتقدم - النسخة الموسعة
// Comprehensive Accounting Formulas Reference - Extended Edition

export type DetailedFormula = {
  id: string;
  category: string;
  subcategory: string;
  name: string;
  englishName: string;
  formula: string;
  arabicFormula: string;
  variables: {
    symbol: string;
    arabicName: string;
    englishName: string;
    description: string;
    unit?: string;
    example?: string;
  }[];
  explanation: string;
  detailedExplanation: string;
  example: {
    scenario: string;
    data: Record<string, number>;
    calculation: string;
    result: string;
    interpretation: string;
  };
  interpretation: string;
  idealValue?: string;
  warningThreshold?: string;
  relatedFormulas?: string[];
  realWorldApplication?: string;
  commonMistakes?: string[];
  ifrsReference?: string;
};

export const detailedFormulas: DetailedFormula[] = [
  // ====== المعادلات الأساسية - موسعة ======
  {
    id: "df001",
    category: "المعادلة المحاسبية",
    subcategory: "أساسيات",
    name: "المعادلة المحاسبية الأساسية",
    englishName: "Basic Accounting Equation",
    formula: "A = L + E",
    arabicFormula: "الأصول = الالتزامات + حقوق الملكية",
    variables: [
      { symbol: "A", arabicName: "الأصول", englishName: "Assets", description: "موارد اقتصادية مملوكة للمنشأة نتيجة أحداث ماضية ومن المتوقع أن تولد منافع اقتصادية مستقبلية", unit: "ريال", example: "500,000" },
      { symbol: "L", arabicName: "الالتزامات", englishName: "Liabilities", description: "التزامات حالية للمنشأة تجاه الغير ناشئة عن أحداث ماضية", unit: "ريال", example: "200,000" },
      { symbol: "E", arabicName: "حقوق الملكية", englishName: "Equity", description: "الاهتمام المتبقي للمالك في الأصول بعد خصم جميع الالتزامات", unit: "ريال", example: "300,000" },
    ],
    explanation: "المعادلة المحاسبية الأساسية تعكس الحقيقة الاقتصادية: كل ما تملكه المنشأة يأتي إما من أموال الملاك أو من الديون.",
    detailedExplanation: "المعادلة المحاسبية هي حجر الأساس للمحاسبة المالية الحديثة. اكتشف هذا المفهوم لوقا باتشيولي عام 1494. تعكس المعادلة منطق الأعمال: المنشأة تحتاج موارد (أصول) لممارسة نشاطها، وهذه الموارد تأتي من مصدرين فقط: إما من استثمار الملاك (حقوق ملكية) أو من اقتراض من الخارج (التزامات). كل عملية مالية مهما كانت معقدة تؤثر على عنصرين على الأقل من عناصر المعادلة، لكن المعادلة تبقى متوازنة دائماً. هذا التوازن هو أساس نظام القيد المزدوج وميزان المراجعة والقوائم المالية.",
    example: {
      scenario: "شركة تجارية تقدم بياناتها المالية في نهاية السنة",
      data: { assets: 500000, liabilities: 200000, equity: 300000 },
      calculation: "500,000 = 200,000 + 300,000",
      result: "المعادلة متوازنة ✓",
      interpretation: "الشركة تملك أصولاً بقيمة 500,000 ريال، ممولة بـ 200,000 من الديون و 300,000 من أموال الملاك",
    },
    interpretation: "إذا كانت الأصول أكبر من الالتزامات، فالشركة في وضع مالي إيجابي. وإذا زادت الالتزامات عن الأصول، فالشركة تعاني من عجز (حقوق ملكية سالبة).",
    idealValue: "الأصول > الالتزامات (صافي حقوق ملكية موجب)",
    warningThreshold: "حقوق ملكية سالبة = خطر إفلاس",
    relatedFormulas: ["df002", "df003", "df004"],
    realWorldApplication: "تُستخدم في تحليل الوضع المالي، تقييم الملاءة، واتخاذ قرارات الإقراض",
    commonMistakes: [
      "خلط بين الأصول والالتزامات في التصنيف",
      "نسيان بعض الحسابات في المعادلة (مثل المخصصات)",
      "عدم فهم أن المعادلة يجب أن تتوازن دائماً",
    ],
    ifrsReference: "IAS 1 - عرض القوائم المالية",
  },
  {
    id: "df002",
    category: "المعادلة المحاسبية",
    subcategory: "أساسيات",
    name: "المعادلة المحاسبية الموسعة",
    englishName: "Expanded Accounting Equation",
    formula: "A = L + C + (R - E) - D",
    arabicFormula: "الأصول = الالتزامات + رأس المال + (الإيرادات - المصروفات) - المسحوبات",
    variables: [
      { symbol: "A", arabicName: "الأصول", englishName: "Assets", description: "إجمالي أصول المنشأة" },
      { symbol: "L", arabicName: "الالتزامات", englishName: "Liabilities", description: "إجمالي التزامات المنشأة" },
      { symbol: "C", arabicName: "رأس المال", englishName: "Capital", description: "المبلغ المستثمر من الملاك" },
      { symbol: "R", arabicName: "الإيرادات", englishName: "Revenue", description: "التدفقات الداخلة من النشاط" },
      { symbol: "E", arabicName: "المصروفات", englishName: "Expenses", description: "التدفقات الخارجة من النشاط" },
      { symbol: "D", arabicName: "المسحوبات", englishName: "Drawings", description: "المسحوبات الشخصية للمالك" },
    ],
    explanation: "المعادلة الموسعة توضح كيف يؤثر صافي الربح على حقوق الملكية.",
    detailedExplanation: "هذه المعادلة تفصح عن كيفية تغير حقوق الملكية خلال الفترة. رأس المال يزداد بالاستثمارات الجديدة وبصافي الربح (الإيرادات - المصروفات). وينقص بالمسحوبات الشخصية للمالك وصافي الخسارة. هذه المعادلة تربط بين قائمة الدخل وقائمة المركز المالي - صافي الربح في قائمة الدخل ينتقل لزيادة الأرباح المحتجزة في حقوق الملكية بالميزانية.",
    example: {
      scenario: "منشأة فردية بأرقام تفصيلية",
      data: { capital: 100000, revenue: 80000, expenses: 50000, drawings: 10000, liabilities: 30000 },
      calculation: "100,000 + (80,000 - 50,000) - 10,000 = 120,000 حقوق ملكية\nالأصول = 30,000 + 120,000 = 150,000",
      result: "الأصول = 150,000 ريال",
      interpretation: "حقوق الملكية زادت من 100,000 إلى 120,000 بسبب صافي الربح 30,000 ناقص المسحوبات 10,000",
    },
    interpretation: "صافي الربح يزيد حقوق الملكية، بينما صافي الخسارة أو المسحوبات ينقصها.",
    relatedFormulas: ["df001", "df003"],
    commonMistakes: [
      "خلط الإيرادات مع المسحوبات",
      "نسيان تأثير صافي الخسارة في reducing equity",
    ],
  },
  {
    id: "df003",
    category: "المعادلة المحاسبية",
    subcategory: "صافي الربح",
    name: "صافي الربح",
    englishName: "Net Profit",
    formula: "NP = R - E",
    arabicFormula: "صافي الربح = الإيرادات - المصروفات",
    variables: [
      { symbol: "NP", arabicName: "صافي الربح", englishName: "Net Profit", description: "الربح النهائي بعد كل المصروفات" },
      { symbol: "R", arabicName: "الإيرادات", englishName: "Revenue", description: "إجمالي إيرادات الفترة" },
      { symbol: "E", arabicName: "المصروفات", englishName: "Expenses", description: "إجمالي مصروفات الفترة" },
    ],
    explanation: "صافي الربح هو الفرق بين الإيرادات والمصروفات.",
    detailedExplanation: "صافي الربح هو المؤشر الأهم لأداء الشركة. إذا كان موجباً فهو ربح، وإذا كان سالباً فهو خسارة. لكن يجب الانتباه: صافي الربح المحاسبي (وفق مبدأ الاستحقاق) قد يختلف عن التدفق النقدي الفعلي. لذلك يجب النظر لقائمة التدفقات النقدية مع قائمة الدخل. صافي الربح يقاس بعد خصم: تكلفة البضاعة المباعة، المصاريف التشغيلية، المصاريف الإدارية، المصاريف التمويلية، والضرائب.",
    example: {
      scenario: "شركة بإيرادات ومصروفات تفصيلية",
      data: { revenue: 200000, cogs: 120000, operating: 30000, admin: 15000, finance: 5000 },
      calculation: "صافي الربح = 200,000 - (120,000 + 30,000 + 15,000 + 5,000) = 30,000",
      result: "صافي الربح = 30,000 ريال",
      interpretation: "كل ريال مبيعات يولد 15 هللة ربح صافي",
    },
    interpretation: "كلما زاد صافي الربح، كان أداء الشركة أفضل. لكن يجب مقارنته برأس المال والإيرادات لتقييم الجودة.",
    idealValue: "موجب ومتنامي",
    relatedFormulas: ["df001", "df002", "df004"],
    commonMistakes: [
      "خلط الإيراد بالتدفق النقدي",
      "نسيان خصم الضريبة",
      "عدم تطبيق مبدأ المقابلة",
    ],
  },

  // ====== قائمة الدخل - موسعة ======
  {
    id: "df010",
    category: "قائمة الدخل",
    subcategory: "المبيعات",
    name: "صافي المبيعات",
    englishName: "Net Sales",
    formula: "NS = GS - SR - SD",
    arabicFormula: "صافي المبيعات = المبيعات الإجمالية - مردودات المبيعات - خصم المبيعات",
    variables: [
      { symbol: "GS", arabicName: "المبيعات الإجمالية", englishName: "Gross Sales", description: "إجمالي مبيعات الفترة قبل أي استقطاعات" },
      { symbol: "SR", arabicName: "مردودات المبيعات", englishName: "Sales Returns", description: "البضاعة المرتجعة من العملاء" },
      { symbol: "SD", arabicName: "خصم المبيعات", englishName: "Sales Discounts", description: "الخصومات النقدية الممنوحة للعملاء" },
    ],
    explanation: "صافي المبيعات هو الرقم الحقيقي لإيرادات المبيعات بعد استبعاد المرتجعات والخصومات.",
    detailedExplanation: "المبيعات الإجمالية لا تعكس الإيراد الفعلي، لأن بعض العملاء يرجعون بضاعة (تالفة أو غير مطابقة)، وبعضهم يحصل على خصم نقدي للسداد المبكر. صافي المبيعات هو الرقم الصحيح الذي يبدأ به قائمة الدخل. نسبة المرتجعات العالية قد تشير إلى مشاكل في جودة المنتج أو سياسة البيع. نسبة الخصم العالية قد تشير إلى ضغط العملاء أو ضعف الموقف التفاوضي للشركة.",
    example: {
      scenario: "شركة بمبيعات ومرتجعات وخصومات",
      data: { grossSales: 100000, returns: 5000, discounts: 3000 },
      calculation: "صافي المبيعات = 100,000 - 5,000 - 3,000 = 92,000",
      result: "92,000 ريال",
      interpretation: "8% من المبيعات الإجمالية ضاعت في المرتجعات والخصومات",
    },
    interpretation: "نسبة المرتجعات والخصم = (5,000+3,000)/100,000 = 8%. إذا تجاوزت 5%، يجب التحقيق.",
    idealValue: "نسبة المرتجعات < 3%",
    warningThreshold: "نسبة المرتجعات > 10% = مشكلة جودة",
    relatedFormulas: ["df011", "df012"],
  },
  {
    id: "df011",
    category: "قائمة الدخل",
    subcategory: "COGS",
    name: "تكلفة البضاعة المباعة",
    englishName: "Cost of Goods Sold (COGS)",
    formula: "COGS = BI + NP - EI",
    arabicFormula: "COGS = مخزون أول المدة + صافي المشتريات - مخزون آخر المدة",
    variables: [
      { symbol: "BI", arabicName: "مخزون أول المدة", englishName: "Beginning Inventory", description: "رصيد المخزون في بداية الفترة" },
      { symbol: "NP", arabicName: "صافي المشتريات", englishName: "Net Purchases", description: "المشتريات + مصاريف النقل - مردودات المشتريات - خصم المشتريات" },
      { symbol: "EI", arabicName: "مخزون آخر المدة", englishName: "Ending Inventory", description: "رصيد المخزون في نهاية الفترة (يحسب بالجرد الفعلي)" },
    ],
    explanation: "تكلفة البضاعة المباعة تمثل التكلفة الفعلية للبضاعة التي تم بيعها خلال الفترة.",
    detailedExplanation: "هذه المعادلة تستخدم في النظام الدوري للمخزون. فكرتها منطقية: البضاعة المتاحة للبيع (مخزون أول + مشتريات) إما تباع (COGS) أو تبقى في المخزون (مخزون آخر). صافي المشتريات = المشتريات + مصاريف النقل - مردودات - خصومات. في النظام الدائم، COGS يُحدّث فوراً عند كل عملية بيع، ولا يحتاج للجرد الفعلي.",
    example: {
      scenario: "شركة تجارية في نظام دوري",
      data: { beginningInventory: 50000, purchases: 200000, freight: 10000, returns: 5000, endingInventory: 70000 },
      calculation: "صافي المشتريات = 200,000 + 10,000 - 5,000 = 205,000\nCOGS = 50,000 + 205,000 - 70,000 = 185,000",
      result: "COGS = 185,000 ريال",
      interpretation: "تكلفة البضاعة المباعة تمثل 63% من المبيعات الإجمالية",
    },
    interpretation: "زيادة COGS قد تشير إلى ارتفاع أسعار الشراء أو مشاكل في كفاءة الإنتاج أو سرقة المخزون.",
    idealValue: "أقل من 70% من المبيعات",
    relatedFormulas: ["df010", "df012"],
    ifrsReference: "IAS 2 - المخزون",
  },
  {
    id: "df012",
    category: "قائمة الدخل",
    subcategory: "الربح الإجمالي",
    name: "مجمل الربح",
    englishName: "Gross Profit",
    formula: "GP = NS - COGS",
    arabicFormula: "مجمل الربح = صافي المبيعات - تكلفة البضاعة المباعة",
    variables: [
      { symbol: "GP", arabicName: "مجمل الربح", englishName: "Gross Profit", description: "الربح قبل خصم المصاريف التشغيلية" },
      { symbol: "NS", arabicName: "صافي المبيعات", englishName: "Net Sales", description: "الإيراد من المبيعات" },
      { symbol: "COGS", arabicName: "تكلفة البضاعة المباعة", englishName: "Cost of Goods Sold", description: "تكلفة البضاعة المباعة" },
    ],
    explanation: "مجمل الربح يقيس كفاءة التسعير والشراء. يمثل الربح قبل خصم المصاريف التشغيلية.",
    detailedExplanation: "مجمل الربح هو أول مستوى من الربحية. يقيس قدرة الشركة على بيع البضاعة بأعلى من تكلفتها. كلما زادت نسبة مجمل الربح، كانت الشركة أكثر قدرة على تغطية مصاريفها التشغيلية وتحقيق ربح صافي. الشركة ذات هامش مجمل ربح منخفض تحتاج لبيع كميات كبيرة لتغطية مصاريفها الثابتة، بينما الشركة ذات الهامش العالي تستطيع البقاء حتى مع انخفاض المبيعات.",
    example: {
      scenario: "شركة بمبيعات 200,000 و COGS 120,000",
      data: { netSales: 200000, cogs: 120000 },
      calculation: "مجمل الربح = 200,000 - 120,000 = 80,000\nنسبة مجمل الربح = (80,000 / 200,000) × 100% = 40%",
      result: "مجمل الربح = 80,000 ريال (40% من المبيعات)",
      interpretation: "كل ريال مبيعات يولّد 40 هللة ربح إجمالي",
    },
    interpretation: "نسبة مجمل الربح 40% ممتازة في قطاع التجزئة. كلما زادت، كان التسعير أكثر كفاءة.",
    idealValue: "30-50% حسب القطاع",
    warningThreshold: "أقل من 20% = خطر",
    relatedFormulas: ["df010", "df011", "df017"],
  },

  // ====== نسب السيولة - موسعة ======
  {
    id: "df020",
    category: "نسب السيولة",
    subcategory: "نسبة التداول",
    name: "نسبة التداول",
    englishName: "Current Ratio",
    formula: "CR = CA / CL",
    arabicFormula: "نسبة التداول = الأصول المتداولة ÷ الالتزامات المتداولة",
    variables: [
      { symbol: "CR", arabicName: "نسبة التداول", englishName: "Current Ratio", description: "مؤشر السيولة العامة", unit: "مرة" },
      { symbol: "CA", arabicName: "الأصول المتداولة", englishName: "Current Assets", description: "نقدية، عملاء، مخزون، مصاريف مقدمة", unit: "ريال" },
      { symbol: "CL", arabicName: "الالتزامات المتداولة", englishName: "Current Liabilities", description: "دائنون، قروض قصيرة، مصاريف مستحقة", unit: "ريال" },
    ],
    explanation: "نسبة التداول تقيس قدرة الشركة على سداد التزاماتها قصيرة الأجل باستخدام أصولها قصيرة الأجل.",
    detailedExplanation: "نسبة التداول هي أشهر نسب السيولة. تخبرنا كم ريال من الأصول المتداولة متاح لكل ريال من الالتزامات المتداولة. النسبة 2.0 تعني أن للشركة ضعف ما تحتاجه لتغطية التزاماتها قصيرة الأجل. النسبة 1.0 تعني أن الأصول تساوي الالتزامات بالضبط - وضع خطر. النسبة أقل من 1 تعني أن الشركة لا تستطيع سداد التزاماتها قصيرة الأجل من أصولها المتداولة، مما قد يؤدي لأزمة سيولة. لكن النسبة العالية جداً (> 3) قد تدل على عدم كفاءة في استخدام الأصول (نقد معطل أو مخزون راكد).",
    example: {
      scenario: "شركة بأصول والتزامات متداولة",
      data: { cash: 50000, receivables: 100000, inventory: 150000, prepaid: 30000, payables: 80000, shortLoans: 70000 },
      calculation: "الأصول المتداولة = 50,000 + 100,000 + 150,000 + 30,000 = 330,000\nالالتزامات المتداولة = 80,000 + 70,000 = 150,000\nنسبة التداول = 330,000 / 150,000 = 2.2",
      result: "2.2 مرة",
      interpretation: "ممتاز - الشركة قادرة على سداد التزاماتها قصيرة الأجل 2.2 مرة من أصولها المتداولة",
    },
    interpretation: "النسبة 1.5-2.0 مثالية. أقل من 1 تعني مشكلة سيولة. أعلى من 3 قد تدل على عدم كفاءة.",
    idealValue: "1.5 - 2.0",
    warningThreshold: "أقل من 1.0 = أزمة سيولة",
    relatedFormulas: ["df021", "df022", "df023"],
    realWorldApplication: "البنوك تستخدمها لتقييم القدرة على سداد القروض قصيرة الأجل",
    commonMistakes: [
      "عدم استبعاد المخزون التالف من الأصول المتداولة",
      "إدراج القروض طويلة الأجل المستحقة خلال سنة ضمن المتداولة",
    ],
    ifrsReference: "IAS 1 - عرض القوائم المالية",
  },
  {
    id: "df021",
    category: "نسب السيولة",
    subcategory: "السيولة السريعة",
    name: "نسبة السيولة السريعة",
    englishName: "Quick Ratio (Acid-Test Ratio)",
    formula: "QR = (CA - INV) / CL",
    arabicFormula: "النسبة السريعة = (الأصول المتداولة - المخزون) ÷ الالتزامات المتداولة",
    variables: [
      { symbol: "QR", arabicName: "النسبة السريعة", englishName: "Quick Ratio", description: "نسبة السيولة بعد استبعاد المخزون", unit: "مرة" },
      { symbol: "CA", arabicName: "الأصول المتداولة", englishName: "Current Assets", description: "كل الأصول المتداولة" },
      { symbol: "INV", arabicName: "المخزون", englishName: "Inventory", description: "البضاعة (الأقل سيولة)" },
      { symbol: "CL", arabicName: "الالتزامات المتداولة", englishName: "Current Liabilities", description: "التزامات قصيرة الأجل" },
    ],
    explanation: "نسبة السيولة السريعة تستبعد المخزون لأنه الأقل سيولة. تعطي صورة أدق للسيولة الفعلية.",
    detailedExplanation: "المخزون قد يستغرق وقتاً طويلاً لتحويله لنقد، خاصة في الشركات الصناعية. كما قد يكون التالف منه صعب البيع. لذلك تستبعد نسبة السيولة السريعة المخزون لتعطي صورة أكثر تحفظاً للسيولة. النسبة 1.0 أو أكثر تعتبر آمنة. أقل من 0.5 تعني خطراً. لكن في الشركات ذات دورة تشغيل سريعة (مثل السوبر ماركت)، قد تكون نسبة أقل مقبولة لأن المخزون يتحول لنقد بسرعة. في المقابل، الشركات الصناعية بمخزون بطيء الحركة تحتاج نسبة أعلى.",
    example: {
      scenario: "نفس شركة المثال السابق",
      data: { currentAssets: 330000, inventory: 150000, currentLiabilities: 150000 },
      calculation: "النسبة السريعة = (330,000 - 150,000) / 150,000 = 1.2",
      result: "1.2 مرة",
      interpretation: "جيد جداً - حتى بدون المخزون، الشركة قادرة على سداد التزاماتها قصيرة الأجل",
    },
    interpretation: "النسبة 1.0 أو أكثر آمنة. أقل من 0.5 تعني خطر. في قطاع التجزئة قد تكون 0.7 مقبولة.",
    idealValue: "≥ 1.0",
    warningThreshold: "أقل من 0.5 = خطر شديد",
    relatedFormulas: ["df020", "df022"],
    commonMistakes: [
      "عدم استبعاد المصاريف المقدمة غير القابلة للاسترداد",
      "عدم مراعاة نوعية المخزون قبل استبعاده",
    ],
  },
  {
    id: "df022",
    category: "نسب السيولة",
    subcategory: "النقدية",
    name: "نسبة النقدية",
    englishName: "Cash Ratio",
    formula: "CashR = (Cash + STI) / CL",
    arabicFormula: "نسبة النقدية = (النقدية + الاستثمارات قصيرة الأجل) ÷ الالتزامات المتداولة",
    variables: [
      { symbol: "CashR", arabicName: "نسبة النقدية", englishName: "Cash Ratio", description: "أكثر نسب السيولة تحفظاً" },
      { symbol: "Cash", arabicName: "النقدية", englishName: "Cash", description: "نقدية بالصندوق والبنك" },
      { symbol: "STI", arabicName: "الاستثمارات قصيرة الأجل", englishName: "Short-term Investments", description: "استثمارات سيولة عالية" },
      { symbol: "CL", arabicName: "الالتزامات المتداولة", englishName: "Current Liabilities", description: "التزامات قصيرة الأجل" },
    ],
    explanation: "نسبة النقدية هي الأكثر تحفظاً، تستخدم فقط الأصول الأكثر سيولة (النقدية والاستثمارات قصيرة الأجل).",
    detailedExplanation: "هذه النسبة تجيب على سؤال: إذا توقف كل شيء، هل تستطيع الشركة سداد التزاماتها قصيرة الأجل من النقدية المتوفرة فوراً؟ تستبعد العملاء (لأن بعضها قد لا يُحصَّل) والمخزون (لأنه يحتاج وقت للبيع). النسبة 0.2-0.5 كافية عادة. أعلى من 1 قد تدل على نقدية معطلة لا تستثمر بكفاءة. تستخدم هذه النسبة في الأزمات عندما يكون تحصيل العملاء صعباً.",
    example: {
      scenario: "تحليل سيولة شركة",
      data: { cash: 50000, shortInvestments: 30000, currentLiabilities: 150000 },
      calculation: "نسبة النقدية = (50,000 + 30,000) / 150,000 = 0.53",
      result: "0.53 مرة",
      interpretation: "ضمن المعيار (0.2-0.5) - الشركة قادرة على سداد 53% من التزاماتها قصيرة الأجل نقداً فوراً",
    },
    interpretation: "0.2-0.5 كافية. أعلى من 1 قد تدل على نقدية معطلة. أقل من 0.1 خطر.",
    idealValue: "0.2 - 0.5",
    relatedFormulas: ["df020", "df021"],
  },
  {
    id: "df023",
    category: "نسب السيولة",
    subcategory: "رأس المال العامل",
    name: "رأس المال العامل",
    englishName: "Working Capital",
    formula: "WC = CA - CL",
    arabicFormula: "رأس المال العامل = الأصول المتداولة - الالتزامات المتداولة",
    variables: [
      { symbol: "WC", arabicName: "رأس المال العامل", englishName: "Working Capital", description: "فائض الأصول المتداولة بعد سداد الالتزامات المتداولة", unit: "ريال" },
      { symbol: "CA", arabicName: "الأصول المتداولة", englishName: "Current Assets", description: "أصول قصيرة الأجل" },
      { symbol: "CL", arabicName: "الالتزامات المتداولة", englishName: "Current Liabilities", description: "التزامات قصيرة الأجل" },
    ],
    explanation: "رأس المال العامل مبلغ مطلق يقيس فائض الأصول المتداولة بعد سداد الالتزامات المتداولة.",
    detailedExplanation: "رأس المال العامل ليس نسبة بل مبلغ. يمثل الموارد المالية المتاحة للعمليات اليومية بعد سداد الالتزامات قصيرة الأجل. كلما زاد، كانت الشركة أكثر مرونة في عملياتها. رأس المال العامل السالب يعني أن الشركة تعتمد على التمويل قصير الأجل لتمويل أصولها طويلة الأجل - وضع غير مستدام. الشركة تحتاج رأس مال عامل موجب لتمويل دورة التشغيل: شراء مخزون → بيع على الحساب → تحصيل نقد.",
    example: {
      scenario: "شركة بأصول والتزامات متداولة",
      data: { currentAssets: 330000, currentLiabilities: 150000 },
      calculation: "رأس المال العامل = 330,000 - 150,000 = 180,000",
      result: "180,000 ريال (موجب)",
      interpretation: "الشركة لديها فائض 180,000 ريال لتمويل عملياتها اليومية بعد سداد التزاماتها قصيرة الأجل",
    },
    interpretation: "موجب = قدرة على السداد والتمويل. سالب = خطر إفلاس قريب. يجب أن يتناسب مع حجم النشاط.",
    idealValue: "موجب ومتناسب مع المبيعات",
    warningThreshold: "سالب = أزمة سيولة",
    relatedFormulas: ["df020"],
  },

  // ====== نسب الربحية - موسعة ======
  {
    id: "df030",
    category: "نسب الربحية",
    subcategory: "العائد على الأصول",
    name: "العائد على الأصول",
    englishName: "Return on Assets (ROA)",
    formula: "ROA = (NP / TA) × 100%",
    arabicFormula: "ROA = (صافي الربح ÷ إجمالي الأصول) × 100%",
    variables: [
      { symbol: "ROA", arabicName: "العائد على الأصول", englishName: "Return on Assets", description: "ربحية كل ريال مستثمر في الأصول", unit: "%" },
      { symbol: "NP", arabicName: "صافي الربح", englishName: "Net Profit", description: "الربح النهائي بعد الضريبة", unit: "ريال" },
      { symbol: "TA", arabicName: "إجمالي الأصول", englishName: "Total Assets", description: "كل أصول الشركة", unit: "ريال" },
    ],
    explanation: "ROA يقيس كفاءة استخدام الأصول لتوليد الأرباح. كل ريال في الأصول يولد كم ربح؟",
    detailedExplanation: "ROA يجيب على سؤال: ما مدى كفاءة الإدارة في استخدام أصولها لتوليد الأرباح؟ كلما ارتفعت النسبة، كانت الإدارة أكثر كفاءة. النسبة تختلف بشكل كبير حسب القطاع: قطاع التقنية (10-20%)، الصناعة (5-10%)، التجزئة (3-8%)، البنوك (1-2%). لذلك المقارنة يجب أن تكون مع متوسط القطاع. ROA = هامش صافي الربح × معدل دوران الأصول. يمكن تحسينه بزيادة الربحية أو بزيادة كفاءة استخدام الأصول.",
    example: {
      scenario: "شركة بصافي ربح 50,000 وأصول 500,000",
      data: { netProfit: 50000, totalAssets: 500000 },
      calculation: "ROA = (50,000 / 500,000) × 100% = 10%",
      result: "10%",
      interpretation: "كل 100 ريال من الأصول تولد 10 ريال ربح صافي سنوياً",
    },
    interpretation: "5% منخفض، 10% متوسط، 20%+ ممتاز. يختلف حسب القطاع.",
    idealValue: "10-20%",
    warningThreshold: "أقل من 3% = ضعف",
    relatedFormulas: ["df031", "df032", "df090"],
    realWorldApplication: "المستثمرون يستخدمونه لمقارنة كفاءة الإدارات في نفس القطاع",
    commonMistakes: [
      "استخدام صافي الربح قبل الضريبة",
      "عدم استخدام متوسط الأصول (بداية + نهاية)/2",
    ],
  },
  {
    id: "df031",
    category: "نسب الربحية",
    subcategory: "العائد على حقوق الملكية",
    name: "العائد على حقوق الملكية",
    englishName: "Return on Equity (ROE)",
    formula: "ROE = (NP / TE) × 100%",
    arabicFormula: "ROE = (صافي الربح ÷ إجمالي حقوق الملكية) × 100%",
    variables: [
      { symbol: "ROE", arabicName: "العائد على حقوق الملكية", englishName: "Return on Equity", description: "عائد استثمار المساهمين", unit: "%" },
      { symbol: "NP", arabicName: "صافي الربح", englishName: "Net Profit", description: "الربح النهائي بعد الضريبة" },
      { symbol: "TE", arabicName: "إجمالي حقوق الملكية", englishName: "Total Equity", description: "حق المساهمين" },
    ],
    explanation: "ROE يقيس عائد استثمار المساهمين. هو أهم نسبة للمستثمرين.",
    detailedExplanation: "ROE هو المؤشر الأهم للمساهمين. يقيس كم ريال ربح تولده كل 100 ريال استثمرها المساهمون. النسبة 15%+ ممتازة. أقل من 10% ضعيفة. لكن يجب مقارنتها مع تكلفة رأس المال (Cost of Capital). إذا كانت ROE أعلى من تكلفة رأس المال، فالشركة تخلق قيمة. إذا كانت أقل، فالشركة تدمر القيمة. يمكن تحليل ROE عبر تحليل دو بونت: ROE = هامش الربح × كفاءة الأصول × الرافعة المالية. هذا يكشف مصدر العائد - هل من الربحية، الكفاءة، أم الرافعة؟",
    example: {
      scenario: "شركة بصافي ربح 50,000 وحقوق ملكية 250,000",
      data: { netProfit: 50000, totalEquity: 250000 },
      calculation: "ROE = (50,000 / 250,000) × 100% = 20%",
      result: "20%",
      interpretation: "كل 100 ريال استثمرها المساهمون تولد 20 ريال ربح سنوياً",
    },
    interpretation: "أعلى من 15% ممتاز. أقل من 10% ضعيف. يجب مقارنته مع تكلفة رأس المال.",
    idealValue: "15-25%",
    warningThreshold: "أقل من تكلفة رأس المال = تدمير قيمة",
    relatedFormulas: ["df030", "df032", "df090", "df091"],
    realWorldApplication: "المساهمون يستخدمونه لتقييم جدوى الاستثمار في الشركة",
    commonMistakes: [
      "عدم استخدام متوسط حقوق الملكية",
      "خلط ROE مع ROA",
      "عدم مراعاة أثر الرافعة المالية",
    ],
  },
  {
    id: "df032",
    category: "نسب الربحية",
    subcategory: "العائد على الاستثمار",
    name: "العائد على الاستثمار",
    englishName: "Return on Investment (ROI)",
    formula: "ROI = (NP / TI) × 100%",
    arabicFormula: "ROI = (صافي الربح ÷ إجمالي الاستثمار) × 100%",
    variables: [
      { symbol: "ROI", arabicName: "العائد على الاستثمار", englishName: "Return on Investment", description: "عائد استثمار معين" },
      { symbol: "NP", arabicName: "صافي الربح", englishName: "Net Profit", description: "الربح من الاستثمار" },
      { symbol: "TI", arabicName: "إجمالي الاستثمار", englishName: "Total Investment", description: "المبلغ المستثمر" },
    ],
    explanation: "ROI يقيس عائد استثمار معين أو المشروع ككل.",
    detailedExplanation: "ROI أعم من ROE و ROA. يمكن استخدامه لتقييم استثمار معين (مشروع جديد، آلة، حملة إعلانية) أو لتقييم الشركة ككل. يحسب بقسمة العائد على الاستثمار. كلما زاد، كان الاستثمار أفضل. يجب مقارنته بالبدائل المتاحة والعائد المطلوب (Cost of Capital). ROI له عيوب: 1) يتجاهل القيمة الزمنية للنقود 2) يقيس فترة واحدة 3) قد يتجاهل التكاليف غير المباشرة. لذلك يُفضَّل NPV و IRR للتقييم الأدق.",
    example: {
      scenario: "استثمار 200,000 ريال يولد ربح 30,000 سنوياً",
      data: { profit: 30000, investment: 200000 },
      calculation: "ROI = (30,000 / 200,000) × 100% = 15%",
      result: "15%",
      interpretation: "الاستثمار يولد عائداً 15% سنوياً",
    },
    interpretation: "كلما زاد، كان الاستثمار أفضل. يجب مقارنته بالبدائل وتكلفة رأس المال.",
    idealValue: "أعلى من تكلفة رأس المال",
    relatedFormulas: ["df030", "df031"],
  },

  // ====== نسب المديونية - موسعة ======
  {
    id: "df050",
    category: "نسب المديونية",
    subcategory: "الديون للأصول",
    name: "نسبة الديون إلى الأصول",
    englishName: "Debt to Assets Ratio",
    formula: "DA = (TL / TA) × 100%",
    arabicFormula: "نسبة الديون = (إجمالي الالتزامات ÷ إجمالي الأصول) × 100%",
    variables: [
      { symbol: "DA", arabicName: "نسبة الديون للأصول", englishName: "Debt to Assets", description: "نسبة الأصول الممولة بالديون", unit: "%" },
      { symbol: "TL", arabicName: "إجمالي الالتزامات", englishName: "Total Liabilities", description: "كل التزامات الشركة" },
      { symbol: "TA", arabicName: "إجمالي الأصول", englishName: "Total Assets", description: "كل أصول الشركة" },
    ],
    explanation: "نسبة الأصول الممولة بالديون. كلما زادت، زادت المخاطر المالية.",
    detailedExplanation: "هذه النسبة تخبرنا: كم نسبة أصول الشركة ممولة بالديون مقابل التمويل الذاتي؟ كلما زادت النسبة، زادت المخاطر المالية لأن الشركة تحتاج لتوليد تدفقات نقدية كافية لسداد الديون. النسبة 40% تعني أن 40% من الأصول ممولة بالديون و 60% بالتمويل الذاتي. النسبة العالية تعني أيضاً أن الشركة قد تواجه صعوبة في الحصول على تمويل إضافي. تختلف النسبة حسب القطاع: البنوك 90%+ (طبيعة القطاع)، الصناعة 40-60%، التجزئة 30-50%.",
    example: {
      scenario: "شركة بأصول والتزامات",
      data: { totalLiabilities: 200000, totalAssets: 500000 },
      calculation: "نسبة الديون = (200,000 / 500,000) × 100% = 40%",
      result: "40%",
      interpretation: "40% من أصول الشركة ممولة بالديون، و 60% بالتمويل الذاتي",
    },
    interpretation: "أقل من 50% آمن. 50-70% متوسط. أعلى من 70% خطر. تختلف حسب القطاع.",
    idealValue: "أقل من 50%",
    warningThreshold: "أعلى من 70% = خطر عالي",
    relatedFormulas: ["df051", "df052"],
  },
  {
    id: "df051",
    category: "نسب المديونية",
    subcategory: "الديون للملكية",
    name: "نسبة الديون إلى حقوق الملكية",
    englishName: "Debt to Equity Ratio",
    formula: "DE = (TL / TE) × 100%",
    arabicFormula: "نسبة الديون للملكية = (إجمالي الالتزامات ÷ إجمالي حقوق الملكية) × 100%",
    variables: [
      { symbol: "DE", arabicName: "نسبة الديون للملكية", englishName: "Debt to Equity", description: "درجة الاعتماد على الديون", unit: "%" },
      { symbol: "TL", arabicName: "إجمالي الالتزامات", englishName: "Total Liabilities", description: "كل الالتزامات" },
      { symbol: "TE", arabicName: "إجمالي حقوق الملكية", englishName: "Total Equity", description: "حقوق المساهمين" },
    ],
    explanation: "تقيس درجة الاعتماد على الديون مقابل التمويل الذاتي. كلما زادت، زادت المخاطر.",
    detailedExplanation: "هذه النسبة تقارن بين التمويل الخارجي (الديون) والتمويل الداخلي (حقوق الملكية). النسبة 100% تعني أن لكل ريال من أموال المساهمين، هناك ريال من الديون. النسبة 200% تعني ضعف الديون مقابل حقوق الملكية - وضع خطر. النسبة المنخفضة (< 50%) تعني أن الشركة تعتمد بشكل أساسي على التمويل الذاتي، مما يعني مخاطر مالية أقل لكن أيضاً فرص نمو أقل (الرافعة المالية محدودة). النسبة المرتفعة قد تكون جيدة في فترات نمو الربحية (الرافعة المالية تضخم الأرباح)، لكنها كارثة في فترات الركود.",
    example: {
      scenario: "شركة بالتزامات وحقوق ملكية",
      data: { totalLiabilities: 200000, totalEquity: 300000 },
      calculation: "نسبة الديون للملكية = (200,000 / 300,000) × 100% = 67%",
      result: "67%",
      interpretation: "لكل 100 ريال حقوق ملكية، الشركة لديها 67 ريال ديون",
    },
    interpretation: "أقل من 100% آمن. 100-200% متوسط. أعلى من 200% خطر. تختلف حسب القطاع.",
    idealValue: "أقل من 100%",
    warningThreshold: "أعلى من 200% = خطر عالي",
    relatedFormulas: ["df050", "df052"],
  },
  {
    id: "df052",
    category: "نسب المديونية",
    subcategory: "تغطية الفائدة",
    name: "نسبة تغطية الفائدة",
    englishName: "Interest Coverage Ratio",
    formula: "ICR = EBIT / IE",
    arabicFormula: "تغطية الفائدة = الربح قبل الفائدة والضريبة ÷ مصروف الفائدة",
    variables: [
      { symbol: "ICR", arabicName: "تغطية الفائدة", englishName: "Interest Coverage", description: "عدد مرات تغطية الفائدة من الأرباح", unit: "مرة" },
      { symbol: "EBIT", arabicName: "الربح قبل الفائدة والضريبة", englishName: "Earnings Before Interest & Tax", description: "الربح التشغيلي قبل الفوائد والضرائب" },
      { symbol: "IE", arabicName: "مصروف الفائدة", englishName: "Interest Expense", description: "الفوائد المدفوعة على الديون" },
    ],
    explanation: "تقيس قدرة الشركة على سداد الفوائد من أرباحها التشغيلية.",
    detailedExplanation: "هذه النسبة حرجة جداً للدائنين خاصة البنوك. تقول: كم مرة تستطيع الشركة سداد فوائدها من أرباحها التشغيلية؟ إذا كانت 5 مرات، فالشركة تولّد أرباحاً تكفي لسداد الفوائد 5 مرات - وضع آمن. إذا كانت 1 مرة، فالأرباح تكفي بالكاد لسداد الفوائد - خطر. إذا كانت أقل من 1، فالشركة لا تولّد أرباحاً كافية لسداد الفوائد، مما يعني أنها تضطر للاقتراض لسدادها - وضع غير مستدام. النسبة تتأثر بدورة الأعمال: في فترات الازدهار تكون عالية، وفي الركود تنخفض. لذلك يجب النظر لمتوسط عدة سنوات.",
    example: {
      scenario: "شركة بـ EBIT ومصروف فائدة",
      data: { ebit: 100000, interest: 20000 },
      calculation: "تغطية الفائدة = 100,000 / 20,000 = 5 مرات",
      result: "5 مرات",
      interpretation: "الشركة تستطيع سداد فوائدها 5 مرات من أرباحها التشغيلية",
    },
    interpretation: "أقل من 2 مرة خطر. 3-5 مرات آمن. أكثر من 5 ممتاز.",
    idealValue: "أكثر من 3 مرات",
    warningThreshold: "أقل من 1.5 مرة = خطر شديد",
    relatedFormulas: ["df050", "df051"],
    realWorldApplication: "البنوك تستخدمها لتحديد شروط الإقراض وأسعار الفائدة",
  },

  // ====== التحليل المتقدم - موسع ======
  {
    id: "df090",
    category: "تحليل متقدم",
    subcategory: "دو بونت",
    name: "تحليل دو بونت",
    englishName: "DuPont Analysis",
    formula: "ROE = (NP/NS) × (NS/TA) × (TA/TE)",
    arabicFormula: "ROE = (صافي الربح ÷ المبيعات) × (المبيعات ÷ الأصول) × (الأصول ÷ حقوق الملكية)",
    variables: [
      { symbol: "ROE", arabicName: "العائد على حقوق الملكية", englishName: "Return on Equity", description: "عائد المساهمين", unit: "%" },
      { symbol: "NP/NS", arabicName: "هامش صافي الربح", englishName: "Net Profit Margin", description: "الربحية" },
      { symbol: "NS/TA", arabicName: "كفاءة الأصول", englishName: "Asset Turnover", description: "الكفاءة التشغيلية" },
      { symbol: "TA/TE", arabicName: "الرافعة المالية", englishName: "Equity Multiplier", description: "الرافعة المالية" },
    ],
    explanation: "يفكك ROE إلى ثلاثة عناصر: الربحية، الكفاءة، والرافعة. يساعد في تحديد مصدر العائد.",
    detailedExplanation: "تحليل دو بونت طوّرته شركة دو بونت الأمريكية. يفكك ROE إلى ثلاثة محركات: 1) هامش صافي الربح (الربحية) - كم ربحاً تولّد من كل ريال مبيعات. 2) معدل دوران الأصول (الكفاءة) - كم مبيعات تولّد من كل ريال أصول. 3) مضاعف حقوق الملكية (الرافعة) - كم أصولاً تستخدم من كل ريال حقوق ملكية. هذا التحليل يكشف: هل نمو ROE من تحسين الربحية؟ من كفاءة الأصول؟ من زيادة الديون (الرافعة)؟ كل محرك له حدوده: الربحية محدودة بالمنافسة، الكفاءة محدودة بالطاقة، الرافعة محدودة بالمخاطر. يوجه الإدارة لاتخاذ قرارات استراتيجية صحيحة.",
    example: {
      scenario: "تحليل ROE لشركتين مختلفتين",
      data: {
        companyA: { margin: 0.10, turnover: 1.0, leverage: 2.0 },
        companyB: { margin: 0.05, turnover: 2.0, leverage: 2.0 },
      },
      calculation: "الشركة A: 10% × 1 × 2 = 20% ROE\nالشركة B: 5% × 2 × 2 = 20% ROE",
      result: "كلتا الشركتين لها ROE 20%، لكن بمحركات مختلفة",
      interpretation: "الشركة A تركز على الربحية (منتجات متميزة)، الشركة B تركز على الكفاءة (حجم مبيعات عالي)",
    },
    interpretation: "كشف محرك النمو: هل من الربحية، الكفاءة، أم الرافعة؟",
    idealValue: "نمو من الربحية والكفاءة أفضل من نمو الرافعة",
    relatedFormulas: ["df031"],
    realWorldApplication: "الإدارة العليا تستخدمه لتحديد استراتيجية النمو",
    commonMistakes: [
      "الخلط بين الرافعة المالية والرافعة التشغيلية",
      "عدم تحليل محركات ROE بشكل منفصل",
    ],
  },

  // ====== القيمة الزمنية - موسعة ======
  {
    id: "df100",
    category: "القيمة الزمنية",
    subcategory: "القيمة المستقبلية",
    name: "القيمة المستقبلية",
    englishName: "Future Value (FV)",
    formula: "FV = PV × (1 + r)^n",
    arabicFormula: "FV = PV × (1 + r)^n",
    variables: [
      { symbol: "FV", arabicName: "القيمة المستقبلية", englishName: "Future Value", description: "قيمة المبلغ في المستقبل" },
      { symbol: "PV", arabicName: "القيمة الحالية", englishName: "Present Value", description: "المبلغ اليوم" },
      { symbol: "r", arabicName: "نسبة الفائدة", englishName: "Rate", description: "نسبة الفائدة لكل فترة (عشرية)" },
      { symbol: "n", arabicName: "عدد الفترات", englishName: "Periods", description: "عدد الفترات (سنوات، أشهر)" },
    ],
    explanation: "قيمة مبلغ اليوم في المستقبل بعد تراكم الفوائد المركبة.",
    detailedExplanation: "القيمة الزمنية للنقود من أهم مفاهيم التمويل. الفكرة: 100 ريال اليوم تساوي أكثر من 100 ريال بعد سنة، لأنك تستطيع استثمارها وكسب فائدة. القيمة المستقبلية تحسب كم سيصبح المبلغ بعد n فترة بنسبة فائدة r. الفائدة المركبة (Compound Interest) تعني أن الفائدة تُحسب على الأصل + الفوائد المتراكمة - 'الفائدة على الفائدة'. ألبرت أينشتاين وصف الفائدة المركبة بـ 'أعظم اكتشاف رياضي'. تأثيرها يزداد بشكل كبير مع الوقت - كلما طالت المدة، زادت القيمة المستقبلية بشكل كبير.",
    example: {
      scenario: "استثمار 10,000 ريال لمدة 5 سنوات بنسبة 5%",
      data: { pv: 10000, r: 0.05, n: 5 },
      calculation: "FV = 10,000 × (1.05)^5 = 10,000 × 1.2763 = 12,763",
      result: "12,763 ريال",
      interpretation: "10,000 ريال اليوم تصبح 12,763 ريال بعد 5 سنوات بنسبة 5% فائدة",
    },
    interpretation: "كلما زادت نسبة الفائدة أو المدة، زادت القيمة المستقبلية بشكل متسارع.",
    idealValue: "حسب الفرصة الاستثمارية",
    relatedFormulas: ["df101", "df102", "df103"],
    realWorldApplication: "تستخدم في حساب الادخار، التخطيط للتقاعد، تقييم الاستثمارات",
    commonMistakes: [
      "استخدام نسبة الفائدة كرقم صحيح بدلاً من عشري (5 بدلاً من 0.05)",
      "خلط بين الفائدة البسيطة والمركبة",
    ],
  },
];

export function getDetailedFormulasByCategory(category: string) {
  return detailedFormulas.filter((f) => f.category === category);
}

export function getDetailedFormulaCategories() {
  const cats = new Set(detailedFormulas.map((f) => f.category));
  return Array.from(cats);
}

export function searchDetailedFormulas(query: string) {
  const q = query.toLowerCase();
  return detailedFormulas.filter(
    (f) =>
      f.name.includes(query) ||
      f.englishName.toLowerCase().includes(q) ||
      f.formula.includes(query) ||
      f.explanation.includes(query)
  );
}

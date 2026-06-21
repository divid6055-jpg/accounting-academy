// النظام الضريبي السعودي الموسع - Expanded Saudi Tax System
// دليل شامل ومفصل لكل الضرائب والقوانين في المملكة العربية السعودية

export type TaxationRule = {
  id: string;
  taxName: string;
  englishName: string;
  category: string;
  lawNumber: string;
  issueDate: string;
  effectiveDate: string;
  lastUpdate: string;
  authority: string;
  rate: { description: string; value: string; conditions?: string[] }[];
  base: string;
  exemptions: string[];
  deductions: string[];
  credits: string[];
  filingRequirements: {
    frequency: string;
    deadline: string;
    form: string;
    documents: string[];
    electronicFiling: string;
  };
  paymentRequirements: {
    method: string;
    deadline: string;
    installments: string;
  };
  penalties: {
    type: string;
    rate: string;
    minimum: string;
    maximum: string;
    description: string;
  }[];
  registrationThreshold: string;
  deregistrationThreshold: string;
  recordKeeping: {
    duration: string;
    documents: string[];
    format: string;
  };
  audits: {
    frequency: string;
    scope: string;
    procedures: string[];
    rights: string[];
    obligations: string[];
  };
  appeals: {
    timeLimit: string;
    procedures: string[];
    levels: string[];
  };
  examples: {
    scenario: string;
    data: Record<string, number>;
    calculation: string[];
    result: string;
    notes: string[];
  }[];
  faqs: { question: string; answer: string }[];
  bestPractices: string[];
  commonMistakes: string[];
  recentChanges: string[];
  futureChanges: string[];
  references: string[];
  relatedTaxTypes: string[];
};

export const taxationRules: TaxationRule[] = [
  {
    id: "tr001",
    taxName: "ضريبة القيمة المضافة",
    englishName: "Value Added Tax (VAT)",
    category: "ضرائب غير مباشرة",
    lawNumber: "م/113",
    issueDate: "2/11/1438هـ",
    effectiveDate: "1/1/2018م (النسخة الأولى 5%)، 1/7/2020م (النسخة الثانية 15%)",
    lastUpdate: "1/7/2020م",
    authority: "هيئة الزكاة والضريبة والجمارك (ZATCA)",
    rate: [
      {
        description: "النسبة القياسية",
        value: "15%",
        conditions: ["معظم السلع والخدمات"],
      },
      {
        description: "نسبة صفرية",
        value: "0%",
        conditions: ["الصادرات", "النقل الدولي", "بعض الخدمات الدولية"],
      },
      {
        description: "معفى",
        value: "0% (معفى وليس نسبة صفرية)",
        conditions: ["الخدمات المالية", "العقارات السكنية", "التأمين على الحياة"],
      },
    ],
    base: "قيمة السلع والخدمات الخاضعة للضريبة في كل مرحلة من مراحل الإنتاج والتوزيع",
    exemptions: [
      "الخدمات المالية (القروض، الفوائد، الائتمان)",
      "التأمين على الحياة",
      "بيع و تأجير الأراضي السكنية",
      "تأجير العقارات السكنية",
      "النقل الدولي للركاب",
      "بعض الخدمات الطبية",
      "خدمات التعليم الخاص المعتمدة",
      "السلع المصدرة (نسبة صفرية وليست معفاة)",
      "الاستثمارات في المعادن الثمينة",
      "بعض المعاملات الحكومية",
    ],
    deductions: [
      "ضريبة المدخلات على المشتريات الخاضعة",
      "ضريبة المدخلات على المصروفات الخاضعة",
      "ضريبة على الواردات",
      "ضريبة على الخدمات من خارج المملكة (Reverse Charge)",
    ],
    credits: [
      "لا توجد ائتمانات ضريبية مباشرة في VAT",
      "تخصم ضريبة المدخلات من ضريبة المخرجات",
    ],
    filingRequirements: {
      frequency: "ربع سنوي (للشركات الصغيرة)، شهري (للشركات الكبيرة)",
      deadline: "آخر يوم من الشهر التالي للفترة الضريبية",
      form: "إقرار VAT الإلكتروني",
      documents: [
        "الفواتير الضريبية الأصلية",
        "إيصالات الاستلام",
        "كشوف البنوك",
        "عقود البيع والشراء",
        "سجل المشتريات والمبيعات",
      ],
      electronicFiling: "إلزامي عبر بوابة الهيئة (ERAD)",
    },
    paymentRequirements: {
      method: "تحويل بنكي، بطاقة ائتمانية، سداد",
      deadline: "نفس موعد تقديم الإقرار",
      installments: "غير متاحة - يجب سداد المبلغ كاملاً",
    },
    penalties: [
      {
        type: "غرامة التأخر في تقديم الإقرار",
        rate: "5% إلى 25% من الضريبة المستحقة",
        minimum: "25,000 ريال",
        maximum: "حتى 3 أضعاف الضريبة",
        description: "تطبق عند تأخر تقديم الإقرار في الموعد المحدد",
      },
      {
        type: "غرامة عدم السداد",
        rate: "5% من الضريبة غير المدفوعة",
        minimum: "لا يوجد",
        maximum: "حتى 3 أضعاف الضريبة",
        description: "تطبق عند عدم سداد الضريبة في الموعد",
      },
      {
        type: "غرامة عدم التسجيل",
        rate: "حتى 3 أضعاف الضريبة المستحقة",
        minimum: "10,000 ريال",
        maximum: "50,000 ريال",
        description: "تطبق عند عدم التسجيل رغم تجاوز الحد",
      },
      {
        type: "غرامة الاحتفاظ بالسجلات",
        rate: "ثابتة",
        minimum: "10,000 ريال",
        maximum: "50,000 ريال",
        description: "تطبق عند عدم الاحتفاظ بالسجلات المطلوبة",
      },
    ],
    registrationThreshold: "375,000 ريال إلزامي / 187,500 ريال اختياري",
    deregistrationThreshold: "أقل من 187,500 ريال",
    recordKeeping: {
      duration: "6 سنوات من تاريخ تقديم الإقرار",
      documents: [
        "الفواتير الضريبية",
        "إيصالات الاستلام",
        "عقود البيع والشراء",
        "سجلات المخزون",
        "كشوف البنوك",
        "إقرارات VAT",
        "المراسلات مع الهيئة",
      ],
      format: "إلكتروني أو ورقي (يجب أن يكون منظماً وقابلاً للمراجعة)",
    },
    audits: {
      frequency: "حسب خطة الهيئة أو عند الاشتباه",
      scope: "كل المعاملات الخاضعة لـ VAT خلال الفترة المحددة",
      procedures: [
        "إخطار المنشأة بالتدقيق",
        "طلب الوثائق والسجلات",
        "مراجعة الفواتير والقيود",
        "مقابلة الموظفين",
        "جرد المخزون إن لزم",
        "إعداد تقرير التدقيق",
        "إصدار قرار التقييم",
      ],
      rights: [
        "الإطلاع على نتائج التدقيق",
        "الاعتراض على النتائج",
        "تقديم المستندات الإضافية",
        "طلب إعادة النظر",
        "التظلم أمام لجان الاعتراض",
      ],
      obligations: [
        "التعاون مع المدققين",
        "تقديم كل الوثائق المطلوبة",
        "الإجابة على الاستفسارات",
        "تسهيل الوصول للسجلات",
        "تطبيق توصيات التدقيق",
      ],
    },
    appeals: {
      timeLimit: "30 يوماً من تاريخ الإخطار",
      procedures: [
        "تقديم طلب اعتراض إلكترونياً",
        "تقديم المستندات المؤيدة",
        "الانتظار لقرار لجنة الاعتراض",
        "التظلم أمام لجان فض المنازعات (إن لزم)",
      ],
      levels: [
        "لجنة الاعتراض الأولى (ZATCA)",
        "لجان فض المنازعات الضريبية",
        "محكمة الاستئناف",
        "المحكمة الإدارية العليا",
      ],
    },
    examples: [
      {
        scenario: "شركة تجارية بمبيعات 1,500,000 ريال ومشتريات 900,000 ريال",
        data: { sales: 1500000, purchases: 900000, vatRate: 0.15 },
        calculation: [
          "ضريبة المخرجات = 1,500,000 × 15% = 225,000 ريال",
          "ضريبة المدخلات = 900,000 × 15% = 135,000 ريال",
          "الضريبة المستحقة = 225,000 - 135,000 = 90,000 ريال",
        ],
        result: "الضريبة المستحقة للهيئة = 90,000 ريال",
        notes: [
          "إذا كانت ضريبة المدخلات أكبر، يمكن استرداد الفرق أو ترحيله",
          "تقدم الإقرار ربع سنوياً",
          "تسدد خلال موعد تقديم الإقرار",
        ],
      },
      {
        scenario: "شركة خدمات بمبيعات معفاة 200,000 ريال ومبيعات خاضعة 300,000 ريال",
        data: { exemptSales: 200000, taxableSales: 300000, vatRate: 0.15 },
        calculation: [
          "ضريبة المخرجات = 300,000 × 15% = 45,000 ريال",
          "لا يمكن خصم ضريبة المدخلات على المبيعات المعفاة بالكامل",
          "توزيع ضريبة المدخلات حسب نسبة المبيعات الخاضعة",
        ],
        result: "ضريبة المخرجات 45,000 ريال، خصم جزئي لضريبة المدخلات",
        notes: [
          "يجب تتبع المبيعات الخاضعة والمعفاة بشكل منفصل",
          "ضريبة المدخلات توزع حسب نسبة الاستخدام",
          "يحتاج نظام محاسبي يدعم التوزيع",
        ],
      },
    ],
    faqs: [
      {
        question: "متى يجب علي التسجيل في VAT؟",
        answer: "يجب التسجيل عندما تتجاوز مبيعاتك السنوية 375,000 ريال. التسجيل الاختياري متاح إذا كانت المبيعات بين 187,500 و 375,000 ريال.",
      },
      {
        question: "ما الفرق بين المعفى ونسبة صفرية؟",
        answer: "المعفى: لا تحسب VAT ولا تخصم ضريبة المدخلات. نسبة صفرية: تحسب VAT بنسبة 0% ويمكن خصم ضريبة المدخلات بالكامل. الصادرات عادة نسبة صفرية.",
      },
      {
        question: "هل يجب علي إصدار فواتير ضريبية؟",
        answer: "نعم، كل منشأة مسجلة يجب أن تصدر فاتورة ضريبية تحتوي على كل البيانات المطلوبة من الهيئة.",
      },
      {
        question: "ما هي مدة الاحتفاظ بالسجلات؟",
        answer: "يجب الاحتفاظ بالسجلات لمدة 6 سنوات من تاريخ تقديم الإقرار.",
      },
      {
        question: "هل يمكنني استرداد ضريبة المدخلات؟",
        answer: "نعم، إذا كانت ضريبة المدخلات أكبر من المخرجات، يمكنك طلب استرداد الفرق أو ترحيله للفترة القادمة.",
      },
    ],
    bestPractices: [
      "سجل الفواتير أولاً بأول",
      "احتفظ بكل الفواتير الضريبية",
      "تابع المبيعات الخاضعة والمعفاة بشكل منفصل",
      "راجع الإقرار قبل التقديم",
      "استخدم نظام محاسبي يدعم VAT",
      "تدرب على متطلبات VAT",
      "استشر خبيراً ضريبياً عند الحاجة",
      "تابع تحديثات الهيئة",
    ],
    commonMistakes: [
      "عدم التسجيل عند تجاوز الحد",
      "عدم إصدار فواتير ضريبية",
      "خلط بين المبيعات الخاضعة والمعفاة",
      "عدم خصم ضريبة المدخلات بشكل صحيح",
      "تأخر تقديم الإقرار",
      "أخطاء في احتساب الضريبة",
      "عدم الاحتفاظ بالسجلات",
    ],
    recentChanges: [
      "زيادة النسبة من 5% إلى 15% في 1 يوليو 2020",
      "إلزام الفوترة الإلكترونية (المرحلة الأولى) من ديسمبر 2021",
      "المرحلة الثانية للفوترة الإلكترونية تكاملية من يناير 2023",
      "تحديث متطلبات التسجيل",
    ],
    futureChanges: [
      "توسيع نطاق الفوترة الإلكترونية",
      "ربط مباشر مع الأنظمة المحاسبية",
      "متطلبات إضافية للمنشآت الكبيرة",
    ],
    references: [
      "نظام ضريبة القيمة المضافة (م/113)",
      "اللائحة التنفيذية لنظام VAT",
      "قرارات وتعليمات هيئة الزكاة والضريبة والجمارك",
      "دليل VAT الصادر من الهيئة",
    ],
    relatedTaxTypes: ["ضريبة الاستهلاك", "ضريبة الدخل", "الزكاة"],
  },
  {
    id: "tr002",
    taxName: "ضريبة الدخل",
    englishName: "Income Tax",
    category: "ضرائب مباشرة",
    lawNumber: "م/1",
    issueDate: "17/3/1425هـ",
    effectiveDate: "13/5/2004م",
    lastUpdate: "تحديثات سنوية",
    authority: "هيئة الزكاة والضريبة والجمارك (ZATCA)",
    rate: [
      {
        description: "النسبة القياسية للشركات غير السعودية",
        value: "20%",
        conditions: ["تطبق على الأرباح"],
      },
      {
        description: "ضريبة الاقتطاع على المدفوعات لغير المقيمين",
        value: "5% - 20%",
        conditions: ["حسب نوع الدفعة"],
      },
      {
        description: "ضريبة على أنشطة الغاز والبترول",
        value: "30% - 85%",
        conditions: ["حسب النشاط والاتفاقيات"],
      },
    ],
    base: "إجمالي الدخل الخاضع للضريبة = الإيرادات - المصروفات المخصومة",
    exemptions: [
      "دخل الأفراد من العمل (رواتب)",
      "دخل استثمارات الأفراد في الأسهم السعودية",
      "أرباح بيع الأسهم في السوق السعودي",
      "إيرادات الزكاة للسعوديين",
      "أرباح توزيعات الأسهم من الشركات السعودية",
      "أرباح صناديق الاستثمار العقاري",
    ],
    deductions: [
      "المصروفات التشغيلية اللازمة للنشاط",
      "الإهلاك حسب الجداول المعتمدة",
      "الخسائر المرحلة (محدودة بزمن)",
      "التبرعات للجهات الخيرية المعتمدة",
      "ضريبة القيمة المضافة المدفوعة",
      "الزكاة المدفوعة للسعوديين",
      "مخصصات الديون المشكوك فيها",
      "مخصصات التقاعد",
    ],
    credits: [
      "ضريبة الاقتطاع المدفوعة على الدخل",
      "ضريبة الدفعات المقدمة",
    ],
    filingRequirements: {
      frequency: "سنوي",
      deadline: "120 يوماً من نهاية السنة المالية",
      form: "إقرار ضريبة الدخل الإلكتروني",
      documents: [
        "القوائم المالية المدققة",
        "تقرير المراجع الخارجي",
        "إقرار الزكاة (للشركات المختلطة)",
        "سجل الضرائب",
        "كشف حساب الضرائب",
      ],
      electronicFiling: "إلزامي عبر بوابة الهيئة",
    },
    paymentRequirements: {
      method: "تحويل بنكي، سداد",
      deadline: "نفس موعد تقديم الإقرار",
      installments: "غير متاحة - يجب سداد المبلغ كاملاً",
    },
    penalties: [
      {
        type: "غرامة التأخر في تقديم الإقرار",
        rate: "1% عن كل 30 يوم تأخير",
        minimum: "لا يوجد",
        maximum: "حتى 3 أضعاف الضريبة",
        description: "تطبق عند تأخر تقديم الإقرار",
      },
      {
        type: "غرامة عدم السداد",
        rate: "1% شهرياً",
        minimum: "لا يوجد",
        maximum: "حتى 3 أضعاف الضريبة",
        description: "تطبق عند عدم سداد الضريبة",
      },
      {
        type: "غرامة التهرب الضريبي",
        rate: "حتى 3 أضعاف الضريبة",
        minimum: "لا يوجد",
        maximum: "حتى 3 أضعاف الضريبة",
        description: "تطبق عند التهرب من الضريبة",
      },
    ],
    registrationThreshold: "كل الشخصات غير الخاضعة للزكاة",
    deregistrationThreshold: "غير محدد",
    recordKeeping: {
      duration: "10 سنوات من تاريخ تقديم الإقرار",
      documents: [
        "القوائم المالية",
        "الدفاتر المحاسبية",
        "الفواتير والعقود",
        "إقرارات الضرائب",
        "مراسلات الهيئة",
      ],
      format: "إلكتروني أو ورقي",
    },
    audits: {
      frequency: "حسب خطة الهيئة أو عند الاشتباه",
      scope: "كل المعاملات الخاضعة لضريبة الدخل",
      procedures: [
        "إخطار المنشأة",
        "طلب الوثائق",
        "مراجعة القوائم المالية",
        "مقابلة الإدارة",
        "إعداد التقرير",
        "إصدار القرار",
      ],
      rights: [
        "الإطلاع على النتائج",
        "الاعتراض",
        "تقديم مستندات إضافية",
        "التظلم",
      ],
      obligations: [
        "التعاون",
        "تقديم الوثائق",
        "الإجابة على الاستفسارات",
      ],
    },
    appeals: {
      timeLimit: "30 يوماً من الإخطار",
      procedures: [
        "تقديم طلب اعتراض",
        "تقديم المستندات",
        "انتظار القرار",
      ],
      levels: [
        "لجنة الاعتراض",
        "لجان فض المنازعات",
        "المحاكم",
      ],
    },
    examples: [
      {
        scenario: "شركة غير سعودية بربح 2,000,000 ريال",
        data: { profit: 2000000, taxRate: 0.20 },
        calculation: [
          "الدخل الخاضع للضريبة = 2,000,000 ريال",
          "ضريبة الدخل = 2,000,000 × 20% = 400,000 ريال",
        ],
        result: "ضريبة الدخل المستحقة = 400,000 ريال",
        notes: [
          "تطبق على الشركات غير السعودية",
          "الشركات المختلطة: تحدد النسبة",
        ],
      },
    ],
    faqs: [
      {
        question: "من يخضع لضريبة الدخل في السعودية؟",
        answer: "الأشخاص الطبيعيون غير السعوديين، والشركات غير السعودية، والشركات المختلطة (النسبة غير السعودية).",
      },
      {
        question: "ما الفرق بين ضريبة الدخل والزكاة؟",
        answer: "ضريبة الدخل تطبق على غير السعوديين بنسبة 20%. الزكاة تطبق على السعوديين بنسبة 2.5%.",
      },
      {
        question: "هل أرباح الأسهم معفاة؟",
        answer: "نعم، أرباح توزيعات الأسهم من الشركات السعودية معفاة من ضريبة الدخل.",
      },
    ],
    bestPractices: [
      "احتفظ بسجلات منظمة",
      "استشر خبيراً ضريبياً",
      "تابع التحديثات",
      "قدم الإقرار في الموعد",
      "راجع القوائم المالية",
    ],
    commonMistakes: [
      "عدم التسجيل",
      "أخطاء في حساب الدخل الخاضع",
      "خصم مصروفات غير مخصومة",
      "تأخر التقديم",
    ],
    recentChanges: [
      "تحديثات في الجداول الإهلاك",
      "متطلبات إلكترونية جديدة",
      "ربط مع الأنظمة الأخرى",
    ],
    futureChanges: [
      "مزيد من الأتمتة",
      "ربط مع الأنظمة الأخرى",
    ],
    references: [
      "نظام ضريبة الدخل (م/1)",
      "اللائحة التنفيذية",
      "قرارات الهيئة",
    ],
    relatedTaxTypes: ["الزكاة", "VAT", "ضريبة الاستهلاك"],
  },
];

export type TaxCompliance = {
  id: string;
  requirement: string;
  description: string;
  frequency: string;
  responsibleParty: string;
  deadline: string;
  documents: string[];
  procedures: string[];
  penalties: string[];
  bestPractices: string[];
};

export const taxComplianceRequirements: TaxCompliance[] = [
  {
    id: "tc001",
    requirement: "تسجيل VAT",
    description: "التسجيل في ضريبة القيمة المضافة عند تجاوز الحد",
    frequency: "مرة واحدة",
    responsibleParty: "المالك أو المدير المالي",
    deadline: "خلال 30 يوماً من تجاوز الحد",
    documents: [
      "السجل التجاري",
      "البطاقة الضريبية",
      "هوية المفوض",
      "عقد التأسيس",
    ],
    procedures: [
      "تجهيز الوثائق",
      "الدخول لبوابة الهيئة",
      "تعبئة النموذج",
      "رفع الوثائق",
      "انتظار الموافقة",
      "استلام رقم التسجيل",
    ],
    penalties: [
      "غرامة عدم التسجيل 10,000 - 50,000 ريال",
      "ضريبة مستحقة على الفترة غير المسجلة",
    ],
    bestPractices: [
      "تابع المبيعات شهرياً",
      "سجل قبل تجاوز الحد",
      "احتفظ بالوثائق جاهزة",
    ],
  },
  {
    id: "tc002",
    requirement: "تقديم إقرار VAT",
    description: "تقديم إقرار VAT دورياً",
    frequency: "ربع سنوي أو شهري",
    responsibleParty: "المحاسب أو المدير المالي",
    deadline: "آخر يوم من الشهر التالي للفترة",
    documents: [
      "سجل المبيعات",
      "سجل المشتريات",
      "الفواتير الضريبية",
      "كشوف البنوك",
    ],
    procedures: [
      "تجميع البيانات",
      "مراجعة الفواتير",
      "تعبئة الإقرار",
      "مراجعة الإقرار",
      "تقديم الإقرار إلكترونياً",
      "سداد الضريبة",
    ],
    penalties: [
      "غرامة التأخر 5-25% من الضريبة",
      "حد أدنى 25,000 ريال",
    ],
    bestPractices: [
      "سجل القيود أولاً بأول",
      "راجع قبل التقديم",
      "احتفظ بنسخة من الإقرار",
      "سدد في الموعد",
    ],
  },
];

export type TaxPlanningStrategy = {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  applicableTo: string;
  benefits: string[];
  implementation: string[];
  risks: string[];
  example: string;
  legalReference: string;
};

export const taxPlanningStrategies: TaxPlanningStrategy[] = [
  {
    id: "tps001",
    name: "الاستفادة من خصم ضريبة المدخلات",
    description: "خصم كل ضريبة المدخلات المسموح بها",
    detailedDescription: "ضمان خصم كل ضريبة المدخلات على المشتريات والمصروفات الخاضعة. يتطلب نظام محاسبي دقيق وفواتير ضريبية صحيحة.",
    applicableTo: "كل الشركات المسجلة في VAT",
    benefits: [
      "خفض الضريبة المستحقة",
      "تحسين التدفق النقدي",
      "زيادة الربحية",
    ],
    implementation: [
      "احصل على فواتير ضريبية لكل المشتريات",
      "سجل الفواتير أولاً بأول",
      "راجع الفواتير الشهرية",
      "تأكد من صحة الفواتير",
      "احتفظ بالفواتير منظمة",
    ],
    risks: [
      "خصم غير صحيح قد يؤدي لغرامات",
      "بعض الفواتير غير صحيحة",
      "بعض المشتريات معفاة من الخصم",
    ],
    example: "شركة بمشتريات 1,000,000 ريال تخصم 150,000 ريال VAT مدخلات، مما يخفض الضريبة المستحقة",
    legalReference: "المادة 32 من اللائحة التنفيذية لنظام VAT",
  },
  {
    id: "tps002",
    name: "توقيت الاستثمارات الرأسمالية",
    description: "توقيت شراء الأصول الثابتة للاستفادة من الخصومات",
    detailedDescription: "الاستفادة من الجداول المعتمدة للإهلاك من خلال توقيت الاستثمارات الرأسمالية. الشراء في نهاية السنة يتيح خصم إهلاك كامل للسنة التالية.",
    applicableTo: "الشركات الخاضعة لضريبة الدخل",
    benefits: [
      "خفض الدخل الخاضع للضريبة",
      "تأجيل الضريبة",
      "تحسين التدفق النقدي",
    ],
    implementation: [
      "خطط الاستثمارات السنوية",
      "اشتر في الوقت المناسب",
      "استفد من جداول الإهلاك",
      "راجع التصنيف",
    ],
    risks: [
      "قد لا يكون التوقيت مناسباً تجارياً",
      "التغييرات في الجداول",
    ],
    example: "شراء آلة في ديسمبر بدلاً من يناير يسمح بخصم إهلاك كامل للسنة التالية",
    legalReference: "المادة 23 من نظام ضريبة الدخل",
  },
];

export function getTaxRuleByName(name: string) {
  return taxationRules.find((t) => t.taxName === name);
}

export function getTaxRulesByCategory(category: string) {
  return taxationRules.filter((t) => t.category === category);
}

export function searchTaxRules(query: string) {
  return taxationRules.filter(
    (t) => t.taxName.includes(query) || t.englishName.toLowerCase().includes(query.toLowerCase())
  );
}

export function getComplianceByFrequency(frequency: string) {
  return taxComplianceRequirements.filter((c) => c.frequency.includes(frequency));
}

export function calculateVAT(taxableAmount: number, rate: number = 0.15) {
  return taxableAmount * rate;
}

export function calculateIncomeTax(taxableIncome: number, rate: number = 0.20) {
  return Math.max(0, taxableIncome) * rate;
}

export function calculateZakat(zakatBase: number, rate: number = 0.025) {
  return Math.max(0, zakatBase) * rate;
}

export function calculateWithholdingTax(paymentAmount: number, paymentType: string) {
  const rates: Record<string, number> = {
    "dividends": 0.05,
    "interest": 0.05,
    "royalties": 0.15,
    "management_fees": 0.15,
    "services": 0.15,
    "rentals": 0.15,
    "insurance_premiums": 0.05,
  };
  const rate = rates[paymentType] || 0.15;
  return paymentAmount * rate;
}

// دليل الموارد المحاسبية - Accounting Resources Guide
// يحتوي على موارد تعليمية ومراجع ومصادر للمحاسبين

export type AccountingResource = {
  id: string;
  category: string;
  title: string;
  description: string;
  detailedDescription: string;
  resourceType: string;
  source: string;
  language: string;
  url?: string;
  topics: string[];
  difficulty: "مبتدئ" | "متوسط" | "متقدم" | "احترافي";
  estimatedTime: string;
  keyTakeaways: string[];
  practicalApplications: string[];
  relatedResources: string[];
  pros: string[];
  cons: string[];
  rating: number;
};

export const accountingResources: AccountingResource[] = [
  {
    id: "res001",
    category: "الكتب",
    title: "المحاسبة المالية - الدليل الشامل",
    description: "كتاب شامل في المحاسبة المالية بالعربية يغطي كل المفاهيم الأساسية",
    detailedDescription: "هذا الكتاب مرجع شامل للمحاسبة المالية يغطي: المفاهيم الأساسية، المعادلة المحاسبية، القيود المحاسبية، دورة المحاسبة الكاملة، إعداد القوائم المالية، التسويات الجردية، الإهلاك، المخصصات، التحليل المالي. مناسب للطلاب والمحاسبين المبتدئين والمتوسطين. يتضمن أمثلة عملية وتمارين تطبيقية وحالات دراسية.",
    resourceType: "كتاب مطبوع",
    source: "الدار العلمية للنشر",
    language: "العربية",
    topics: ["المحاسبة المالية", "القيود المحاسبية", "القوائم المالية", "التسويات الجردية"],
    difficulty: "مبتدئ",
    estimatedTime: "60 ساعة قراءة",
    keyTakeaways: [
      "فهم المفاهيم الأساسية للمحاسبة",
      "إتقان القيود المحاسبية",
      "إعداد القوائم المالية",
      "إجراء التسويات الجردية",
    ],
    practicalApplications: [
      "تسجيل عمليات المنشأة",
      "إعداد قوائم مالية",
      "إجراء تسويات نهاية الفترة",
      "تحليل القوائم المالية",
    ],
    relatedResources: ["res002", "res003"],
    pros: [
      "شامل ومفصل",
      "أمثلة عملية",
      "لغة بسيطة",
      "تمارين تطبيقية",
    ],
    cons: [
      "طويل (1000+ صفحة)",
      "يحتاج تحديث لبعض المعايير",
      "بعض الموضوعات معقدة",
    ],
    rating: 4.5,
  },
  {
    id: "res002",
    category: "المعايير",
    title: "معايير IFRS الدولية",
    description: "المعايير الدولية لإعداد التقارير المالية (IFRS) كاملة",
    detailedDescription: "هذا المرجع يحتوي على كل معايير IFRS و IAS الصادرة من مجلس المعايير المحاسبية الدولية (IASB). يشمل: المعايير السارية، التفسيرات (IFRIC)، الإطار المفاهيمي. كل معيار يتضمن: الهدف، النطاق، التعريفات، الاعتراف، القياس، الإفصاح، أمثلة تطبيقية. ضروري للمحاسبين في الشركات المدرجة والتيات تخضع لـ IFRS.",
    resourceType: "مرجع إلكتروني",
    source: "IFRS Foundation",
    language: "العربية والإنجليزية",
    url: "ifrs.org",
    topics: ["IFRS", "IAS", "المعايير المحاسبية", "الإفصاح"],
    difficulty: "احترافي",
    estimatedTime: "مرجع دائم",
    keyTakeaways: [
      "فهم كل معيار على حدة",
      "تطبيق المعايير في الممارسة",
      "الامتثال للمتطلبات",
      "الإفصاح الصحيح",
    ],
    practicalApplications: [
      "إعداد القوائم المالية وفق IFRS",
      "حل المسائل المحاسبية المعقدة",
      "الامتثال للمتطلبات التنظيمية",
      "تدقيق القوائم المالية",
    ],
    relatedResources: ["res001", "res003"],
    pros: [
      "المرجع الرسمي",
      "محدّث باستمرار",
      "متوفر بالعربية",
      "أمثلة تطبيقية",
    ],
    cons: [
      "معقد للمبتدئين",
      "بعض المعايير طويلة",
      "يحتاج خلفية محاسبية",
    ],
    rating: 5.0,
  },
  {
    id: "res003",
    category: "الدورات",
    title: "دورة المحاسبة المالية الشاملة",
    description: "دورة تدريبية شاملة عبر الإنترنت في المحاسبة المالية",
    detailedDescription: "دورة تدريبية احترافية عبر الإنترنت تغطي كل جوانب المحاسبة المالية من المبتدئ إلى المتقدم. تشمل: 100+ ساعة فيديو، تمارين تطبيقية، اختبارات، شهادة إتمام، دعم من المدرب. تغطي: الأساسيات، القيود، الدورة المحاسبية، القوائم المالية، التحليل المالي، IFRS. مناسبة للطلاب والمحاسبين الجدد.",
    resourceType: "دورة إلكترونية",
    source: "أكاديمية المحاسبة",
    language: "العربية",
    url: "accounting-academy.com",
    topics: ["المحاسبة المالية", "القيود المحاسبية", "القوائم المالية", "IFRS"],
    difficulty: "مبتدئ",
    estimatedTime: "100 ساعة",
    keyTakeaways: [
      "إتقان المحاسبة من الصفر",
      "إعداد القوائم المالية",
      "تطبيق IFRS الأساسية",
      "تحليل القوائم",
    ],
    practicalApplications: [
      "العمل كمحاسب مالي",
      "إعداد قوائم الشركة",
      "اجتياز اختبارات المهنة",
      "تطبيق المعايير",
    ],
    relatedResources: ["res001", "res004"],
    pros: [
      "شاملة وتفصيلية",
      "مرونة في الوقت",
      "شهادة معتمدة",
      "دعم المدرب",
    ],
    cons: [
      "تكلفة عالية",
      "تحتاج التزام",
      "بعض الفيديوهات طويلة",
    ],
    rating: 4.3,
  },
  {
    id: "res004",
    category: "الشهادات",
    title: "شهادة SOCPA",
    description: "شهادة المحاسب القانوني المعتمد من الهيئة السعودية للمراجعين والمحاسبين",
    detailedDescription: "شهادة SOCPA (Saudi Organization for Chartered and Professional Accountants) هي الشهادة المهنية المعتمدة في المملكة العربية السعودية. مطلوبة للمراجعين والمحاسبين القانونيين. تشمل اختبارات في: المحاسبة المالية، التدقيق، المحاسبة الإدارية، الضرائب، المعايير السعودية، أخلاقيات المهنة. مدة البرنامج 3-5 سنوات.",
    resourceType: "شهادة مهنية",
    source: "SOCPA",
    language: "العربية والإنجليزية",
    url: "socpa.org.sa",
    topics: ["المحاسبة", "التدقيق", "المعايير السعودية", "الضرائب"],
    difficulty: "احترافي",
    estimatedTime: "3-5 سنوات",
    keyTakeaways: [
      "اعتماد مهني رسمي",
      "خبرة شاملة في المحاسبة",
      "إتقان المعايير السعودية",
      "مهارات التدقيق",
    ],
    practicalApplications: [
      "العمل كمراجع قانوني",
      "محاسب قانوني معتمد",
      "تدقيق الشركات المدرجة",
      "استشارات محاسبية",
    ],
    relatedResources: ["res005", "res006"],
    pros: [
      "الشهادة الرسمية في السعودية",
      "اعتراف واسع",
      "فرص وظيفية أفضل",
      "دخل أعلى",
    ],
    cons: [
      "صعوبة الاختبارات",
      "مدة طويلة",
      "تكلفة عالية",
      "تتطلب خبرة عملية",
    ],
    rating: 5.0,
  },
  {
    id: "res005",
    category: "الشهادات",
    title: "شهادة CPA",
    description: "شهادة المحاسب القانوني المعتمد (CPA) الأمريكية",
    detailedDescription: "شهادة CPA (Certified Public Accountant) من المعهد الأمريكي للمحاسبين القانونيين (AICPA) هي واحدة من أهم الشهادات المحاسبية عالمياً. تشمل 4 أقسام: المحاسبة المالية والتقرير، التدقيق والاعتماد، التنظيم والأخلاقيات، المفاهيم الإدارية والمحاسبة. تعطي اعترافاً دولياً وفرصاً وظيفية ممتازة.",
    resourceType: "شهادة مهنية",
    source: "AICPA",
    language: "الإنجليزية",
    url: "aicpa.org",
    topics: ["المحاسبة المالية", "التدقيق", "الأخلاقيات", "المحاسبة الإدارية"],
    difficulty: "احترافي",
    estimatedTime: "1-3 سنوات",
    keyTakeaways: [
      "اعتراف دولي",
      "خبرة شاملة",
      "مهارات متقدمة",
      "فرص عالمية",
    ],
    practicalApplications: [
      "العمل دولياً",
      "الشركات متعددة الجنسيات",
      "استشارات محاسبية",
      "تدقيق دولي",
    ],
    relatedResources: ["res004", "res006"],
    pros: [
      "اعتراف دولي",
      "فرص وظيفية",
      "دخل أعلى",
      "محتوى شامل",
    ],
    cons: [
      "بالإنجليزية",
      "صعبة",
      "تكلفة عالية",
      "تتطلب خبرة",
    ],
    rating: 4.8,
  },
  {
    id: "res006",
    category: "الشهادات",
    title: "شهادة ACCA",
    description: "شهادة جمعية المحاسبين القانونيين المعتمدين (ACCA) البريطانية",
    detailedDescription: "شهادة ACCA (Association of Chartered Certified Accountants) شهادة محاسبية عالمية من المملكة المتحدة. تشمل 13 اختباراً في: المحاسبة المالية، التدقيق، الضرائب، المحاسبة الإدارية، الحوكمة، الأخلاقيات. مدة البرنامج 2-3 سنوات. تعطي اعترافاً واسعاً خاصة في أوروبا والخليج.",
    resourceType: "شهادة مهنية",
    source: "ACCA",
    language: "الإنجليزية",
    url: "accaglobal.com",
    topics: ["المحاسبة المالية", "التدقيق", "الضرائب", "الحوكمة"],
    difficulty: "احترافي",
    estimatedTime: "2-3 سنوات",
    keyTakeaways: [
      "اعتراف عالمي",
      "خبرة شاملة",
      "تركيز على الممارسة",
      "مهارات إدارية",
    ],
    practicalApplications: [
      "العمل في الشركات العالمية",
      "استشارات محاسبية",
      "تدقيق دولي",
      "إدارة مالية",
    ],
    relatedResources: ["res004", "res005"],
    pros: [
      "اعتراف واسع",
      "محتوى عملي",
      "مرونة في الاختبارات",
      "فرص دولية",
    ],
    cons: [
      "بالإنجليزية",
      "13 اختبار",
      "تكلفة عالية",
      "مدة طويلة",
    ],
    rating: 4.7,
  },
  {
    id: "res007",
    category: "البرامج",
    title: "برنامج SAP ERP",
    description: "نظام تخطيط موارد المؤسسات SAP",
    detailedDescription: "SAP هو نظام تخطيط موارد المؤسسات (ERP) الأشهر عالمياً. يشمل وحدات: المحاسبة المالية (FI)، المراقبة الإدارية (CO)، إدارة المواد (MM)، المبيعات (SD)، الموارد البشرية (HR). يستخدم في معظم الشركات الكبيرة. تعلم SAP ميزة قوية في سوق العمل. تتوفر شهادات معتمدة من SAP.",
    resourceType: "برنامج محاسبي",
    source: "SAP SE",
    language: "متعدد اللغات",
    url: "sap.com",
    topics: ["ERP", "المحاسبة المالية", "المراقبة الإدارية", "إدارة المواد"],
    difficulty: "احترافي",
    estimatedTime: "6-12 شهر إتقان",
    keyTakeaways: [
      "إتقان نظام ERP رائد",
      "فهم تكامل العمليات",
      "مهارات سوق العمل",
      "إدارة مالية متقدمة",
    ],
    practicalApplications: [
      "العمل في الشركات الكبيرة",
      "إدارة المحاسبة المؤسسية",
      "تطبيقات ERP",
      "استشارات SAP",
    ],
    relatedResources: ["res008", "res009"],
    pros: [
      "الأكثر استخداماً عالمياً",
      "تكامل شامل",
      "اعتراف واسع",
      "فرص وظيفية",
    ],
    cons: [
      "معقد",
      "تكلفة عالية للتعلم",
      "يحتاج خلفية تقنية",
      "وقت تعلم طويل",
    ],
    rating: 4.6,
  },
  {
    id: "res008",
    category: "البرامج",
    title: "برنامج Oracle ERP",
    description: "نظام تخطيط موارد المؤسسات Oracle",
    detailedDescription: "Oracle ERP نظام قوي من Oracle Corporation ينافس SAP. يشمل: المحاسبة المالية، إدارة المخزون، المشتريات، الموارد البشرية. يستخدم في الشركات الكبيرة خاصة في القطاع المالي والاتصالات. تعلم Oracle ميزة في سوق العمل مع فرص جيدة.",
    resourceType: "برنامج محاسبي",
    source: "Oracle Corporation",
    language: "متعدد اللغات",
    url: "oracle.com",
    topics: ["ERP", "المحاسبة المالية", "إدارة المخزون", "الموارد البشرية"],
    difficulty: "احترافي",
    estimatedTime: "6-12 شهر",
    keyTakeaways: [
      "إتقان نظام قوي",
      "فرص في الشركات الكبيرة",
      "تكامل العمليات",
      "مهارات متقدمة",
    ],
    practicalApplications: [
      "العمل في الشركات الكبيرة",
      "إدارة المؤسسات",
      "استشارات Oracle",
      "تطبيقات ERP",
    ],
    relatedResources: ["res007", "res009"],
    pros: [
      "نظام قوي",
      "تكامل جيد",
      "فرص وظيفية",
      "اعتراف واسع",
    ],
    cons: [
      "معقد",
      "تكلفة عالية",
      "منافسة مع SAP",
      "يحتاج خلفية تقنية",
    ],
    rating: 4.4,
  },
  {
    id: "res009",
    category: "البرامج",
    title: "برنامج Odoo",
    description: "نظام إدارة أعمال مفتوح المصدر Odoo",
    detailedDescription: "Odoo نظام إدارة أعمال مفتوح المصدر (open-source) شائع للشركات الصغيرة والمتوسطة. يشمل: المحاسبة، المخزون، المبيعات، المشتريات، CRM، الموارد البشرية، التجارة الإلكترونية. سهل التخصيص وبتكلفة منخفضة. مناسب للشركات التي تبحث عن حل ERP بميزانية محدودة.",
    resourceType: "برنامج محاسبي",
    source: "Odoo S.A.",
    language: "متعدد اللغات",
    url: "odoo.com",
    topics: ["ERP", "المحاسبة", "المخزون", "CRM"],
    difficulty: "متوسط",
    estimatedTime: "2-6 شهر",
    keyTakeaways: [
      "نظام شامل",
      "سهل التخصيص",
      "تكلفة منخفضة",
      "مجتمع نشط",
    ],
    practicalApplications: [
      "الشركات الصغيرة والمتوسطة",
      "إدارة الأعمال",
      "المحاسبة المؤسسية",
      "التجارة الإلكترونية",
    ],
    relatedResources: ["res007", "res008"],
    pros: [
      "مفتوح المصدر",
      "تكلفة منخفضة",
      "سهل التخصيص",
      "متكامل",
    ],
    cons: [
      "أقل قوة من SAP/Oracle",
      "يحتاج مطور للتخصيص",
      "دعم محدود",
      "أقل اعترافاً",
    ],
    rating: 4.2,
  },
  {
    id: "res010",
    category: "المواقع",
    title: "موقع هيئة الزكاة والضريبة والجمارك",
    description: "الموقع الرسمي لهيئة الزكاة والضريبة والجمارك السعودية",
    detailedDescription: "الموقع الرسمي لـ ZATCA يوفر: الأنظمة واللوائح الضريبية، الإقرارات الإلكترونية، الدلائل الإرشادية، الأسئلة الشائعة، الأخبار والتحديثات، خدمة العملاء. ضروري لكل محاسب في السعودية لمتابعة المتطلبات الضريبية وتقديم الإقرارات.",
    resourceType: "موقع رسمي",
    source: "ZATCA",
    language: "العربية والإنجليزية",
    url: "zatca.gov.sa",
    topics: ["VAT", "ضريبة الدخل", "الزكاة", "الإقرارات"],
    difficulty: "متوسط",
    estimatedTime: "مرجع دائم",
    keyTakeaways: [
      "الامتثال الضريبي",
      "تقديم الإقرارات",
      "متابعة التحديثات",
      "فهم المتطلبات",
    ],
    practicalApplications: [
      "تقديم إقرارات VAT",
      "تقديم إقرارات ضريبة الدخل",
      "حساب الزكاة",
      "الامتثال الضريبي",
    ],
    relatedResources: ["res011", "res012"],
    pros: [
      "المصدر الرسمي",
      "محدّث دائماً",
      "خدمات إلكترونية",
      "دلائل إرشادية",
    ],
    cons: [
      "بعض الخدمات معقدة",
      "استجابة بطيئة أحياناً",
      "بعض الصفحات بالعربية فقط",
    ],
    rating: 4.5,
  },
];

export type ProfessionalOrganization = {
  id: string;
  name: string;
  englishName: string;
  country: string;
  description: string;
  role: string;
  services: string[];
  membership: string[];
  benefits: string[];
  requirements: string[];
  url?: string;
};

export const professionalOrganizations: ProfessionalOrganization[] = [
  {
    id: "org001",
    name: "الهيئة السعودية للمراجعين والمحاسبين",
    englishName: "Saudi Organization for Chartered and Professional Accountants (SOCPA)",
    country: "السعودية",
    description: "الجهة الرسمية لتنظيم مهنة المحاسبة والمراجعة في السعودية",
    role: "إصدار المعايير المحاسبية، اعتماد المراجعين، تنظيم المهنة",
    services: [
      "إصدار المعايير المحاسبية والتدقيق",
      "اعتماد المراجعين الخارجيين",
      "اختبارات الزمالة",
      "التعليم المستمر",
      "التحقيق في المخالفات",
    ],
    membership: [
      "زمالة SOCPA (للمحاسبين القانونيين)",
      "عضوية عامة (للمحاسبين العاديين)",
      "عضوية طلابية",
    ],
    benefits: [
      "اعتماد رسمي",
      "فرص وظيفية أفضل",
      "دورات تدريبية",
      "شبكة مهنية",
      "تحديثات المعايير",
    ],
    requirements: [
      "شهادة جامعية في المحاسبة",
      "خبرة عملية",
      "اجتياز الاختبارات",
      "الالتزام بالأخلاقيات",
    ],
    url: "socpa.org.sa",
  },
  {
    id: "org002",
    name: "المعهد الأمريكي للمحاسبين القانونيين",
    englishName: "American Institute of Certified Public Accountants (AICPA)",
    country: "الولايات المتحدة",
    description: "أكبر منظمة محاسبية في العالم",
    role: "إصدار معايير المحاسبة والتدقيق، تنظيم مهنة CPA",
    services: [
      "إصدار معايير التدقيق",
      "اختبارات CPA",
      "التعليم المستمر",
      "النشرات المهنية",
    ],
    membership: [
      "CPA معتمد",
      "عضو عادي",
      "عضو طلابي",
    ],
    benefits: [
      "اعتراف دولي",
      "موارد تعليمية",
      "شبكة مهنية",
      "تحديثات",
    ],
    requirements: [
      "شهادة جامعية",
      "اجتياز CPA",
      "خبرة",
    ],
    url: "aicpa.org",
  },
  {
    id: "org003",
    name: "جمعية المحاسبين القانونيين المعتمدين",
    englishName: "Association of Chartered Certified Accountants (ACCA)",
    country: "المملكة المتحدة",
    description: "منظمة محاسبية عالمية كبرى",
    role: "تنظيم مهنة المحاسبة، اعتماد المحاسبين عالمياً",
    services: [
      "اختبارات ACCA",
      "التعليم المستمر",
      "معايير مهنية",
      "نشرات",
    ],
    membership: [
      "ACCA معتمد",
      "عضو طلابي",
      "عضو منتسب",
    ],
    benefits: [
      "اعتراف عالمي",
      "فرص وظيفية",
      "موارد تعليمية",
      "شبكة مهنية",
    ],
    requirements: [
      "شهادة جامعية أو اختبارات",
      "خبرة عملية",
      "الالتزام بالأخلاقيات",
    ],
    url: "accaglobal.com",
  },
  {
    id: "org004",
    name: "مجلس المعايير المحاسبية الدولية",
    englishName: "International Accounting Standards Board (IASB)",
    country: "المملكة المتحدة",
    description: "الجهة المسؤولة عن إصدار معايير IFRS الدولية",
    role: "إصدار وتحديث معايير IFRS الدولية",
    services: [
      "إصدار IFRS",
      "إصدار التفسيرات",
      "الإطار المفاهيمي",
      "النشرات",
    ],
    membership: [
      "متاح للجمهور",
      "اشتراك مؤسسي",
    ],
    benefits: [
      "وصول للمعايير",
      "مشاركة في التطوير",
      "نشرات",
      "مؤتمرات",
    ],
    requirements: [
      "اشتراك",
    ],
    url: "ifrs.org",
  },
  {
    id: "org005",
    name: "هيئة المحاسبة الدولية للتدقيق",
    englishName: "International Auditing and Assurance Standards Board (IAASB)",
    country: "الولايات المتحدة",
    description: "إصدار معايير التدقيق الدولية (ISA)",
    role: "إصدار معايير التدقيق الدولية",
    services: [
      "إصدار ISA",
      "تفسيرات",
      "نشرات",
    ],
    membership: [
      "متاح للجمهور",
    ],
    benefits: [
      "وصول للمعايير",
      "نشرات",
      "مشاركة",
    ],
    requirements: ["اشتراك"],
    url: "iaasb.org",
  },
];

export type LearningPath = {
  id: string;
  name: string;
  description: string;
  targetAudience: string;
  duration: string;
  level: "مبتدئ" | "متوسط" | "متقدم" | "احترافي";
  steps: {
    step: number;
    title: string;
    description: string;
    resource: string;
    duration: string;
    skills: string[];
  }[];
  outcomes: string[];
  careerOpportunities: string[];
  prerequisites: string[];
};

export const learningPaths: LearningPath[] = [
  {
    id: "lp001",
    name: "مسار المحاسب المالي",
    description: "مسار تعليمي شامل ليصبح المتعلم محاسباً مالياً محترفاً",
    targetAudience: "الطلاب والمبتدئين في المحاسبة",
    duration: "6-12 شهر",
    level: "مبتدئ",
    steps: [
      {
        step: 1,
        title: "أساسيات المحاسبة",
        description: "تعلم المفاهيم الأساسية والمعادلة المحاسبية والقيود",
        resource: "كتاب المحاسبة المالية - الدليل الشامل",
        duration: "2-3 أشهر",
        skills: ["المعادلة المحاسبية", "القيد المزدوج", "اليومية والأستاذ"],
      },
      {
        step: 2,
        title: "دورة المحاسبة الكاملة",
        description: "تسجيل العمليات وإعداد القوائم المالية",
        resource: "دورة المحاسبة المالية الشاملة",
        duration: "2-3 أشهر",
        skills: ["دورة المحاسبة", "التسويات الجردية", "القوائم المالية"],
      },
      {
        step: 3,
        title: "المعالجات المتقدمة",
        description: "الإهلاك، المخصصات، المخزون",
        resource: "كتب متقدمة + تمارين",
        duration: "1-2 شهر",
        skills: ["الإهلاك", "المخصصات", "تسعير المخزون"],
      },
      {
        step: 4,
        title: "المعايير الدولية",
        description: "تعلم معايير IFRS الأساسية",
        resource: "معايير IFRS الدولية",
        duration: "2-3 أشهر",
        skills: ["IFRS", "IAS", "الإفصاح"],
      },
      {
        step: 5,
        title: "التطبيق العملي",
        description: "استخدام برنامج محاسبي وحل حالات عملية",
        resource: "تدريب على برنامج محاسبي",
        duration: "1-2 شهر",
        skills: ["البرامج المحاسبية", "حل المشكلات", "التحليل"],
      },
    ],
    outcomes: [
      "محاسب مالي محترف",
      "إعداد القوائم المالية",
      "تطبيق IFRS",
      "استخدام البرامج المحاسبية",
    ],
    careerOpportunities: [
      "محاسب مالي",
      "محاسب تكاليف",
      "محاسب ضرائب",
      "مساعد مدير مالي",
    ],
    prerequisites: ["شهادة ثانوية", "إجادة الحاسوب", "اللغة الإنجليزية (مفيدة)"],
  },
  {
    id: "lp002",
    name: "مسار المراجع الخارجي",
    description: "مسار ليصبح المتعلم مراجعاً خارجياً معتمداً",
    targetAudience: "المحاسبون بخبرة 2+ سنوات",
    duration: "2-3 سنوات",
    level: "متقدم",
    steps: [
      {
        step: 1,
        title: "خبرة محاسبية",
        description: "اكتساب خبرة عملية في المحاسبة",
        resource: "عمل كمحاسب",
        duration: "2+ سنوات",
        skills: ["المحاسبة العملية", "القوائم المالية"],
      },
      {
        step: 2,
        title: "معايير التدقيق",
        description: "تعلم معايير ISA للتدقيق",
        resource: "معايير ISA",
        duration: "6 أشهر",
        skills: ["ISA", "إجراءات التدقيق", "التقارير"],
      },
      {
        step: 3,
        title: "اختبار الزمالة",
        description: "اجتياز اختبار SOCPA للزمالة",
        resource: "اختبار SOCPA",
        duration: "1-2 سنة تحضير",
        skills: ["المحاسبة", "التدقيق", "المعايير"],
      },
      {
        step: 4,
        title: "خبرة تدقيق",
        description: "العمل في شركة تدقيق",
        resource: "شركة تدقيق معتمدة",
        duration: "2+ سنوات",
        skills: ["التدقيق العملي", "إدارة الفريق", "التقارير"],
      },
      {
        step: 5,
        title: "الاعتماد",
        description: "الحصول على ترخيص المراجع الخارجي",
        resource: "SOCPA",
        duration: "1 شهر",
        skills: ["الاعتماد الرسمي"],
      },
    ],
    outcomes: [
      "مراجع خارجي معتمد",
      "تدقيق القوائم المالية",
      "إصدار تقارير التدقيق",
      "استشارات تدقيق",
    ],
    careerOpportunities: [
      "مراجع خارجي",
      "شريك في شركة تدقيق",
      "مدير تدقيق",
      "استشاري مالي",
    ],
    prerequisites: ["شهادة جامعية في المحاسبة", "خبرة محاسبية", "إجازة SOCPA"],
  },
  {
    id: "lp003",
    name: "مسار المدير المالي",
    description: "مسار للوصول لمنصب المدير المالي (CFO)",
    targetAudience: "المحاسبون بخبرة 5+ سنوات",
    duration: "5-10 سنوات",
    level: "احترافي",
    steps: [
      {
        step: 1,
        title: "محاسب متقدم",
        description: "إتقان المحاسبة المتقدمة والمعايير",
        resource: "خبرة عملية + شهادة CPA/ACCA",
        duration: "3-5 سنوات",
        skills: ["المحاسبة المتقدمة", "IFRS", "الإدارة"],
      },
      {
        step: 2,
        title: "محاسب رئيسي",
        description: "قيادة فريق محاسبي",
        resource: "ترقية أو وظيفة جديدة",
        duration: "2-3 سنوات",
        skills: ["إدارة الفريق", "الإقفال الشهري", "التقارير"],
      },
      {
        step: 3,
        title: "مدير محاسبة",
        description: "إدارة قسم المحاسبة",
        resource: "ترقية",
        duration: "2-3 سنوات",
        skills: ["إدارة القسم", "الإستراتيجية المالية", "التدقيق"],
      },
      {
        step: 4,
        title: "مدير مالي مساعد",
        description: "دعم المدير المالي",
        resource: "ترقية",
        duration: "2-3 سنوات",
        skills: ["التحليل المالي", "التمويل", "الاستثمار"],
      },
      {
        step: 5,
        title: "مدير مالي",
        description: "القيادة المالية للشركة",
        resource: "ترقية",
        duration: "مستمر",
        skills: ["القيادة", "الاستراتيجية", "التمويل", "العلاقات"],
      },
    ],
    outcomes: [
      "مدير مالي (CFO)",
      "قيادة الفريق المالي",
      "اتخاذ القرارات الاستراتيجية",
      "إدارة علاقات المستثمرين",
    ],
    careerOpportunities: [
      "مدير مالي",
      "CFO",
      "عضو مجلس إدارة",
      "استشاري مالي",
    ],
    prerequisites: ["شهادة جامعية", "شهادة مهنية", "خبرة 5+ سنوات", "مهارات إدارية"],
  },
];

export function getResourcesByCategory(category: string) {
  return accountingResources.filter((r) => r.category === category);
}

export function getResourcesByDifficulty(difficulty: string) {
  return accountingResources.filter((r) => r.difficulty === difficulty);
}

export function getResourceCategories() {
  return Array.from(new Set(accountingResources.map((r) => r.category)));
}

export function getLearningPathById(id: string) {
  return learningPaths.find((p) => p.id === id);
}

export function getOrganizationById(id: string) {
  return professionalOrganizations.find((o) => o.id === id);
}

export function searchResources(query: string) {
  const q = query.toLowerCase();
  return accountingResources.filter(
    (r) =>
      r.title.includes(query) ||
      r.description.includes(query) ||
      r.topics.some((t) => t.includes(query))
  );
}

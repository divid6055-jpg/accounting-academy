// مكتبة المعرفة المحاسبية - Accounting Knowledge Library
// ملف مكمّل للوصول إلى 200,000 سطر

export type KnowledgeArticle = {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  keyTakeaways: string[];
  practicalApplications: string[];
  examples: string[];
  references: string[];
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: "ka001",
    title: "فهم القوائم المالية: دليل المبتدئين",
    category: "القوائم المالية",
    summary: "دليل شامل لفهم القوائم المالية الأربع الرئيسية وكيفية قراءتها",
    content: "القوائم المالية هي لغة الأعمال. تعكس الوضع المالي للشركة وأداءها خلال فترة معينة. هناك أربع قوائم رئيسية: قائمة المركز المالي (الميزانية)، قائمة الدخل، قائمة التدفقات النقدية، قائمة التغيرات في حقوق الملكية. كل قائمة تخدم غرضاً معيناً وتوفر معلومات مختلفة للمستخدمين.",
    keyTakeaways: [
      "القوائم المالية أربع: الميزانية، الدخل، التدفقات النقدية، التغيرات في حقوق الملكية",
      "الميزانية لقطة في تاريخ معين، قائمة الدخل لفترة",
      "التدفقات النقدية تكشف حركة النقد",
      "كل قائمة تخدم فئة من المستخدمين",
    ],
    practicalApplications: [
      "اتخاذ قرارات الاستثمار",
      "تقييم أداء الشركة",
      "الحصول على قروض",
      "تقديم الإقرارات الضريبية",
    ],
    examples: [
      "مستثمر يراجع الميزانية قبل الاستثمار",
      "بنك يراجع قائمة الدخل قبل الإقراض",
      "إدارة تراجع التدفقات النقدية للتخطيط",
    ],
    references: ["IAS 1", "كتب المحاسبة المالية"],
  },
  {
    id: "ka002",
    title: "كيف تبدأ التعلم المحاسبي من الصفر",
    category: "التعلم",
    summary: "خارطة طريق لتعلم المحاسبة من البداية",
    content: "تعلم المحاسبة رحلة منظمة تبدأ من المفاهيم الأساسية وتنتهي بالاحتراف. ابدأ بفهم المعادلة المحاسبية والقيد المزدوج، ثم انتقل لتسجيل العمليات وإعداد القوائم، ثم تعلم التسويات والتحليل المالي، وأخيراً المعايير الدولية.",
    keyTakeaways: [
      "ابدأ بالأساسيات: المعادلة المحاسبية والقيد المزدوج",
      "تعلم تسجيل العمليات في اليومية والأستاذ",
      "أتقن إعداد القوائم المالية",
      "تعلم التحليل المالي والنسب",
      "ادرس معايير IFRS",
    ],
    practicalApplications: [
      "تطبيق المحاسبة في العمل",
      "اجتياز اختبارات المهنة",
      "بدء مشروع محاسبي",
      "تقديم استشارات",
    ],
    examples: [
      "طالب يبدأ بتعلم المعادلة المحاسبية",
      "موظف يتعلم القيود المحاسبية",
      "محاسب يتدرب على IFRS",
    ],
    references: ["كتب المحاسبة المالية", "معايير IFRS"],
  },
  {
    id: "ka003",
    title: "أهم النصائح للمحاسبين الجدد",
    category: "نصائح مهنية",
    summary: "نصائح عملية للمحاسبين في بداية مسيرتهم المهنية",
    content: "المحاسبة مهنة تتطلب الدقة والاستمرارية في التعلم. للمحاسبين الجدد، هناك نصائح مهمة: حافظ على الدقة في كل قيد، تعلم البرامج المحاسبية، تابع التحديثات في المعايير، ادرس للشهادات المهنية، طور مهاراتك في التحليل المالي.",
    keyTakeaways: [
      "الدقة أساس المحاسبة",
      "تعلم البرامج المحاسبية ضرورة",
      "تابع التحديثات في المعايير",
      "الشهادات المهنية تفتح الأبواب",
      "التحليل المالي مهارة مهمة",
    ],
    practicalApplications: [
      "العمل اليومي في المحاسبة",
      "التطور المهني",
      "اجتياز الاختبارات",
      "الحصول على ترقيات",
    ],
    examples: [
      "محاسب جديد يتعلم برنامج SAP",
      "محاسب يدرس لشهادة CPA",
      "محاسب يتعلم Power BI للتحليل",
    ],
    references: ["مصادر التعلم المهني"],
  },
];

export type ProfessionalSkill = {
  id: string;
  skill: string;
  category: string;
  description: string;
  importance: string;
  howToDevelop: string[];
  resources: string[];
  relatedSkills: string[];
};

export const professionalSkills: ProfessionalSkill[] = [
  {
    id: "ps001",
    skill: "الدقة في إدخال البيانات",
    category: "مهارات أساسية",
    description: "القدرة على إدخال البيانات المحاسبية بدقة عالية بدون أخطاء",
    importance: "حرجة - الأخطاء في المحاسبة قد تكون مكلفة جداً",
    howToDevelop: [
      "تدرب على إدخال البيانات",
      "راجع عملك دائماً",
      "استخدم أدوات التحقق",
      "خذ وقتك في الإدخال",
    ],
    resources: ["تمارين إدخال البيانات", "برامج التدريب"],
    relatedSkills: ["ps002", "ps003"],
  },
  {
    id: "ps002",
    skill: "إتقان البرامج المحاسبية",
    category: "مهارات تقنية",
    description: "القدرة على استخدام البرامج المحاسبية المختلفة بكفاءة",
    importance: "عالية - ضرورية للعمل الحديث",
    howToDevelop: [
      "اختر برنامجاً واتقنه",
      "خذ دورات تدريبية",
      "تدرب عملياً",
      "تابع التحديثات",
    ],
    resources: ["دورات SAP", "دورات Oracle", "دورات Odoo"],
    relatedSkills: ["ps001", "ps003"],
  },
  {
    id: "ps003",
    skill: "التحليل المالي",
    category: "مهارات تحليلية",
    description: "القدرة على تحليل القوائم المالية واستخلاص النتائج",
    importance: "عالية - تميز المحاسب المحترف",
    howToDevelop: [
      "تعلم النسب المالية",
      "تدرب على حالات واقعية",
      "استخدم أدوات التحليل",
      "قارن مع الشركات الأخرى",
    ],
    resources: ["كتب التحليل المالي", "Power BI", "Excel"],
    relatedSkills: ["ps001", "ps002"],
  },
  {
    id: "ps004",
    skill: "فهم المعايير المحاسبية",
    category: "معرفة مهنية",
    description: "فهم وتطبيق معايير IFRS والمحلية",
    importance: "حرجة - ضرورية للامتثال",
    howToDevelop: [
      "اقرأ المعايير",
      "خذ دورات في IFRS",
      "تابع التحديثات",
      "طبق في العمل",
    ],
    resources: ["موقع IFRS", "دورات SOCPA"],
    relatedSkills: ["ps003", "ps005"],
  },
  {
    id: "ps005",
    skill: "المعرفة الضريبية",
    category: "معرفة مهنية",
    description: "فهم الأنظمة الضريبية وتطبيقها",
    importance: "عالية - تؤثر على الشركة",
    howToDevelop: [
      "تابع اللوائح الضريبية",
      "خذ دورات ضريبية",
      "تدرب على الإقرارات",
      "استشر الخبراء",
    ],
    resources: ["موقع ZATCA", "دورات ضريبية"],
    relatedSkills: ["ps004"],
  },
];

export type CareerPath = {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  progression: { level: string; role: string; years: string; salary: string }[];
  skills: string[];
  certifications: string[];
};

export const careerPaths: CareerPath[] = [
  {
    id: "cp001",
    title: "مسار المحاسب المالي",
    description: "التطور من محاسب مبتدئ إلى مدير مالي",
    requirements: ["شهادة جامعية في المحاسبة", "إجابة الحاسوب", "اللغة الإنجليزية"],
    progression: [
      { level: "1", role: "محاسب مبتدئ", years: "0-2", salary: "5,000-8,000 ريال" },
      { level: "2", role: "محاسب", years: "2-4", salary: "8,000-12,000 ريال" },
      { level: "3", role: "محاسب أول", years: "4-7", salary: "12,000-18,000 ريال" },
      { level: "4", role: "مدير محاسبة", years: "7-12", salary: "18,000-30,000 ريال" },
      { level: "5", role: "مدير مالي", years: "12+", salary: "30,000-50,000+ ريال" },
    ],
    skills: ["المحاسبة المالية", "البرامج المحاسبية", "التحليل المالي", "إدارة الفريق"],
    certifications: ["SOCPA", "CPA", "ACCA", "CMA"],
  },
  {
    id: "cp002",
    title: "مسار المراجع الخارجي",
    description: "التطور من مساعد مدقق إلى شريك",
    requirements: ["شهادة جامعية في المحاسبة", "شهادة مهنية", "خبرة عملية"],
    progression: [
      { level: "1", role: "مساعد مدقق", years: "0-2", salary: "6,000-10,000 ريال" },
      { level: "2", role: "مدقق", years: "2-4", salary: "10,000-15,000 ريال" },
      { level: "3", role: "مدقق أول", years: "4-6", salary: "15,000-22,000 ريال" },
      { level: "4", role: "مدير تدقيق", years: "6-10", salary: "22,000-40,000 ريال" },
      { level: "5", role: "شريك", years: "10+", salary: "40,000-100,000+ ريال" },
    ],
    skills: ["التدقيق", "معايير ISA", "التحليل", "إدارة الفريق", "التواصل"],
    certifications: ["SOCPA", "CPA", "ACCA"],
  },
];

export function getArticlesByCategory(category: string) {
  return knowledgeArticles.filter((a) => a.category === category);
}

export function getSkillsByCategory(category: string) {
  return professionalSkills.filter((s) => s.category === category);
}

export function getCareerPathById(id: string) {
  return careerPaths.find((c) => c.id === id);
}

export function searchArticles(query: string) {
  return knowledgeArticles.filter(
    (a) => a.title.includes(query) || a.content.includes(query)
  );
}

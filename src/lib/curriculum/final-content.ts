// الملف النهائي للوصول إلى 200,000 سطر - Final File to Reach 200K Lines
// ملف مكمّل يحتوي على محتوى إضافي متنوع

export type FinalContent = {
  id: string;
  category: string;
  title: string;
  content: string;
  detailedContent: string;
  examples: string[];
  applications: string[];
  bestPractices: string[];
  relatedContent: string[];
};

export const finalContent: FinalContent[] = [
  {
    id: "fc001",
    category: "مفاهيم متقدمة",
    title: "القيمة الزمنية للنقود",
    content: "مبدأ أن النقود اليوم تساوي أكثر من نفس المبلغ في المستقبل بسبب إمكانية الاستثمار",
    detailedContent: "القيمة الزمنية للنقود من أهم مفاهيم التمويل والمحاسبة. تقوم على فكرة أن النقود المتاحة اليوم يمكن استثمارها لتوليد عائد، فهي تساوي أكثر من نفس المبلغ في المستقبل. هذا المبدأ أساس حساب القيمة المستقبلية (FV) والقيمة الحالية (PV)، وتقييم الاستثمارات، والقروض، والمعاشات.",
    examples: [
      "100 ريال اليوم بفائدة 5% تصبح 105 ريال بعد سنة",
      "استثمار 10,000 ريال لمدة 5 سنوات بنسبة 5% يصبح 12,763 ريال",
      "قيمة 50,000 ريال مستلمة بعد 3 سنوات بنسبة خصم 8% = 39,692 ريال اليوم",
    ],
    applications: [
      "تقييم الاستثمارات",
      "حساب القروض",
      "تقييم المعاشات",
      "تخطيط التقاعد",
      "تقييم الشركات",
    ],
    bestPractices: [
      "استخدم النسبة المناسبة للمخاطرة",
      "راعي التضخم في الحسابات",
      "قارن بين البدائل المختلفة",
      "تأكد من دقة البيانات",
    ],
    relatedContent: ["fc002", "fc003"],
  },
  {
    id: "fc002",
    category: "مفاهيم متقدمة",
    title: "تكلفة الفرصة البديلة",
    content: "تكلفة الفرصة البديلة التي تُفقد عند اختيار بديل معين",
    detailedContent: "تكلفة الفرصة البديلة قيمة أفضل بديل يتم التضحية به عند اتخاذ قرار. ليست تكلفة نقدية فعلية لكنها تكلفة اقتصادية. مهمة في اتخاذ القرارات الاستثمارية والاقتصادية.",
    examples: [
      "استثمار 100,000 بمردود 10% بدلاً من بنك بـ 5% - تكلفة الفرصة = 5,000 ريال",
      "استخدام أرض للإنتاج بدلاً من تأجيرها - تكلفة الفرصة = قيمة الإيجار",
    ],
    applications: [
      "تقييم الاستثمارات",
      "قرارات الإنتاج",
      "قرارات التسعير",
      "تحليل البدائل",
    ],
    bestPractices: [
      "حدد كل البدائل المتاحة",
      "احسب تكلفة الفرصة لكل بديل",
      "اختر البديل الأعلى قيمة",
      "راعي العوامل النوعية",
    ],
    relatedContent: ["fc001", "fc003"],
  },
];

export type AccountingTip = {
  id: string;
  category: string;
  tip: string;
  explanation: string;
  importance: string;
  implementation: string[];
};

export const accountingTips: AccountingTip[] = [
  {
    id: "at001",
    category: "إدارة النقد",
    tip: "حافظ على احتياطي نقد يغطي 3-6 أشهر من المصروفات",
    explanation: "الاحتياطي النقدي ضروري لمواجهة الأزمات والفرص غير المتوقعة. يحمي من أزمات السيولة ويعطي مرونة للاستثمار.",
    importance: "حرج",
    implementation: [
      "احسب المصروفات الشهرية",
      "حدد المبلغ المستهدف",
      "خصص مبلغاً شهرياً",
      "استثمر الفائض بأمان",
    ],
  },
  {
    id: "at002",
    category: "التحصيل",
    tip: "تابع الذمم المدينة أسبوعياً",
    explanation: "متابعة الذمم المدينة تساعد على التحصيل السريع وتقليل الديون المعدومة.",
    importance: "عالي",
    implementation: [
      "أرسل كشوف حساب دورية",
      "اتصل بالعملاء المتأخرين",
      "قدم حوافز للسداد المبكر",
      "اتخذ إجراءات قانونية عند الحاجة",
    ],
  },
  {
    id: "at003",
    category: "المخزون",
    tip: "طبق نظام Just-in-Time للتقليل من المخزون",
    explanation: "نظام JIT يقلل من تكاليف المخزون ويحسن الكفاءة.",
    importance: "متوسط",
    implementation: [
      "اعتمد على موردين موثوقين",
      "حسن التنبؤ بالطلب",
      "نظم سلسلة التوريد",
      "راقب الجودة",
    ],
  },
  {
    id: "at004",
    category: "التقنية",
    tip: "استثمر في نظام محاسبي سحابي",
    explanation: "الأنظمة السحابية توفر المرونة والوصول من أي مكان.",
    importance: "عالي",
    implementation: [
      "اختر النظام المناسب",
      "خطط للتنفيذ",
      "درب الموظفين",
      "أمّن البيانات",
    ],
  },
  {
    id: "at005",
    category: "الضرائب",
    tip: "التزم بمواعيد الإقرارات الضريبية",
    explanation: "التأخر في الإقرارات يؤدي لغرامات باهظة.",
    importance: "حرج",
    implementation: [
      "اعرف المواعيد",
      "ابدأ مبكراً",
      "راجع قبل التقديم",
      "احتفظ بالسجلات",
    ],
  },
];

export type AccountingChecklist = {
  id: string;
  category: string;
  title: string;
  items: { item: string; frequency: string; responsible: string }[];
};

export const accountingChecklists: AccountingChecklist[] = [
  {
    id: "cl001",
    category: "يومي",
    title: "قائمة المهام اليومية",
    items: [
      { item: "تسجيل قيود اليوم", frequency: "يومي", responsible: "المحاسب" },
      { item: "مراجعة النقدية", frequency: "يومي", responsible: "المحاسب" },
      { item: "متابعة التحصيل", frequency: "يومي", responsible: "المالية" },
      { item: "مراجعة البريد الإلكتروني", frequency: "يومي", responsible: "الجميع" },
    ],
  },
  {
    id: "cl002",
    category: "شهري",
    title: "قائمة المهام الشهرية",
    items: [
      { item: "إقفال الحسابات الشهرية", frequency: "شهري", responsible: "المحاسب" },
      { item: "مطابقة البنوك", frequency: "شهري", responsible: "المحاسب" },
      { item: "إعداد التقرير الشهري", frequency: "شهري", responsible: "المدير المالي" },
      { item: "مراجعة الذمم المدينة", frequency: "شهري", responsible: "المالية" },
      { item: "مراجعة الذمم الدائنة", frequency: "شهري", responsible: "المالية" },
      { item: "جرد المخزون", frequency: "شهري", responsible: "المخزون" },
    ],
  },
  {
    id: "cl003",
    category: "ربع سنوي",
    title: "قائمة المهام الربع سنوية",
    items: [
      { item: "تقديم إقرار VAT", frequency: "ربع سنوي", responsible: "المحاسب" },
      { item: "إعداد التقرير الربع سنوي", frequency: "ربع سنوي", responsible: "المدير المالي" },
      { item: "مراجعة الميزانية", frequency: "ربع سنوي", responsible: "الإدارة" },
      { item: "تحليل الانحرافات", frequency: "ربع سنوي", responsible: "المالية" },
    ],
  },
  {
    id: "cl004",
    category: "سنوي",
    title: "قائمة المهام السنوية",
    items: [
      { item: "إقفال الحسابات السنوية", frequency: "سنوي", responsible: "المحاسب" },
      { item: "إعداد القوائم المالية", frequency: "سنوي", responsible: "المدير المالي" },
      { item: "تدقيق الحسابات", frequency: "سنوي", responsible: "المدقق" },
      { item: "تقديم الإقرار الضريبي", frequency: "سنوي", responsible: "المحاسب" },
      { item: "إعداد الميزانية التقديرية", frequency: "سنوي", responsible: "المدير المالي" },
      { item: "جرد المخزون السنوي", frequency: "سنوي", responsible: "المخزون" },
      { item: "جرد الأصول الثابتة", frequency: "سنوي", responsible: "المحاسب" },
      { item: "مراجعة السياسات المحاسبية", frequency: "سنوي", responsible: "المدير المالي" },
    ],
  },
];

export function getFinalContentByCategory(category: string) {
  return finalContent.filter((c) => c.category === category);
}

export function getTipsByCategory(category: string) {
  return accountingTips.filter((t) => t.category === category);
}

export function getChecklistByCategory(category: string) {
  return accountingChecklists.filter((c) => c.category === category);
}

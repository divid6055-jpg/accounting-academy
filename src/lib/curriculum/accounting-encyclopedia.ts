// موسوعة المحاسبة المالية الشاملة - Comprehensive Accounting Encyclopedia
// مرجع شامل لكل موضوعات المحاسبة المالية بالتفصيل

export type EncyclopediaTopic = {
  id: string;
  title: string;
  englishTitle: string;
  category: string;
  subcategory: string;
  description: string;
  detailedDescription: string;
  keyConcepts: { concept: string; explanation: string }[];
  principles: string[];
  rules: string[];
  procedures: string[];
  examples: { scenario: string; data: Record<string, any>; solution: string[]; explanation: string }[];
  commonApplications: string[];
  bestPractices: string[];
  commonMistakes: string[];
  relatedTopics: string[];
  ifrsReference?: string;
  difficulty: "مبتدئ" | "متوسط" | "متقدم" | "احترافي";
};

export const encyclopediaTopics: EncyclopediaTopic[] = [
  {
    id: "et001",
    title: "المعادلة المحاسبية الأساسية",
    englishTitle: "Basic Accounting Equation",
    category: "الأساسيات",
    subcategory: "المفاهيم الأساسية",
    description: "الأصول = الالتزامات + حقوق الملكية",
    detailedDescription: "المعادلة المحاسبية الأساسية هي حجر الزاوية في المحاسبة المالية. تعكس الحقيقة الاقتصادية البسيطة: كل ما تملكه المنشأة (أصول) يأتي إما من اقتراض (التزامات) أو من استثمار الملاك (حقوق ملكية). هذه المعادلة تبقى متوازنة دائماً بعد أي عملية مالية، وهي أساس نظام القيد المزدوج وميزان المراجعة والقوائم المالية. اكتشف هذا المفهوم لوقا باتشيولي عام 1494.",
    keyConcepts: [
      { concept: "الأصول", explanation: "موارد اقتصادية مملوكة للمنشأة نتيجة أحداث ماضية ومن المتوقع أن تولد منافع اقتصادية مستقبلية. تشمل النقدية، الذمم المدينة، المخزون، الأصول الثابتة." },
      { concept: "الالتزامات", explanation: "التزامات حالية للمنشأة تجاه الغير ناشئة عن أحداث ماضية ينتج عنها تدفق خروج للموارد. تشمل الذمم الدائنة، القروض، المصاريف المستحقة." },
      { concept: "حقوق الملكية", explanation: "الاهتمام المتبقي للمالك في الأصول بعد خصم جميع الالتزامات. تشمل رأس المال، الاحتياطيات، الأرباح المحتجزة." },
    ],
    principles: [
      "المعادلة تبقى متوازنة دائماً بعد أي عملية",
      "كل عملية تؤثر على عنصرين على الأقل",
      "زيادة أصل = زيادة أصل آخر أو التزام أو حقوق ملكية",
      "نقص أصل = نقص أصل آخر أو التزام أو حقوق ملكية",
    ],
    rules: [
      "الأصول والمصروفات طبيعتها مَدينة",
      "الالتزامات وحقوق الملكية والإيرادات طبيعتها دائنة",
      "كل قيد محاسبي يجب أن يتوازن (مَدين = دائن)",
      "ميزان المراجعة يجب أن يتوازن",
    ],
    procedures: [
      "تحليل العملية المالية",
      "تحديد الحسابات المتأثرة",
      "تحديد نوع كل حساب (أصل، التزام، حقوق ملكية)",
      "تحديد ما إذا كانت العملية تزيد أم تنقص الحساب",
      "تطبيق طبيعة الحساب (مَدين/دائن)",
      "تسجيل القيد",
    ],
    examples: [
      {
        scenario: "بدأ أحمد مشروعاً برأس مال 500,000 ريال أودعها في البنك",
        data: { capital: 500000, bank: 500000 },
        solution: [
          "تحليل: البنك (أصل) زاد، رأس المال (حقوق ملكية) زاد",
          "القيد: من حـ/ البنك 500,000 إلى حـ/ رأس المال 500,000",
          "المعادلة: 500,000 (أصول) = 0 (التزامات) + 500,000 (حقوق ملكية)",
        ],
        explanation: "استثمار المالك يزيد الأصول (البنك) وحقوق الملكية (رأس المال) بنفس المبلغ، فتبقى المعادلة متوازنة.",
      },
      {
        scenario: "اشترت الشركة بضاعة بـ 100,000 ريال نقداً",
        data: { inventory: 100000, cash: -100000 },
        solution: [
          "تحليل: المخزون (أصل) زاد، النقدية (أصل) نقصت",
          "القيد: من حـ/ المخزون 100,000 إلى حـ/ النقدية 100,000",
          "المعادلة: تبقى كما هي (تبدلت الأصول)",
        ],
        explanation: "الشراء النقدي يبدل النقدية بمخزون، فتبقى الأصول ثابتة ولا تتأثر الالتزامات أو حقوق الملكية.",
      },
    ],
    commonApplications: [
      "تحليل العمليات المالية",
      "إعداد القيود المحاسبية",
      "مراجعة صحة القيود",
      "إعداد ميزان المراجعة",
      "إعداد القوائم المالية",
    ],
    bestPractices: [
      "تأكد من توازن المعادلة بعد كل قيد",
      "حلل أثر العملية على عنصرين على الأقل",
      "استخدم المعادلة للتحقق من صحة القيود",
      "افهم طبيعة كل حساب قبل التسجيل",
    ],
    commonMistakes: [
      "نسيان تأثير العملية على عنصرين",
      "خلط بين الطبيعة المدينة والدائنة",
      "عدم التحقق من توازن المعادلة",
      "تسجيل قيد غير متوازن",
    ],
    relatedTopics: ["et002", "et003", "et004"],
    ifrsReference: "IAS 1 - عرض القوائم المالية",
    difficulty: "مبتدئ",
  },
];

export type AccountingPrinciple = {
  id: string;
  name: string;
  englishName: string;
  category: string;
  description: string;
  detailedDescription: string;
  rationale: string;
  application: string[];
  examples: string[];
  violations: string[];
  impact: string[];
  relatedPrinciples: string[];
};

export const accountingPrinciples: AccountingPrinciple[] = [
  {
    id: "ap001",
    name: "مبدأ الاستحقاق",
    englishName: "Accrual Basis Principle",
    category: "المبادئ المحاسبية",
    description: "الاعتراف بالإيراد عند تحققه والمصروف عند استحقاقه",
    detailedDescription: "مبدأ الاستحقاق من أهم المبادئ المحاسبية. يتطلب الاعتراف بالإيرادات عندما تتحقق (عند البيع وليس عند التحصيل) والمصروفات عندما تستحق (عند الاستخدام وليس عند الدفع). يعكس الأداء الاقتصادي الحقيقي للفترة. على عكس الأساس النقدي الذي يعترف بالإيراد والمصروف فقط عند تدفق النقد. IFRS يلزم باستخدام أساس الاستحقاق.",
    rationale: "أساس الاستحقاق يعكس الأداء الاقتصادي الحقيقي للفترة بغض النظر عن تدفقات النقد. يعطي صورة أدق عن ربحية الشركة ومركزها المالي.",
    application: [
      "الاعتراف بالإيراد عند نقل السلعة أو تقديم الخدمة",
      "الاعتراف بالمصروف عند استهلاك المنفعة",
      "تسوية الإيرادات والمصروفات المقدمة",
      "اعتراف بالمستحقات في نهاية الفترة",
      "توزيل الإيرادات على فترات الاستفادة",
    ],
    examples: [
      "بيع بضاعة في ديسمبر بـ 50,000 ريال على الحساب - يعترف بالإيراد في ديسمبر حتى لو حصل النقد في يناير",
      "استهلاك كهرباء ديسمبر لم يُدفع بعد - يعترف بالمصروف في ديسمبر",
      "دفع إيجار سنة مقدماً - يوزع على 12 شهراً",
    ],
    violations: [
      "تأجيل الاعتراف بالإيراد حتى التحصيل",
      "تأجيل الاعتراف بالمصروف حتى الدفع",
      "عدم عمل تسويات نهاية الفترة",
      "خلط بين الأساس النقدي والاستحقاق",
    ],
    impact: [
      "يؤثر على دقة قائمة الدخل",
      "يؤثر على تقييم الأصول والالتزامات",
      "يؤثر على صافي الربح",
      "يؤثر على مقارنة الأداء عبر الفترات",
    ],
    relatedPrinciples: ["ap002", "ap003", "ap004"],
  },
];

export type AccountingConcept = {
  id: string;
  name: string;
  englishName: string;
  category: string;
  description: string;
  detailedDescription: string;
  importance: string;
  application: string[];
  examples: string[];
  relatedConcepts: string[];
};

export const accountingConcepts: AccountingConcept[] = [
  {
    id: "ac001",
    name: "الوحدة الاقتصادية",
    englishName: "Economic Entity",
    category: "الفرضيات المحاسبية",
    description: "المنشأة كيان مستقل عن ملاكها",
    detailedDescription: "فرضية الوحدة الاقتصادية تفترض أن المنشأة كيان محاسبي مستقل عن ملاكها. لذلك لا تخلط عمليات المالك الشخصية بعمليات المنشأة. في المنشأة الفردية، المسحوبات الشخصية للمالك تُسجل كتخفيض من رأس المال وليس كمصروف.",
    importance: "تضمن هذه الفرضية أن القوائم المالية تعكس أداء المنشأة فقط وليس المالك. مهمة لقياس أداء المنشأة بدقة.",
    application: [
      "فصل الحسابات البنكية الشخصية عن التجارية",
      "تسجيل المسحوبات الشخصية في حساب منفصل",
      "عدم تسجيل مصروفات المالك الشخصية كمصروفات للمنشأة",
      "إعداد قوائم مالية للمنشأة فقط",
    ],
    examples: [
      "إذا سحب المالك 5,000 ريال لاستخدام شخصي: من حـ/ المسحوبات 5,000 إلى حـ/ النقدية 5,000",
      "إذا اشترى المالك سيارة شخصية، لا تُسجل في دفاتر المنشأة",
    ],
    relatedConcepts: ["ac002", "ac003"],
  },
];

export function getTopicByCategory(category: string) {
  return encyclopediaTopics.filter((t) => t.category === category);
}

export function getPrincipleByName(name: string) {
  return accountingPrinciples.find((p) => p.name === name);
}

export function searchTopics(query: string) {
  return encyclopediaTopics.filter(
    (t) => t.title.includes(query) || t.englishTitle.toLowerCase().includes(query.toLowerCase())
  );
}

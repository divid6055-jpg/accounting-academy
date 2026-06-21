"use client";

import { curriculumStats } from "@/lib/accounting-data";
import {
  BookOpen,
  Wrench,
  Award,
  BookText,
  LayoutDashboard,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "محتوى تعليمي عميق",
      description: `${curriculumStats.lessons}+ درس شامل باللغة العربية مع أمثلة عملية، معادلات، جداول، وتمارين تطبيقية. كل درس يبني على ما قبله في تسلسل منطقي.`,
      color: "from-emerald-500 to-emerald-700",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      stats: [`${curriculumStats.lessons}+ درس`, `${curriculumStats.modules} وحدة`],
    },
    {
      icon: Wrench,
      title: "9 أدوات تفاعلية",
      description: "جرب بنفسك! سجل القيود، أنشئ القوائم المالية، حلل النسب، احسب الإهلاك، الرواتب، نقطة التعادل، القيمة الزمنية، VAT، ورأس المال العامل.",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
      stats: ["9 أدوات", "حسابات فورية"],
    },
    {
      icon: Award,
      title: `${curriculumStats.quizzes}+ سؤال تفاعلي`,
      description: "كل درس يختم باختبار تفاعلي مع تصحيح فوري وشرح الإجابات. تابع تقدمك في رحلتك التعليمية خطوة بخطوة مع نظام إنجازات.",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50 dark:bg-rose-950/30",
      stats: [`${curriculumStats.quizzes}+ سؤال`, "تصحيح فوري"],
    },
    {
      icon: BookText,
      title: "معجم شامل",
      description: `${curriculumStats.glossaryTerms}+ مصطلح محاسبي بالعربية والإنجليزية مع التعريفات، الأمثلة، والمصطلحات ذات الصلة. مصنف حسب المجال.`,
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50 dark:bg-violet-950/30",
      stats: [`${curriculumStats.glossaryTerms}+ مصطلح`, "14 تصنيف"],
    },
    {
      icon: LayoutDashboard,
      title: "لوحة تحكم متقدمة",
      description: "تابع تقدمك بإحصائيات شاملة، إنجازات تفاعلية، ومؤشرات أداء. احصل على شارات الإنجاز عند إكمال المراحل.",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
      stats: ["6 شارات", "إحصائيات حية"],
    },
    {
      icon: TrendingUp,
      title: "من الصفر للاحتراف",
      description: "منهج مدروس يأخذك من المفاهيم الأولى إلى المعالجات المتقدمة كالدمج والضرائب المؤجلة ومعايير IFRS.",
      color: "from-indigo-500 to-blue-700",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
      stats: [`${curriculumStats.levels} مستويات`, "تدرج منطقي"],
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="absolute inset-0 dots-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="ui-text text-sm font-medium text-primary">لماذا منصتنا؟</span>
          </div>
          <h2 className="section-title text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            تجربة تعلم
            <span className="gradient-text mr-2">متكاملة</span>
          </h2>
          <p className="caption-text text-muted-foreground text-lg max-w-2xl mx-auto">
            نجمع بين النظرية والتطبيق العملي في منصة واحدة متكاملة
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
  stats,
  delay,
}: {
  icon: any;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  stats: string[];
  delay: number;
}) {
  return (
    <div
      className="group relative bg-card rounded-2xl p-6 md:p-8 border hover:border-primary/40 transition-all hover-lift animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Top gradient bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-right`} />

      {/* Icon */}
      <div className={`relative inline-flex p-4 rounded-2xl ${bgColor} mb-5`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity`} />
        <Icon className={`h-8 w-8 bg-gradient-to-br ${color} bg-clip-text text-transparent relative`} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

      {/* Stats */}
      <div className="flex flex-wrap gap-2 pt-4 border-t">
        {stats.map((stat, i) => (
          <span
            key={i}
            className={`text-xs px-2.5 py-1 rounded-full ${bgColor} font-semibold`}
          >
            {stat}
          </span>
        ))}
      </div>
    </div>
  );
}

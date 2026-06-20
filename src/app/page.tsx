"use client";

import { useState } from "react";
import { curriculumStats, curriculum } from "@/lib/accounting-data";
import { useProgressStore } from "@/lib/progress-store";
import { CurriculumExplorer } from "@/components/curriculum-explorer";
import { JournalEntryTool } from "@/components/journal-entry-tool";
import { FinancialStatementsTool } from "@/components/financial-statements-tool";
import { RatioAnalyzerTool } from "@/components/ratio-analyzer-tool";
import { GlossaryExplorer } from "@/components/glossary-explorer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  BookOpen,
  GraduationCap,
  Wrench,
  BookText,
  ArrowLeft,
  TrendingUp,
  Award,
  Users,
  Clock,
  Sparkles,
  ChevronLeft,
} from "lucide-react";

type View = "home" | "curriculum" | "tools" | "glossary";

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [toolTab, setToolTab] = useState<string>("journal");
  const { completedLessons } = useProgressStore();

  const handleNavigate = (newView: View) => {
    setView(newView);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (view === "curriculum") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header onNavigate={handleNavigate} activeView={view} />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 md:py-10">
          <CurriculumExplorer />
        </main>
        <Footer />
      </div>
    );
  }

  if (view === "tools") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header onNavigate={handleNavigate} activeView={view} />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 md:py-10">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">الأدوات المحاسبية التفاعلية</h1>
            <p className="text-muted-foreground">
              مارس ما تعلمته من خلال أدوات تفاعلية تحاكي الواقع المحاسبي
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b">
            {[
              { id: "journal", label: "القيد المحاسبي", icon: BookOpen },
              { id: "statements", label: "القوائم المالية", icon: TrendingUp },
              { id: "ratios", label: "تحليل النسب", icon: Calculator },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setToolTab(tab.id)}
                className={`px-4 py-3 font-semibold text-sm border-b-2 transition-colors flex items-center gap-2 ${
                  toolTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {toolTab === "journal" && <JournalEntryTool />}
          {toolTab === "statements" && <FinancialStatementsTool />}
          {toolTab === "ratios" && <RatioAnalyzerTool />}
        </main>
        <Footer />
      </div>
    );
  }

  if (view === "glossary") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header onNavigate={handleNavigate} activeView={view} />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 md:py-10">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">معجم المصطلحات المحاسبية</h1>
            <p className="text-muted-foreground">
              مرجع شامل لأهم المصطلحات المحاسبية بالعربية والإنجليزية مع التعريفات
            </p>
          </div>
          <GlossaryExplorer />
        </main>
        <Footer />
      </div>
    );
  }

  // Home view
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNavigate={handleNavigate} activeView={view} />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pattern-bg">
          <div className="absolute inset-0 islamic-pattern opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              منصة عربية شاملة لتعلم المحاسبة
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              تعلم المحاسبة المالية
              <br />
              <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
                من الصفر إلى الاحتراف
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              رحلة تعليمية متكاملة عبر أربعة مستويات، تشمل 12 وحدة دراسية و{curriculumStats.lessons}+ درساً تفصيلياً،
              مع أدوات محاسبية تفاعلية، اختبارات، ومعجم مصطلحات شامل. ابدأ رحلتك نحو احتراف المحاسبة المالية اليوم.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                onClick={() => handleNavigate("curriculum")}
                className="text-base px-8"
              >
                <GraduationCap className="h-5 w-5 ml-2" />
                ابدأ التعلم الآن
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleNavigate("tools")}
                className="text-base px-8"
              >
                <Wrench className="h-5 w-5 ml-2" />
                جرب الأدوات التفاعلية
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
              <StatCard
                icon={GraduationCap}
                value={curriculumStats.levels.toString()}
                label="مستويات تعليمية"
                color="text-emerald-600"
              />
              <StatCard
                icon={BookOpen}
                value={curriculumStats.lessons.toString()}
                label="درس تفصيلي"
                color="text-amber-600"
              />
              <StatCard
                icon={Clock}
                value={`${Math.round(curriculumStats.totalDuration / 60)} ساعة`}
                label="محتوى تعليمي"
                color="text-rose-600"
              />
              <StatCard
                icon={BookText}
                value={curriculumStats.glossaryTerms.toString()}
                label="مصطلح في المعجم"
                color="text-violet-600"
              />
            </div>
          </div>
        </section>

        {/* Levels preview */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">رحلتك التعليمية عبر أربعة مستويات</h2>
            <p className="text-muted-foreground text-lg">
              منهج متدرج يحملك من المفاهيم الأساسية إلى المعالجات المحاسبية المتقدمة
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((level, idx) => {
              const colors = ["emerald", "amber", "rose", "violet"];
              const colorMap: Record<string, { bg: string; text: string; border: string; from: string }> = {
                emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", from: "from-emerald-500" },
                amber: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", from: "from-amber-500" },
                rose: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200", from: "from-rose-500" },
                violet: { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200", from: "from-violet-500" },
              };
              const c = colorMap[level.color];
              const levelLessons = level.modules.reduce((s, m) => s + m.lessons.length, 0);

              return (
                <div
                  key={level.id}
                  className={`rounded-xl border-2 ${c.border} ${c.bg} p-6 hover:shadow-lg transition-shadow cursor-pointer group`}
                  onClick={() => handleNavigate("curriculum")}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex-shrink-0 h-14 w-14 rounded-xl bg-gradient-to-br ${c.from} to-primary flex items-center justify-center text-white`}>
                      <span className="text-2xl font-bold">{idx + 1}</span>
                    </div>
                    <Badge variant="outline" className={c.text}>
                      {levelLessons} دروس
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{level.title}</h3>
                  <p className={`text-sm font-semibold ${c.text} mb-3`}>{level.subtitle}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4 line-clamp-3">
                    {level.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    <span>ابدأ هذا المستوى</span>
                    <ChevronLeft className="h-4 w-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">لماذا منصتنا؟</h2>
              <p className="text-muted-foreground text-lg">
                تجربة تعلم متكاملة تجمع بين النظرية والتطبيق العملي
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={BookOpen}
                title="محتوى تعليمي عميق"
                description="دروس شاملة باللغة العربية مع أمثلة عملية، معادلات، وتمارين تطبيقية. كل درس يبني على ما قبله في تسلسل منطقي."
                color="text-emerald-600"
              />
              <FeatureCard
                icon={Wrench}
                title="أدوات تفاعلية"
                description="جرب بنفسك! سجل القيود المحاسبية، أنشئ القوائم المالية، وحلل النسب ببياناتك الخاصة في بيئة آمنة."
                color="text-amber-600"
              />
              <FeatureCard
                icon={Award}
                title="اختبارات وتمارين"
                description="كل درس يختم باختبار تفاعلي مع تصحيح فوري وشرح الإجابات. تابع تقدمك في رحلتك التعليمية خطوة بخطوة."
                color="text-rose-600"
              />
              <FeatureCard
                icon={BookText}
                title="معجم شامل"
                description="مرجع سريع لأهم المصطلحات المحاسبية بالعربية والإنجليزية مع التعريفات، مصنفة حسب المجال."
                color="text-violet-600"
              />
              <FeatureCard
                icon={Users}
                title="متاح للجميع"
                description="محتوى مجاني بالكامل، مناسب للطلاب، المحاسبين المبتدئين، رجال الأعمال، وكل مهتم بالمحاسبة."
                color="text-emerald-600"
              />
              <FeatureCard
                icon={TrendingUp}
                title="من الصفر للاحتراف"
                description="منهج مدروس يأخذك من المفاهيم الأولى إلى المعالجات المتقدمة كالدمج والضرائب المؤجلة ومعايير IFRS."
                color="text-amber-600"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-4 py-16 text-center">
          <div className="rounded-2xl bg-gradient-to-l from-primary to-accent p-8 md:p-12 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">جاهز لبدء رحلتك؟</h2>
            <p className="text-lg mb-8 opacity-90">
              انضم إلى آلاف المتعلمين الذين اختاروا منصتنا لتعلم المحاسبة المالية بالعربية
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => handleNavigate("curriculum")}
              className="text-base px-8"
            >
              <GraduationCap className="h-5 w-5 ml-2" />
              ابدأ من المستوى الأول
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Header({
  onNavigate,
  activeView,
}: {
  onNavigate: (view: View) => void;
  activeView: View;
}) {
  const { completedLessons } = useProgressStore();
  const progress = completedLessons.length;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 font-bold text-lg"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
              <Calculator className="h-5 w-5" />
            </div>
            <span className="hidden sm:inline">أكاديمية المحاسبة المالية</span>
            <span className="sm:hidden">المحاسبة</span>
          </button>

          <nav className="flex items-center gap-1">
            <NavButton
              active={activeView === "home"}
              onClick={() => onNavigate("home")}
              icon={BookOpen}
              label="الرئيسية"
            />
            <NavButton
              active={activeView === "curriculum"}
              onClick={() => onNavigate("curriculum")}
              icon={GraduationCap}
              label="المنهج"
            />
            <NavButton
              active={activeView === "tools"}
              onClick={() => onNavigate("tools")}
              icon={Wrench}
              label="الأدوات"
            />
            <NavButton
              active={activeView === "glossary"}
              onClick={() => onNavigate("glossary")}
              icon={BookText}
              label="المعجم"
            />
            {progress > 0 && (
              <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                <Award className="h-3.5 w-3.5" />
                {progress} درس مكتمل
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: any;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
        active
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  color,
}: {
  icon: any;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="bg-card rounded-xl p-4 border">
      <Icon className={`h-7 w-7 ${color} mx-auto mb-2`} />
      <div className="text-2xl md:text-3xl font-bold tabular-nums">{value}</div>
      <div className="text-xs md:text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: any;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
      <div className={`h-12 w-12 rounded-lg bg-muted/50 flex items-center justify-center mb-4`}>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
                <Calculator className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg">أكاديمية المحاسبة المالية</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              منصة عربية شاملة لتعلم المحاسبة المالية من الصفر إلى الاحتراف. دروس تفاعلية، أدوات محاسبية،
              اختبارات، ومعجم مصطلحات شامل - كل ذلك في مكان واحد.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>الرئيسية</li>
              <li>المنهج الكامل</li>
              <li>الأدوات التفاعلية</li>
              <li>معجم المصطلحات</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">المستويات</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>المستوى الأول: الأساسيات</li>
              <li>المستوى الثاني: دورة المحاسبة</li>
              <li>المستوى الثالث: القوائم المالية</li>
              <li>المستوى الرابع: الاحتراف</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-6 pt-6 text-center text-sm text-muted-foreground">
          <p>© 2024 أكاديمية المحاسبة المالية. جميع الحقوق محفوظة.</p>
          <p className="mt-1">صُمم بعناية للمتعلمين العرب</p>
        </div>
      </div>
    </footer>
  );
}

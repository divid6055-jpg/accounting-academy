"use client";

import { useState } from "react";
import { CurriculumExplorer } from "@/components/curriculum-explorer";
import { JournalEntryTool } from "@/components/journal-entry-tool";
import { FinancialStatementsTool } from "@/components/financial-statements-tool";
import { RatioAnalyzerTool } from "@/components/ratio-analyzer-tool";
import { GlossaryExplorer } from "@/components/glossary-explorer";
import { StudentDashboard } from "@/components/student-dashboard";
import { DepreciationTool, PayrollTool, BreakEvenTool, TimeValueTool, VatTool, WorkingCapitalTool } from "@/components/extra-tools";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LevelsShowcase } from "@/components/levels-showcase";
import { Features } from "@/components/features";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  TrendingUp,
  Calculator,
  Building2,
  Target,
  Clock,
  BookText,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

type View = "home" | "curriculum" | "tools" | "glossary" | "dashboard";

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [toolTab, setToolTab] = useState<string>("journal");

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
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
          <CurriculumExplorer />
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (view === "dashboard") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header onNavigate={handleNavigate} activeView={view} />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
          <StudentDashboard />
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (view === "tools") {
    return <ToolsView onNavigate={handleNavigate} toolTab={toolTab} setToolTab={setToolTab} />;
  }

  if (view === "glossary") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header onNavigate={handleNavigate} activeView={view} />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
          <GlossaryHeader />
          <GlossaryExplorer />
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  // Home view
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNavigate={handleNavigate} activeView={view} />
      <main className="flex-1">
        <Hero onNavigate={handleNavigate} />
        <LevelsShowcase onSelect={() => handleNavigate("curriculum")} />
        <Features />
        <CTA onNavigate={handleNavigate} />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

function GlossaryHeader() {
  return (
    <div className="mb-8 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-accent/5 rounded-2xl" />
      <div className="relative p-6 md:p-8">
        <Badge variant="outline" className="mb-3 px-3 py-1 rounded-full border-primary/30 bg-primary/5">
          <BookText className="h-3 w-3 ml-1" />
          معجم شامل
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
          معجم <span className="gradient-text">المصطلحات المحاسبية</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
          مرجع شامل لأكثر من 300 مصطلح محاسبي بالعربية والإنجليزية مع التعريفات والأمثلة والروابط بين المصطلحات
        </p>
      </div>
    </div>
  );
}

function ToolsView({
  onNavigate,
  toolTab,
  setToolTab,
}: {
  onNavigate: (view: View) => void;
  toolTab: string;
  setToolTab: (t: string) => void;
}) {
  const tools = [
    { id: "journal", label: "القيد المحاسبي", icon: BookOpen, component: <JournalEntryTool /> },
    { id: "statements", label: "القوائم المالية", icon: TrendingUp, component: <FinancialStatementsTool /> },
    { id: "ratios", label: "تحليل النسب", icon: Calculator, component: <RatioAnalyzerTool /> },
    { id: "depreciation", label: "الإهلاك", icon: Calculator, component: <DepreciationTool /> },
    { id: "payroll", label: "الرواتب", icon: Building2, component: <PayrollTool /> },
    { id: "breakeven", label: "نقطة التعادل", icon: Target, component: <BreakEvenTool /> },
    { id: "timevalue", label: "القيمة الزمنية", icon: Clock, component: <TimeValueTool /> },
    { id: "vat", label: "ضريبة القيمة المضافة", icon: BookOpen, component: <VatTool /> },
    { id: "working", label: "رأس المال العامل", icon: Building2, component: <WorkingCapitalTool /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNavigate={onNavigate} activeView="tools" />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-accent/5 rounded-2xl" />
          <div className="relative p-6 md:p-8">
            <Badge variant="outline" className="mb-3 px-3 py-1 rounded-full border-primary/30 bg-primary/5">
              <Sparkles className="h-3 w-3 ml-1" />
              أدوات تفاعلية
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              الأدوات المحاسبية <span className="gradient-text">التفاعلية</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
              مارس ما تعلمته من خلال 9 أدوات تفاعلية تحاكي الواقع المحاسبي وتساعدك على إتقان المفاهيم
            </p>
          </div>
        </div>

        {/* Tools tabs grid */}
        <div className="grid grid-cols-3 md:grid-cols-9 gap-2 mb-6">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setToolTab(tool.id)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                toolTab === tool.id
                  ? "border-primary bg-primary/5 text-primary shadow-md"
                  : "border-border hover:border-primary/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              <tool.icon className="h-5 w-5" />
              <span className="text-[10px] md:text-xs font-medium text-center leading-tight">{tool.label}</span>
            </button>
          ))}
        </div>

        {/* Active tool */}
        <div className="animate-fade-up">
          {tools.find((t) => t.id === toolTab)?.component}
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

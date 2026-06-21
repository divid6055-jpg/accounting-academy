"use client";

import { curriculumStats, curriculum } from "@/lib/accounting-data";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Wrench,
  Sparkles,
  BookOpen,
  Clock,
  BookText,
  Award,
  Users,
  TrendingUp,
  ChevronLeft,
  PlayCircle,
  ArrowLeft,
} from "lucide-react";

export function Hero({ onNavigate }: { onNavigate: (view: any) => void }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pattern-bg" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-28 lg:py-32">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">منصة عربية شاملة لتعلم المحاسبة</span>
            <div className="h-1 w-1 rounded-full bg-primary/40" />
            <span className="text-xs text-muted-foreground">100,000+ سطر برمجي</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-8 max-w-5xl mx-auto">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            تعلم المحاسبة المالية
            <br />
            <span className="relative inline-block">
              <span className="gradient-text">من الصفر إلى الاحتراف</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9C75 3 125 3 298 9"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="oklch(0.42 0.11 165)" />
                    <stop offset="1" stopColor="oklch(0.7 0.15 85)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            رحلة تعليمية متكاملة عبر <strong className="text-foreground">{curriculumStats.levels} مستويات</strong>،
            تشمل <strong className="text-foreground">{curriculumStats.modules} وحدة دراسية</strong> و
            <strong className="text-foreground"> {curriculumStats.lessons}+ درس تفصيلي</strong>،
            مع <strong className="text-foreground">{curriculumStats.quizzes}+ سؤال</strong>،
            <strong className="text-foreground"> {curriculumStats.glossaryTerms}+ مصطلح</strong>،
            وأدوات محاسبية تفاعلية. ابدأ رحلتك نحو احتراف المحاسبة المالية اليوم.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button
            size="lg"
            onClick={() => onNavigate("curriculum")}
            className="text-base px-8 h-14 rounded-xl bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 group"
          >
            <GraduationCap className="h-5 w-5 ml-2 group-hover:rotate-12 transition-transform" />
            ابدأ التعلم الآن
            <ChevronLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate("tools")}
            className="text-base px-8 h-14 rounded-xl border-2 hover:border-primary hover:bg-primary/5 transition-all backdrop-blur-sm bg-card/80 group"
          >
            <Wrench className="h-5 w-5 ml-2 group-hover:rotate-180 transition-transform duration-500" />
            جرب الأدوات التفاعلية
          </Button>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <StatCard
            icon={GraduationCap}
            value={curriculumStats.levels.toString()}
            label="مستويات تعليمية"
            color="from-emerald-500 to-emerald-700"
            delay={0}
          />
          <StatCard
            icon={BookOpen}
            value={`${curriculumStats.lessons}+`}
            label="درس تفصيلي"
            color="from-amber-500 to-orange-600"
            delay={100}
          />
          <StatCard
            icon={Clock}
            value={`${curriculumStats.totalHours}+ ساعة`}
            label="محتوى تعليمي"
            color="from-rose-500 to-pink-600"
            delay={200}
          />
          <StatCard
            icon={BookText}
            value={`${curriculumStats.glossaryTerms}+`}
            label="مصطلح في المعجم"
            color="from-violet-500 to-purple-600"
            delay={300}
          />
        </div>

        {/* Floating badges */}
        <div className="absolute top-1/4 right-8 hidden lg:flex flex-col gap-3 animate-float">
          <FloatingBadge icon={Award} text="شهادات إتمام" color="text-amber-500" />
          <FloatingBadge icon={Users} text="آلاف المتعلمين" color="text-emerald-500" />
        </div>
        <div className="absolute top-1/3 left-8 hidden lg:flex flex-col gap-3 animate-float" style={{ animationDelay: "1s" }}>
          <FloatingBadge icon={TrendingUp} text="تتبع التقدم" color="text-rose-500" />
          <FloatingBadge icon={PlayCircle} text="أدوات تفاعلية" color="text-violet-500" />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative">
        <svg className="w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 50L60 45.8C120 41.7 240 33.3 360 37.5C480 41.7 600 58.3 720 62.5C840 66.7 960 58.3 1080 50C1200 41.7 1320 33.3 1380 29.2L1440 25V100H0V50Z" fill="oklch(0.96 0.01 120)" className="dark:fill-muted/30" />
        </svg>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  color,
  delay,
}: {
  icon: any;
  value: string;
  label: string;
  color: string;
  delay: number;
}) {
  return (
    <div
      className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border hover:border-primary/40 transition-all hover-lift animate-fade-up"
      style={{ animationDelay: `${0.4 + delay / 1000}s` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
      <div className="relative">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} bg-opacity-10 mb-3`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="stat-number text-3xl md:text-4xl font-bold tabular-nums bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          {value}
        </div>
        <div className="caption-text text-sm text-muted-foreground mt-1">{label}</div>
      </div>
    </div>
  );
}

function FloatingBadge({
  icon: Icon,
  text,
  color,
}: {
  icon: any;
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border shadow-lg">
      <Icon className={`h-4 w-4 ${color}`} />
      <span className="text-xs font-medium">{text}</span>
    </div>
  );
}

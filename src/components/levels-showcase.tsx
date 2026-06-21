"use client";

import { curriculum } from "@/lib/accounting-data";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Clock, BookOpen, GraduationCap, Users, BarChart3 } from "lucide-react";

export function LevelsShowcase({ onSelect }: { onSelect: () => void }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      {/* Section header */}
      <div className="text-center mb-12 md:mb-16">
        <Badge variant="outline" className="mb-4 px-4 py-1.5 rounded-full border-primary/30 bg-primary/5">
          رحلتك التعليمية
        </Badge>
        <h2 className="section-title text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          أربعة مستويات نحو
          <span className="gradient-text mr-2">الاحتراف</span>
        </h2>
        <p className="caption-text text-muted-foreground text-lg max-w-2xl mx-auto">
          منهج متدرج يأخذك من المفاهيم الأساسية إلى المعالجات المحاسبية المتقدمة
        </p>
      </div>

      {/* Levels grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {curriculum.map((level, idx) => (
          <LevelCard key={level.id} level={level} index={idx} onSelect={onSelect} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button
          onClick={onSelect}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary hover:from-primary/20 hover:to-accent/20 transition-all group"
        >
          <span className="font-semibold">عرض كل المستويات والوحدات</span>
          <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

function LevelCard({ level, index, onSelect }: { level: any; index: number; onSelect: () => void }) {
  const colorMap: Record<string, { bg: string; text: string; border: string; from: string; to: string; gradient: string }> = {
    emerald: {
      bg: "bg-emerald-50 dark:bg-emerald-950/20",
      text: "text-emerald-700 dark:text-emerald-400",
      border: "border-emerald-200 dark:border-emerald-800",
      from: "from-emerald-500",
      to: "to-emerald-700",
      gradient: "from-emerald-500 to-emerald-700",
    },
    amber: {
      bg: "bg-amber-50 dark:bg-amber-950/20",
      text: "text-amber-700 dark:text-amber-400",
      border: "border-amber-200 dark:border-amber-800",
      from: "from-amber-500",
      to: "to-orange-600",
      gradient: "from-amber-500 to-orange-600",
    },
    rose: {
      bg: "bg-rose-50 dark:bg-rose-950/20",
      text: "text-rose-700 dark:text-rose-400",
      border: "border-rose-200 dark:border-rose-800",
      from: "from-rose-500",
      to: "to-pink-600",
      gradient: "from-rose-500 to-pink-600",
    },
    violet: {
      bg: "bg-violet-50 dark:bg-violet-950/20",
      text: "text-violet-700 dark:text-violet-400",
      border: "border-violet-200 dark:border-violet-800",
      from: "from-violet-500",
      to: "to-purple-600",
      gradient: "from-violet-500 to-purple-600",
    },
    cyan: {
      bg: "bg-cyan-50 dark:bg-cyan-950/20",
      text: "text-cyan-700 dark:text-cyan-400",
      border: "border-cyan-200 dark:border-cyan-800",
      from: "from-cyan-500",
      to: "to-blue-600",
      gradient: "from-cyan-500 to-blue-600",
    },
    indigo: {
      bg: "bg-indigo-50 dark:bg-indigo-950/20",
      text: "text-indigo-700 dark:text-indigo-400",
      border: "border-indigo-200 dark:border-indigo-800",
      from: "from-indigo-500",
      to: "to-blue-700",
      gradient: "from-indigo-500 to-blue-700",
    },
  };
  const c = colorMap[level.color] || colorMap.emerald;
  const levelLessons = level.modules.reduce((s: number, m: any) => s + m.lessons.length, 0);

  return (
    <div
      onClick={onSelect}
      className={`group relative rounded-2xl border-2 ${c.border} ${c.bg} p-6 md:p-8 cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}
    >
      {/* Decorative gradient */}
      <div className={`absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br ${c.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white shadow-lg`}>
              <span className="text-3xl font-bold">{index + 1}</span>
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">{level.title}</h3>
              <p className={`text-sm font-semibold ${c.text}`}>{level.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/80 leading-relaxed mb-6 line-clamp-3">
          {level.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-xs">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{level.modules.length} وحدات</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>{levelLessons} دروس</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{level.estimatedHours} ساعة</span>
          </div>
        </div>

        {/* CTA */}
        <div className={`flex items-center justify-between pt-4 border-t border-border/50`}>
          <span className={`text-sm font-semibold ${c.text} group-hover:gap-2 transition-all`}>
            ابدأ هذا المستوى
          </span>
          <div className={`flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br ${c.gradient} text-white group-hover:scale-110 transition-transform`}>
            <ChevronLeft className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

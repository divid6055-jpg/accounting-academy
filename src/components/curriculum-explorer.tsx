"use client";

import { useState, useMemo } from "react";
import { curriculum, findLessonById, getAllLessons, getLevelProgress, Lesson } from "@/lib/accounting-data";
import { useProgressStore } from "@/lib/progress-store";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LessonContentRenderer, QuizComponent } from "./lesson-content";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  GraduationCap,
  Target,
  Award,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const levelColors: Record<string, { bg: string; text: string; border: string; badge: string; gradient: string; from: string; to: string }> = {
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    text: "text-emerald-700 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    gradient: "from-emerald-500 to-emerald-700",
    from: "from-emerald-500",
    to: "to-emerald-700",
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-950/20",
    text: "text-amber-700 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    gradient: "from-amber-500 to-orange-600",
    from: "from-amber-500",
    to: "to-orange-600",
  },
  rose: {
    bg: "bg-rose-50 dark:bg-rose-950/20",
    text: "text-rose-700 dark:text-rose-400",
    border: "border-rose-200 dark:border-rose-800",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    gradient: "from-rose-500 to-pink-600",
    from: "from-rose-500",
    to: "to-pink-600",
  },
  violet: {
    bg: "bg-violet-50 dark:bg-violet-950/20",
    text: "text-violet-700 dark:text-violet-400",
    border: "border-violet-200 dark:border-violet-800",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    gradient: "from-violet-500 to-purple-600",
    from: "from-violet-500",
    to: "to-purple-600",
  },
  cyan: {
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
    text: "text-cyan-700 dark:text-cyan-400",
    border: "border-cyan-200 dark:border-cyan-800",
    badge: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
    gradient: "from-cyan-500 to-blue-600",
    from: "from-cyan-500",
    to: "to-blue-600",
  },
  indigo: {
    bg: "bg-indigo-50 dark:bg-indigo-950/20",
    text: "text-indigo-700 dark:text-indigo-400",
    border: "border-indigo-200 dark:border-indigo-800",
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    gradient: "from-indigo-500 to-blue-700",
    from: "from-indigo-500",
    to: "to-blue-700",
  },
};

export function CurriculumExplorer() {
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    "m1-1": true,
  });

  const {
    completedLessons,
    completedQuizzes,
    bookmarks,
    toggleLessonComplete,
    setQuizScore,
    toggleBookmark,
  } = useProgressStore();

  const activeLessonData = useMemo(() => {
    if (!activeLessonId) return null;
    return findLessonById(activeLessonId);
  }, [activeLessonId]);

  const allLessons = useMemo(() => getAllLessons(), []);
  const currentIndex = allLessons.findIndex((item) => item.lesson.id === activeLessonId);

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  const goToLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    if (typeof window !== "undefined") {
      setTimeout(() => {
        document.getElementById("lesson-viewer")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) goToLesson(allLessons[currentIndex - 1].lesson.id);
  };

  const goToNext = () => {
    if (currentIndex < allLessons.length - 1) goToLesson(allLessons[currentIndex + 1].lesson.id);
  };

  const totalLessons = allLessons.length;
  const completedCount = completedLessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);
  const totalQuizScores = Object.values(completedQuizzes).filter((s) => s >= 70).length;
  const avgQuizScore = Object.values(completedQuizzes).length > 0
    ? Math.round(Object.values(completedQuizzes).reduce((a, b) => a + b, 0) / Object.values(completedQuizzes).length)
    : 0;

  // Show lesson viewer
  if (activeLessonData) {
    const { level, module, lesson } = activeLessonData;
    const colors = levelColors[level.color] || levelColors.emerald;
    const isCompleted = completedLessons.includes(lesson.id);
    const isBookmarked = bookmarks.includes(lesson.id);
    const quizScore = completedQuizzes[lesson.id];

    return (
      <div id="lesson-viewer" className="space-y-6">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Button variant="ghost" size="sm" onClick={() => setActiveLessonId(null)} className="hover:bg-muted group">
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            العودة للمنهج
          </Button>
          <span className="text-muted-foreground">/</span>
          <Badge className={colors.badge}>{level.title}</Badge>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground/70">{module.title}</span>
        </div>

        <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
          <div className={`h-2 bg-gradient-to-l ${colors.gradient}`} />
          <CardContent className="p-6 md:p-8">
            {/* Lesson header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge className={colors.badge}>{level.title}</Badge>
                  <Badge variant="outline">{lesson.difficulty}</Badge>
                  <Badge variant="outline" className="gap-1">
                    <Clock className="h-3 w-3" />
                    {lesson.duration} دقيقة
                  </Badge>
                  {quizScore !== undefined && (
                    <Badge variant="outline" className={`gap-1 ${quizScore >= 70 ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400" : "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400"}`}>
                      <CheckCircle2 className="h-3 w-3" />
                      اختبار: {quizScore}%
                    </Badge>
                  )}
                </div>
                <h1 className="lesson-title text-2xl md:text-4xl font-bold mb-3 tracking-tight">{lesson.title}</h1>
                <p className="body-text text-muted-foreground text-base md:text-lg leading-relaxed">{lesson.summary}</p>
                {lesson.keywords && lesson.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {lesson.keywords.map((kw, i) => (
                      <Badge key={i} variant="secondary" className="text-[10px] bg-muted/50">{kw}</Badge>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  variant={isBookmarked ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleBookmark(lesson.id)}
                  className="min-w-[110px]"
                >
                  {isBookmarked ? (
                    <><BookmarkCheck className="h-4 w-4 ml-1" />محفوظ</>
                  ) : (
                    <><Bookmark className="h-4 w-4 ml-1" />حفظ الدرس</>
                  )}
                </Button>
                <Button
                  variant={isCompleted ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleLessonComplete(lesson.id)}
                  className={`min-w-[110px] ${isCompleted ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}
                >
                  <CheckCircle2 className="h-4 w-4 ml-1" />
                  {isCompleted ? "مكتمل" : "وضع علامة"}
                </Button>
              </div>
            </div>

            {/* Objectives */}
            <div className="rounded-xl bg-gradient-to-l from-primary/5 to-accent/5 p-5 mb-8 border border-primary/10">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <Target className="h-5 w-5" />
                <h3 className="font-bold text-base">أهداف الدرس</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2.5 text-sm">
                {lesson.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground/80">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lesson content */}
            <div className="prose prose-sm max-w-none">
              <LessonContentRenderer content={lesson.content} />
            </div>

            {/* Quiz */}
            <QuizComponent
              quiz={lesson.quiz}
              lessonId={lesson.id}
              onComplete={(score) => setQuizScore(lesson.id, score)}
            />

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <Button variant="outline" onClick={goToPrevious} disabled={currentIndex === 0} className="group">
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                الدرس السابق
              </Button>
              <div className="flex items-center gap-2">
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground tabular-nums">{currentIndex + 1}</span>
                  <span> / </span>
                  <span className="tabular-nums">{totalLessons}</span>
                </div>
              </div>
              <Button onClick={goToNext} disabled={currentIndex === totalLessons - 1} className="group bg-gradient-to-r from-primary to-accent">
                الدرس التالي
                <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show curriculum overview
  return (
    <div className="space-y-6">
      {/* Hero header */}
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="relative p-6 md:p-10 text-primary-foreground">
          <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">رحلتك التعليمية</span>
              </div>
              <h1 className="hero-title text-3xl md:text-4xl font-bold mb-2">منهج المحاسبة المالية</h1>
              <p className="body-text text-base opacity-90">تابع تقدمك في إتقان المحاسبة المالية خطوة بخطوة</p>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="stat-number text-2xl md:text-4xl font-bold tabular-nums">{progressPercent}%</div>
                <div className="caption-text text-xs opacity-80">إجمالي الإنجاز</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-2xl md:text-4xl font-bold tabular-nums">{completedCount}</div>
                <div className="caption-text text-xs opacity-80">درس مكتمل</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-2xl md:text-4xl font-bold tabular-nums">{totalQuizScores}</div>
                <div className="caption-text text-xs opacity-80">اختبار ناجح</div>
              </div>
            </div>
          </div>
          <div className="h-3 rounded-full bg-white/20 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Curriculum */}
      {curriculum.map((level, levelIdx) => {
        const colors = levelColors[level.color] || levelColors.emerald;
        const progress = getLevelProgress(level, completedLessons);

        return (
          <div key={level.id} className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-4 md:p-6`}>
            {/* Level header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className={`text-xl md:text-2xl font-bold ${colors.text}`}>
                      {level.title}
                    </h2>
                    <p className="text-xs text-muted-foreground">{level.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mt-2">{level.description}</p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" />
                    {level.modules.length} وحدات
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {level.estimatedHours} ساعة تقريبية
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Award className="h-3.5 w-3.5" />
                    {progress.completed}/{progress.total} دروس مكتملة
                  </span>
                </div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className={`text-3xl font-bold ${colors.text} tabular-nums`}>
                  {progress.percentage}%
                </div>
                <div className="h-2 w-20 rounded-full bg-muted overflow-hidden mt-1">
                  <div
                    className={`h-full bg-gradient-to-l ${colors.gradient}`}
                    style={{ width: `${progress.percentage}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Modules */}
            <div className="space-y-2">
              {level.modules.map((module) => {
                const isExpanded = expandedModules[module.id];
                const moduleCompleted = module.lessons.filter((l) =>
                  completedLessons.includes(l.id)
                ).length;

                return (
                  <div key={module.id} className="bg-card rounded-xl border overflow-hidden hover:shadow-md transition-shadow">
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-full flex items-center justify-between p-4 hover:bg-muted/40 transition-colors text-right"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className={`flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center transition-transform ${isExpanded ? `bg-gradient-to-br ${colors.gradient} text-white` : "bg-muted"}`}>
                          {isExpanded ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronLeft className="h-4 w-4" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-base truncate">{module.title}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                            {module.description}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="mr-2 flex-shrink-0">
                        <span className={moduleCompleted === module.lessons.length ? "text-emerald-600" : ""}>
                          {moduleCompleted}
                        </span>
                        <span className="text-muted-foreground">/{module.lessons.length}</span>
                      </Badge>
                    </button>

                    {isExpanded && (
                      <div className="border-t divide-y">
                        {module.lessons.map((lesson) => {
                          const isDone = completedLessons.includes(lesson.id);
                          const hasQuizScore = completedQuizzes[lesson.id] !== undefined;

                          return (
                            <button
                              key={lesson.id}
                              onClick={() => goToLesson(lesson.id)}
                              className="w-full flex items-center justify-between p-3 hover:bg-muted/30 transition-colors text-right group"
                            >
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div
                                  className={`flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center transition-all ${
                                    isDone
                                      ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                                      : hasQuizScore
                                      ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                                      : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                                  }`}
                                >
                                  {isDone ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : (
                                    <BookOpen className="h-4 w-4" />
                                  )}
                                </div>
                                <div className="min-w-0">
                                  <div className="font-medium text-sm truncate group-hover:text-primary transition-colors">{lesson.title}</div>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5 flex-wrap">
                                    <span className="flex items-center gap-0.5">
                                      <Clock className="h-3 w-3" />
                                      {lesson.duration} د
                                    </span>
                                    <span>•</span>
                                    <span>{lesson.difficulty}</span>
                                    {hasQuizScore && (
                                      <>
                                        <span>•</span>
                                        <span className={`font-semibold ${completedQuizzes[lesson.id] >= 70 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}`}>
                                          اختبار: {completedQuizzes[lesson.id]}%
                                        </span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <ChevronLeft className="h-4 w-4 text-muted-foreground flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

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
  BarChart3,
} from "lucide-react";

const levelColors: Record<string, { bg: string; text: string; border: string; badge: string; gradient: string }> = {
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    gradient: "from-emerald-500 to-emerald-700",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    gradient: "from-amber-500 to-amber-700",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-200",
    badge: "bg-rose-100 text-rose-700",
    gradient: "from-rose-500 to-rose-700",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-700",
    gradient: "from-violet-500 to-violet-700",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    border: "border-cyan-200",
    badge: "bg-cyan-100 text-cyan-700",
    gradient: "from-cyan-500 to-cyan-700",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    border: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    gradient: "from-indigo-500 to-indigo-700",
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
      <div id="lesson-viewer" className="space-y-4">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Button variant="ghost" size="sm" onClick={() => setActiveLessonId(null)}>
            <ChevronRight className="h-4 w-4 ml-1" />
            العودة للمنهج
          </Button>
          <span className="text-muted-foreground">/</span>
          <Badge className={colors.badge}>{level.title}</Badge>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground/70">{module.title}</span>
        </div>

        <Card>
          <CardContent className="p-6">
            {/* Lesson header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge className={colors.badge}>{level.title}</Badge>
                  <Badge variant="outline">{lesson.difficulty}</Badge>
                  <Badge variant="outline" className="gap-1">
                    <Clock className="h-3 w-3" />
                    {lesson.duration} دقيقة
                  </Badge>
                  {quizScore !== undefined && (
                    <Badge variant="outline" className="gap-1 bg-emerald-50">
                      <CheckCircle2 className="h-3 w-3" />
                      اختبار: {quizScore}%
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{lesson.title}</h1>
                <p className="text-muted-foreground text-base">{lesson.summary}</p>
                {lesson.keywords && lesson.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {lesson.keywords.map((kw, i) => (
                      <Badge key={i} variant="secondary" className="text-[10px]">{kw}</Badge>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  variant={isBookmarked ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleBookmark(lesson.id)}
                >
                  {isBookmarked ? (
                    <><BookmarkCheck className="h-4 w-4 ml-1" />محفوظ</>
                  ) : (
                    <><Bookmark className="h-4 w-4 ml-1" />حفظ</>
                  )}
                </Button>
                <Button
                  variant={isCompleted ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleLessonComplete(lesson.id)}
                  className={isCompleted ? "bg-emerald-600" : ""}
                >
                  <CheckCircle2 className="h-4 w-4 ml-1" />
                  {isCompleted ? "مكتمل" : "وضع علامة مكتمل"}
                </Button>
              </div>
            </div>

            {/* Objectives */}
            <div className="rounded-lg bg-muted/30 p-4 mb-6">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <Target className="h-4 w-4" />
                <h3 className="font-semibold">أهداف الدرس</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {lesson.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary/60" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lesson content */}
            <LessonContentRenderer content={lesson.content} />

            {/* Quiz */}
            <QuizComponent
              quiz={lesson.quiz}
              lessonId={lesson.id}
              onComplete={(score) => setQuizScore(lesson.id, score)}
            />

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <Button variant="outline" onClick={goToPrevious} disabled={currentIndex === 0}>
                <ChevronRight className="h-4 w-4 ml-1" />
                الدرس السابق
              </Button>
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} / {totalLessons}
              </span>
              <Button onClick={goToNext} disabled={currentIndex === totalLessons - 1}>
                الدرس التالي
                <ChevronLeft className="h-4 w-4 mr-1" />
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
      {/* Progress overview - enhanced */}
      <Card className="border-primary/20 overflow-hidden">
        <div className={`bg-gradient-to-l ${levelColors.emerald.gradient} p-6 text-white`}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div>
              <h3 className="text-xl font-bold mb-1">رحلتك التعليمية</h3>
              <p className="text-sm opacity-90">
                تابع تقدمك في إتقان المحاسبة المالية خطوة بخطوة
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold tabular-nums">{progressPercent}%</div>
                <div className="text-xs opacity-90">إجمالي الإنجاز</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tabular-nums">{completedCount}</div>
                <div className="text-xs opacity-90">درس مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold tabular-nums">{totalQuizScores}</div>
                <div className="text-xs opacity-90">اختبار ناجح</div>
              </div>
            </div>
          </div>
          <div className="h-3 rounded-full bg-white/20 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </Card>

      {/* Curriculum */}
      {curriculum.map((level) => {
        const colors = levelColors[level.color] || levelColors.emerald;
        const progress = getLevelProgress(level, completedLessons);

        return (
          <div key={level.id} className={`rounded-xl border-2 ${colors.border} ${colors.bg} p-4 md:p-6`}>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white`}>
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className={`text-xl md:text-2xl font-bold ${colors.text}`}>
                      {level.title}
                    </h2>
                    <p className="text-xs text-muted-foreground">{level.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mt-2">{level.description}</p>
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {level.modules.length} وحدات
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {level.estimatedHours} ساعة تقريبية
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    {progress.completed}/{progress.total} دروس مكتملة
                  </span>
                </div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className={`text-3xl font-bold ${colors.text} tabular-nums`}>
                  {progress.percentage}%
                </div>
                <div className="h-1.5 w-16 rounded-full bg-muted overflow-hidden mt-1">
                  <div
                    className={`h-full bg-gradient-to-l ${colors.gradient}`}
                    style={{ width: `${progress.percentage}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {level.modules.map((module) => {
                const isExpanded = expandedModules[module.id];
                const moduleCompleted = module.lessons.filter((l) =>
                  completedLessons.includes(l.id)
                ).length;

                return (
                  <div key={module.id} className="bg-card rounded-lg border overflow-hidden">
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-full flex items-center justify-between p-4 hover:bg-muted/40 transition-colors text-right"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {isExpanded ? (
                          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronLeft className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <div className="min-w-0">
                          <h3 className="font-semibold text-base truncate">{module.title}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                            {module.description}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="mr-2 flex-shrink-0">
                        {moduleCompleted}/{module.lessons.length}
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
                              className="w-full flex items-center justify-between p-3 hover:bg-muted/30 transition-colors text-right"
                            >
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div
                                  className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                                    isDone
                                      ? "bg-emerald-100 text-emerald-600"
                                      : hasQuizScore
                                      ? "bg-amber-100 text-amber-600"
                                      : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {isDone ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : (
                                    <BookOpen className="h-4 w-4" />
                                  )}
                                </div>
                                <div className="min-w-0">
                                  <div className="font-medium text-sm truncate">{lesson.title}</div>
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
                                        <span className={`font-semibold ${completedQuizzes[lesson.id] >= 70 ? "text-emerald-600" : "text-amber-600"}`}>
                                          اختبار: {completedQuizzes[lesson.id]}%
                                        </span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <ChevronLeft className="h-4 w-4 text-muted-foreground flex-shrink-0" />
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

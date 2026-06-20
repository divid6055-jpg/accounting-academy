"use client";

import { useState, useMemo } from "react";
import { curriculum, Lesson } from "@/lib/accounting-data";
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
} from "lucide-react";

const levelColors: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-200",
    badge: "bg-rose-100 text-rose-700",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-700",
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

  // Find active lesson & module
  const activeLessonData = useMemo(() => {
    if (!activeLessonId) return null;
    let result: { level: typeof curriculum[0]; module: typeof curriculum[0]["modules"][0]; lesson: Lesson } | null = null;
    for (const level of curriculum) {
      for (const mod of level.modules) {
        const lesson = mod.lessons.find((l) => l.id === activeLessonId);
        if (lesson) {
          result = { level, module: mod, lesson };
          break;
        }
      }
      if (result) break;
    }
    return result;
  }, [activeLessonId]);

  // Get all lessons in flat order for navigation
  const allLessons = useMemo(() => {
    const flat: { level: typeof curriculum[0]; module: typeof curriculum[0]["modules"][0]; lesson: Lesson }[] = [];
    for (const level of curriculum) {
      for (const mod of level.modules) {
        for (const lesson of mod.lessons) {
          flat.push({ level, module: mod, lesson });
        }
      }
    }
    return flat;
  }, []);

  const currentIndex = allLessons.findIndex(
    (item) => item.lesson.id === activeLessonId
  );

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  const goToLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    // Auto-scroll to top of lesson
    if (typeof window !== "undefined") {
      setTimeout(() => {
        document.getElementById("lesson-viewer")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      goToLesson(allLessons[currentIndex - 1].lesson.id);
    }
  };

  const goToNext = () => {
    if (currentIndex < allLessons.length - 1) {
      goToLesson(allLessons[currentIndex + 1].lesson.id);
    }
  };

  const totalLessons = allLessons.length;
  const completedCount = completedLessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  // Show lesson viewer if a lesson is selected
  if (activeLessonData) {
    const { level, module, lesson } = activeLessonData;
    const colors = levelColors[level.color];
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
          <Badge variant="outline" className={colors.badge}>
            {level.title}
          </Badge>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground/70">{module.title}</span>
        </div>

        <Card>
          <CardContent className="p-6">
            {/* Lesson header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div className="flex-1">
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
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  variant={isBookmarked ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleBookmark(lesson.id)}
                >
                  {isBookmarked ? (
                    <>
                      <BookmarkCheck className="h-4 w-4 ml-1" />
                      محفوظ
                    </>
                  ) : (
                    <>
                      <Bookmark className="h-4 w-4 ml-1" />
                      حفظ
                    </>
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
              <Button
                variant="outline"
                onClick={goToPrevious}
                disabled={currentIndex === 0}
              >
                <ChevronRight className="h-4 w-4 ml-1" />
                الدرس السابق
              </Button>
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} / {totalLessons}
              </span>
              <Button
                onClick={goToNext}
                disabled={currentIndex === totalLessons - 1}
              >
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
      {/* Progress overview */}
      <Card className="bg-gradient-to-l from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">تقدمك في المنهج</h3>
              <p className="text-sm text-muted-foreground">
                أكملت {completedCount} من {totalLessons} درس
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary tabular-nums">{progressPercent}%</div>
              <div className="text-xs text-muted-foreground">إجمالي الإنجاز</div>
            </div>
          </div>
          <div className="mt-3 h-3 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-l from-primary to-accent transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Curriculum */}
      {curriculum.map((level) => {
        const colors = levelColors[level.color];
        const levelLessonCount = level.modules.reduce((s, m) => s + m.lessons.length, 0);
        const levelCompleted = level.modules.reduce(
          (s, m) => s + m.lessons.filter((l) => completedLessons.includes(l.id)).length,
          0
        );

        return (
          <div key={level.id} className={`rounded-xl border-2 ${colors.border} ${colors.bg} p-4 md:p-6`}>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className={`h-6 w-6 ${colors.text}`} />
                  <h2 className={`text-xl md:text-2xl font-bold ${colors.text}`}>
                    {level.title}
                  </h2>
                </div>
                <p className="text-sm text-foreground/70 mb-2">{level.subtitle}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{level.description}</p>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${colors.text} tabular-nums`}>
                  {levelCompleted}/{levelLessonCount}
                </div>
                <div className="text-xs text-muted-foreground">دروس مكتملة</div>
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
                      <div className="flex items-center gap-3 flex-1">
                        {isExpanded ? (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronLeft className="h-5 w-5 text-muted-foreground" />
                        )}
                        <div>
                          <h3 className="font-semibold text-base">{module.title}</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {module.description}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="mr-2">
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
                              <div className="flex items-center gap-3 flex-1">
                                <div
                                  className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                                    isDone
                                      ? "bg-emerald-100 text-emerald-600"
                                      : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {isDone ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : (
                                    <BookOpen className="h-4 w-4" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium text-sm">{lesson.title}</div>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                                    <Clock className="h-3 w-3" />
                                    {lesson.duration} دقيقة
                                    <span>•</span>
                                    {lesson.difficulty}
                                    {hasQuizScore && (
                                      <>
                                        <span>•</span>
                                        <span className="text-emerald-600">
                                          اختبار: {completedQuizzes[lesson.id]}%
                                        </span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
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

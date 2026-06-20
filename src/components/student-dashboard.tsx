"use client";

import { useProgressStore } from "@/lib/progress-store";
import { curriculum, getAllLessons, curriculumStats } from "@/lib/accounting-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Award,
  BookOpen,
  Clock,
  Target,
  TrendingUp,
  Trophy,
  Flame,
  Star,
  CheckCircle2,
  Zap,
} from "lucide-react";

export function StudentDashboard() {
  const { completedLessons, completedQuizzes, bookmarks, notes } = useProgressStore();

  const allLessons = getAllLessons();
  const totalLessons = allLessons.length;
  const completedCount = completedLessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  // Quiz stats
  const quizScores = Object.values(completedQuizzes);
  const passedQuizzes = quizScores.filter((s) => s >= 70).length;
  const avgScore = quizScores.length > 0
    ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
    : 0;
  const excellentScores = quizScores.filter((s) => s >= 90).length;

  // Total study time
  const totalMinutes = completedLessons.reduce((acc, lessonId) => {
    const lesson = allLessons.find((l) => l.lesson.id === lessonId);
    return acc + (lesson?.lesson.duration || 0);
  }, 0);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalMins = totalMinutes % 60;

  // Level-by-level progress
  const levelProgress = curriculum.map((level) => {
    const levelLessons = level.modules.flatMap((m) => m.lessons);
    const completed = levelLessons.filter((l) => completedLessons.includes(l.id)).length;
    return {
      title: level.title,
      color: level.color,
      completed,
      total: levelLessons.length,
      percentage: levelLessons.length > 0 ? Math.round((completed / levelLessons.length) * 100) : 0,
    };
  });

  // Achievements
  const achievements = [
    {
      id: "first-step",
      title: "الخطوة الأولى",
      description: "أكملت أول درس",
      icon: Star,
      unlocked: completedCount >= 1,
      color: "text-amber-500",
    },
    {
      id: "five-lessons",
      title: "متعلم نشيط",
      description: "أكملت 5 دروس",
      icon: Zap,
      unlocked: completedCount >= 5,
      color: "text-emerald-500",
    },
    {
      id: "ten-lessons",
      title: "مثابر",
      description: "أكملت 10 دروس",
      icon: Flame,
      unlocked: completedCount >= 10,
      color: "text-rose-500",
    },
    {
      id: "level-1",
      title: "أساسيات متقن",
      description: "أكملت المستوى الأول",
      icon: Trophy,
      unlocked: levelProgress[0]?.percentage === 100,
      color: "text-violet-500",
    },
    {
      id: "quiz-master",
      title: "محترف الاختبارات",
      description: "نجحت في 10 اختبارات",
      icon: Award,
      unlocked: passedQuizzes >= 10,
      color: "text-amber-500",
    },
    {
      id: "perfectionist",
      title: "باحث عن الكمال",
      description: "حصلت على 90%+ في 5 اختبارات",
      icon: Target,
      unlocked: excellentScores >= 5,
      color: "text-emerald-500",
    },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="space-y-6">
      {/* Hero stats */}
      <Card className="overflow-hidden border-primary/20">
        <div className="bg-gradient-to-l from-primary to-accent p-6 text-primary-foreground">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">لوحة تحكم الطالب</h2>
              <p className="text-sm opacity-90">
                تابع رحلتك في إتقان المحاسبة المالية
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold tabular-nums">{progressPercent}%</div>
              <div className="text-xs opacity-90">إجمالي الإنجاز</div>
            </div>
          </div>
          <Progress value={progressPercent} className="bg-white/20 h-3" />
        </div>
      </Card>

      {/* Quick stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={BookOpen}
          value={completedCount.toString()}
          label="درس مكتمل"
          subValue={`من ${totalLessons} درس`
          }
          color="text-emerald-600"
          bgColor="bg-emerald-50"
        />
        <StatCard
          icon={Trophy}
          value={passedQuizzes.toString()}
          label="اختبار ناجح"
          subValue={`من ${quizScores.length} محاولة`}
          color="text-amber-600"
          bgColor="bg-amber-50"
        />
        <StatCard
          icon={Clock}
          value={`${totalHours}س ${totalMins}د`}
          label="وقت الدراسة"
          subValue="الإجمالي"
          color="text-rose-600"
          bgColor="bg-rose-50"
        />
        <StatCard
          icon={TrendingUp}
          value={`${avgScore}%`}
          label="متوسط الاختبارات"
          subValue={`${excellentScores} اختبار بدرجة الامتياز`}
          color="text-violet-600"
          bgColor="bg-violet-50"
        />
      </div>

      {/* Level progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            التقدم حسب المستوى
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {levelProgress.map((level, idx) => {
            const colors: Record<string, string> = {
              emerald: "bg-emerald-500",
              amber: "bg-amber-500",
              rose: "bg-rose-500",
              violet: "bg-violet-500",
            };
            return (
              <div key={idx}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{level.title}</span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {level.completed}/{level.total} ({level.percentage}%)
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full ${colors[level.color]} transition-all duration-500`}
                    style={{ width: `${level.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            الإنجازات
            <Badge variant="secondary" className="mr-auto">
              {unlockedCount}/{achievements.length} مفتوح
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className={`p-4 rounded-lg border text-center transition-all ${
                  ach.unlocked
                    ? "border-primary/30 bg-card hover:shadow-md"
                    : "border-border bg-muted/30 opacity-60"
                }`}
              >
                <div className={`mx-auto mb-2 h-12 w-12 rounded-full flex items-center justify-center ${ach.unlocked ? "bg-primary/10" : "bg-muted"}`}>
                  <ach.icon className={`h-6 w-6 ${ach.unlocked ? ach.color : "text-muted-foreground"}`} />
                </div>
                <h4 className="font-semibold text-sm mb-1">{ach.title}</h4>
                <p className="text-xs text-muted-foreground">{ach.description}</p>
                {ach.unlocked && (
                  <Badge variant="outline" className="mt-2 bg-emerald-50 text-emerald-700 text-[10px]">
                    <CheckCircle2 className="h-3 w-3 ml-1" />
                    مفتوح
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bookmarks & Notes count */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              الدروس المحفوظة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tabular-nums">{bookmarks.length}</div>
            <p className="text-xs text-muted-foreground mt-1">درس محفوظ للمراجعة</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              الملاحظات الشخصية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tabular-nums">
              {Object.keys(notes).filter((k) => notes[k]?.trim()).length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">ملاحظة محفوظة</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  subValue,
  color,
  bgColor,
}: {
  icon: any;
  value: string;
  label: string;
  subValue?: string;
  color: string;
  bgColor: string;
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className={`inline-flex items-center justify-center h-10 w-10 rounded-lg ${bgColor} mb-3`}>
          <Icon className={`h-5 w-5 ${color}`} />
        </div>
        <div className="text-2xl font-bold tabular-nums">{value}</div>
        <div className="text-sm font-medium text-foreground/80">{label}</div>
        {subValue && <div className="text-xs text-muted-foreground mt-0.5">{subValue}</div>}
      </CardContent>
    </Card>
  );
}

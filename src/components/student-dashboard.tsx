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
  Sparkles,
} from "lucide-react";

export function StudentDashboard() {
  const { completedLessons, completedQuizzes, bookmarks, notes } = useProgressStore();

  const allLessons = getAllLessons();
  const totalLessons = allLessons.length;
  const completedCount = completedLessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const quizScores = Object.values(completedQuizzes);
  const passedQuizzes = quizScores.filter((s) => s >= 70).length;
  const avgScore = quizScores.length > 0
    ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
    : 0;
  const excellentScores = quizScores.filter((s) => s >= 90).length;

  const totalMinutes = completedLessons.reduce((acc, lessonId) => {
    const lesson = allLessons.find((l) => l.lesson.id === lessonId);
    return acc + (lesson?.lesson.duration || 0);
  }, 0);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalMins = totalMinutes % 60;

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

  const achievements = [
    {
      id: "first-step",
      title: "الخطوة الأولى",
      description: "أكملت أول درس",
      icon: Star,
      unlocked: completedCount >= 1,
      color: "from-amber-500 to-orange-600",
    },
    {
      id: "five-lessons",
      title: "متعلم نشيط",
      description: "أكملت 5 دروس",
      icon: Zap,
      unlocked: completedCount >= 5,
      color: "from-emerald-500 to-emerald-700",
    },
    {
      id: "ten-lessons",
      title: "مثابر",
      description: "أكملت 10 دروس",
      icon: Flame,
      unlocked: completedCount >= 10,
      color: "from-rose-500 to-pink-600",
    },
    {
      id: "level-1",
      title: "أساسيات متقن",
      description: "أكملت المستوى الأول",
      icon: Trophy,
      unlocked: levelProgress[0]?.percentage === 100,
      color: "from-violet-500 to-purple-600",
    },
    {
      id: "quiz-master",
      title: "محترف الاختبارات",
      description: "نجحت في 10 اختبارات",
      icon: Award,
      unlocked: passedQuizzes >= 10,
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: "perfectionist",
      title: "باحث عن الكمال",
      description: "حصلت على 90%+ في 5 اختبارات",
      icon: Target,
      unlocked: excellentScores >= 5,
      color: "from-indigo-500 to-blue-700",
    },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="space-y-6">
      {/* Hero header */}
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

        <div className="relative p-6 md:p-10 text-primary-foreground">
          <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">لوحة التحكم</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">رحلتك التعليمية</h1>
              <p className="text-base opacity-90">تابع تقدمك في إتقان المحاسبة المالية خطوة بخطوة</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold tabular-nums">{progressPercent}%</div>
              <div className="text-xs opacity-80">إجمالي الإنجاز</div>
            </div>
          </div>
          <Progress value={progressPercent} className="bg-white/20 h-3" />
        </div>
      </div>

      {/* Quick stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={BookOpen}
          value={completedCount.toString()}
          label="درس مكتمل"
          subValue={`من ${totalLessons} درس`}
          color="from-emerald-500 to-emerald-700"
          bgColor="bg-emerald-50 dark:bg-emerald-950/30"
          delay={0}
        />
        <StatCard
          icon={Trophy}
          value={passedQuizzes.toString()}
          label="اختبار ناجح"
          subValue={`من ${quizScores.length} محاولة`}
          color="from-amber-500 to-orange-600"
          bgColor="bg-amber-50 dark:bg-amber-950/30"
          delay={0.1}
        />
        <StatCard
          icon={Clock}
          value={`${totalHours}س ${totalMins}د`}
          label="وقت الدراسة"
          subValue="الإجمالي"
          color="from-rose-500 to-pink-600"
          bgColor="bg-rose-50 dark:bg-rose-950/30"
          delay={0.2}
        />
        <StatCard
          icon={TrendingUp}
          value={`${avgScore}%`}
          label="متوسط الاختبارات"
          subValue={`${excellentScores} اختبار بدرجة الامتياز`}
          color="from-violet-500 to-purple-600"
          bgColor="bg-violet-50 dark:bg-violet-950/30"
          delay={0.3}
        />
      </div>

      {/* Level progress & Achievements */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Level progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              التقدم حسب المستوى
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {levelProgress.map((level, idx) => {
              const colors: Record<string, string> = {
                emerald: "from-emerald-500 to-emerald-700",
                amber: "from-amber-500 to-orange-600",
                rose: "from-rose-500 to-pink-600",
                violet: "from-violet-500 to-purple-600",
                cyan: "from-cyan-500 to-blue-600",
                indigo: "from-indigo-500 to-blue-700",
              };
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{level.title}</span>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {level.completed}/{level.total} ({level.percentage}%)
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-l ${colors[level.color] || colors.emerald} transition-all duration-500 rounded-full`}
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
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Award className="h-5 w-5 text-amber-500" />
              </div>
              الإنجازات
              <Badge variant="secondary" className="mr-auto bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
                {unlockedCount}/{achievements.length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    ach.unlocked
                      ? "border-primary/30 bg-card hover:shadow-md hover:-translate-y-1"
                      : "border-border bg-muted/30 opacity-60"
                  }`}
                >
                  <div className={`mx-auto mb-2 h-12 w-12 rounded-full flex items-center justify-center ${ach.unlocked ? `bg-gradient-to-br ${ach.color}` : "bg-muted"}`}>
                    <ach.icon className={`h-6 w-6 ${ach.unlocked ? "text-white" : "text-muted-foreground"}`} />
                  </div>
                  <h4 className="font-semibold text-xs mb-1">{ach.title}</h4>
                  <p className="text-[10px] text-muted-foreground">{ach.description}</p>
                  {ach.unlocked && (
                    <Badge variant="outline" className="mt-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-[10px]">
                      <CheckCircle2 className="h-3 w-3 ml-1" />
                      مفتوح
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bookmarks & Notes count */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              الدروس المحفوظة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tabular-nums mb-1">{bookmarks.length}</div>
            <p className="text-xs text-muted-foreground">درس محفوظ للمراجعة</p>
          </CardContent>
        </Card>
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              الملاحظات الشخصية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tabular-nums mb-1">
              {Object.keys(notes).filter((k) => notes[k]?.trim()).length}
            </div>
            <p className="text-xs text-muted-foreground">ملاحظة محفوظة</p>
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
  delay,
}: {
  icon: any;
  value: string;
  label: string;
  subValue?: string;
  color: string;
  bgColor: string;
  delay: number;
}) {
  return (
    <Card className="overflow-hidden hover-lift animate-fade-up" style={{ animationDelay: `${delay}s` }}>
      <CardContent className="p-5">
        <div className={`inline-flex items-center justify-center h-10 w-10 rounded-xl ${bgColor} mb-3`}>
          <Icon className={`h-5 w-5 bg-gradient-to-br ${color} bg-clip-text text-transparent`} />
        </div>
        <div className="text-2xl md:text-3xl font-bold tabular-nums">{value}</div>
        <div className="text-sm font-medium text-foreground/80 mt-0.5">{label}</div>
        {subValue && <div className="text-xs text-muted-foreground mt-0.5">{subValue}</div>}
      </CardContent>
    </Card>
  );
}

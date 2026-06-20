import { Level, GlossaryTerm } from "./types";
import { level1 } from "./curriculum/level1";
import { level2 } from "./curriculum/level2";
import { level3 } from "./curriculum/level3";
import { level4 } from "./curriculum/level4";
import { glossary } from "./curriculum/glossary";

// إعادة تصدير المستويات والمعجم
export { level1, level2, level3, level4, glossary };
export * from "./types";

// المنهج الكامل - جميع المستويات
export const curriculum: Level[] = [level1, level2, level3, level4];

// إحصائيات المنهج
export const curriculumStats = {
  levels: curriculum.length,
  modules: curriculum.reduce((acc, level) => acc + level.modules.length, 0),
  lessons: curriculum.reduce(
    (acc, level) => acc + level.modules.reduce((a, m) => a + m.lessons.length, 0),
    0
  ),
  totalDuration: curriculum.reduce(
    (acc, level) =>
      acc + level.modules.reduce(
        (a, m) => a + m.lessons.reduce((al, l) => al + l.duration, 0),
        0
      ),
    0
  ),
  totalHours: Math.round(
    curriculum.reduce(
      (acc, level) =>
        acc + level.modules.reduce(
          (a, m) => a + m.lessons.reduce((al, l) => al + l.duration, 0),
          0
        ),
      0
    ) / 60
  ),
  glossaryTerms: glossary.length,
  estimatedHours: curriculum.reduce((acc, level) => acc + level.estimatedHours, 0),
  quizzes: curriculum.reduce(
    (acc, level) =>
      acc + level.modules.reduce(
        (a, m) => a + m.lessons.reduce((al, l) => al + l.quiz.length, 0),
        0
      ),
    0
  ),
};

// مساعدات للبحث في المنهج
export function findLessonById(lessonId: string) {
  for (const level of curriculum) {
    for (const mod of level.modules) {
      const lesson = mod.lessons.find((l) => l.id === lessonId);
      if (lesson) return { level, module: mod, lesson };
    }
  }
  return null;
}

export function getAllLessons() {
  const flat: {
    level: Level;
    module: Level["modules"][0];
    lesson: Level["modules"][0]["lessons"][0];
  }[] = [];
  for (const level of curriculum) {
    for (const mod of level.modules) {
      for (const lesson of mod.lessons) {
        flat.push({ level, module: mod, lesson });
      }
    }
  }
  return flat;
}

export function searchGlossary(query: string, category?: string): GlossaryTerm[] {
  const q = query.trim().toLowerCase();
  return glossary.filter((term) => {
    const matchesQuery =
      !q ||
      term.term.includes(query) ||
      term.english.toLowerCase().includes(q) ||
      term.definition.includes(query);
    const matchesCategory = !category || category === "الكل" || term.category === category;
    return matchesQuery && matchesCategory;
  });
}

export function getGlossaryCategories(): string[] {
  const cats = new Set(glossary.map((g) => g.category));
  return ["الكل", ...Array.from(cats)];
}

// معلومات التقدم
export function getLevelProgress(level: Level, completedLessons: string[]) {
  const totalLessons = level.modules.reduce((s, m) => s + m.lessons.length, 0);
  const completedInLevel = level.modules.reduce(
    (s, m) => s + m.lessons.filter((l) => completedLessons.includes(l.id)).length,
    0
  );
  return {
    total: totalLessons,
    completed: completedInLevel,
    percentage: totalLessons > 0 ? Math.round((completedInLevel / totalLessons) * 100) : 0,
  };
}

// أنواع البيانات الأساسية للمنهج
export type LessonContent = {
  type: "paragraph" | "heading" | "list" | "example" | "table" | "formula" | "note" | "tip" | "warning" | "code";
  content?: string;
  items?: string[];
  rows?: string[][];
  headers?: string[];
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty?: "easy" | "medium" | "hard";
};

export type Exercise = {
  id: string;
  title: string;
  description: string;
  type: "calculation" | "journal" | "analysis" | "classification";
  question: string;
  data?: Record<string, any>;
  answer: string;
  hint?: string;
  steps?: string[];
};

export type Lesson = {
  id: string;
  title: string;
  duration: number;
  difficulty: "مبتدئ" | "متوسط" | "متقدم" | "احترافي";
  summary: string;
  objectives: string[];
  keywords: string[];
  prerequisites?: string[];
  content: LessonContent[];
  quiz: QuizQuestion[];
  exercises?: Exercise[];
};

export type Module = {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
};

export type Level = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  estimatedHours: number;
  modules: Module[];
};

export type GlossaryTerm = {
  term: string;
  english: string;
  definition: string;
  category: string;
  example?: string;
  related?: string[];
};

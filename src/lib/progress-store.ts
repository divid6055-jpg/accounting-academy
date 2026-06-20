"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressState = {
  completedLessons: string[];
  completedQuizzes: Record<string, number>; // lessonId -> score (0-100)
  bookmarks: string[];
  notes: Record<string, string>; // lessonId -> note text
  toggleLessonComplete: (lessonId: string) => void;
  setQuizScore: (lessonId: string, score: number) => void;
  toggleBookmark: (lessonId: string) => void;
  setNote: (lessonId: string, note: string) => void;
  resetProgress: () => void;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      completedLessons: [],
      completedQuizzes: {},
      bookmarks: [],
      notes: {},
      toggleLessonComplete: (lessonId) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons.filter((id) => id !== lessonId)
            : [...state.completedLessons, lessonId],
        })),
      setQuizScore: (lessonId, score) =>
        set((state) => ({
          completedQuizzes: { ...state.completedQuizzes, [lessonId]: score },
        })),
      toggleBookmark: (lessonId) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(lessonId)
            ? state.bookmarks.filter((id) => id !== lessonId)
            : [...state.bookmarks, lessonId],
        })),
      setNote: (lessonId, note) =>
        set((state) => ({
          notes: { ...state.notes, [lessonId]: note },
        })),
      resetProgress: () =>
        set({
          completedLessons: [],
          completedQuizzes: {},
          bookmarks: [],
          notes: {},
        }),
    }),
    { name: "accounting-progress" }
  )
);

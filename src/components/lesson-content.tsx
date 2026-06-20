"use client";

import { useState } from "react";
import { LessonContent } from "@/lib/accounting-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Lightbulb, AlertTriangle, CheckCircle2, ListOrdered, Sigma } from "lucide-react";

export function LessonContentRenderer({ content }: { content: LessonContent[] }) {
  return (
    <div className="space-y-4 leading-relaxed">
      {content.map((block, idx) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={idx} className="text-base text-foreground/90 leading-loose">
                {block.content}
              </p>
            );

          case "heading":
            return (
              <h3
                key={idx}
                className="text-xl font-bold mt-6 mb-2 text-primary border-b-2 border-primary/20 pb-2"
              >
                {block.content}
              </h3>
            );

          case "list":
            return (
              <ul key={idx} className="space-y-2 pr-6">
                {block.items?.map((item, i) => (
                  <li key={i} className="text-base text-foreground/90 flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "example":
            return (
              <div
                key={idx}
                className="rounded-lg border-2 border-emerald-200 bg-emerald-50/50 p-4 my-3"
                dir="rtl"
              >
                <div className="flex items-center gap-2 mb-2 text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="font-semibold text-sm">مثال تطبيقي</span>
                </div>
                <pre className="text-sm whitespace-pre-wrap font-mono text-foreground/90 leading-relaxed">
                  {block.content}
                </pre>
              </div>
            );

          case "table":
            return (
              <div key={idx} className="overflow-x-auto rounded-lg border my-3">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10">
                    <tr>
                      {block.headers?.map((h, i) => (
                        <th key={i} className="p-3 text-right font-bold border-b">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows?.map((row, i) => (
                      <tr key={i} className="border-b hover:bg-muted/30">
                        {row.map((cell, j) => (
                          <td key={j} className="p-3 text-right">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "formula":
            return (
              <div
                key={idx}
                className="rounded-lg bg-muted/40 border-r-4 border-primary p-4 my-3 font-mono text-sm leading-relaxed"
                dir="rtl"
              >
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Sigma className="h-4 w-4" />
                  <span className="font-semibold text-xs">معادلة</span>
                </div>
                <pre className="whitespace-pre-wrap text-foreground/90">{block.content}</pre>
              </div>
            );

          case "note":
            return (
              <div
                key={idx}
                className="rounded-lg bg-blue-50 border-r-4 border-blue-500 p-4 my-3 text-sm"
              >
                <div className="flex items-center gap-2 mb-2 text-blue-700">
                  <Info className="h-4 w-4" />
                  <span className="font-semibold">ملاحظة</span>
                </div>
                <p className="text-foreground/90">{block.content}</p>
              </div>
            );

          case "tip":
            return (
              <div
                key={idx}
                className="rounded-lg bg-amber-50 border-r-4 border-amber-500 p-4 my-3 text-sm"
              >
                <div className="flex items-center gap-2 mb-2 text-amber-700">
                  <Lightbulb className="h-4 w-4" />
                  <span className="font-semibold">نصيحة</span>
                </div>
                <p className="text-foreground/90">{block.content}</p>
              </div>
            );

          case "warning":
            return (
              <div
                key={idx}
                className="rounded-lg bg-red-50 border-r-4 border-red-500 p-4 my-3 text-sm"
              >
                <div className="flex items-center gap-2 mb-2 text-red-700">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="font-semibold">تنبيه</span>
                </div>
                <p className="text-foreground/90">{block.content}</p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export function QuizComponent({
  quiz,
  lessonId,
  onComplete,
}: {
  quiz: any[];
  lessonId: string;
  onComplete?: (score: number) => void;
}) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = quiz.reduce((acc, q) => (answers[q.id] === q.correct ? acc + 1 : acc), 0);
  const percentage = Math.round((score / quiz.length) * 100);

  const handleSubmit = () => {
    setSubmitted(true);
    onComplete?.(percentage);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <ListOrdered className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold">اختبار الدرس</h3>
          <Badge variant="outline" className="mr-auto">
            {quiz.length} أسئلة
          </Badge>
        </div>

        <div className="space-y-6">
          {quiz.map((q, idx) => (
            <div key={q.id} className="space-y-3">
              <div className="font-semibold text-base">
                <span className="text-primary ml-2">{idx + 1}.</span>
                {q.question}
              </div>
              <div className="space-y-2 pr-6">
                {q.options.map((option: string, i: number) => {
                  const isSelected = answers[q.id] === i;
                  const isCorrect = q.correct === i;
                  const showCorrect = submitted && isCorrect;
                  const showWrong = submitted && isSelected && !isCorrect;

                  return (
                    <label
                      key={i}
                      className={`flex items-start gap-2 p-3 rounded-lg border cursor-pointer transition-colors
                        ${showCorrect ? "border-emerald-500 bg-emerald-50" : ""}
                        ${showWrong ? "border-red-500 bg-red-50" : ""}
                        ${!submitted && isSelected ? "border-primary bg-primary/5" : ""}
                        ${!submitted && !isSelected ? "border-border hover:bg-muted/40" : ""}
                      `}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={i}
                        checked={isSelected}
                        disabled={submitted}
                        onChange={() => setAnswers({ ...answers, [q.id]: i })}
                        className="mt-1"
                      />
                      <span className="text-sm">{option}</span>
                      {showCorrect && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-auto" />
                      )}
                    </label>
                  );
                })}
              </div>
              {submitted && (
                <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded pr-4">
                  <span className="font-semibold text-primary ml-1">الشرح:</span>
                  {q.explanation}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < quiz.length}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold disabled:opacity-50 hover:bg-primary/90 transition-colors"
            >
              تصحيح الاختبار
            </button>
          ) : (
            <>
              <div className={`px-4 py-2 rounded-md font-bold ${percentage >= 70 ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                نتيجتك: {score} / {quiz.length} ({percentage}%)
              </div>
              <button
                onClick={handleRetry}
                className="px-4 py-2 border rounded-md font-semibold hover:bg-muted transition-colors"
              >
                إعادة المحاولة
              </button>
            </>
          )}
          {submitted && percentage < 70 && (
            <p className="text-xs text-muted-foreground">
              نصيحة: راجع الدرس وأعد المحاولة. النجاح 70% أو أكثر.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import { useState, useMemo } from "react";
import { glossary, getGlossaryCategories, searchGlossary, GlossaryTerm } from "@/lib/accounting-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookText, Search, BookOpen, Volume2 } from "lucide-react";

export function GlossaryExplorer() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("الكل");
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);

  const categories = useMemo(() => getGlossaryCategories(), []);

  const filteredTerms = useMemo(() => {
    return searchGlossary(search, activeCategory);
  }, [search, activeCategory]);

  // Group terms by category for display
  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    filteredTerms.forEach((term) => {
      if (!groups[term.category]) groups[term.category] = [];
      groups[term.category].push(term);
    });
    return groups;
  }, [filteredTerms]);

  // Text-to-speech for English pronunciation
  const speak = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.8;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookText className="h-5 w-5 text-primary" />
            معجم المصطلحات المحاسبية
            <Badge variant="secondary" className="mr-auto">{glossary.length} مصطلح</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="ابحث عن مصطلح بالعربية أو الإنجليزية..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pr-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-muted-foreground">
            {filteredTerms.length} مصطلح {activeCategory !== "الكل" && `في "${activeCategory}"`}
          </div>
        </CardContent>
      </Card>

      {/* Terms grid grouped by category */}
      <div className="space-y-6">
        {Object.entries(groupedTerms).map(([category, terms]) => (
          <div key={category} className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b">
              <BookOpen className="h-4 w-4 text-primary" />
              <h3 className="font-bold text-base">{category}</h3>
              <Badge variant="outline" className="text-[10px]">{terms.length}</Badge>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {terms.map((term, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTerm(term)}
                  className="text-right p-4 rounded-lg border bg-card hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-bold text-base">{term.term}</h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <p className="text-xs text-muted-foreground italic" dir="ltr">
                          {term.english}
                        </p>
                        <Volume2
                          className="h-3 w-3 text-muted-foreground hover:text-primary cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            speak(term.english);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3">
                    {term.definition}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>لا توجد نتائج مطابقة لبحثك</p>
          <p className="text-xs mt-1">جرّب كلمة أخرى أو غيّر التصنيف</p>
        </div>
      )}

      {/* Term detail dialog */}
      {selectedTerm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedTerm(null)}
        >
          <Card
            className="max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{selectedTerm.term}</h2>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground italic" dir="ltr">
                      {selectedTerm.english}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => speak(selectedTerm.english)}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Badge variant="outline">{selectedTerm.category}</Badge>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-1">التعريف</h3>
                <p className="text-base leading-relaxed">{selectedTerm.definition}</p>
              </div>

              {selectedTerm.example && (
                <div className="p-3 rounded-lg bg-emerald-50 border-r-4 border-emerald-500">
                  <h3 className="text-sm font-semibold text-emerald-700 mb-1 flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5" />
                    مثال
                  </h3>
                  <p className="text-sm leading-relaxed">{selectedTerm.example}</p>
                </div>
              )}

              {selectedTerm.related && selectedTerm.related.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">مصطلحات ذات صلة</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTerm.related.map((rel, i) => {
                      const relatedTerm = glossary.find((g) => g.term === rel);
                      return (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          onClick={() => relatedTerm && setSelectedTerm(relatedTerm)}
                        >
                          {rel}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex justify-end pt-2">
                <Button variant="outline" onClick={() => setSelectedTerm(null)}>
                  إغلاق
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

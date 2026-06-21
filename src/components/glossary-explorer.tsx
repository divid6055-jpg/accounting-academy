"use client";

import { useState, useMemo } from "react";
import { glossary, getGlossaryCategories, searchGlossary, GlossaryTerm } from "@/lib/accounting-data";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookText, Search, BookOpen, Volume2, X, Sparkles, TrendingUp } from "lucide-react";

export function GlossaryExplorer() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("الكل");
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);

  const categories = useMemo(() => getGlossaryCategories(), []);

  const filteredTerms = useMemo(() => {
    return searchGlossary(search, activeCategory);
  }, [search, activeCategory]);

  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    filteredTerms.forEach((term) => {
      if (!groups[term.category]) groups[term.category] = [];
      groups[term.category].push(term);
    });
    return groups;
  }, [filteredTerms]);

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
      {/* Search & Filters Card */}
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-l from-primary/5 to-accent/5 p-6">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="ابحث عن مصطلح بالعربية أو الإنجليزية..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pr-12 h-14 text-base rounded-xl bg-background"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md scale-105"
                    : "bg-background hover:bg-muted hover:scale-105"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="flex items-center gap-2 mt-4 text-sm">
            <Badge variant="outline" className="bg-background">
              <Sparkles className="h-3 w-3 ml-1" />
              {filteredTerms.length} مصطلح
            </Badge>
            {activeCategory !== "الكل" && (
              <span className="text-xs text-muted-foreground">
                في تصنيف "{activeCategory}"
              </span>
            )}
          </div>
        </div>
      </Card>

      {/* Terms grouped by category */}
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
                  className="text-right p-4 rounded-xl border bg-card hover:border-primary/40 hover:shadow-md transition-all hover-lift group"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base group-hover:text-primary transition-colors">{term.term}</h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <p className="text-xs text-muted-foreground italic" dir="ltr">
                          {term.english}
                        </p>
                        <Volume2
                          className="h-3 w-3 text-muted-foreground hover:text-primary cursor-pointer flex-shrink-0"
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
        <Card>
          <CardContent className="py-16 text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground/30" />
            <h3 className="font-bold text-lg mb-2">لا توجد نتائج مطابقة لبحثك</h3>
            <p className="text-sm text-muted-foreground">جرّب كلمة أخرى أو غيّر التصنيف</p>
          </CardContent>
        </Card>
      )}

      {/* Term detail dialog */}
      {selectedTerm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-up"
          onClick={() => setSelectedTerm(null)}
        >
          <Card
            className="max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-2 bg-gradient-to-l from-primary to-accent" />
            <CardContent className="p-6 md:p-8 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold">{selectedTerm.term}</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-primary/10"
                      onClick={() => speak(selectedTerm.english)}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground italic" dir="ltr">
                    {selectedTerm.english}
                  </p>
                </div>
                <Badge variant="outline" className="bg-primary/5">{selectedTerm.category}</Badge>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  التعريف
                </h3>
                <p className="text-base leading-relaxed">{selectedTerm.definition}</p>
              </div>

              {selectedTerm.example && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border-r-4 border-emerald-500">
                  <h3 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5" />
                    مثال
                  </h3>
                  <p className="text-sm leading-relaxed">{selectedTerm.example}</p>
                </div>
              )}

              {selectedTerm.related && selectedTerm.related.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-1.5">
                    <TrendingUp className="h-3.5 w-3.5" />
                    مصطلحات ذات صلة
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTerm.related.map((rel, i) => {
                      const relatedTerm = glossary.find((g) => g.term === rel);
                      return (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
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
                <Button variant="outline" onClick={() => setSelectedTerm(null)} className="hover:bg-muted">
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

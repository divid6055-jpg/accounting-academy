"use client";

import { useState, useMemo } from "react";
import { glossary } from "@/lib/accounting-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookText, Search } from "lucide-react";

export function GlossaryExplorer() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("الكل");

  const categories = useMemo(() => {
    const cats = new Set(glossary.map((g) => g.category));
    return ["الكل", ...Array.from(cats)];
  }, []);

  const filteredTerms = useMemo(() => {
    return glossary.filter((term) => {
      const matchesSearch =
        !search ||
        term.term.includes(search) ||
        term.english.toLowerCase().includes(search.toLowerCase()) ||
        term.definition.includes(search);

      const matchesCategory =
        activeCategory === "الكل" || term.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookText className="h-5 w-5 text-primary" />
          معجم المصطلحات المحاسبية
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
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
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
          {filteredTerms.length} مصطلح
        </div>

        <div className="grid sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-1">
          {filteredTerms.map((term, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border bg-card hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="font-bold text-base">{term.term}</h4>
                  <p className="text-xs text-muted-foreground italic" dir="ltr">
                    {term.english}
                  </p>
                </div>
                <Badge variant="outline" className="text-[10px]">
                  {term.category}
                </Badge>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {term.definition}
              </p>
            </div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            لا توجد نتائج مطابقة لبحثك
          </div>
        )}
      </CardContent>
    </Card>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, Sparkles, ArrowLeft } from "lucide-react";

export function CTA({ onNavigate }: { onNavigate: (view: any) => void }) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
          <div className="absolute inset-0 islamic-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

          {/* Content */}
          <div className="relative p-8 md:p-16 text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">انضم لرحلتنا التعليمية</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              جاهز لبدء رحلتك نحو
              <br />
              <span className="text-amber-200">احتراف المحاسبة المالية؟</span>
            </h2>

            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              انضم إلى آلاف المتعلمين الذين اختاروا منصتنا لتعلم المحاسبة المالية بالعربية
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => onNavigate("curriculum")}
                className="text-base px-8 h-14 rounded-xl bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all group shadow-xl"
              >
                <GraduationCap className="h-5 w-5 ml-2 group-hover:rotate-12 transition-transform" />
                ابدأ من المستوى الأول
                <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-10 pt-8 border-t border-white/20 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                <span className="opacity-90">مجاني بالكامل</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-amber-300 animate-pulse" style={{ animationDelay: "0.5s" }} />
                <span className="opacity-90">بدون تسجيل</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-rose-300 animate-pulse" style={{ animationDelay: "1s" }} />
                <span className="opacity-90">يدعم الجوال</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" style={{ animationDelay: "1.5s" }} />
                <span className="opacity-90">وضع ليلي/نهاري</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

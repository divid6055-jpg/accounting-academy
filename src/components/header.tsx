"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "./theme-toggle";
import { useProgressStore } from "@/lib/progress-store";
import {
  Calculator,
  BookOpen,
  GraduationCap,
  Wrench,
  BookText,
  LayoutDashboard,
  Award,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

type View = "home" | "curriculum" | "tools" | "glossary" | "dashboard";

export function Header({
  onNavigate,
  activeView,
}: {
  onNavigate: (view: View) => void;
  activeView: View;
}) {
  const { completedLessons } = useProgressStore();
  const progress = completedLessons.length;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "الرئيسية", icon: BookOpen },
    { id: "curriculum", label: "المنهج", icon: GraduationCap },
    { id: "tools", label: "الأدوات", icon: Wrench },
    { id: "glossary", label: "المعجم", icon: BookText },
    { id: "dashboard", label: "لوحتي", icon: LayoutDashboard },
  ] as const;

  const handleNavClick = (view: View) => {
    onNavigate(view);
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b shadow-sm"
          : "bg-background/95 backdrop-blur-sm border-b"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 md:gap-3 font-bold text-lg md:text-xl group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-9 w-9 md:h-11 md:w-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shadow-lg">
                <Calculator className="h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <span className="leading-none">أكاديمية المحاسبة</span>
              <span className="text-[10px] md:text-xs text-muted-foreground font-normal leading-none mt-0.5">
                Financial Accounting Academy
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavButton
                key={item.id}
                active={activeView === item.id}
                onClick={() => handleNavClick(item.id as View)}
                icon={item.icon}
                label={item.label}
              />
            ))}
            {progress > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold ml-2">
                <Award className="h-3.5 w-3.5" />
                <span className="tabular-nums">{progress}</span>
                <span className="text-muted-foreground">درس</span>
              </div>
            )}
            <ThemeToggle />
          </nav>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-1">
            {progress > 0 && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                <Award className="h-3 w-3" />
                <span className="tabular-nums">{progress}</span>
              </div>
            )}
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10"
              aria-label="القائمة"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t animate-fade-up">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id as View)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeView === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function NavButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: any;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all group ${
        active
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <span className="flex items-center gap-1.5">
        <Icon className={`h-4 w-4 transition-transform ${active ? "scale-110" : "group-hover:scale-110"}`} />
        {label}
      </span>
      {active && (
        <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-l from-primary to-accent rounded-full" />
      )}
    </button>
  );
}

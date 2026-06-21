"use client";

import { Calculator, Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export function Footer({ onNavigate }: { onNavigate: (view: any) => void }) {
  const quickLinks = [
    { label: "الرئيسية", view: "home" },
    { label: "المنهج الكامل", view: "curriculum" },
    { label: "الأدوات التفاعلية", view: "tools" },
    { label: "معجم المصطلحات", view: "glossary" },
    { label: "لوحة التحكم", view: "dashboard" },
  ];

  const levels = [
    "المستوى الأول: الأساسيات",
    "المستوى الثاني: دورة المحاسبة",
    "المستوى الثالث: القوائم المالية",
    "المستوى الرابع: الاحتراف",
    "المستوى الخامس: التخصص المتقدم",
    "المستوى السادس: الإتقان المهني",
  ];

  const resources = [
    "التمارين المحاسبية",
    "دراسات الحالة",
    "معايير IFRS",
    "النظام الضريبي السعودي",
    "دليل الحسابات",
    "المعادلات المحاسبية",
  ];

  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-muted/30 mt-auto">
      <div className="absolute inset-0 islamic-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
                <Calculator className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg">أكاديمية المحاسبة</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              منصة عربية شاملة لتعلم المحاسبة المالية من الصفر إلى الاحتراف. دروس تفاعلية، أدوات محاسبية، اختبارات، ومعجم مصطلحات شامل.
            </p>
            {/* Social */}
            <div className="flex items-center gap-2">
              <SocialIcon icon={Github} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Mail} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate(link.view)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-right"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Levels */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">المستويات التعليمية</h4>
            <ul className="space-y-2.5">
              {levels.map((level, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate("curriculum")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-right"
                  >
                    {level}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">الموارد</h4>
            <ul className="space-y-2.5">
              {resources.map((resource, i) => (
                <li key={i}>
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {resource}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y">
          <FooterStat value="100K+" label="سطر برمجي" />
          <FooterStat value="80+" label="درس تعليمي" />
          <FooterStat value="500+" label="تمرين محلول" />
          <FooterStat value="300+" label="مصطلح محاسبي" />
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© 2024 أكاديمية المحاسبة المالية.</span>
            <span>جميع الحقوق محفوظة.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>صُمم بـ</span>
            <Heart className="h-4 w-4 text-rose-500 fill-rose-500 animate-pulse" />
            <span>للمتعلمين العرب</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <button className="h-9 w-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
      <Icon className="h-4 w-4" />
    </button>
  );
}

function FooterStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold gradient-text tabular-nums">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

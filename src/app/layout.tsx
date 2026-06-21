import type { Metadata } from "next";
import { Almarai, Tajawal, Cairo, Amiri, Reem_Kufi } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// الخط الأساسي للنصوص - Almarai (مقروء جداً وعصري)
const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
});

// خط العناوين - Tajawal (هندسي قوي وأنيق)
const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  display: "swap",
});

// خط العناصر التفاعلية - Cairo (نظيف وعصري)
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// خط زخرفي/تقليدي - Amiri (للاقتباسات والنصوص الرسمية)
const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

// خط كوفي عصري - Reem Kufi (للأرقام والعناوين الزخرفية)
const reemKufi = Reem_Kufi({
  variable: "--font-reem-kufi",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "أكاديمية المحاسبة المالية | تعلم المحاسبة من الصفر إلى الاحتراف",
  description:
    "منصة عربية شاملة لتعلم المحاسبة المالية من المبتدئ إلى الاحتراف. دروس تفاعلية، أدوات محاسبية، اختبارات، ومعجم مصطلحات شامل.",
  keywords: [
    "المحاسبة المالية",
    "تعلم المحاسبة",
    "محاسبة عربية",
    "القيد المزدوج",
    "القوائم المالية",
    "ميزان المراجعة",
    "IFRS",
    "محاسبة من الصفر",
  ],
  authors: [{ name: "أكاديمية المحاسبة المالية" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "أكاديمية المحاسبة المالية",
    description: "تعلم المحاسبة المالية من الصفر إلى الاحتراف باللغة العربية",
    type: "website",
    locale: "ar_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${almarai.variable} ${tajawal.variable} ${cairo.variable} ${amiri.variable} ${reemKufi.variable} antialiased bg-background text-foreground`}
        style={{
          fontFamily: "var(--font-almarai), var(--font-cairo), sans-serif",
        }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

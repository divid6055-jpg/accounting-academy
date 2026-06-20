import type { Metadata } from "next";
import { Cairo, Tajawal, Amiri } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
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
        className={`${cairo.variable} ${tajawal.variable} ${amiri.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

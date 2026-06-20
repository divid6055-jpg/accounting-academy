"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingDown, Coins, Building2, PiggyBank, BookCheck, Percent, Clock } from "lucide-react";

// أداة حساب الإهلاك
export function DepreciationTool() {
  const [cost, setCost] = useState(100000);
  const [salvage, setSalvage] = useState(10000);
  const [life, setLife] = useState(5);
  const [method, setMethod] = useState<"straight" | "declining" | "units">("straight");
  const [totalUnits, setTotalUnits] = useState(90000);
  const [yearUnits, setYearUnits] = useState(15000);

  const calculate = () => {
    if (method === "straight") {
      const annual = (cost - salvage) / life;
      return Array.from({ length: life }, (_, i) => ({
        year: i + 1,
        depreciation: annual,
        accumulated: annual * (i + 1),
        bookValue: cost - annual * (i + 1),
      }));
    } else if (method === "declining") {
      const rate = 2 / life;
      let bookValue = cost;
      const result = [];
      for (let i = 0; i < life; i++) {
        let dep = bookValue * rate;
        if (i === life - 1) dep = bookValue - salvage;
        bookValue -= dep;
        result.push({
          year: i + 1,
          depreciation: dep,
          accumulated: result.reduce((s, r) => s + r.depreciation, 0) + dep,
          bookValue: Math.max(bookValue, salvage),
        });
      }
      return result;
    } else {
      const ratePerUnit = (cost - salvage) / totalUnits;
      const annual = yearUnits * ratePerUnit;
      return Array.from({ length: life }, (_, i) => ({
        year: i + 1,
        depreciation: annual,
        accumulated: annual * (i + 1),
        bookValue: Math.max(cost - annual * (i + 1), salvage),
      }));
    }
  };

  const schedule = calculate();
  const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          حاسبة الإهلاك
        </CardTitle>
        <CardDescription>
          احسب الإهلاك بثلاث طرق: القسط الثابت، القسط المتناقص، وحدات الإنتاج
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div>
            <Label className="text-xs">تكلفة الأصل</Label>
            <Input type="number" value={cost} onChange={(e) => setCost(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">القيمة التخريدية</Label>
            <Input type="number" value={salvage} onChange={(e) => setSalvage(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">العمر الإنتاجي (سنوات)</Label>
            <Input type="number" value={life} onChange={(e) => setLife(Number(e.target.value) || 1)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">طريقة الإهلاك</Label>
            <Select value={method} onValueChange={(v) => setMethod(v as any)}>
              <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="straight">القسط الثابت</SelectItem>
                <SelectItem value="declining">القسط المتناقص المزدوج</SelectItem>
                <SelectItem value="units">وحدات الإنتاج</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {method === "units" && (
            <>
              <div>
                <Label className="text-xs">إجمالي الوحدات المتوقعة</Label>
                <Input type="number" value={totalUnits} onChange={(e) => setTotalUnits(Number(e.target.value) || 1)} className="mt-1 text-left tabular-nums" />
              </div>
              <div>
                <Label className="text-xs">وحدات السنة الأولى</Label>
                <Input type="number" value={yearUnits} onChange={(e) => setYearUnits(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
              </div>
            </>
          )}
        </div>

        <div className="rounded-lg border overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 text-right">السنة</th>
                <th className="p-3 text-left">الإهلاك السنوي</th>
                <th className="p-3 text-left">مجمع الإهلاك</th>
                <th className="p-3 text-left">القيمة الدفترية</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.year} className="border-t">
                  <td className="p-3 font-medium">{row.year}</td>
                  <td className="p-3 text-left tabular-nums">{fmt(row.depreciation)}</td>
                  <td className="p-3 text-left tabular-nums">{fmt(row.accumulated)}</td>
                  <td className="p-3 text-left tabular-nums font-semibold">{fmt(row.bookValue)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

// أداة حساب الرواتب والضرائب
export function PayrollTool() {
  const [grossSalary, setGrossSalary] = useState(10000);
  const [taxRate, setTaxRate] = useState(15);
  const [socialInsurance, setSocialInsurance] = useState(10);
  const [gosiEmployeeRate, setGosiEmployeeRate] = useState(0);

  const socialInsAmount = grossSalary * (socialInsurance / 100);
  const gosiAmount = grossSalary * (gosiEmployeeRate / 100);
  const taxableIncome = grossSalary - socialInsAmount - gosiAmount;
  const taxAmount = Math.max(0, taxableIncome * (taxRate / 100));
  const totalDeductions = socialInsAmount + gosiAmount + taxAmount;
  const netSalary = grossSalary - totalDeductions;

  const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 2 });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Coins className="h-5 w-5 text-primary" />
          حاسبة الرواتب والضرائب
        </CardTitle>
        <CardDescription>احسب الراتب الصافي بعد الاستقطاعات</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <Label className="text-xs">الراتب الإجمالي</Label>
            <Input type="number" value={grossSalary} onChange={(e) => setGrossSalary(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">نسبة الضريبة (%)</Label>
            <Input type="number" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">نسبة التأمينات الاجتماعية (%)</Label>
            <Input type="number" value={socialInsurance} onChange={(e) => setSocialInsurance(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">نسبة التأمين ضد التعطل (GOSI) (%)</Label>
            <Input type="number" value={gosiEmployeeRate} onChange={(e) => setGosiEmployeeRate(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>الراتب الإجمالي</span>
            <span className="tabular-nums font-semibold">{fmt(grossSalary)}</span>
          </div>
          <div className="flex justify-between text-red-600">
            <span>(-) التأمينات الاجتماعية ({socialInsurance}%)</span>
            <span className="tabular-nums">({fmt(socialInsAmount)})</span>
          </div>
          <div className="flex justify-between text-red-600">
            <span>(-) التأمين ضد التعطل ({gosiEmployeeRate}%)</span>
            <span className="tabular-nums">({fmt(gosiAmount)})</span>
          </div>
          <div className="flex justify-between text-muted-foreground border-t pt-2">
            <span>الدخل الخاضع للضريبة</span>
            <span className="tabular-nums">{fmt(taxableIncome)}</span>
          </div>
          <div className="flex justify-between text-red-600">
            <span>(-) ضريبة الدخل ({taxRate}%)</span>
            <span className="tabular-nums">({fmt(taxAmount)})</span>
          </div>
          <div className="flex justify-between text-red-600 border-t pt-2 font-medium">
            <span>إجمالي الاستقطاعات</span>
            <span className="tabular-nums">({fmt(totalDeductions)})</span>
          </div>
          <div className="flex justify-between font-bold text-base text-emerald-700 border-t-2 pt-2">
            <span>الراتب الصافي</span>
            <span className="tabular-nums">{fmt(netSalary)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// أداة حساب نقطة التعادل
export function BreakEvenTool() {
  const [fixedCosts, setFixedCosts] = useState(50000);
  const [sellingPrice, setSellingPrice] = useState(100);
  const [variableCost, setVariableCost] = useState(60);

  const contributionMargin = sellingPrice - variableCost;
  const breakEvenUnits = contributionMargin > 0 ? fixedCosts / contributionMargin : 0;
  const breakEvenRevenue = breakEvenUnits * sellingPrice;
  const contributionRatio = sellingPrice > 0 ? (contributionMargin / sellingPrice) * 100 : 0;

  const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 2 });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingDown className="h-5 w-5 text-primary" />
          حاسبة نقطة التعادل
        </CardTitle>
        <CardDescription>احسب نقطة التعادل حيث لا ربح ولا خسارة</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid sm:grid-cols-3 gap-3">
          <div>
            <Label className="text-xs">التكاليف الثابتة</Label>
            <Input type="number" value={fixedCosts} onChange={(e) => setFixedCosts(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">سعر البيع للوحدة</Label>
            <Input type="number" value={sellingPrice} onChange={(e) => setSellingPrice(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">التكلفة المتغيرة للوحدة</Label>
            <Input type="number" value={variableCost} onChange={(e) => setVariableCost(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-lg bg-emerald-50 p-4 border border-emerald-200">
            <div className="text-xs text-emerald-700 mb-1">هامش المساهمة للوحدة</div>
            <div className="text-2xl font-bold text-emerald-700 tabular-nums">{fmt(contributionMargin)}</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
            <div className="text-xs text-blue-700 mb-1">نسبة هامش المساهمة</div>
            <div className="text-2xl font-bold text-blue-700 tabular-nums">{contributionRatio.toFixed(1)}%</div>
          </div>
          <div className="rounded-lg bg-amber-50 p-4 border border-amber-200">
            <div className="text-xs text-amber-700 mb-1">نقطة التعادل (وحدات)</div>
            <div className="text-2xl font-bold text-amber-700 tabular-nums">{Math.ceil(breakEvenUnits).toLocaleString()}</div>
          </div>
          <div className="rounded-lg bg-violet-50 p-4 border border-violet-200">
            <div className="text-xs text-violet-700 mb-1">نقطة التعادل (إيراد)</div>
            <div className="text-2xl font-bold text-violet-700 tabular-nums">{fmt(breakEvenRevenue)}</div>
          </div>
        </div>

        {contributionMargin <= 0 && (
          <div className="p-3 rounded-lg bg-red-50 border-r-4 border-red-500 text-sm">
            <strong>تنبيه:</strong> هامش المساهمة سالب - سعر البيع أقل من التكلفة المتغيرة. راجع التسعير!
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// أداة حساب القيمة الزمنية للنقود
export function TimeValueTool() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(5);
  const [periods, setPeriods] = useState(5);
  const [mode, setMode] = useState<"future" | "present">("future");

  const r = rate / 100;
  const futureValue = principal * Math.pow(1 + r, periods);
  const presentValue = principal / Math.pow(1 + r, periods);
  const interest = mode === "future" ? futureValue - principal : principal - presentValue;

  const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 2 });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          القيمة الزمنية للنقود
        </CardTitle>
        <CardDescription>احسب القيمة المستقبلية أو الحالية لمبلغ معين</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button
            variant={mode === "future" ? "default" : "outline"}
            onClick={() => setMode("future")}
            size="sm"
          >
            القيمة المستقبلية
          </Button>
          <Button
            variant={mode === "present" ? "default" : "outline"}
            onClick={() => setMode("present")}
            size="sm"
          >
            القيمة الحالية
          </Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          <div>
            <Label className="text-xs">{mode === "future" ? "المبلغ الحالي" : "المبلغ المستقبلي"}</Label>
            <Input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">نسبة الفائدة (%)</Label>
            <Input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">عدد الفترات (سنوات)</Label>
            <Input type="number" value={periods} onChange={(e) => setPeriods(Number(e.target.value) || 1)} className="mt-1 text-left tabular-nums" />
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-l from-primary/10 to-accent/10 p-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">{mode === "future" ? "المبلغ الحالي" : "المبلغ المستقبلي"}</span>
            <span className="text-lg tabular-nums font-semibold">{fmt(principal)}</span>
          </div>
          <div className="flex justify-between items-center text-emerald-600">
            <span className="text-sm">الفائدة المركبة ({periods} سنوات)</span>
            <span className="text-lg tabular-nums font-semibold">+{fmt(interest)}</span>
          </div>
          <div className="flex justify-between items-center border-t-2 border-primary/20 pt-3">
            <span className="font-semibold">{mode === "future" ? "القيمة المستقبلية" : "القيمة الحالية"}</span>
            <span className="text-2xl tabular-nums font-bold text-primary">
              {fmt(mode === "future" ? futureValue : presentValue)}
            </span>
          </div>
        </div>

        <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded">
          <strong>المعادلة:</strong>{" "}
          {mode === "future"
            ? "FV = PV × (1 + r)^n  →  القيمة المستقبلية = المبلغ الحالي × (1 + نسبة الفائدة)^عدد الفترات"
            : "PV = FV ÷ (1 + r)^n  →  القيمة الحالية = المبلغ المستقبلي ÷ (1 + نسبة الفائدة)^عدد الفترات"}
        </div>
      </CardContent>
    </Card>
  );
}

// أداة حساب الضريبة على القيمة المضافة
export function VatTool() {
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(15);
  const [mode, setMode] = useState<"add" | "extract">("add");

  const vat = mode === "add" ? amount * (rate / 100) : amount - amount / (1 + rate / 100);
  const netAmount = mode === "add" ? amount : amount - vat;
  const grossAmount = mode === "add" ? amount + vat : amount;

  const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 2 });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Percent className="h-5 w-5 text-primary" />
          حاسبة ضريبة القيمة المضافة (VAT)
        </CardTitle>
        <CardDescription>أضف أو استخرج ضريبة القيمة المضافة</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button variant={mode === "add" ? "default" : "outline"} onClick={() => setMode("add")} size="sm">
            إضافة الضريبة
          </Button>
          <Button variant={mode === "extract" ? "default" : "outline"} onClick={() => setMode("extract")} size="sm">
            استخراج الضريبة
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <Label className="text-xs">{mode === "add" ? "المبلغ قبل الضريبة" : "المبلغ شامل الضريبة"}</Label>
            <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">نسبة الضريبة (%)</Label>
            <Input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>المبلغ قبل الضريبة</span>
            <span className="tabular-nums font-semibold">{fmt(netAmount)}</span>
          </div>
          <div className="flex justify-between text-amber-700">
            <span>ضريبة القيمة المضافة ({rate}%)</span>
            <span className="tabular-nums font-semibold">{fmt(vat)}</span>
          </div>
          <div className="flex justify-between font-bold text-base text-primary border-t-2 pt-2">
            <span>المبلغ شامل الضريبة</span>
            <span className="tabular-nums">{fmt(grossAmount)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// أداة حساب رأس المال العامل ونسبة السيولة
export function WorkingCapitalTool() {
  const [currentAssets, setCurrentAssets] = useState(500000);
  const [currentLiabilities, setCurrentLiabilities] = useState(250000);
  const [inventory, setInventory] = useState(150000);
  const [cash, setCash] = useState(100000);

  const workingCapital = currentAssets - currentLiabilities;
  const currentRatio = currentLiabilities > 0 ? currentAssets / currentLiabilities : 0;
  const quickRatio = currentLiabilities > 0 ? (currentAssets - inventory) / currentLiabilities : 0;
  const cashRatio = currentLiabilities > 0 ? cash / currentLiabilities : 0;

  const getStatus = (ratio: number, ideal: [number, number]) => {
    if (ratio >= ideal[1]) return { label: "ممتاز", color: "text-emerald-600" };
    if (ratio >= ideal[0]) return { label: "جيد", color: "text-lime-600" };
    return { label: "ضعيف", color: "text-red-600" };
  };

  const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 2 });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PiggyBank className="h-5 w-5 text-primary" />
          محلل رأس المال العامل والسيولة
        </CardTitle>
        <CardDescription>احسب مؤشرات السيولة المالية</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <Label className="text-xs">الأصول المتداولة</Label>
            <Input type="number" value={currentAssets} onChange={(e) => setCurrentAssets(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">الالتزامات المتداولة</Label>
            <Input type="number" value={currentLiabilities} onChange={(e) => setCurrentLiabilities(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">المخزون</Label>
            <Input type="number" value={inventory} onChange={(e) => setInventory(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
          <div>
            <Label className="text-xs">النقدية</Label>
            <Input type="number" value={cash} onChange={(e) => setCash(Number(e.target.value) || 0)} className="mt-1 text-left tabular-nums" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-lg bg-primary/5 p-4">
            <div className="text-xs text-muted-foreground mb-1">رأس المال العامل</div>
            <div className="text-2xl font-bold tabular-nums">{fmt(workingCapital)}</div>
            <div className="text-xs text-muted-foreground mt-1">{workingCapital > 0 ? "✓ موجب (جيد)" : "⚠ سالب (خطر)"}</div>
          </div>
          <div className={`rounded-lg p-4 ${getStatus(currentRatio, [1.5, 2]).color.includes("emerald") ? "bg-emerald-50" : getStatus(currentRatio, [1.5, 2]).color.includes("lime") ? "bg-lime-50" : "bg-red-50"}`}>
            <div className="text-xs text-muted-foreground mb-1">نسبة التداول</div>
            <div className="text-2xl font-bold tabular-nums">{fmt(currentRatio)}</div>
            <div className={`text-xs mt-1 ${getStatus(currentRatio, [1.5, 2]).color}`}>
              {getStatus(currentRatio, [1.5, 2]).label} (المعيار: 1.5-2.0)
            </div>
          </div>
          <div className="rounded-lg bg-amber-50 p-4">
            <div className="text-xs text-amber-700 mb-1">نسبة السيولة السريعة</div>
            <div className="text-2xl font-bold text-amber-700 tabular-nums">{fmt(quickRatio)}</div>
            <div className="text-xs text-amber-700 mt-1">(المعيار: ≥ 1.0)</div>
          </div>
          <div className="rounded-lg bg-violet-50 p-4">
            <div className="text-xs text-violet-700 mb-1">نسبة النقدية</div>
            <div className="text-2xl font-bold text-violet-700 tabular-nums">{fmt(cashRatio)}</div>
            <div className="text-xs text-violet-700 mt-1">(المعيار: 0.2-0.5)</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

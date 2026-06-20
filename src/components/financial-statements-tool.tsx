"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calculator, Building2, TrendingUp, TrendingDown } from "lucide-react";

type AssetItem = { name: string; value: number };
type LiabilityItem = { name: string; value: number };
type EquityItem = { name: string; value: number };

export function FinancialStatementsTool() {
  const [assets, setAssets] = useState<AssetItem[]>([
    { name: "النقدية", value: 50000 },
    { name: "البنك", value: 200000 },
    { name: "العملاء", value: 80000 },
    { name: "المخزون", value: 120000 },
    { name: "المعدات (صافي)", value: 300000 },
  ]);
  const [liabilities, setLiabilities] = useState<LiabilityItem[]>([
    { name: "الدائنون", value: 60000 },
    { name: "قروض طويلة الأجل", value: 150000 },
  ]);
  const [equity, setEquity] = useState<EquityItem[]>([
    { name: "رأس المال", value: 400000 },
    { name: "الأرباح المحتجزة", value: 140000 },
  ]);

  const [revenue, setRevenue] = useState(500000);
  const [cogs, setCogs] = useState(300000);
  const [operatingExpenses, setOperatingExpenses] = useState(80000);
  const [otherIncome, setOtherIncome] = useState(10000);
  const [otherExpenses, setOtherExpenses] = useState(20000);
  const [taxRate, setTaxRate] = useState(20);

  const totalAssets = useMemo(
    () => assets.reduce((s, a) => s + a.value, 0),
    [assets]
  );
  const totalLiabilities = useMemo(
    () => liabilities.reduce((s, l) => s + l.value, 0),
    [liabilities]
  );
  const totalEquity = useMemo(
    () => equity.reduce((s, e) => s + e.value, 0),
    [equity]
  );

  const grossProfit = revenue - cogs;
  const operatingProfit = grossProfit - operatingExpenses;
  const profitBeforeTax = operatingProfit + otherIncome - otherExpenses;
  const tax = Math.max(0, profitBeforeTax * (taxRate / 100));
  const netProfit = profitBeforeTax - tax;

  const formatNum = (n: number) =>
    Math.abs(n).toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          مُنشئ القوائم المالية
        </CardTitle>
        <CardDescription>
          أدخل البيانات المالية واحصل على قائمة الدخل وقائمة المركز المالي بشكل تلقائي
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="income" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="income">قائمة الدخل</TabsTrigger>
            <TabsTrigger value="balance">قائمة المركز المالي</TabsTrigger>
          </TabsList>

          <TabsContent value="income" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <Label>صافي المبيعات</Label>
                  <Input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value) || 0)}
                    className="mt-1 text-left tabular-nums"
                  />
                </div>
                <div>
                  <Label>تكلفة البضاعة المباعة</Label>
                  <Input
                    type="number"
                    value={cogs}
                    onChange={(e) => setCogs(Number(e.target.value) || 0)}
                    className="mt-1 text-left tabular-nums"
                  />
                </div>
                <div>
                  <Label>المصاريف التشغيلية</Label>
                  <Input
                    type="number"
                    value={operatingExpenses}
                    onChange={(e) => setOperatingExpenses(Number(e.target.value) || 0)}
                    className="mt-1 text-left tabular-nums"
                  />
                </div>
                <div>
                  <Label>إيرادات أخرى</Label>
                  <Input
                    type="number"
                    value={otherIncome}
                    onChange={(e) => setOtherIncome(Number(e.target.value) || 0)}
                    className="mt-1 text-left tabular-nums"
                  />
                </div>
                <div>
                  <Label>مصاريف أخرى</Label>
                  <Input
                    type="number"
                    value={otherExpenses}
                    onChange={(e) => setOtherExpenses(Number(e.target.value) || 0)}
                    className="mt-1 text-left tabular-nums"
                  />
                </div>
                <div>
                  <Label>نسبة الضريبة (%)</Label>
                  <Input
                    type="number"
                    value={taxRate}
                    onChange={(e) => setTaxRate(Number(e.target.value) || 0)}
                    className="mt-1 text-left tabular-nums"
                  />
                </div>
              </div>

              <div className="rounded-lg border bg-muted/30 p-4 space-y-2 text-sm">
                <h4 className="font-bold text-base mb-3 text-primary">قائمة الدخل</h4>
                <div className="flex justify-between">
                  <span>صافي المبيعات</span>
                  <span className="tabular-nums">{formatNum(revenue)}</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>(-) تكلفة البضاعة المباعة</span>
                  <span className="tabular-nums">({formatNum(cogs)})</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>مجمل الربح</span>
                  <span className="tabular-nums">{formatNum(grossProfit)}</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>(-) المصاريف التشغيلية</span>
                  <span className="tabular-nums">({formatNum(operatingExpenses)})</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>الربح التشغيلي</span>
                  <span className="tabular-nums">{formatNum(operatingProfit)}</span>
                </div>
                <div className="flex justify-between text-emerald-600">
                  <span>(+) إيرادات أخرى</span>
                  <span className="tabular-nums">{formatNum(otherIncome)}</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>(-) مصاريف أخرى</span>
                  <span className="tabular-nums">({formatNum(otherExpenses)})</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>الربح قبل الضريبة</span>
                  <span className="tabular-nums">{formatNum(profitBeforeTax)}</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>(-) ضريبة الدخل ({taxRate}%)</span>
                  <span className="tabular-nums">({formatNum(tax)})</span>
                </div>
                <div className={`flex justify-between font-bold border-t-2 pt-2 text-base ${netProfit >= 0 ? "text-emerald-700" : "text-red-700"}`}>
                  <span>صافي الربح</span>
                  <span className="tabular-nums">{formatNum(netProfit)}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2 pt-2 border-t">
                  <span>هامش صافي الربح</span>
                  <span className="tabular-nums">
                    {revenue > 0 ? ((netProfit / revenue) * 100).toFixed(1) : 0}%
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="balance" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Assets */}
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2 text-primary">
                  <TrendingUp className="h-4 w-4" /> الأصول
                </h4>
                {assets.map((a, i) => (
                  <div key={i} className="flex gap-1">
                    <Input
                      value={a.name}
                      onChange={(e) => {
                        const arr = [...assets];
                        arr[i] = { ...arr[i], name: e.target.value };
                        setAssets(arr);
                      }}
                      className="text-xs"
                    />
                    <Input
                      type="number"
                      value={a.value}
                      onChange={(e) => {
                        const arr = [...assets];
                        arr[i] = { ...arr[i], value: Number(e.target.value) || 0 };
                        setAssets(arr);
                      }}
                      className="text-xs text-left tabular-nums w-24"
                    />
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => setAssets([...assets, { name: "أصل جديد", value: 0 }])}
                >
                  + إضافة أصل
                </Button>
                <div className="flex justify-between font-bold border-t pt-2 text-sm">
                  <span>الإجمالي</span>
                  <span className="tabular-nums">{formatNum(totalAssets)}</span>
                </div>
              </div>

              {/* Liabilities */}
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2 text-rose-600">
                  <TrendingDown className="h-4 w-4" /> الالتزامات
                </h4>
                {liabilities.map((l, i) => (
                  <div key={i} className="flex gap-1">
                    <Input
                      value={l.name}
                      onChange={(e) => {
                        const arr = [...liabilities];
                        arr[i] = { ...arr[i], name: e.target.value };
                        setLiabilities(arr);
                      }}
                      className="text-xs"
                    />
                    <Input
                      type="number"
                      value={l.value}
                      onChange={(e) => {
                        const arr = [...liabilities];
                        arr[i] = { ...arr[i], value: Number(e.target.value) || 0 };
                        setLiabilities(arr);
                      }}
                      className="text-xs text-left tabular-nums w-24"
                    />
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => setLiabilities([...liabilities, { name: "التزام جديد", value: 0 }])}
                >
                  + إضافة التزام
                </Button>
                <div className="flex justify-between font-bold border-t pt-2 text-sm">
                  <span>الإجمالي</span>
                  <span className="tabular-nums">{formatNum(totalLiabilities)}</span>
                </div>
              </div>

              {/* Equity */}
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2 text-violet-600">
                  <Building2 className="h-4 w-4" /> حقوق الملكية
                </h4>
                {equity.map((e, i) => (
                  <div key={i} className="flex gap-1">
                    <Input
                      value={e.name}
                      onChange={(ev) => {
                        const arr = [...equity];
                        arr[i] = { ...arr[i], name: ev.target.value };
                        setEquity(arr);
                      }}
                      className="text-xs"
                    />
                    <Input
                      type="number"
                      value={e.value}
                      onChange={(ev) => {
                        const arr = [...equity];
                        arr[i] = { ...arr[i], value: Number(ev.target.value) || 0 };
                        setEquity(arr);
                      }}
                      className="text-xs text-left tabular-nums w-24"
                    />
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => setEquity([...equity, { name: "حقوق جديدة", value: 0 }])}
                >
                  + إضافة بند
                </Button>
                <div className="flex justify-between font-bold border-t pt-2 text-sm">
                  <span>الإجمالي</span>
                  <span className="tabular-nums">{formatNum(totalEquity)}</span>
                </div>
              </div>
            </div>

            {/* Verification */}
            <div className="mt-6 p-4 rounded-lg border-2 border-dashed">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm">
                  <div className="font-semibold">إجمالي الأصول: <span className="tabular-nums text-primary font-bold">{formatNum(totalAssets)}</span></div>
                  <div className="font-semibold">إجمالي الالتزامات + حقوق الملكية: <span className="tabular-nums text-primary font-bold">{formatNum(totalLiabilities + totalEquity)}</span></div>
                </div>
                <Badge
                  variant={totalAssets === totalLiabilities + totalEquity ? "default" : "destructive"}
                  className={totalAssets === totalLiabilities + totalEquity ? "bg-emerald-600" : ""}
                >
                  {totalAssets === totalLiabilities + totalEquity
                    ? "✓ الميزانية متوازنة"
                    : "الميزانية غير متوازنة"}
                </Badge>
              </div>
              {totalAssets !== totalLiabilities + totalEquity && (
                <div className="mt-2 text-xs text-muted-foreground">
                  الفرق: {formatNum(Math.abs(totalAssets - totalLiabilities - totalEquity))}
                  {" - راجع الأرقام أو أضف 'أرباح محتجزة' لتسوية الفرق"}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

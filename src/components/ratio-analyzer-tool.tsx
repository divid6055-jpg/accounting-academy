"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator } from "lucide-react";

export function RatioAnalyzerTool() {
  const [currentAssets, setCurrentAssets] = useState(500000);
  const [currentLiabilities, setCurrentLiabilities] = useState(250000);
  const [inventory, setInventory] = useState(150000);
  const [cash, setCash] = useState(100000);
  const [revenue, setRevenue] = useState(1000000);
  const [cogs, setCogs] = useState(600000);
  const [netProfit, setNetProfit] = useState(180000);
  const [totalAssets, setTotalAssets] = useState(1500000);
  const [equity, setEquity] = useState(1000000);
  const [totalLiabilities, setTotalLiabilities] = useState(500000);
  const [avgReceivables, setAvgReceivables] = useState(100000);
  const [avgInventory, setAvgInventory] = useState(120000);
  const [avgPayables, setAvgPayables] = useState(80000);
  const [operatingProfit, setOperatingProfit] = useState(250000);
  const [interest, setInterest] = useState(40000);

  const ratios = useMemo(() => {
    const currentRatio = currentLiabilities > 0 ? currentAssets / currentLiabilities : 0;
    const quickRatio =
      currentLiabilities > 0 ? (currentAssets - inventory) / currentLiabilities : 0;
    const cashRatio = currentLiabilities > 0 ? cash / currentLiabilities : 0;
    const workingCapital = currentAssets - currentLiabilities;

    const grossMargin = revenue > 0 ? ((revenue - cogs) / revenue) * 100 : 0;
    const netMargin = revenue > 0 ? (netProfit / revenue) * 100 : 0;
    const roa = totalAssets > 0 ? (netProfit / totalAssets) * 100 : 0;
    const roe = equity > 0 ? (netProfit / equity) * 100 : 0;

    const inventoryTurnover = avgInventory > 0 ? cogs / avgInventory : 0;
    const inventoryDays = inventoryTurnover > 0 ? 365 / inventoryTurnover : 0;
    const receivablesTurnover = avgReceivables > 0 ? revenue / avgReceivables : 0;
    const receivableDays = receivablesTurnover > 0 ? 365 / receivablesTurnover : 0;
    const payableDays = cogs > 0 && avgPayables > 0 ? (avgPayables / cogs) * 365 : 0;
    const cashCycle = inventoryDays + receivableDays - payableDays;

    const debtToAssets = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : 0;
    const debtToEquity = equity > 0 ? (totalLiabilities / equity) * 100 : 0;
    const interestCoverage = interest > 0 ? operatingProfit / interest : 0;

    return {
      currentRatio,
      quickRatio,
      cashRatio,
      workingCapital,
      grossMargin,
      netMargin,
      roa,
      roe,
      inventoryTurnover,
      inventoryDays,
      receivableDays,
      payableDays,
      cashCycle,
      debtToAssets,
      debtToEquity,
      interestCoverage,
    };
  }, [
    currentAssets,
    currentLiabilities,
    inventory,
    cash,
    revenue,
    cogs,
    netProfit,
    totalAssets,
    equity,
    totalLiabilities,
    avgReceivables,
    avgInventory,
    avgPayables,
    operatingProfit,
    interest,
  ]);

  const getRating = (value: number, ranges: [number, number, number]) => {
    if (value >= ranges[2]) return { label: "ممتاز", color: "bg-emerald-500" };
    if (value >= ranges[1]) return { label: "جيد", color: "bg-lime-500" };
    if (value >= ranges[0]) return { label: "مقبول", color: "bg-amber-500" };
    return { label: "ضعيف", color: "bg-red-500" };
  };

  const fmt = (n: number, digits = 2) =>
    n.toLocaleString("en-US", { maximumFractionDigits: digits, minimumFractionDigits: digits });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          مُحلل النسب المالية
        </CardTitle>
        <CardDescription>
          أدخل البيانات المالية واحصل على تحليل شامل للنسب مع تقييم فوري
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-muted-foreground">المدخلات المالية</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">الأصول المتداولة</Label>
                <Input
                  type="number"
                  value={currentAssets}
                  onChange={(e) => setCurrentAssets(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">الالتزامات المتداولة</Label>
                <Input
                  type="number"
                  value={currentLiabilities}
                  onChange={(e) => setCurrentLiabilities(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">المخزون</Label>
                <Input
                  type="number"
                  value={inventory}
                  onChange={(e) => setInventory(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">النقدية</Label>
                <Input
                  type="number"
                  value={cash}
                  onChange={(e) => setCash(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">الإيرادات</Label>
                <Input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">تكلفة البضاعة المباعة</Label>
                <Input
                  type="number"
                  value={cogs}
                  onChange={(e) => setCogs(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">صافي الربح</Label>
                <Input
                  type="number"
                  value={netProfit}
                  onChange={(e) => setNetProfit(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">إجمالي الأصول</Label>
                <Input
                  type="number"
                  value={totalAssets}
                  onChange={(e) => setTotalAssets(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">حقوق الملكية</Label>
                <Input
                  type="number"
                  value={equity}
                  onChange={(e) => setEquity(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">إجمالي الالتزامات</Label>
                <Input
                  type="number"
                  value={totalLiabilities}
                  onChange={(e) => setTotalLiabilities(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">متوسط العملاء</Label>
                <Input
                  type="number"
                  value={avgReceivables}
                  onChange={(e) => setAvgReceivables(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">متوسط المخزون</Label>
                <Input
                  type="number"
                  value={avgInventory}
                  onChange={(e) => setAvgInventory(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">متوسط الدائنين</Label>
                <Input
                  type="number"
                  value={avgPayables}
                  onChange={(e) => setAvgPayables(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">الربح التشغيلي</Label>
                <Input
                  type="number"
                  value={operatingProfit}
                  onChange={(e) => setOperatingProfit(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
              <div>
                <Label className="text-xs">مصروف الفائدة</Label>
                <Input
                  type="number"
                  value={interest}
                  onChange={(e) => setInterest(Number(e.target.value) || 0)}
                  className="text-xs tabular-nums text-left"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {/* Liquidity */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                نسب السيولة
              </h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>نسبة التداول</span>
                  <div className="flex items-center gap-2">
                    <span className="tabular-nums font-semibold">{fmt(ratios.currentRatio)}</span>
                    <Badge variant="outline" className="text-xs">
                      المعيار: 1.5-2.0
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>نسبة السيولة السريعة</span>
                  <div className="flex items-center gap-2">
                    <span className="tabular-nums font-semibold">{fmt(ratios.quickRatio)}</span>
                    <Badge variant="outline" className="text-xs">
                      المعيار: ≥ 1.0
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>نسبة النقدية</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.cashRatio)}</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>رأس المال العامل</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.workingCapital, 0)}</span>
                </div>
              </div>
            </div>

            {/* Profitability */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                نسب الربحية
              </h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>هامش مجمل الربح</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.grossMargin)}%</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>هامش صافي الربح</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.netMargin)}%</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>العائد على الأصول (ROA)</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.roa)}%</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>العائد على حقوق الملكية (ROE)</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.roe)}%</span>
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                نسب النشاط
              </h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>دوران المخزون</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.inventoryTurnover)} مرة</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>فترة التخزين</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.inventoryDays, 0)} يوم</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>فترة التحصيل</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.receivableDays, 0)} يوم</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>فترة الدفع</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.payableDays, 0)} يوم</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-emerald-50 border border-emerald-200">
                  <span className="font-semibold">الدورة النقدية</span>
                  <span className="tabular-nums font-bold text-emerald-700">
                    {fmt(ratios.cashCycle, 0)} يوم
                  </span>
                </div>
              </div>
            </div>

            {/* Leverage */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                نسب المديونية
              </h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>الديون / الأصول</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.debtToAssets)}%</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>الديون / الملكية</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.debtToEquity)}%</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/40">
                  <span>تغطية الفائدة</span>
                  <span className="tabular-nums font-semibold">{fmt(ratios.interestCoverage)} مرة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

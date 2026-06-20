"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, BookCheck, RotateCcw } from "lucide-react";

type EntryLine = {
  id: string;
  account: string;
  debit: number;
  credit: number;
};

const accountOptions = [
  { value: "النقدية", type: "أصل" },
  { value: "البنك", type: "أصل" },
  { value: "العملاء", type: "أصل" },
  { value: "المخزون", type: "أصل" },
  { value: "الأثاث", type: "أصل" },
  { value: "المعدات", type: "أصل" },
  { value: "الآلات", type: "أصل" },
  { value: "المباني", type: "أصل" },
  { value: "الأراضي", type: "أصل" },
  { value: "مصروفات مقدمة", type: "أصل" },
  { value: "الدائنون", type: "التزام" },
  { value: "أوراق الدفع", type: "التزام" },
  { value: "قروض بنكية", type: "التزام" },
  { value: "مصاريف مستحقة", type: "التزام" },
  { value: "إيرادات مقدمة", type: "التزام" },
  { value: "رأس المال", type: "حقوق ملكية" },
  { value: "الأرباح المحتجزة", type: "حقوق ملكية" },
  { value: "إيراد المبيعات", type: "إيراد" },
  { value: "إيراد الخدمات", type: "إيراد" },
  { value: "إيراد استشارات", type: "إيراد" },
  { value: "تكلفة البضاعة المباعة", type: "مصروف" },
  { value: "مصروف الرواتب", type: "مصروف" },
  { value: "مصروف الإيجار", type: "مصروف" },
  { value: "مصروف الكهرباء", type: "مصروف" },
  { value: "مصروف الإهلاك", type: "مصروف" },
  { value: "مجمع الإهلاك", type: "حساب عكسي" },
  { value: "مخصص الديون المشكوك فيها", type: "حساب عكسي" },
];

export function JournalEntryTool() {
  const [lines, setLines] = useState<EntryLine[]>([
    { id: "1", account: "النقدية", debit: 0, credit: 0 },
    { id: "2", account: "رأس المال", debit: 0, credit: 0 },
  ]);
  const [description, setDescription] = useState("");

  const updateLine = (id: string, field: keyof EntryLine, value: string | number) => {
    setLines((prev) =>
      prev.map((line) =>
        line.id === id
          ? { ...line, [field]: field === "account" ? value : Number(value) || 0 }
          : line
      )
    );
  };

  const addLine = () => {
    setLines([...lines, { id: Date.now().toString(), account: "", debit: 0, credit: 0 }]);
  };

  const removeLine = (id: string) => {
    setLines(lines.filter((l) => l.id !== id));
  };

  const reset = () => {
    setLines([
      { id: "1", account: "النقدية", debit: 0, credit: 0 },
      { id: "2", account: "رأس المال", debit: 0, credit: 0 },
    ]);
    setDescription("");
  };

  const totalDebit = lines.reduce((sum, l) => sum + (l.debit || 0), 0);
  const totalCredit = lines.reduce((sum, l) => sum + (l.credit || 0), 0);
  const isBalanced = totalDebit === totalCredit && totalDebit > 0;

  const getAccountType = (account: string) => {
    return accountOptions.find((a) => a.value === account)?.type || "";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookCheck className="h-5 w-5 text-primary" />
          أداة القيد المحاسبي التفاعلي
        </CardTitle>
        <CardDescription>
          أدخل قيدك المحاسبي وتحقق من توازنه. الجانب المدين يجب أن يساوي الجانب الدائن.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="description">شرح القيد</Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="مثال: إثبات استثمار المالك في المشروع"
            className="mt-1"
          />
        </div>

        <div className="rounded-lg border overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 text-right font-semibold">الحساب</th>
                <th className="p-3 text-right font-semibold">النوع</th>
                <th className="p-3 text-left font-semibold">مدين</th>
                <th className="p-3 text-left font-semibold">دائن</th>
                <th className="p-3 text-center font-semibold">حذف</th>
              </tr>
            </thead>
            <tbody>
              {lines.map((line) => (
                <tr key={line.id} className="border-t">
                  <td className="p-2">
                    <Select
                      value={line.account}
                      onValueChange={(v) => updateLine(line.id, "account", v)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="اختر الحساب" />
                      </SelectTrigger>
                      <SelectContent>
                        {accountOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.value} ({opt.type})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="p-2">
                    <Badge variant="outline">{getAccountType(line.account)}</Badge>
                  </td>
                  <td className="p-2">
                    <Input
                      type="number"
                      value={line.debit || ""}
                      onChange={(e) => updateLine(line.id, "debit", e.target.value)}
                      className="text-left tabular-nums"
                      placeholder="0"
                    />
                  </td>
                  <td className="p-2">
                    <Input
                      type="number"
                      value={line.credit || ""}
                      onChange={(e) => updateLine(line.id, "credit", e.target.value)}
                      className="text-left tabular-nums"
                      placeholder="0"
                    />
                  </td>
                  <td className="p-2 text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeLine(line.id)}
                      disabled={lines.length <= 2}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-muted">
              <tr>
                <td colSpan={2} className="p-3 font-semibold text-left">
                  الإجمالي
                </td>
                <td className="p-3 font-bold tabular-nums text-left">{totalDebit.toLocaleString()}</td>
                <td className="p-3 font-bold tabular-nums text-left">{totalCredit.toLocaleString()}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <Button onClick={addLine} variant="outline" size="sm">
            <Plus className="h-4 w-4 ml-1" />
            إضافة سطر
          </Button>
          <Button onClick={reset} variant="ghost" size="sm">
            <RotateCcw className="h-4 w-4 ml-1" />
            إعادة تعيين
          </Button>
          <div className="mr-auto flex items-center gap-2">
            <Badge
              variant={isBalanced ? "default" : "destructive"}
              className={isBalanced ? "bg-emerald-600" : ""}
            >
              {isBalanced ? "✓ القيد متوازن" : "القيد غير متوازن"}
            </Badge>
            {totalDebit !== totalCredit && totalDebit > 0 && (
              <span className="text-sm text-muted-foreground">
                الفرق: {Math.abs(totalDebit - totalCredit).toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

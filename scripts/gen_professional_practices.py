#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for professional-practices.ts
Produces a 6000+ line Arabic TypeScript file covering professional accounting
practices, accounting workflows, and internal control procedures.
All emitted strings are single-line (use \\n for breaks) to satisfy project rules.
"""
import os

OUT = "/home/z/my-project/src/lib/curriculum/professional-practices.ts"


def esc(s: str) -> str:
    """Escape a string for inclusion in a single-quoted TS string."""
    return s.replace("\\", "\\\\").replace("'", "\\'")


def arr(items, indent="    ", quote="'"):
    """Format a list of strings as a TS string array."""
    if not items:
        return "[]"
    inner = ",\n".join(indent + "  " + quote + esc(it) + quote for it in items)
    return "[\n" + inner + ",\n" + indent + "]"


def arr_obj(items, fmt, indent="    "):
    """Format a list of dicts as a TS object array using fmt(item, indent)."""
    if not items:
        return "[]"
    inner = ",\n".join(indent + "  " + fmt(it, indent + "  ") for it in items)
    return "[\n" + inner + ",\n" + indent + "]"


def fmt_example(e, ind):
    return ("{\n"
            + ind + "  scenario: '" + esc(e["scenario"]) + "',\n"
            + ind + "  approach: '" + esc(e["approach"]) + "',\n"
            + ind + "  outcome: '" + esc(e["outcome"]) + "',\n"
            + ind + "}")


def fmt_metric(m, ind):
    return ("{\n"
            + ind + "  name: '" + esc(m["name"]) + "',\n"
            + ind + "  target: '" + esc(m["target"]) + "',\n"
            + ind + "  measurement: '" + esc(m["measurement"]) + "',\n"
            + ind + "}")


def fmt_step(s, ind):
    return ("{\n"
            + ind + "  step: " + str(s["step"]) + ",\n"
            + ind + "  action: '" + esc(s["action"]) + "',\n"
            + ind + "  responsible: '" + esc(s["responsible"]) + "',\n"
            + ind + "  timeframe: '" + esc(s["timeframe"]) + "',\n"
            + ind + "  output: '" + esc(s["output"]) + "',\n"
            + ind + "}")


def emit_practice(p):
    return (
        "  {\n"
        "    id: '" + esc(p["id"]) + "',\n"
        "    category: '" + esc(p["category"]) + "',\n"
        "    title: '" + esc(p["title"]) + "',\n"
        "    englishTitle: '" + esc(p["englishTitle"]) + "',\n"
        "    description: '" + esc(p["description"]) + "',\n"
        "    detailedDescription: '" + esc(p["detailedDescription"]) + "',\n"
        "    importance: \"" + esc(p["importance"]) + "\",\n"
        "    implementation: " + arr(p["implementation"]) + ",\n"
        "    benefits: " + arr(p["benefits"]) + ",\n"
        "    challenges: " + arr(p["challenges"]) + ",\n"
        "    solutions: " + arr(p["solutions"]) + ",\n"
        "    examples: " + arr_obj(p["examples"], fmt_example) + ",\n"
        "    metrics: " + arr_obj(p["metrics"], fmt_metric) + ",\n"
        "    bestPractices: " + arr(p["bestPractices"]) + ",\n"
        "    commonMistakes: " + arr(p["commonMistakes"]) + ",\n"
        "    relatedPractices: " + arr(p["relatedPractices"]) + ",\n"
        "    professionalStandards: " + arr(p["professionalStandards"]) + ",\n"
        "  }"
    )


def emit_workflow(w):
    return (
        "  {\n"
        "    id: '" + esc(w["id"]) + "',\n"
        "    name: '" + esc(w["name"]) + "',\n"
        "    englishName: '" + esc(w["englishName"]) + "',\n"
        "    category: '" + esc(w["category"]) + "',\n"
        "    description: '" + esc(w["description"]) + "',\n"
        "    steps: " + arr_obj(w["steps"], fmt_step) + ",\n"
        "    inputs: " + arr(w["inputs"]) + ",\n"
        "    outputs: " + arr(w["outputs"]) + ",\n"
        "    controls: " + arr(w["controls"]) + ",\n"
        "    automation: " + arr(w["automation"]) + ",\n"
        "    risks: " + arr(w["risks"]) + ",\n"
        "    example: '" + esc(w["example"]) + "',\n"
        "  }"
    )


def emit_control(c):
    return (
        "  {\n"
        "    id: '" + esc(c["id"]) + "',\n"
        "    name: '" + esc(c["name"]) + "',\n"
        "    category: '" + esc(c["category"]) + "',\n"
        "    objective: '" + esc(c["objective"]) + "',\n"
        "    description: '" + esc(c["description"]) + "',\n"
        "    controlType: \"" + esc(c["controlType"]) + "\",\n"
        "    implementation: " + arr(c["implementation"]) + ",\n"
        "    frequency: '" + esc(c["frequency"]) + "',\n"
        "    responsible: '" + esc(c["responsible"]) + "',\n"
        "    documentation: " + arr(c["documentation"]) + ",\n"
        "    testing: " + arr(c["testing"]) + ",\n"
        "    effectiveness: " + arr(c["effectiveness"]) + ",\n"
        "    weaknesses: " + arr(c["weaknesses"]) + ",\n"
        "    example: '" + esc(c["example"]) + "',\n"
        "  }"
    )


HEADER = '''/**
 * ملف الممارسات المهنية المحاسبية الشامل
 * Comprehensive Arabic Professional Accounting Practices File
 *
 * يغطي هذا الملف:
 * - الممارسات المهنية (الأخلاقيات، الاستقلالية، السرية، الكفاءة، العناية المهنية، التخطيط، الإشراف، الرقابة على الجودة، التوثيق، جمع الأدلة، التواصل، إعداد التقارير)
 * - تدفقات العمل المحاسبية (دورة الإيرادات، دورة المشتريات، دورة الرواتب، دورة المخزون، دورة الأصول الثابتة، إدارة النقد، الإقفال المالي، إعداد الموازنة)
 * - إجراءات الرقابة الداخلية (التفويض، المطابقة، الفصل بين المهام، الرقابة المادية، الرقابة المعلوماتية، المراقبة)
 *
 * ملاحظة: جميع سلاسل النصوص مكتوبة على سطر واحد وتستخدم \\n للفواصل.
 * All string values are single-line; \\n is used for breaks.
 */

// ============================================================================
// تعريفات الأنواع (Type Definitions)
// ============================================================================

export type ProfessionalPractice = {
  id: string;
  category: string;
  title: string;
  englishTitle: string;
  description: string;
  detailedDescription: string;
  importance: "حرج" | "عالي" | "متوسط" | "منخفض";
  implementation: string[];
  benefits: string[];
  challenges: string[];
  solutions: string[];
  examples: { scenario: string; approach: string; outcome: string }[];
  metrics: { name: string; target: string; measurement: string }[];
  bestPractices: string[];
  commonMistakes: string[];
  relatedPractices: string[];
  professionalStandards: string[];
};

export type AccountingWorkflow = {
  id: string;
  name: string;
  englishName: string;
  category: string;
  description: string;
  steps: { step: number; action: string; responsible: string; timeframe: string; output: string }[];
  inputs: string[];
  outputs: string[];
  controls: string[];
  automation: string[];
  risks: string[];
  example: string;
};

export type InternalControlProcedure = {
  id: string;
  name: string;
  category: string;
  objective: string;
  description: string;
  controlType: "وقائي" | "كشفي" | "تصحيحي" | "توجيهي";
  implementation: string[];
  frequency: string;
  responsible: string;
  documentation: string[];
  testing: string[];
  effectiveness: string[];
  weaknesses: string[];
  example: string;
};

'''

# These will be appended from data modules
PRACTICES = []
WORKFLOWS = []
CONTROLS = []

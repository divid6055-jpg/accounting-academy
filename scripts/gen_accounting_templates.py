#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate Arabic accounting templates TypeScript file (6,000+ lines)."""

OUTPUT = "/home/z/my-project/src/lib/curriculum/accounting-templates.ts"

lines = []

def L(s=""):
    lines.append(s)

def emit_template(tid, name, en_name, category, ttype, description, purpose, structure, totals, instructions, best_practices, example_scenario, example_data, example_result):
    L("  {")
    L('    id: "' + tid + '",')
    L('    name: "' + name + '",')
    L('    englishName: "' + en_name + '",')
    L('    category: "' + category + '",')
    L('    type: "' + ttype + '",')
    L('    description: "' + description + '",')
    L('    purpose: "' + purpose + '",')
    L("    structure: [")
    for sec in structure:
        L('      { section: "' + sec[0] + '", items: [')
        for it in sec[1]:
            L('        { name: "' + it[0] + '", amount: ' + str(it[1]) + ' },')
        L("      ] },")
    L("    ],")
    L("    totals: [")
    for t in totals:
        L('      { name: "' + t[0] + '", formula: "' + t[1] + '", value: ' + str(t[2]) + ' },')
    L("    ],")
    L("    instructions: [")
    for ins in instructions:
        L('      "' + ins + '",')
    L("    ],")
    L("    bestPractices: [")
    for bp in best_practices:
        L('      "' + bp + '",')
    L("    ],")
    L("    example: {")
    L('      scenario: "' + example_scenario + '",')
    L("      filledData: {")
    for k, v in example_data.items():
        if isinstance(v, str):
            L('        ' + k + ': "' + v + '",')
        else:
            L('        ' + k + ': ' + str(v) + ',')
    L("      },")
    L('      result: "' + example_result + '"')
    L("    }")
    L("  },")

def emit_journal(jid, jname, jdesc, entries, jnotes):
    L("  {")
    L('    id: "' + jid + '",')
    L('    name: "' + jname + '",')
    L('    description: "' + jdesc + '",')
    L("    entries: [")
    for e in entries:
        L('      { date: "' + e[0] + '", accounts: [')
        for a in e[1]:
            L('        { account: "' + a[0] + '", debit: ' + str(a[1]) + ', credit: ' + str(a[2]) + ' },')
        L('      ], description: "' + e[2] + '" },')
    L("    ],")
    L("    notes: [")
    for n in jnotes:
        L('      "' + n + '",')
    L("    ],")
    L("  },")

def emit_report(rid, rname, ren_name, rcat, rdesc, rsections, rformat, rexample):
    L("  {")
    L('    id: "' + rid + '",')
    L('    name: "' + rname + '",')
    L('    englishName: "' + ren_name + '",')
    L('    category: "' + rcat + '",')
    L('    description: "' + rdesc + '",')
    L("    sections: [")
    for s in rsections:
        is_req = "true" if s[2] else "false"
        L('      { name: "' + s[0] + '", content: "' + s[1] + '", isRequired: ' + is_req + ' },')
    L("    ],")
    L('    format: "' + rformat + '",')
    L('    example: "' + rexample + '"')
    L("  },")

# ============================================================
# HEADER + TYPE DEFINITIONS
# ============================================================
L("// قوالب المحاسبة العربية الشاملة - Arabic Accounting Templates")
L("// ملف شامل لجميع القوالب المحاسبية: قيود يومية، قوائم مالية، تقارير داخلية، متخصصة، صناعية")
L("// مبني على معايير IFRS و SOCPA - جميع المبالغ بالريال السعودي")
L("// ملاحظة: جميع النصوص على سطر واحد لضمان التوافق مع TypeScript")
L("")
L("export type AccountingTemplate = {")
L("  id: string;")
L("  name: string;")
L("  englishName: string;")
L("  category: string;")
L("  type: string;")
L("  description: string;")
L("  purpose: string;")
L("  structure: { section: string; items: { name: string; amount: number }[] }[];")
L("  totals: { name: string; formula: string; value: number }[];")
L("  instructions: string[];")
L("  bestPractices: string[];")
L("  example: {")
L("    scenario: string;")
L("    filledData: any;")
L("    result: string;")
L("  };")
L("};")
L("")
L("export type JournalTemplate = {")
L("  id: string;")
L("  name: string;")
L("  description: string;")
L("  entries: { date: string; accounts: { account: string; debit: number; credit: number }[]; description: string }[];")
L("  notes: string[];")
L("};")
L("")
L("export type ReportTemplate = {")
L("  id: string;")
L("  name: string;")
L("  englishName: string;")
L("  category: string;")
L("  description: string;")
L("  sections: { name: string; content: string; isRequired: boolean }[];")
L("  format: string;")
L("  example: string;")
L("};")
L("")
L("export const accountingTemplates: AccountingTemplate[] = [")

exec(open("/home/z/my-project/scripts/tpl_part1.py", encoding="utf-8").read())
exec(open("/home/z/my-project/scripts/tpl_part2.py", encoding="utf-8").read())
exec(open("/home/z/my-project/scripts/tpl_part3.py", encoding="utf-8").read())

L("];")
L("")
L("export const journalTemplates: JournalTemplate[] = [")

exec(open("/home/z/my-project/scripts/tpl_journal.py", encoding="utf-8").read())

L("];")
L("")
L("export const reportTemplates: ReportTemplate[] = [")

exec(open("/home/z/my-project/scripts/tpl_reports.py", encoding="utf-8").read())

L("];")
L("")

with open(OUTPUT, "w", encoding="utf-8") as f:
    f.write("\n".join(lines) + "\n")

print("Generated " + str(len(lines)) + " lines to " + OUTPUT)

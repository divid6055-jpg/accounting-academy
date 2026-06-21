#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generator for accounting-standards-mega.ts - Arabic accounting standards mega file."""

import os

TYPE_DEF = '''export type AccountingStandardDetail = {
  id: string;
  code: string;
  title: string;
  englishTitle: string;
  category: string;
  status: "ساري" | "محل" | "ملغى";
  effectiveDate: string;
  objective: string;
  detailedObjective: string;
  scope: string;
  scopeExclusions: string[];
  keyDefinitions: { term: string; definition: string; example?: string }[];
  recognitionCriteria: string[];
  measurementPrinciples: string[];
  initialMeasurement: string;
  subsequentMeasurement: string;
  derecognition: string[];
  presentationRequirements: string[];
  disclosureRequirements: string[];
  implementationGuidance: { scenario: string; treatment: string; journalEntry?: string }[];
  practicalExamples: { case: string; data: Record<string, any>; solution: string[]; outcome: string }[];
  transitionalProvisions: string[];
  interactionsWithOtherStandards: { standard: string; interaction: string }[];
  commonImplementationChallenges: string[];
  auditConsiderations: string[];
  saudiContext: string[];
  recentAmendments: string[];
  futureAmendments: string[];
  relatedStandards: string[];
};

export const accountingStandardsMega: AccountingStandardDetail[] = [
'''

CLOSING = '''];

'''

def esc(s):
    """Escape string for TypeScript double-quoted strings."""
    if s is None:
        return ""
    s = str(s)
    s = s.replace("\\", "\\\\")
    s = s.replace('"', '\\"')
    s = s.replace("\n", " ")
    s = s.replace("\r", " ")
    s = s.replace("\t", " ")
    return s

def gen_string_field(name, value, indent="    "):
    return f'{indent}{name}: "{esc(value)}",'

def gen_string_array(name, items, indent="    "):
    lines = [f"{indent}{name}: ["]
    for item in items:
        lines.append(f'{indent}  "{esc(item)}",')
    lines.append(f"{indent}],")
    return "\n".join(lines)

def gen_key_definitions(items):
    lines = ["    keyDefinitions: ["]
    for kd in items:
        line = f'      {{ term: "{esc(kd["term"])}", definition: "{esc(kd["definition"])}"'
        if kd.get("example"):
            line += f', example: "{esc(kd["example"])}"'
        line += " },"
        lines.append(line)
    lines.append("    ],")
    return "\n".join(lines)

def gen_implementation_guidance(items):
    lines = ["    implementationGuidance: ["]
    for ig in items:
        line = f'      {{ scenario: "{esc(ig["scenario"])}", treatment: "{esc(ig["treatment"])}"'
        if ig.get("journalEntry"):
            line += f', journalEntry: "{esc(ig["journalEntry"])}"'
        line += " },"
        lines.append(line)
    lines.append("    ],")
    return "\n".join(lines)

def gen_practical_examples(items):
    lines = ["    practicalExamples: ["]
    for pe in items:
        lines.append("      {")
        lines.append(f'        case: "{esc(pe["case"])}",')
        lines.append("        data: {")
        for k, v in pe["data"].items():
            if isinstance(v, str):
                lines.append(f'          {k}: "{esc(v)}",')
            elif isinstance(v, bool):
                lines.append(f'          {k}: {"true" if v else "false"},')
            elif v is None:
                lines.append(f'          {k}: null,')
            else:
                lines.append(f'          {k}: {v},')
        lines.append("        },")
        lines.append("        solution: [")
        for sol in pe["solution"]:
            lines.append(f'          "{esc(sol)}",')
        lines.append("        ],")
        lines.append(f'        outcome: "{esc(pe["outcome"])}",')
        lines.append("      },")
    lines.append("    ],")
    return "\n".join(lines)

def gen_interactions(items):
    lines = ["    interactionsWithOtherStandards: ["]
    for ia in items:
        lines.append(f'      {{ standard: "{esc(ia["standard"])}", interaction: "{esc(ia["interaction"])}" }},')
    lines.append("    ],")
    return "\n".join(lines)

def gen_standard(s):
    lines = ["  {"]
    for field in ["id", "code", "title", "englishTitle", "category", "status", "effectiveDate",
                   "objective", "detailedObjective", "scope", "initialMeasurement", "subsequentMeasurement"]:
        lines.append(gen_string_field(field, s[field]))
    lines.append(gen_string_array("scopeExclusions", s["scopeExclusions"]))
    lines.append(gen_key_definitions(s["keyDefinitions"]))
    lines.append(gen_string_array("recognitionCriteria", s["recognitionCriteria"]))
    lines.append(gen_string_array("measurementPrinciples", s["measurementPrinciples"]))
    lines.append(gen_string_array("derecognition", s["derecognition"]))
    lines.append(gen_string_array("presentationRequirements", s["presentationRequirements"]))
    lines.append(gen_string_array("disclosureRequirements", s["disclosureRequirements"]))
    lines.append(gen_implementation_guidance(s["implementationGuidance"]))
    lines.append(gen_practical_examples(s["practicalExamples"]))
    lines.append(gen_string_array("transitionalProvisions", s["transitionalProvisions"]))
    lines.append(gen_interactions(s["interactionsWithOtherStandards"]))
    lines.append(gen_string_array("commonImplementationChallenges", s["commonImplementationChallenges"]))
    lines.append(gen_string_array("auditConsiderations", s["auditConsiderations"]))
    lines.append(gen_string_array("saudiContext", s["saudiContext"]))
    lines.append(gen_string_array("recentAmendments", s["recentAmendments"]))
    lines.append(gen_string_array("futureAmendments", s["futureAmendments"]))
    lines.append(gen_string_array("relatedStandards", s["relatedStandards"]))
    lines.append("  },")
    return "\n".join(lines)

standards = []

# Standards data will be appended below

OUTPUT_PATH = "/home/z/my-project/src/lib/curriculum/accounting-standards-mega.ts"

def main():
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write(TYPE_DEF)
        for s in standards:
            f.write(gen_standard(s))
            f.write("\n")
        f.write(CLOSING)
    # Count lines
    with open(OUTPUT_PATH, "r", encoding="utf-8") as f:
        line_count = sum(1 for _ in f)
    print(f"Generated {OUTPUT_PATH}")
    print(f"Total standards: {len(standards)}")
    print(f"Total lines: {line_count}")

if __name__ == "__main__":
    main()

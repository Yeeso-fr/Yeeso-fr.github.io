import { z } from "zod";

const ScoreSchema = z.number().min(0).max(100);

export const QaScoresSchema = z.object({
  generatedAt: z.iso.datetime(),
  lighthouse: z.object({
    performance: ScoreSchema,
    accessibility: ScoreSchema,
    bestPractices: ScoreSchema,
    seo: ScoreSchema,
  }),
  axe: z.object({
    score: ScoreSchema,
    rulesPassed: z.number().int().nonnegative(),
    rulesTotal: z.number().int().nonnegative(),
  }),
  storybook: z.object({
    score: ScoreSchema,
    testsPassed: z.number().int().nonnegative(),
    testsTotal: z.number().int().nonnegative(),
  }),
  ecoindex: z.object({
    score: ScoreSchema,
    grade: z.enum(["A", "B", "C", "D", "E", "F", "G"]),
    water: z.number().nonnegative(),
    ghg: z.number().nonnegative(),
  }),
});

export type QaScores = z.infer<typeof QaScoresSchema>;

import fs from "node:fs";
import path from "node:path";
import { type QaScores, QaScoresSchema } from "@/entities/qa-scores/qa-scores";

const QA_SCORES_PATH = path.join(process.cwd(), "src/content/qa-scores.json");

export function readQaScores(): QaScores | null {
  if (!fs.existsSync(QA_SCORES_PATH)) return null;
  const raw = fs.readFileSync(QA_SCORES_PATH, "utf8");
  return QaScoresSchema.parse(JSON.parse(raw));
}

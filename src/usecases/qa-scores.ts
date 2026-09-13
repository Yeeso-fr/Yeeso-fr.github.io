import { readQaScores } from "@/infrastructure/qa-scores/qa-scores.repository";

export function getQaScores() {
  return readQaScores();
}

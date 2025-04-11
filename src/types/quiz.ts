export type GameState = "start" | "playing" | "end";

export interface Question {
  question: string;
  choices: AnswerChoice;
  answer: string;
  reason?: string;
}

export interface AnswerChoice {
  A: string;
  B: string;
  C: string;
  D: string;
  E?: string;
  F?: string;
}

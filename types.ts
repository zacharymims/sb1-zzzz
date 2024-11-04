export interface Question {
  id: string;
  question: string;
  answers: string[];
  correctAnswers: string[];
  explanation: string;
  questionTag: string;
}
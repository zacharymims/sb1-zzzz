export interface Question {
  id: string;
  question: string;
  answers: string[];
  correctAnswers: string[];
  explanation: string;
  questionTag: string;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  userName: string;
  date: string;
}

export interface CategoryRating {
  state: string;
  category: string;
  averageRating: number;
  totalReviews: number;
  reviews: Review[];
}
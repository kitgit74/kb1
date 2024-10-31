export interface Question {
  id: string;
  group: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizState {
  currentQuestion: number;
  answers: Record<string, number>;
  showResults: boolean;
  questions: Question[];
  setAnswer: (questionId: string, answer: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  showResultsScreen: () => void;
}
import { create } from 'zustand';
import { QuizState } from './types';
import { questions } from './questions';

export const useQuizStore = create<QuizState>((set) => ({
  currentQuestion: 0,
  answers: {},
  showResults: false,
  questions,
  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: { ...state.answers, [questionId]: answer },
    })),
  nextQuestion: () =>
    set((state) => ({
      currentQuestion: Math.min(state.currentQuestion + 1, state.questions.length - 1),
    })),
  prevQuestion: () =>
    set((state) => ({
      currentQuestion: Math.max(state.currentQuestion - 1, 0),
    })),
  showResultsScreen: () =>
    set(() => ({
      showResults: true,
    })),
}));
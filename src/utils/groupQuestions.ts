import { Question } from '../types';

export const groupQuestions = (questions: Question[]): Record<string, Question[]> => {
  return questions.reduce((groups, question) => {
    const group = question.group;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(question);
    return groups;
  }, {} as Record<string, Question[]>);
};
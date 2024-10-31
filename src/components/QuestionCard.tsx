import React from 'react';
import { Question } from '../types';
import { useQuizStore } from '../store';
import { CheckCircle2, Circle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const { answers, setAnswer } = useQuizStore();
  const selectedAnswer = answers[question.id];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-500">Question {question.id}</span>
          <span className="text-sm font-medium text-blue-600">Group {question.group}</span>
        </div>
        <h2 className="text-xl font-bold mt-2">{question.text}</h2>
      </div>
      
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setAnswer(question.id, index)}
            className={`w-full text-left p-4 rounded-lg flex items-center space-x-3 transition-colors
              ${selectedAnswer === index 
                ? 'bg-blue-50 border-2 border-blue-500' 
                : 'border-2 border-gray-200 hover:bg-gray-50'
              }`}
          >
            {selectedAnswer === index ? (
              <CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" />
            ) : (
              <Circle className="text-gray-400 w-5 h-5 flex-shrink-0" />
            )}
            <span>{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import { Question } from '../types';

interface QuestionGroupProps {
  group: string;
  questions: Question[];
}

export const QuestionGroup: React.FC<QuestionGroupProps> = ({ group, questions }) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Group {group}</h2>
      <div className="space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="bg-white rounded-lg shadow p-4">
            <h3 className="font-medium mb-2">Question {question.id}</h3>
            <p className="text-gray-600">{question.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
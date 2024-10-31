import React from 'react';
import { useQuizStore } from '../store';
import { Trophy, CheckCircle, XCircle } from 'lucide-react';

export const Results: React.FC = () => {
  const { questions, answers } = useQuizStore();
  
  const correctAnswers = questions.filter(
    (q) => answers[q.id] === q.correctAnswer
  ).length;
  
  const score = Math.round((correctAnswers / questions.length) * 100);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
          <Trophy className="w-12 h-12 text-blue-500" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Quiz Complete!</h1>
        <p className="text-gray-600">
          You scored {score}% ({correctAnswers} out of {questions.length} correct)
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((question) => (
          <div 
            key={question.id}
            className="p-4 rounded-lg border-2 border-gray-100"
          >
            <div className="flex items-start space-x-3">
              {answers[question.id] === question.correctAnswer ? (
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              )}
              <div>
                <h3 className="font-medium">{question.text}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Correct answer: {question.options[question.correctAnswer]}
                </p>
                {answers[question.id] !== question.correctAnswer && (
                  <p className="text-sm text-red-500 mt-1">
                    Your answer: {question.options[answers[question.id]]}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
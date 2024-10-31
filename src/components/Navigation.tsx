import React from 'react';
import { useQuizStore } from '../store';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { 
    currentQuestion, 
    questions, 
    nextQuestion, 
    prevQuestion, 
    showResultsScreen,
    answers 
  } = useQuizStore();

  const isLastQuestion = currentQuestion === questions.length - 1;
  const hasAnsweredCurrent = answers[questions[currentQuestion].id] !== undefined;
  const progress = (Object.keys(answers).length / questions.length) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="h-2 w-full bg-gray-200 rounded-full mb-4">
          <div 
            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>

          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>

          {isLastQuestion ? (
            <button
              onClick={showResultsScreen}
              disabled={!hasAnsweredCurrent}
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Finish Quiz
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              disabled={!hasAnsweredCurrent}
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
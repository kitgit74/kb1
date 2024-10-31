import React from 'react';
import { QuestionCard } from './components/QuestionCard';
import { Navigation } from './components/Navigation';
import { Results } from './components/Results';
import { useQuizStore } from './store';
import { GraduationCap } from 'lucide-react';

function App() {
  const { currentQuestion, questions, showResults } = useQuizStore();

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <Results />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">Knowledge Test</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 mb-24">
        <QuestionCard question={questions[currentQuestion]} />
      </main>

      <Navigation />
    </div>
  );
}

export default App;
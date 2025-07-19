"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { wordQuiz } from "../quiz";
import { CheckCircle, XCircle, ArrowRight, ArrowLeft, Trophy, BookOpen } from "lucide-react";

// Function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function WordQuizPage() {
  const [shuffledQuiz, setShuffledQuiz] = useState(() => shuffleArray(wordQuiz));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const router = useRouter();

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showResults) {
      setShowResults(true);
    }
  }, [timeLeft, showResults]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions.has(currentQuestion)) return;
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === shuffledQuiz[currentQuestion].correct;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    setAnsweredQuestions(prev => new Set(prev).add(currentQuestion));
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuiz.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };

  const handleRetake = () => {
    setShuffledQuiz(shuffleArray(wordQuiz));
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setShowResults(false);
    setAnsweredQuestions(new Set());
    setTimeLeft(300);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2)}`;
  };

  const progress = (currentQuestion / shuffledQuiz.length) * 100;
  const question = shuffledQuiz[currentQuestion];

  if (showResults) {
    const percentage = Math.round((score / shuffledQuiz.length) * 100);
    const isPassing = percentage >= 70;
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Trophy className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Word Quiz Results</h1>
            <p className="text-gray-600">You've completed the Microsoft Word assessment</p>
          </div>

          {/* Results Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
                isPassing ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {isPassing ? (
                  <CheckCircle className="w-12 h-12" />
                ) : (
                  <XCircle className="w-12 h-12" />
                )}
              </div>
              
              <h2 className={`text-4xl font-bold mb-2 ${
                isPassing ? 'text-green-600' : 'text-red-600'
              }`}>
                {percentage}%
              </h2>
              <p className={`text-xl font-semibold mb-4 ${
                isPassing ? 'text-green-700' : 'text-red-700'
              }`}>
                {isPassing ? 'Congratulations! You passed!' : 'Keep practicing to improve your score'}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-2xl font-bold text-blue-600">{score}</div>
                  <div className="text-gray-600">Correct Answers</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-2xl font-bold text-gray-600">{shuffledQuiz.length - score}</div>
                  <div className="text-gray-600">Incorrect Answers</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-2xl font-bold text-purple-600">{formatTime(300 - timeLeft)}</div>
                  <div className="text-gray-600">Time Taken</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRetake}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                <BookOpen className="w-5 h-5" />
                Retake Quiz
              </button>
              <button
                onClick={() => router.push('/word')}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-semibold">
                <ArrowLeft className="w-5 h-5" />
                Back to Word Module
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Microsoft Word Quiz</h1>
          <p className="text-gray-600">Test your knowledge of Microsoft Word</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          {/* Timer - Prominent and Centered */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-lg font-bold">{formatTime(timeLeft)}</span>
                <span className="text-sm opacity-90">remaining</span>
              </div>
            </div>
          </div>
          
          {/* Progress Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {shuffledQuiz.length}
              </span>
              <span className="text-sm font-medium text-gray-600">
                Score: {score}/{shuffledQuiz.length}
              </span>
            </div>
            <div className="text-sm font-medium text-gray-600">
              {Math.round(progress)}% Complete
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-4 relative overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out h-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{question.question}</h2>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={answeredQuestions.has(currentQuestion)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                    selectedAnswer === index
                      ? isCorrect
                        ? 'border-green-500 bg-green-50'
                        : 'border-red-500 bg-red-50'
                      : answeredQuestions.has(currentQuestion) && index === question.correct
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  } ${answeredQuestions.has(currentQuestion) ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? isCorrect
                          ? 'border-green-500'
                          : 'border-red-500 bg-red-50'
                        : answeredQuestions.has(currentQuestion) && index === question.correct
                          ? 'border-green-500'
                          : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        isCorrect ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-600" />
                        )
                      )}
                      {answeredQuestions.has(currentQuestion) && index === question.correct && selectedAnswer !== index && (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Feedback and Tips */}
          {selectedAnswer !== null && (
            <div className="space-y-4 mb-6">
              {/* Result Feedback */}
              <div className={`p-4 rounded-xl ${
                isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span className={`font-medium ${
                    isCorrect ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {isCorrect ? 'Correct!' : 'Incorrect. The correct answer is highlighted above.'}
                  </span>
                </div>
              </div>
              
              {/* Tip */}
              {question.tip && (
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 text-blue-600 mt-0.5">💡</div>
                    <div>
                      <span className="font-medium text-blue-700">Tip:</span>
                      <span className="text-blue-600 ml-1">{question.tip}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold">
              <ArrowLeft className="w-5 h-5" />
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold">
              {currentQuestion === shuffledQuiz.length - 1 ? 'Finish Quiz' : 'Next'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
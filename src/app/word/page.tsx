import { FileText } from "lucide-react";
import Link from "next/link";
import { loadWordLessons } from "./lessons";
import { ProgressTracker } from "@/lib/progress";
import ProgressIndicator from "@/components/ProgressIndicator";
import { 
  ArrowLeft, 
  Clock, 
  Target, 
  BookOpen, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  Trophy, 
  Users, 
  Zap,
  Star,
  Award,
  Keyboard
} from "lucide-react";
import WordProgressSidebarClient from "./WordProgressSidebarClient";

export default async function WordPage() {
  const wordLessons = await loadWordLessons();
  const lessonIds = wordLessons.map(lesson => lesson.id);
  const progress = ProgressTracker.getModuleProgress('word', lessonIds);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              href="/" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:-translate-x-1 group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Training</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link 
                href="/word/cheatsheet" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Keyboard className="w-4 h-4 mr-2" />
                Cheatsheet
              </Link>
              <Link 
                href="/word/quiz" 
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Take Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Enhanced Module Header */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-lg">
                      <FileText size={56} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-4">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Microsoft Word
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        Professional Training
                      </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                      Word <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Mastery</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      Master document creation, formatting, collaboration, and advanced features like mail merge and macros. 
                      Transform how you work with documents in your educational environment.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-gray-600 bg-gray-50 px-4 py-3 rounded-xl">
                        <Target size={16} className="mr-3 text-blue-600" />
                        Professional Skills
                      </div>
                      <div className="flex items-center text-gray-600 bg-gray-50 px-4 py-3 rounded-xl">
                        <Clock size={16} className="mr-3 text-blue-600" />
                        1 hour
                      </div>
                      <div className="flex items-center text-gray-600 bg-gray-50 px-4 py-3 rounded-xl">
                        <BookOpen size={16} className="mr-3 text-blue-600" />
                        {wordLessons.length} lessons
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Lessons Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <BookOpen size={28} className="mr-3 text-blue-600" />
                  Course Lessons
                </h2>
                <div className="text-sm text-gray-500">
                  {progress?.completedLessons.length || 0} of {lessonIds.length} completed
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {wordLessons.map((lesson, index) => {
                  const isCompleted = progress?.completedLessons.includes(lesson.id) || false;
                  return (
                    <Link 
                      key={lesson.id} 
                      href={`/word/lessons/${lesson.id}`}
                      className={`group bg-white rounded-2xl shadow-lg border p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                        isCompleted 
                          ? 'border-green-200 bg-gradient-to-br from-green-50 to-emerald-50' 
                          : 'border-gray-200 hover:border-blue-300 hover:shadow-xl'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            isCompleted 
                              ? 'bg-green-500 text-white shadow-lg' 
                              : 'bg-blue-100 text-blue-700 group-hover:bg-blue-200'
                          }`}>
                            {index + 1}
                          </div>
                          {isCompleted && (
                            <div className="flex items-center text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm font-medium">
                              <CheckCircle size={14} className="mr-1" />
                              Completed
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          ~15 min
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {lesson.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{lesson.description}</p>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                        {isCompleted ? 'Review Lesson' : 'Start Lesson'}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Quiz Section */}
            <div className="mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <Trophy size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Ready to Test Your Knowledge?</h3>
                      <p className="text-blue-100">Take the interactive quiz to reinforce your learning</p>
                    </div>
                  </div>
                  <Link 
                    href="/word/quiz"
                    className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <Target size={20} className="mr-3" />
                    Take the Quiz
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Section */}
            <div className="mt-12">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Additional Resources</h2>
                    <p className="text-gray-600">Videos, exercises, and practical applications for Word mastery</p>
                  </div>
                </div>

                {/* Video Resources */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-blue-600" />
                    Video Tutorials
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                      href="https://www.youtube.com/watch?v=ZLIDKBjnGwg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 transition-all duration-300 border border-gray-200 hover:border-blue-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                            Microsoft Word Mail Merge – Beginners
                          </h4>
                          <p className="text-sm text-gray-600">Learn the basics of mail merge functionality</p>
                        </div>
                      </div>
                    </a>
                    <a 
                      href="https://www.youtube.com/watch?v=ZSv_Sadn_eo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 transition-all duration-300 border border-gray-200 hover:border-blue-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                            Microsoft Word Mail Merge Made SUPER Easy
                          </h4>
                          <p className="text-sm text-gray-600">Advanced mail merge techniques and tips</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Practical Exercises */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-600" />
                    Practical Exercises
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Create a Meeting Agenda Template</h4>
                          <p className="text-gray-600">Design a professional meeting agenda template with header, logo, and consistent formatting. Include sections for attendees, topics, and action items.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Perform Mail Merge with Excel Data</h4>
                          <p className="text-gray-600">Use an Excel student list to create personalized letters or certificates using Word's mail merge feature. Practice with real district data.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Tips */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-blue-600" />
                    Professional Tips
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Use Real District Scenarios</h4>
                      <p className="text-sm text-gray-600">Practice with actual district documents and data to make learning more relevant.</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Digital Handouts</h4>
                      <p className="text-sm text-gray-600">Access step-by-step guides and keyboard shortcuts for quick reference.</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Practice Labs</h4>
                      <p className="text-sm text-gray-600">Take 15-minute practice sessions after each major topic to reinforce learning.</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Q&A Sessions</h4>
                      <p className="text-sm text-gray-600">Participate in end-of-day question and answer clinics for additional support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Progress Sidebar */}
          {progress && (
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <WordProgressSidebarClient progress={progress} lessonIds={lessonIds} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
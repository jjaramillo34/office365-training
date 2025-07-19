import { Table } from "lucide-react";
import Link from "next/link";
import { loadExcelLessons } from "./lessons";
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
  Keyboard,
  Download
} from "lucide-react";
import ExcelProgressSidebarClient from "./ExcelProgressSidebarClient";

export default async function ExcelPage() {
  const excelLessons = await loadExcelLessons();
  const lessonIds = excelLessons.map(lesson => lesson.id);
  const progress = ProgressTracker.getModuleProgress('excel', lessonIds);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              href="/" 
              className="flex items-center text-green-600 hover:text-green-800 transition-all duration-300 transform hover:-translate-x-1 group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Training</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link 
                href="/excel/cheatsheet" 
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Keyboard className="w-4 h-4 mr-2" />
                Cheatsheet
              </Link>
              <Link 
                href="/excel/quiz" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-lg">
                      <Table size={56} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mr-4">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Microsoft Excel
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        Professional Training
                      </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                      Excel <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Mastery</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      Build powerful spreadsheets, analyze data with formulas, create charts, and automate tasks with macros. 
                      Transform how you work with data in your educational environment.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-gray-600 bg-gray-50 px-4 py-3 rounded-xl">
                        <Target size={16} className="mr-3 text-green-600" />
                        Professional Skills
                      </div>
                      <div className="flex items-center text-gray-600 bg-gray-50 px-4 py-3 rounded-xl">
                        <Clock size={16} className="mr-3 text-green-600" />
                        3 hours
                      </div>
                      <div className="flex items-center text-gray-600 bg-gray-50 px-4 py-3 rounded-xl">
                        <BookOpen size={16} className="mr-3 text-green-600" />
                        {excelLessons.length} lessons
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
                  <BookOpen size={28} className="mr-3 text-green-600" />
                  Course Lessons
                </h2>
                <div className="text-sm text-gray-500">
                  {progress?.completedLessons.length || 0} of {lessonIds.length} completed
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {excelLessons.map((lesson, index) => {
                  const isCompleted = progress?.completedLessons.includes(lesson.id) || false;
                  return (
                    <Link 
                      key={lesson.id} 
                      href={`/excel/lessons/${lesson.id}`}
                      className={`group bg-white rounded-2xl shadow-lg border p-8 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                        isCompleted 
                          ? 'border-green-200 bg-gradient-to-br from-green-50 to-emerald-50' 
                          : 'border-gray-200 hover:border-green-300 hover:shadow-xl'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            isCompleted 
                              ? 'bg-green-500 text-white shadow-lg' 
                              : 'bg-green-100 text-green-700 group-hover:bg-green-200'
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
                          ~30 min
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        {lesson.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{lesson.description}</p>
                      <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
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
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <Trophy size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Ready to Test Your Knowledge?</h3>
                      <p className="text-green-100">Take the interactive quiz to reinforce your learning</p>
                    </div>
                  </div>
                  <Link 
                    href="/excel/quiz"
                    className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
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
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Additional Resources</h2>
                    <p className="text-gray-600">Videos, exercises, and practical applications for Excel mastery</p>
                  </div>
                </div>

                {/* Video Resources */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-green-600" />
                    Video Tutorials
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                      href="https://www.youtube.com/watch?v=Jx89DRlKe7E" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group bg-gray-50 rounded-2xl p-6 hover:bg-green-50 transition-all duration-300 border border-gray-200 hover:border-green-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                            How to Create Excel Pivot Tables & Pivot Charts – Beginner's Guide
                          </h4>
                          <p className="text-sm text-gray-600">Comprehensive guide to creating and using PivotTables</p>
                        </div>
                      </div>
                    </a>
                    <a 
                      href="https://www.youtube.com/watch?v=F9WgF1K_K2g" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group bg-gray-50 rounded-2xl p-6 hover:bg-green-50 transition-all duration-300 border border-gray-200 hover:border-green-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                            Excel Pivot Table EXPLAINED in 10 Minutes
                          </h4>
                          <p className="text-sm text-gray-600">Quick overview of PivotTable essentials and best practices</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* ASAP Utilities Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-green-600" />
                    ASAP Utilities - Excel Power Tool
                  </h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900 mb-3">Boost Your Excel Productivity</h4>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          ASAP Utilities is a powerful Excel add-in that provides over 300 functions to enhance your Excel experience. 
                          It's particularly valuable for educational data management and administrative tasks.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="bg-white rounded-xl p-4 border border-blue-200">
                            <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <Users className="w-4 h-4 mr-2 text-blue-600" />
                              Key Features
                            </h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Data cleaning and formatting tools</li>
                              <li>• Advanced text manipulation functions</li>
                              <li>• Bulk operations for large datasets</li>
                              <li>• Custom formulas and calculations</li>
                            </ul>
                          </div>
                          <div className="bg-white rounded-xl p-4 border border-blue-200">
                            <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <Target className="w-4 h-4 mr-2 text-blue-600" />
                              Educational Benefits
                            </h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Streamline student data management</li>
                              <li>• Automate attendance tracking</li>
                              <li>• Generate reports efficiently</li>
                              <li>• Handle large class datasets</li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <a 
                            href="https://www.asap-utilities.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download ASAP Utilities
                          </a>
                          <a 
                            href="https://www.asap-utilities.com/excel-functions.php" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-300 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                          >
                            <BookOpen className="w-4 h-4 mr-2" />
                            View All Functions
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practical Exercises */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-600" />
                    Practical Exercises
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Student Attendance Tracker</h4>
                          <p className="text-gray-600">Create a comprehensive student attendance tracker with conditional formatting to highlight absences and tardies. Include date ranges and summary statistics.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">PivotTable Attendance Summary</h4>
                          <p className="text-gray-600">Build a PivotTable that summarizes attendance by school, grade level, and month. Create visualizations to identify attendance patterns.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Data Validation & Charts</h4>
                          <p className="text-gray-600">Generate charts from your attendance data and apply data validation dropdowns for consistent data entry. Practice with real district scenarios.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Tips */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-green-600" />
                    Professional Tips
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Real District Data</h4>
                      <p className="text-sm text-gray-600">Use actual district scenarios and data to make exercises more relevant and practical.</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Step-by-Step Guides</h4>
                      <p className="text-sm text-gray-600">Access digital handouts with detailed instructions and keyboard shortcuts.</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Practice Labs</h4>
                      <p className="text-sm text-gray-600">Complete 15-minute practice sessions after each major topic to reinforce learning.</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Q&A Clinics</h4>
                      <p className="text-sm text-gray-600">Participate in end-of-day question and answer sessions for additional support.</p>
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
                <ExcelProgressSidebarClient progress={progress} lessonIds={lessonIds} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
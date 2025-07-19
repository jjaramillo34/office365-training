import { loadLessonContentJSON, loadAllLessonsJSON } from "@/lib/content-json";
import { LessonContent } from "@/lib/content-types";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, BookOpen, Target, Lightbulb, AlertCircle, Zap, Star, Info, CheckSquare, ChevronRight, FileText, Users, Settings, Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import LessonRenderer from "@/components/LessonRenderer";

// Generate static params for all available lesson IDs
export async function generateStaticParams() {

  
  try {
    const lessons = await loadAllLessonsJSON("word");
  
    
    const params = lessons.map((lesson) => ({
      lessonId: lesson.id,
    }));
    
  
    return params;
  } catch (error) {
    console.error("Error generating Word lesson params:", error);
    // Fallback to known lesson IDs
    const fallbackParams = [
      { lessonId: "intro" },
      { lessonId: "formatting" },
      { lessonId: "advanced" },
      { lessonId: "bonus" },
    ];
  
    return fallbackParams;
  }
}

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  

  
  let lesson: LessonContent | null;
  try {
    lesson = await loadLessonContentJSON("word", lessonId);
  } catch (error) {
    console.error(`Error loading lesson content for word/${lessonId}:`, error);
    lesson = null;
  }
  
  if (!lesson) {
    console.error(`Lesson not found for word/${lessonId}`);
    try {
      const availableLessons = await loadAllLessonsJSON("word");
      console.error(`Available lessons: ${availableLessons.map((l: any) => l.id).join(", ")}`);
    } catch (error) {
      console.error("Could not load available lessons:", error);
    }
    return notFound();
  }
  


  // Extract navigation items from sections with defensive programming
  const navigationItems = lesson.sections
    .filter((section: any) => section && section.type === 'heading' && section.content) // Only include valid heading sections
    .map((section: any, index: number) => ({
      id: `section-${index}`,
      title: section.content || 'Untitled Section',
      icon: (section.content && section.content.includes('Best Practices')) ? 'lightbulb' :
            (section.content && section.content.includes('Troubleshooting')) ? 'alert-circle' :
            (section.content && section.content.includes('Shortcuts')) ? 'target' :
            (section.content && section.content.includes('Tips')) ? 'info' :
            (section.content && section.content.includes('Exercise')) ? 'check-square' :
            'book-open'
    }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              href="/word" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:-translate-x-1 group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Word Training</span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-full">
                <Clock size={16} className="mr-2" />
                {lesson.metadata.estimatedTime}
              </div>
              <div className="flex items-center text-sm text-blue-600 bg-blue-100 px-3 py-2 rounded-full">
                <BookOpen size={16} className="mr-2" />
                {lesson.sections.length} sections
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Enhanced Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 flex items-center mb-4">
                  <BookOpen size={20} className="mr-2 text-blue-600" />
                  Lesson Sections
                </h3>
                <nav className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 cursor-pointer border border-transparent hover:border-blue-200"
                    >
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-xs font-bold text-blue-600">
                          {index + 1}
                        </div>
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="lg:col-span-3">
            {/* Enhanced Lesson Header */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-4">
                        <Zap className="w-4 h-4 mr-2" />
                        Microsoft Word
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        Interactive Lesson
                      </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                      {lesson.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">{lesson.description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Content Sections */}
            <LessonRenderer lesson={lesson} />

            {/* Enhanced Navigation */}
            <div className="mt-12 flex justify-between items-center">
              <Link
                href="/word"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Course
              </Link>
              <Link
                href="/word/quiz"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 border border-transparent rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg"
              >
                Take Quiz
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
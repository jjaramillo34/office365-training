import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { CheckCircle, ArrowLeft, Clock, BookOpen, Target, Lightbulb, AlertCircle } from "lucide-react";
import Link from "next/link";
import { loadLessonContent, loadAllLessons } from "@/lib/content";

// Generate static params for all available lesson IDs
export async function generateStaticParams() {
  console.log("Generating static params for Excel lessons...");
  
  try {
    const lessons = await loadAllLessons("excel");
    console.log("Excel lessons found:", lessons.map(l => l.id));
    
    const params = lessons.map((lesson) => ({
      lessonId: lesson.id,
    }));
    
    console.log("Excel lesson params generated:", params);
    return params;
  } catch (error) {
    console.error("Error generating Excel lesson params:", error);
    // Fallback to known lesson IDs
    return [
      { lessonId: "intro" },
      { lessonId: "formulas" },
      { lessonId: "charts" },
      { lessonId: "bonus" },
    ];
  }
}

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = await loadLessonContent("excel", lessonId);
  if (!lesson) return notFound();

  // Parse content to extract sections for navigation
  const sections = lesson.content.split('\n## ').map((section: string, index: number) => {
    if (index === 0) {
      const lines = section.split('\n');
      const title = lines[0].replace('# ', '');
      return { title, content: lines.slice(1).join('\n') };
    }
    const lines = section.split('\n');
    const title = lines[0];
    return { title, content: lines.slice(1).join('\n') };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/excel" className="flex items-center text-green-600 hover:text-green-800 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Excel Training
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock size={16} className="mr-1" />
                ~30 min
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <BookOpen size={20} className="mr-2 text-green-600" />
                Lesson Sections
              </h3>
              <nav className="space-y-2">
                {sections.map((section: any, index: number) => (
                  <div
                    key={index}
                    className="w-full text-left px-3 rounded-lg text-sm text-gray-600"
                  >
                    {section.title}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Lesson Header */}
            <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{lesson.title}</h1>
                  <p className="text-lg text-gray-600">{lesson.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Target size={16} className="mr-1" />
                      Professional Skills
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      30
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              {sections.map((section: any, index: number) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                      {section.title.includes('Best Practices') && <Lightbulb size={20} className="mr-2 text-yellow-600" />}
                      {section.title.includes('Troubleshooting') && <AlertCircle size={20} className="mr-2 text-orange-600" />}
                      {section.title.includes('Shortcuts') && <Target size={20} className="mr-2 text-green-600" />}
                      {!section.title.includes('Best Practices') && !section.title.includes('Troubleshooting') && !section.title.includes('Shortcuts') && <BookOpen size={20} className="mr-2 text-green-600" />}
                      {section.title}
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="prose prose-green max-w-none">
                      <ReactMarkdown
                        components={{
                          h3: ({ children }) => (
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                              {children}
                            </h3>
                          ),
                          ul: ({ children }) => (
                            <ul className="space-y-2 py-4">
                              {children}
                            </ul>
                          ),
                          li: ({ children }) => (
                            <li className="flex items-start">
                              <div className="w-10 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{children}</span>
                            </li>
                          ),
                          strong: ({ children }) => (
                            <strong className="font-semibold text-gray-900">{children}</strong>
                          ),
                          code: ({ children }) => (
                            <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">{children}</code>
                          ),
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-green-50 bg-green-50 rounded-r-lg my-4">
                              <div className="text-gray-700 italic">{children}</div>
                            </blockquote>
                          ),
                        }}
                      >
                        {section.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Ready for the next step?</h3>
                  <p className="text-green-100">Test your knowledge with our interactive quiz</p>
                </div>
                <Link
                  href="/excel/quiz"
                  className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Take Quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
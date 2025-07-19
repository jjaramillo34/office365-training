import { loadLessonContent, loadAllLessons } from "@/lib/content";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Clock, BookOpen, Target, Lightbulb, AlertCircle } from "lucide-react";
import Link from "next/link";

// Generate static params for all available lesson IDs
export async function generateStaticParams() {
  console.log("Generating static params for Outlook lessons...");
  
  try {
    const lessons = await loadAllLessons("outlook");
    console.log("Outlook lessons found:", lessons.map(l => l.id));
    
    const params = lessons.map((lesson) => ({
      lessonId: lesson.id,
    }));
    
    console.log("Outlook lesson params generated:", params);
    return params;
  } catch (error) {
    console.error("Error generating Outlook lesson params:", error);
    // Fallback to known lesson IDs
    return [
      { lessonId: "intro" },
      { lessonId: "calendar" },
      { lessonId: "organization" },
      { lessonId: "bonus" },
    ];
  }
}

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = await loadLessonContent("outlook", lessonId);
  if (!lesson) return notFound();

  // Parse content to extract sections for navigation
  const sections = lesson.content.split('\n## ').map((section, index) => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/outlook" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Outlook Training
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock size={16} className="mr-1" />
                ~15 min
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
                <BookOpen size={20} className="mr-2 text-blue-600" />
                Lesson Sections
              </h3>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-700"
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
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
                  <p className="text-lg text-gray-600">{lesson.description}</p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                      {section.title.includes('Best Practices') && <Lightbulb size={20} className="mr-2 text-yellow-600" />}
                      {section.title.includes('Troubleshooting') && <AlertCircle size={20} className="mr-2 text-orange-600" />}
                      {section.title.includes('Shortcuts') && <Target size={20} className="mr-2 text-green-600" />}
                      {!section.title.includes('Best Practices') && !section.title.includes('Troubleshooting') && !section.title.includes('Shortcuts') && <BookOpen size={20} className="mr-2 text-blue-600" />}
                      {section.title}
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="prose prose-blue max-w-none">
                      <ReactMarkdown>{section.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
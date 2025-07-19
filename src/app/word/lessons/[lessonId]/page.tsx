import { loadLessonContent, loadAllLessons } from "@/lib/content";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { CheckCircle, ArrowLeft, ArrowRight, Clock, BookOpen, Target, Lightbulb, AlertCircle, Zap, Star, Info, CheckSquare } from "lucide-react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Generate static params for all available lesson IDs
export async function generateStaticParams() {
  console.log("Generating static params for Word lessons...");
  
  try {
    const lessons = await loadAllLessons("word");
    console.log("Word lessons found:", lessons.map(l => l.id));
    
    const params = lessons.map((lesson) => ({
      lessonId: lesson.id,
    }));
    
    console.log("Word lesson params generated:", params);
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
    console.log("Using fallback Word lesson params:", fallbackParams);
    return fallbackParams;
  }
}

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  
  console.log(`Rendering Word lesson page for lessonId: ${lessonId}`);
  
  let lesson;
  try {
    lesson = await loadLessonContent("word", lessonId);
  } catch (error) {
    console.error(`Error loading lesson content for word/${lessonId}:`, error);
    lesson = null;
  }
  
  if (!lesson) {
    console.error(`Lesson not found for word/${lessonId}`);
    try {
      const availableLessons = await loadAllLessons("word");
      console.error(`Available lessons: ${availableLessons.map(l => l.id).join(", ")}`);
    } catch (error) {
      console.error("Could not load available lessons:", error);
    }
    return notFound();
  }
  
  console.log(`Successfully loaded lesson: ${lesson.title}`);

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/word" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft size={20} className="w-4 h-4 mr-2" />
            Back to Word Course
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
          <p className="text-gray-600">{lesson.description}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex">
            {/* Sidebar Navigation */}
            <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Sections</h3>
              <nav className="space-y-1">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              <div className="prose prose-lg max-w-none">
                {sections.map((section, index) => (
                  <div key={index} id={`section-${index}`} className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <div className="text-gray-700 leading-relaxed">
                      <ReactMarkdown
                        components={{
                          code({ node, className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || '');
                            const isInline = !match;
                            return !isInline ? (
                              <SyntaxHighlighter
                                style={tomorrow}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                              >
                                {String(children).replace(/\n$/, '')}
                              </SyntaxHighlighter>
                            ) : (
                              <code className={className} {...props}>
                                {children}
                              </code>
                            );
                          },
                          img: ({ src, alt }) => (
                            <img src={src} alt={alt} className="rounded-lg shadow-md my-4" />
                          ),
                        }}
                      >
                        {section.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/word"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <ArrowLeft size={20} className="w-4 h-4 mr-2" />
            Back to Course
          </Link>
          <Link
            href="/word/quiz"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
          >
            Take Quiz
            <ArrowRight size={20} className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
} 
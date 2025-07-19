import { loadLessonContent, loadAllLessons } from "@/lib/content";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { CheckCircle, ArrowLeft, ArrowRight, Clock, BookOpen, Target, Lightbulb, AlertCircle, Zap, Star, Info, CheckSquare, ChevronRight, FileText, Users, Settings, Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeHighlight from 'rehype-highlight';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';

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
                ~15 min
              </div>
              <div className="flex items-center text-sm text-blue-600 bg-blue-100 px-3 py-2 rounded-full">
                <BookOpen size={16} className="mr-2" />
                {sections.length} sections
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
                  {sections.map((section, index) => (
                    <div
                      key={index}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 cursor-pointer border border-transparent hover:border-blue-200"
                    >
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-xs font-bold text-blue-600">
                          {index + 1}
                        </div>
                        <span className="font-medium">{section.title}</span>
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
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                      {section.title.includes('Best Practices') && <Lightbulb size={24} className="mr-3 text-yellow-600" />}
                      {section.title.includes('Troubleshooting') && <AlertCircle size={24} className="mr-3 text-orange-600" />}
                      {section.title.includes('Shortcuts') && <Target size={24} className="mr-3 text-green-600" />}
                      {section.title.includes('Tips') && <Info size={24} className="mr-3 text-blue-600" />}
                      {section.title.includes('Exercise') && <CheckSquare size={24} className="mr-3 text-purple-600" />}
                      {!section.title.includes('Best Practices') && !section.title.includes('Troubleshooting') && !section.title.includes('Shortcuts') && !section.title.includes('Tips') && !section.title.includes('Exercise') && <BookOpen size={24} className="mr-3 text-blue-600" />}
                      {section.title}
                    </h2>
                  </div>
                  <div className="p-8">
                    <div className="prose prose-lg prose-blue max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkEmoji]}
                        rehypePlugins={[
                          rehypeHighlight,
                          rehypeSlug,
                          [rehypeExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }]
                        ]}
                        components={{
                          // Enhanced code blocks with syntax highlighting
                          code({ node, className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || '');
                            const isInline = !match;
                            return !isInline ? (
                              <div className="my-6">
                                <SyntaxHighlighter
                                  style={tomorrow}
                                  language={match[1]}
                                  PreTag="div"
                                  className="rounded-xl shadow-lg"
                                  {...props}
                                >
                                  {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                              </div>
                            ) : (
                              <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm font-mono" {...props}>
                                {children}
                              </code>
                            );
                          },
                          // Enhanced headings with anchor links
                          h1: ({ children, id }) => (
                            <h1 id={id} className="text-3xl font-bold text-gray-900 mb-6 mt-8 border-b border-gray-200 pb-4 group">
                              {children}
                              {id && (
                                <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 hover:text-blue-700">
                                  #
                                </a>
                              )}
                            </h1>
                          ),
                          h2: ({ children, id }) => (
                            <h2 id={id} className="text-2xl font-bold text-gray-900 mb-4 mt-8 flex items-center group">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {children}
                              {id && (
                                <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 hover:text-blue-700">
                                  #
                                </a>
                              )}
                            </h2>
                          ),
                          h3: ({ children, id }) => (
                            <h3 id={id} className="text-xl font-semibold text-gray-900 mb-3 mt-6 group">
                              {children}
                              {id && (
                                <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 hover:text-blue-700">
                                  #
                                </a>
                              )}
                            </h3>
                          ),
                          // Enhanced lists
                          ul: ({ children }) => (
                            <ul className="space-y-2 my-4">
                              {children}
                            </ul>
                          ),
                          li: ({ children }) => (
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>{children}</span>
                            </li>
                          ),
                          // Enhanced blockquotes
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-6 py-4 my-6 rounded-r-xl italic">
                              {children}
                            </blockquote>
                          ),
                          // Enhanced tables with better styling
                          table: ({ children }) => (
                            <div className="overflow-x-auto my-6">
                              <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                {children}
                              </table>
                            </div>
                          ),
                          th: ({ children }) => (
                            <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                              {children}
                            </th>
                          ),
                          td: ({ children }) => (
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b border-gray-100">
                              {children}
                            </td>
                          ),
                          // Enhanced images with better styling
                          img: ({ src, alt, ...props }: any) => {
                            // Check if this image is inside a paragraph (inline) or standalone (block)
                            const isInline = props.node?.parent?.type === 'paragraph';
                            
                            if (isInline) {
                              // For inline images, return just the img element
                              return (
                                <img 
                                  src={src} 
                                  alt={alt} 
                                  className="inline-block rounded-lg shadow-md max-w-full h-auto border border-gray-200"
                                  loading="lazy"
                                />
                              );
                            }
                            
                            // For block images, wrap in div
                            return (
                              <div className="my-6">
                                <img 
                                  src={src} 
                                  alt={alt} 
                                  className="rounded-xl shadow-lg max-w-full h-auto mx-auto border border-gray-200"
                                  loading="lazy"
                                />
                                {alt && (
                                  <p className="text-center text-sm text-gray-500 mt-2 italic">
                                    {alt}
                                  </p>
                                )}
                              </div>
                            );
                          },
                          // Enhanced paragraphs
                          p: ({ children }) => (
                            <p className="text-gray-700 leading-relaxed mb-4">
                              {children}
                            </p>
                          ),
                          // Enhanced strong text
                          strong: ({ children }) => (
                            <strong className="font-bold text-gray-900">
                              {children}
                            </strong>
                          ),
                          // Enhanced emphasis
                          em: ({ children }) => (
                            <em className="italic text-gray-800">
                              {children}
                            </em>
                          ),
                          // Enhanced links with external link icon
                          a: ({ href, children }) => {
                            const isExternal = href?.startsWith('http');
                            return (
                              <a 
                                href={href} 
                                className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                              >
                                {children}
                                {isExternal && <ExternalLink size={14} className="ml-1" />}
                              </a>
                            );
                          },
                          // Enhanced horizontal rules
                          hr: () => (
                            <hr className="my-8 border-t border-gray-200" />
                          ),
                          // Enhanced task lists (from remark-gfm)
                          input: ({ checked, type }) => {
                            if (type === 'checkbox') {
                              return (
                                <input 
                                  type="checkbox" 
                                  checked={checked} 
                                  readOnly 
                                  className="mr-2 mt-1"
                                />
                              );
                            }
                            return null;
                          },
                        }}
                      >
                        {section.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
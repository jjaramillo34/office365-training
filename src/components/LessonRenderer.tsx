'use client';

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeHighlight from 'rehype-highlight';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import { 
  CheckCircle, 
  BookOpen, 
  Target, 
  Lightbulb, 
  AlertCircle, 
  Info, 
  CheckSquare, 
  Clock,
  Star,
  ExternalLink,
  Code,
  FileText
} from "lucide-react";
import { ContentSection, LessonContent } from '@/lib/content-types';

interface LessonRendererProps {
  lesson: LessonContent;
}

export default function LessonRenderer({ lesson }: LessonRendererProps) {
  const renderMarkdown = (content: string) => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkEmoji]}
      rehypePlugins={[
        rehypeHighlight,
        rehypeSlug,
        [rehypeExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }]
      ]}
      components={{
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
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-6 py-4 my-6 rounded-r-xl italic">
            {children}
          </blockquote>
        ),
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
        img: ({ src, alt, ...props }: any) => {
          const isInline = props.node?.parent?.type === 'paragraph';
          
          if (isInline) {
            return (
              <img 
                src={src} 
                alt={alt} 
                className="inline-block rounded-lg shadow-md max-w-full h-auto border border-gray-200"
                loading="lazy"
              />
            );
          }
          
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
        p: ({ children }) => (
          <p className="text-gray-700 leading-relaxed mb-4">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-bold text-gray-900">
            {children}
          </strong>
        ),
        em: ({ children }) => (
          <em className="italic text-gray-800">
            {children}
          </em>
        ),
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
        hr: () => (
          <hr className="my-8 border-t border-gray-200" />
        ),
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
      {content}
    </ReactMarkdown>
  );

  const renderTable = (table: any) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <thead>
          <tr>
            {table.headers.map((header: string, index: number) => (
              <th key={index} className="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row: string[], rowIndex: number) => (
            <tr key={rowIndex}>
              {row.map((cell: string, cellIndex: number) => (
                <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b border-gray-100">
                  {renderMarkdown(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.caption && (
        <p className="text-center text-sm text-gray-500 mt-2 italic">
          {table.caption}
        </p>
      )}
    </div>
  );

  const renderList = (list: any) => {
    const ListComponent = list.type === 'numbered' ? 'ol' : 'ul';
    const listClassName = list.type === 'numbered' 
      ? 'list-decimal space-y-2 my-4 ml-6' 
      : 'space-y-2 my-4';
    
    return (
      <ListComponent className={listClassName}>
        {list.items.map((item: string, index: number) => (
          <li key={index} className="flex items-start">
            {list.type === 'bullet' && (
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            )}
            <span className="text-gray-700">{renderMarkdown(item)}</span>
          </li>
        ))}
      </ListComponent>
    );
  };

  const renderExercise = (exercise: any) => (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 my-6">
      <div className="flex items-center mb-4">
        <CheckSquare size={24} className="mr-3 text-purple-600" />
        <h3 className="text-xl font-bold text-gray-900">{exercise.title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{exercise.description}</p>
      {exercise.hint && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-blue-800 text-sm">
            <strong>Hint:</strong> {exercise.hint}
          </p>
        </div>
      )}
      {exercise.solution && (
        <details className="mb-4">
          <summary className="cursor-pointer text-purple-600 font-semibold hover:text-purple-800">
            Show Solution
          </summary>
          <div className="mt-2 p-4 bg-white rounded-lg border border-purple-200">
            <p className="text-gray-700">{exercise.solution}</p>
          </div>
        </details>
      )}
      {exercise.checklist && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-2">Checklist:</h4>
          <ul className="space-y-1">
            {exercise.checklist.map((item: string, index: number) => (
              <li key={index} className="flex items-start">
                <input 
                  type="checkbox" 
                  readOnly 
                  className="mr-2 mt-1"
                />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const renderTip = (tip: any) => {
    const tipStyles: Record<string, string> = {
      pro: 'border-blue-500 bg-blue-50 text-blue-800',
      warning: 'border-orange-500 bg-orange-50 text-orange-800',
      info: 'border-blue-500 bg-blue-50 text-blue-800',
      note: 'border-gray-500 bg-gray-50 text-gray-800'
    };
    
    const tipIcons: Record<string, JSX.Element> = {
      pro: <Star size={20} className="text-blue-600" />,
      warning: <AlertCircle size={20} className="text-orange-600" />,
      info: <Info size={20} className="text-blue-600" />,
      note: <FileText size={20} className="text-gray-600" />
    };
    
    const tipType = tip.type || 'info';
    const style = tipStyles[tipType] || tipStyles.info;
    const icon = tipIcons[tipType] || tipIcons.info;
    
    return (
      <div className={`border-l-4 ${style} pl-6 py-4 my-6 rounded-r-xl`}>
        <div className="flex items-start">
          <div className="mr-3 mt-0.5">
            {icon}
          </div>
          <div>
            {tip.title && (
              <h4 className="font-semibold mb-2">{tip.title}</h4>
            )}
            <p className="italic">{tip.content}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderCodeBlock = (codeBlock: any) => (
    <div className="my-6">
      {codeBlock.title && (
        <h4 className="font-semibold text-gray-900 mb-2">{codeBlock.title}</h4>
      )}
      <SyntaxHighlighter
        style={tomorrow}
        language={codeBlock.language}
        PreTag="div"
        className="rounded-xl shadow-lg"
      >
        {codeBlock.code || codeBlock.content || ''}
      </SyntaxHighlighter>
    </div>
  );

  const renderObjectives = (objectives: string[]) => (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 my-6">
      <div className="flex items-center mb-4">
        <Target size={24} className="mr-3 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">Learning Objectives</h3>
      </div>
      <ul className="space-y-2">
        {objectives.map((objective, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{objective}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  // Handle different section types based on the actual JSON structure
  const getSectionTitle = (section: any) => {
    if (section.type === 'heading' && section.content) {
      return section.content;
    }
    if (section.type === 'subheading' && section.content) {
      return section.content;
    }
    if (section.type === 'paragraph' && section.content) {
      return section.content.substring(0, 50) + (section.content.length > 50 ? '...' : '');
    }
    return section.title || 'Untitled Section';
  };

  const getSectionIcon = (section: any) => {
    const title = getSectionTitle(section);
    if (!title) return <BookOpen size={24} className="mr-3 text-blue-600" />;
    if (title.includes('Best Practices')) return <Lightbulb size={24} className="mr-3 text-yellow-600" />;
    if (title.includes('Troubleshooting')) return <AlertCircle size={24} className="mr-3 text-orange-600" />;
    if (title.includes('Shortcuts')) return <Target size={24} className="mr-3 text-green-600" />;
    if (title.includes('Tips')) return <Info size={24} className="mr-3 text-blue-600" />;
    if (title.includes('Exercise')) return <CheckSquare size={24} className="mr-3 text-purple-600" />;
    if (title.includes('Objectives')) return <Target size={24} className="mr-3 text-blue-600" />;
    if (title.includes('Code')) return <Code size={24} className="mr-3 text-gray-600" />;
    return <BookOpen size={24} className="mr-3 text-blue-600" />;
  };

  // Handle different section types
  const renderSectionContent = (section: any) => {
    switch (section.type) {
      case 'heading':
        return null; // Headings are handled in the header
      case 'paragraph':
        return section.content && <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>;
      case 'subheading':
        return section.content && <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.content}</h3>;
      case 'text':
      case 'content':
        return section.markdown && renderMarkdown(section.markdown);
      case 'table':
        return section.data && renderTable(section.data);
      case 'list':
        return section.data && renderList(section.data);
      case 'unordered':
      case 'ordered':
        return section.items && renderList({ type: section.type === 'ordered' ? 'numbered' : 'bullet', items: section.items });
      case 'exercise':
        return section.data && renderExercise(section.data);
      case 'objectives':
        return section.objectives && renderObjectives(section.objectives);
      case 'tip':
        return section.content && renderTip({ type: 'info', content: section.content });
      case 'code':
        return section.data && renderCodeBlock(section.data);
      default:
        return null;
    }
  };

  const renderSection = (section: any) => {

    const renderMarkdown = (content: string) => (
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkEmoji]}
        rehypePlugins={[
          rehypeHighlight,
          rehypeSlug,
          [rehypeExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }]
        ]}
        components={{
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
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-6 py-4 my-6 rounded-r-xl italic">
              {children}
            </blockquote>
          ),
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
          img: ({ src, alt, ...props }: any) => {
            const isInline = props.node?.parent?.type === 'paragraph';
            
            if (isInline) {
              return (
                <img 
                  src={src} 
                  alt={alt} 
                  className="inline-block rounded-lg shadow-md max-w-full h-auto border border-gray-200"
                  loading="lazy"
                />
              );
            }
            
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
          p: ({ children }) => (
            <p className="text-gray-700 leading-relaxed mb-4">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-gray-900">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-800">
              {children}
            </em>
          ),
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
          hr: () => (
            <hr className="my-8 border-t border-gray-200" />
          ),
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
        {content}
      </ReactMarkdown>
    );

    const renderTable = (table: any) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr>
              {table.headers.map((header: string, index: number) => (
                <th key={index} className="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row: string[], rowIndex: number) => (
              <tr key={rowIndex}>
                {row.map((cell: string, cellIndex: number) => (
                  <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b border-gray-100">
                    {renderMarkdown(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {table.caption && (
          <p className="text-center text-sm text-gray-500 mt-2 italic">
            {table.caption}
          </p>
        )}
      </div>
    );

    const renderList = (list: any) => {
      const ListComponent = list.type === 'numbered' ? 'ol' : 'ul';
      const listClassName = list.type === 'numbered' 
        ? 'list-decimal space-y-2 my-4 ml-6' 
        : 'space-y-2 my-4';
      
      return (
        <ListComponent className={listClassName}>
          {list.items.map((item: string, index: number) => (
            <li key={index} className="flex items-start">
              {list.type === 'bullet' && (
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              )}
              <span className="text-gray-700">{renderMarkdown(item)}</span>
            </li>
          ))}
        </ListComponent>
      );
    };

    const renderExercise = (exercise: any) => (
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 my-6">
        <div className="flex items-center mb-4">
          <CheckSquare size={24} className="mr-3 text-purple-600" />
          <h3 className="text-xl font-bold text-gray-900">{exercise.title}</h3>
        </div>
        
        {exercise.description && (
          <p className="text-gray-700 mb-4">{exercise.description}</p>
        )}
        
        {exercise.image && (
          <div className="my-4">
            <img 
              src={exercise.image.src} 
              alt={exercise.image.alt} 
              className="rounded-xl shadow-lg max-w-full h-auto mx-auto border border-gray-200"
              loading="lazy"
            />
            {exercise.image.caption && (
              <p className="text-center text-sm text-gray-500 mt-2 italic">
                {exercise.image.caption}
              </p>
            )}
          </div>
        )}
        
        {exercise.steps && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Steps:</h4>
            <ol className="list-decimal space-y-2 ml-6">
              {exercise.steps.map((step: string, index: number) => (
                <li key={index} className="text-gray-700">{renderMarkdown(step)}</li>
              ))}
            </ol>
          </div>
        )}
        
        {exercise.checklist && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Checklist:</h4>
            <ul className="space-y-2">
              {exercise.checklist.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <input 
                    type="checkbox" 
                    readOnly 
                    className="mr-2 mt-1"
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );

    const renderTip = (tip: any) => {
      const tipStyles: Record<string, string> = {
        pro: 'border-blue-500 bg-blue-50 text-blue-800',
        warning: 'border-orange-500 bg-orange-50 text-orange-800',
        info: 'border-blue-500 bg-blue-50 text-blue-800',
        note: 'border-gray-500 bg-gray-50 text-gray-800'
      };
      
      const tipIcons: Record<string, JSX.Element> = {
        pro: <Star size={20} className="text-blue-600" />,
        warning: <AlertCircle size={20} className="text-orange-600" />,
        info: <Info size={20} className="text-blue-600" />,
        note: <FileText size={20} className="text-gray-600" />
      };
      
      const tipType = tip.type || 'info';
      const style = tipStyles[tipType] || tipStyles.info;
      const icon = tipIcons[tipType] || tipIcons.info;
      
      return (
        <div className={`border-l-4 ${style} pl-6 py-4 my-6 rounded-r-xl`}>
          <div className="flex items-start">
            <div className="mr-3 mt-0.5">
              {icon}
            </div>
            <div>
              {tip.title && (
                <h4 className="font-semibold mb-2">{tip.title}</h4>
              )}
              <p className="italic">{tip.content}</p>
            </div>
          </div>
        </div>
      );
    };

    const renderCodeBlock = (codeBlock: any) => (
      <div className="my-6">
        {codeBlock.title && (
          <h4 className="font-semibold text-gray-900 mb-2">{codeBlock.title}</h4>
        )}
        <SyntaxHighlighter
          style={tomorrow}
          language={codeBlock.language}
          PreTag="div"
          className="rounded-xl shadow-lg"
        >
          {codeBlock.content}
        </SyntaxHighlighter>
      </div>
    );

    const renderObjectives = (objectives: string[]) => (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 my-6">
        <div className="flex items-center mb-4">
          <Target size={24} className="mr-3 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">Learning Objectives</h3>
        </div>
        <ul className="space-y-2">
          {objectives.map((objective, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{objective}</span>
            </li>
          ))}
        </ul>
      </div>
    );

    // Handle different section types based on the actual JSON structure
    const getSectionTitle = (section: any) => {
      if (section.type === 'heading' && section.content) {
        return section.content;
      }
      if (section.type === 'subheading' && section.content) {
        return section.content;
      }
      if (section.type === 'paragraph' && section.content) {
        return section.content.substring(0, 50) + (section.content.length > 50 ? '...' : '');
      }
      return section.title || 'Untitled Section';
    };

    const getSectionIcon = (section: any) => {
      const title = getSectionTitle(section);
      if (!title) return <BookOpen size={24} className="mr-3 text-blue-600" />;
      if (title.includes('Best Practices')) return <Lightbulb size={24} className="mr-3 text-yellow-600" />;
      if (title.includes('Troubleshooting')) return <AlertCircle size={24} className="mr-3 text-orange-600" />;
      if (title.includes('Shortcuts')) return <Target size={24} className="mr-3 text-green-600" />;
      if (title.includes('Tips')) return <Info size={24} className="mr-3 text-blue-600" />;
      if (title.includes('Exercise')) return <CheckSquare size={24} className="mr-3 text-purple-600" />;
      if (title.includes('Objectives')) return <Target size={24} className="mr-3 text-blue-600" />;
      if (title.includes('Code')) return <Code size={24} className="mr-3 text-gray-600" />;
      return <BookOpen size={24} className="mr-3 text-blue-600" />;
    };

    // Handle different section types
    const renderSectionContent = (section: any) => {
      switch (section.type) {
        case 'heading':
          return null; // Headings are handled in the header
        case 'paragraph':
          return section.content && <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>;
        case 'subheading':
          return section.content && <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.content}</h3>;
        case 'text':
        case 'content':
          return section.markdown && renderMarkdown(section.markdown);
        case 'table':
          return section.data && renderTable(section.data);
        case 'list':
          return section.data && renderList(section.data);
        case 'unordered':
        case 'ordered':
          return section.items && renderList({ type: section.type === 'ordered' ? 'numbered' : 'bullet', items: section.items });
        case 'exercise':
          return section.data && renderExercise(section.data);
        case 'objectives':
          return section.objectives && renderObjectives(section.objectives);
        case 'tip':
          return section.content && renderTip({ type: 'info', content: section.content });
        case 'code':
          return section.data && renderCodeBlock(section.data);
        default:
          return null;
      }
    };

    // Only render sections that should have a card layout
    const shouldRenderCard = (section: any) => {
      return section.type === 'heading';
    };

    // For non-card sections, render inline
    if (!shouldRenderCard(section)) {
      return renderSectionContent(section);
    }

    return (
      <div key={section.id || Math.random()} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            {getSectionIcon(section)}
            {getSectionTitle(section)}
          </h2>
        </div>
        <div className="p-8">
          <div className="prose prose-lg prose-blue max-w-none">
            {renderSectionContent(section)}
            
            {section.image && (
              <div className="my-6">
                <img 
                  src={section.image.src} 
                  alt={section.image.alt} 
                  className="rounded-xl shadow-lg max-w-full h-auto mx-auto border border-gray-200"
                  loading="lazy"
                />
                {section.image.caption && (
                  <p className="text-center text-sm text-gray-500 mt-2 italic">
                    {section.image.caption}
                  </p>
                )}
              </div>
            )}
            
            {section.subsections && (
              <div className="space-y-6 mt-6">
                {section.subsections.map((subsection: any) => (
                  <div key={subsection.id || Math.random()} className="border-l-4 border-gray-200 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{getSectionTitle(subsection)}</h3>
                    {renderSection(subsection)}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render all sections properly
  const renderSections = () => {
    const sections: React.ReactElement[] = [];
    let currentHeading: any = null;
    let currentContent: any[] = [];

    for (let i = 0; i < lesson.sections.length; i++) {
      const section = lesson.sections[i];
      
      if (section.type === 'heading') {
        // If we have a previous heading, render it with its content
        if (currentHeading) {
          sections.push(
            <div key={currentHeading.id || `heading-${i}`} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  {getSectionIcon(currentHeading)}
                  {getSectionTitle(currentHeading)}
                </h2>
              </div>
              <div className="p-8">
                <div className="prose prose-lg prose-blue max-w-none">
                  {currentContent.map((contentSection, index) => (
                    <div key={`${currentHeading.id || 'content'}-${index}`}>
                      {renderSectionContent(contentSection)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }
        
        // Start a new heading section
        currentHeading = section;
        currentContent = [];
      } else {
        // Add content to the current heading
        if (currentHeading) {
          currentContent.push(section);
        } else {
          // If no heading, render as standalone section
          sections.push(
            <div key={`standalone-${i}`}>
              {renderSectionContent(section)}
            </div>
          );
        }
      }
    }
    
    // Don't forget the last heading section
    if (currentHeading) {
      sections.push(
        <div key={currentHeading.id || `heading-final`} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              {getSectionIcon(currentHeading)}
              {getSectionTitle(currentHeading)}
            </h2>
          </div>
          <div className="p-8">
            <div className="prose prose-lg prose-blue max-w-none">
              {currentContent.map((contentSection, index) => (
                <div key={`${currentHeading.id || 'content'}-${index}`}>
                  {renderSectionContent(contentSection)}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    return sections;
  };

  return (
    <div className="space-y-8">
      {renderSections().map((section, index) => (
        <div key={`section-${index}`}>
          {section}
        </div>
      ))}
    </div>
  );
} 
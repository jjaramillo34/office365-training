import { loadAllLessons } from "@/lib/content";

export default async function TestPage() {
  const wordLessons = await loadAllLessons("word");
  const excelLessons = await loadAllLessons("excel");
  const outlookLessons = await loadAllLessons("outlook");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Content Loading Test</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Word Lessons ({wordLessons.length})</h2>
          <ul className="list-disc pl-4">
            {wordLessons.map(lesson => (
              <li key={lesson.id}>{lesson.id}: {lesson.title}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold">Excel Lessons ({excelLessons.length})</h2>
          <ul className="list-disc pl-4">
            {excelLessons.map(lesson => (
              <li key={lesson.id}>{lesson.id}: {lesson.title}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold">Outlook Lessons ({outlookLessons.length})</h2>
          <ul className="list-disc pl-4">
            {outlookLessons.map(lesson => (
              <li key={lesson.id}>{lesson.id}: {lesson.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 
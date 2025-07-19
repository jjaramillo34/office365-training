import fs from 'fs';
import path from 'path';

export interface LessonContent {
  id: string;
  title: string;
  description: string;
  content: string;
}

export async function loadLessonContent(module: string, lessonId: string): Promise<LessonContent | null> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'lessons', module, `${lessonId}.md`);
    
  
    
    if (!fs.existsSync(filePath)) {
      console.error(`Lesson file not found: ${filePath}`);
      return null;
    }
    
    const content = fs.readFileSync(filePath, 'utf-8');
    
    if (!content || content.trim().length === 0) {
      console.error(`Lesson file is empty: ${filePath}`);
      return null;
    }
    
    // Extract title from first line (assuming it starts with # )
    const lines = content.split('\n');
    const title = lines[0].replace('# ', '').trim();
    
    // Extract description from the first paragraph after the title
    let description = '';
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line && !line.startsWith('#')) {
        description = line;
        break;
      }
    }
    
  
    
    return {
      id: lessonId,
      title,
      description,
      content
    };
  } catch (error) {
    console.error(`Error loading lesson content for ${module}/${lessonId}:`, error);
    return null;
  }
}

export async function loadAllLessons(module: string): Promise<LessonContent[]> {
  try {
    const modulePath = path.join(process.cwd(), 'src', 'content', 'lessons', module);
    
  
    
    if (!fs.existsSync(modulePath)) {
      console.error(`Module directory not found: ${modulePath}`);
      return [];
    }
    
    const files = fs.readdirSync(modulePath);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
  
    
    const lessons: LessonContent[] = [];
    for (const file of markdownFiles) {
      const lessonId = file.replace('.md', '');
      const lesson = await loadLessonContent(module, lessonId);
      if (lesson) {
        lessons.push(lesson);
      }
    }
    
  
    
    return lessons.sort((a, b) => a.id.localeCompare(b.id));
  } catch (error) {
    console.error(`Error loading lessons for module ${module}:`, error);
    return [];
  }
} 
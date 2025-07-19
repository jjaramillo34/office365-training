import fs from 'fs';
import path from 'path';
import { LessonContent, LessonSummary } from './content-types';

export async function loadLessonContentJSON(module: string, lessonId: string): Promise<LessonContent | null> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'lessons', module, `${lessonId}.json`);
    
    console.log(`Loading JSON lesson content from: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
      console.error(`Lesson JSON file not found: ${filePath}`);
      return null;
    }
    
    const content = fs.readFileSync(filePath, 'utf-8');
    
    if (!content || content.trim().length === 0) {
      console.error(`Lesson JSON file is empty: ${filePath}`);
      return null;
    }
    
    const lessonData = JSON.parse(content) as LessonContent;
    
    // Validate required fields
    if (!lessonData.id || !lessonData.title || !lessonData.sections) {
      console.error(`Invalid lesson JSON structure: ${filePath}`);
      return null;
    }
    
    console.log(`Successfully loaded JSON lesson: ${module}/${lessonId} - "${lessonData.title}"`);
    
    return lessonData;
  } catch (error) {
    console.error(`Error loading JSON lesson content for ${module}/${lessonId}:`, error);
    return null;
  }
}

export async function loadAllLessonsJSON(module: string): Promise<LessonSummary[]> {
  try {
    const modulePath = path.join(process.cwd(), 'src', 'content', 'lessons', module);
    
    console.log(`Loading all JSON lessons from: ${modulePath}`);
    
    if (!fs.existsSync(modulePath)) {
      console.error(`Module directory not found: ${modulePath}`);
      return [];
    }
    
    const files = fs.readdirSync(modulePath);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    console.log(`Found ${jsonFiles.length} JSON lesson files in ${module}:`, jsonFiles);
    
    const lessons: LessonSummary[] = [];
    for (const file of jsonFiles) {
      const lessonId = file.replace('.json', '');
      const lesson = await loadLessonContentJSON(module, lessonId);
      if (lesson) {
        lessons.push({
          id: lesson.id,
          title: lesson.title,
          description: lesson.description,
          estimatedTime: lesson.metadata.estimatedTime,
          difficulty: lesson.metadata.difficulty,
          tags: lesson.metadata.tags
        });
      }
    }
    
    console.log(`Successfully loaded ${lessons.length} JSON lessons for module ${module}`);
    
    return lessons.sort((a, b) => a.id.localeCompare(b.id));
  } catch (error) {
    console.error(`Error loading JSON lessons for module ${module}:`, error);
    return [];
  }
} 
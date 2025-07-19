import { loadAllLessonsJSON } from "@/lib/content-json";

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
}

export async function loadWordLessons(): Promise<Lesson[]> {
  try {
    const lessons = await loadAllLessonsJSON("word");
    
    // Define the correct order for lessons
    const lessonOrder = ['intro', 'formatting', 'advanced', 'bonus'];
    
    // Sort lessons according to the defined order
    const sortedLessons = lessonOrder
      .map(id => lessons.find(lesson => lesson.id === id))
      .filter(lesson => lesson !== undefined);
    
    return sortedLessons.map((lesson: any) => ({
      id: lesson.id,
      title: lesson.title,
      description: lesson.description,
      content: lesson.content || ""
    }));
  } catch (error) {
    console.error("Error loading Word lessons:", error);
    // Return fallback lessons if there's an error
    return wordLessons;
  }
}

// Fallback lessons data (used if markdown files are not available)
export const wordLessons: Lesson[] = [
  {
    id: "intro",
    title: "Introduction to Word",
    description: "Get familiar with the Word interface and basic document creation.",
    content: "# Welcome to Microsoft Word\n\nThis lesson covers the fundamentals of Word..."
  },
  {
    id: "formatting",
    title: "Document Formatting",
    description: "Learn how to format documents professionally.",
    content: "# Document Formatting in Word\n\nProfessional formatting is essential..."
  },
  {
    id: "advanced",
    title: "Advanced Features",
    description: "Discover advanced Word features for professional documents.",
    content: "# Advanced Word Features\n\nTake your Word skills to the next level..."
  },
  {
    id: "bonus",
    title: "Bonus: Cool Features",
    description: "Master mail merge, macros, and other power user features.",
    content: "# Bonus: Cool Word Features\n\nDiscover the hidden gems of Microsoft Word..."
  }
]; 
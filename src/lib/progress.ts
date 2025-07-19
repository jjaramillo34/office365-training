export interface UserProgress {
  completedLessons: string[];
  quizScores: { [quizId: string]: number };
  lastAccessed: string;
}

export interface ModuleProgress {
  moduleId: string;
  completedLessons: string[];
  totalLessons: number;
  quizScore?: number;
  isCompleted: boolean;
}

const STORAGE_KEY = 'office365-training-progress';

export const ProgressTracker = {
  // Get all user progress
  getProgress(): UserProgress {
    if (typeof window === 'undefined') {
      return { completedLessons: [], quizScores: {}, lastAccessed: new Date().toISOString() };
    }
    
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { completedLessons: [], quizScores: {}, lastAccessed: new Date().toISOString() };
    }
    
    try {
      return JSON.parse(stored);
    } catch {
      return { completedLessons: [], quizScores: {}, lastAccessed: new Date().toISOString() };
    }
  },

  // Save progress
  saveProgress(progress: UserProgress): void {
    if (typeof window === 'undefined') return;
    
    progress.lastAccessed = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  },

  // Mark lesson as completed
  markLessonCompleted(moduleId: string, lessonId: string): void {
    const progress = this.getProgress();
    const lessonKey = `${moduleId}:${lessonId}`;
    
    if (!progress.completedLessons.includes(lessonKey)) {
      progress.completedLessons.push(lessonKey);
      this.saveProgress(progress);
    }
  },

  // Check if lesson is completed
  isLessonCompleted(moduleId: string, lessonId: string): boolean {
    const progress = this.getProgress();
    const lessonKey = `${moduleId}:${lessonId}`;
    return progress.completedLessons.includes(lessonKey);
  },

  // Save quiz score
  saveQuizScore(moduleId: string, score: number): void {
    const progress = this.getProgress();
    progress.quizScores[moduleId] = score;
    this.saveProgress(progress);
  },

  // Get quiz score
  getQuizScore(moduleId: string): number | undefined {
    const progress = this.getProgress();
    return progress.quizScores[moduleId];
  },

  // Get module progress
  getModuleProgress(moduleId: string, lessonIds: string[]): ModuleProgress {
    const progress = this.getProgress();
    const completedLessons = lessonIds.filter(lessonId => 
      this.isLessonCompleted(moduleId, lessonId)
    );
    const quizScore = this.getQuizScore(moduleId);
    
    return {   moduleId,
      completedLessons,
      totalLessons: lessonIds.length,
      quizScore,
      isCompleted: completedLessons.length === lessonIds.length && quizScore !== undefined
    };
  },

  // Clear all progress
  clearProgress(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
}; 
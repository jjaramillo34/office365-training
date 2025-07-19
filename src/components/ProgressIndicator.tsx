"use client";
import { CheckCircle, Circle } from "lucide-react";
import { ModuleProgress } from "@/lib/progress";

interface ProgressIndicatorProps {
  progress: ModuleProgress;
  lessonIds: string[];
  onLessonClick?: (lessonId: string) => void;
}

export default function ProgressIndicator({ progress, lessonIds, onLessonClick }: ProgressIndicatorProps) {
  const completionPercentage = (progress.completedLessons.length / progress.totalLessons) * 10
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800">Progress</h3>
        <span className="text-sm text-gray-600">
          {progress.completedLessons.length}/{progress.totalLessons} lessons
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
          className="bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
      
      {/* Lesson Status */}
      <div className="space-y-2">        {lessonIds.map((lessonId) => {
          const isCompleted = progress.completedLessons.includes(lessonId);
          return (
            <div 
              key={lessonId}
              className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                isCompleted ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => onLessonClick?.(lessonId)}
            >
              {isCompleted ? (
                <CheckCircle size={16} className="text-green-600" />
              ) : (
                <Circle size={16} className="text-gray-400" />
              )}
              <span className="text-sm capitalize">
                {lessonId.replace('-', ' ')}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Quiz Status */}
      {progress.quizScore !== undefined && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-blue-800">Quiz Score</span>
            <span className="text-sm font-bold text-blue-900">{progress.quizScore}%</span>
          </div>
        </div>
      )}
      
      {/* Completion Status */}
      {progress.isCompleted && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-green-600" />
            <span className="text-sm font-medium text-green-800">Module Completed!</span>
          </div>
        </div>
      )}
    </div>
  );
} 
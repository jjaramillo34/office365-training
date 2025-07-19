"use client";
import ProgressIndicator from "@/components/ProgressIndicator";
import { Target } from "lucide-react";
import React from "react";
import { ModuleProgress } from "@/lib/progress";

interface Props {
  progress: ModuleProgress;
  lessonIds: string[];
}

export default function WordProgressSidebarClient({ progress, lessonIds }: Props) {
  const handleLessonClick = (lessonId: string) => {
    window.location.href = `/word/lessons/${lessonId}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        <Target size={20} className="mr-2 text-blue-600" />
        Your Progress
      </h3>
      <ProgressIndicator 
        progress={progress}
        lessonIds={lessonIds}
        onLessonClick={handleLessonClick}
      />
    </div>
  );
} 
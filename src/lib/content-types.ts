export interface LessonImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CodeBlock {
  language: string;
  content: string;
  title?: string;
}

export interface Tip {
  type: 'pro' | 'warning' | 'info' | 'note';
  content: string;
  title?: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface ListData {
  type: 'bullet' | 'numbered' | 'task';
  items: string[];
}

export interface Exercise {
  title: string;
  description?: string;
  image?: LessonImage;
  steps?: string[];
  checklist?: string[];
  estimatedTime?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface ContentSection {
  id: string;
  title: string;
  type: 'text' | 'content' | 'table' | 'list' | 'exercise' | 'objectives' | 'tip' | 'code';
  markdown?: string;
  image?: LessonImage;
  codeBlock?: CodeBlock;
  tip?: Tip;
  table?: TableData;
  list?: ListData;
  exercise?: Exercise;
  objectives?: string[];
  subsections?: ContentSection[];
}

export interface LessonMetadata {
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  tags: string[];
  lastUpdated?: string;
}

export interface LessonContent {
  id: string;
  title: string;
  description: string;
  sections: ContentSection[];
  metadata: LessonMetadata;
}

export interface LessonSummary {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
} 
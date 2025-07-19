import Link from "next/link";
import { 
  ArrowLeft, 
  Keyboard, 
  Zap, 
  Target, 
  Star, 
  CheckCircle, 
  Lightbulb, 
  FileText,
  Copy,
  Scissors,
  RotateCcw,
  RotateCw,
  Search,
  Save,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Table,
  Image,
  Link as LinkIcon,
  Eye,
  Settings,
  Download
} from "lucide-react";
import PrintButton from "@/components/PrintButton";

export default function WordCheatsheetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              href="/word" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:-translate-x-1 group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Word Training</span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-sm text-blue-600 bg-blue-100 px-3 py-2 rounded-full">
                <Keyboard className="w-4 h-4 mr-2" />
                Quick Reference
              </div>
              <div className="flex items-center text-sm text-green-600 bg-green-100 px-3 py-2 rounded-full">
                <Star className="w-4 h-4 mr-2" />
                Essential Tips
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Microsoft Word
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Word <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Cheatsheet</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master Microsoft Word with these essential keyboard shortcuts, tips, and tricks. 
            Print this page or bookmark it for quick reference during your work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Essential Shortcuts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Keyboard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Essential Keyboard Shortcuts</h2>
                  <p className="text-gray-600">Master these shortcuts to work 10x faster in Word</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* File Operations */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-600" />
                    File Operations
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">New Document</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + N</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Open Document</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + O</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Save</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + S</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Save As</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">F12</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Print</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + P</kbd>
                    </div>
                  </div>
                </div>

                {/* Editing */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Copy className="w-5 h-5 mr-2 text-green-600" />
                    Editing
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Copy</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + C</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Cut</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + X</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Paste</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + V</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Undo</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Z</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Redo</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Y</kbd>
                    </div>
                  </div>
                </div>

                {/* Formatting */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Bold className="w-5 h-5 mr-2 text-purple-600" />
                    Text Formatting
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Bold</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + B</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Italic</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + I</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Underline</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + U</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Strikethrough</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + 5</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Clear Formatting</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Space</kbd>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-orange-600" />
                    Navigation
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Find</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + F</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Replace</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + H</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Go To</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + G</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Select All</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + A</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Zoom</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Mouse Wheel</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Shortcuts */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Advanced Shortcuts</h2>
                  <p className="text-gray-600">Power user shortcuts for advanced Word features</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Paragraph Formatting */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlignLeft className="w-5 h-5 mr-2 text-blue-600" />
                    Paragraph Formatting
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Left Align</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + L</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Center Align</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + E</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Right Align</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + R</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Justify</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + J</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Bullet List</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Shift + L</kbd>
                    </div>
                  </div>
                </div>

                {/* Document Features */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Table className="w-5 h-5 mr-2 text-green-600" />
                    Document Features
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Insert Table</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Alt + N + T</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Insert Picture</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Alt + N + P</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Insert Hyperlink</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + K</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Insert Page Break</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Enter</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Insert Comment</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Alt + M</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Pro Tips & Tricks</h2>
                  <p className="text-blue-100">Advanced techniques to boost your Word productivity</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Quick Format Painter</h3>
                  <p className="text-blue-100 mb-3">Double-click the Format Painter to apply formatting to multiple selections</p>
                  <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">Ctrl + Shift + C</kbd>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Select Similar Formatting</h3>
                  <p className="text-blue-100 mb-3">Select all text with the same formatting instantly</p>
                  <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">Ctrl + Shift + A</kbd>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Quick Styles</h3>
                  <p className="text-blue-100 mb-3">Use Ctrl + Shift + S to open the Apply Styles dialog</p>
                  <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">Ctrl + Shift + S</kbd>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Navigation Pane</h3>
                  <p className="text-blue-100 mb-3">Quickly jump between headings in your document</p>
                  <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">Ctrl + F</kbd>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link href="/word" className="block p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="font-medium text-blue-900">Back to Training</span>
                    </div>
                  </Link>
                  <Link href="/word/quiz" className="block p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      <span className="font-medium text-green-900">Take Quiz</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Common Tasks */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-purple-600" />
                  Common Tasks
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-1">Mail Merge</div>
                    <div className="text-gray-600">Alt + M + M</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-1">Track Changes</div>
                    <div className="text-gray-600">Ctrl + Shift + E</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-1">Word Count</div>
                    <div className="text-gray-600">Ctrl + Shift + G</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-1">Thesaurus</div>
                    <div className="text-gray-600">Shift + F7</div>
                  </div>
                </div>
              </div>

              {/* Print This */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Print This Cheatsheet
                </h3>
                <p className="text-orange-100 mb-4 text-sm">
                  Keep this handy reference on your desk for quick access to Word shortcuts.
                </p>
                <PrintButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
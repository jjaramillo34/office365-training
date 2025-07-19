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
  Download,
  Calculator,
  BarChart3,
  Filter,
  SortAsc,
  Plus,
  Minus,
  X,
  Divide
} from "lucide-react";
import PrintButton from "@/components/PrintButton";

export default function ExcelCheatsheetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              href="/excel" 
              className="flex items-center text-green-600 hover:text-green-800 transition-all duration-300 transform hover:-translate-x-1 group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Excel Training</span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-sm text-green-600 bg-green-100 px-3 py-2 rounded-full">
                <Keyboard className="w-4 h-4 mr-2" />
                Quick Reference
              </div>
              <div className="flex items-center text-sm text-blue-600 bg-blue-100 px-3 py-2 rounded-full">
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Microsoft Excel
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Excel <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Cheatsheet</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master Microsoft Excel with these essential keyboard shortcuts, formulas, and tricks. 
            Print this page or bookmark it for quick reference during your work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Essential Shortcuts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <Keyboard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Essential Keyboard Shortcuts</h2>
                  <p className="text-gray-600">Master these shortcuts to work 10x faster in Excel</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* File Operations */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-green-600" />
                    File Operations
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">New Workbook</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + N</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Open Workbook</span>
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

                {/* Navigation */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-600" />
                    Navigation
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Go To</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">F5</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Find</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + F</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Replace</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + H</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Select All</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + A</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Name Box</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">F3</kbd>
                    </div>
                  </div>
                </div>

                {/* Cell Operations */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Copy className="w-5 h-5 mr-2 text-purple-600" />
                    Cell Operations
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
                      <span className="font-medium">Paste Special</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Alt + V</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Fill Down</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + D</kbd>
                    </div>
                  </div>
                </div>

                {/* Formatting */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Bold className="w-5 h-5 mr-2 text-orange-600" />
                    Formatting
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
                      <span className="font-medium">Format Cells</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + 1</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">AutoSum</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Alt + =</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Essential Formulas */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Essential Formulas</h2>
                  <p className="text-gray-600">Master these formulas to become an Excel power user</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Math */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Calculator className="w-5 h-5 mr-2 text-green-600" />
                    Basic Math
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <div className="font-medium text-gray-900 mb-1">SUM</div>
                      <code className="text-sm text-gray-600">=SUM(A1:A10)</code>
                      <p className="text-xs text-gray-500 mt-1">Adds all numbers in range</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <div className="font-medium text-gray-900 mb-1">AVERAGE</div>
                      <code className="text-sm text-gray-600">=AVERAGE(A1:A10)</code>
                      <p className="text-xs text-gray-500 mt-1">Calculates mean of range</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <div className="font-medium text-gray-900 mb-1">COUNT</div>
                      <code className="text-sm text-gray-600">=COUNT(A1:A10)</code>
                      <p className="text-xs text-gray-500 mt-1">Counts numbers in range</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <div className="font-medium text-gray-900 mb-1">MAX/MIN</div>
                      <code className="text-sm text-gray-600">=MAX(A1:A10)</code>
                      <p className="text-xs text-gray-500 mt-1">Finds highest/lowest value</p>
                    </div>
                  </div>
                </div>

                {/* Lookup Functions */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Search className="w-5 h-5 mr-2 text-blue-600" />
                    Lookup Functions
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <div className="font-medium text-gray-900 mb-1">VLOOKUP</div>
                      <code className="text-sm text-gray-600">=VLOOKUP(A1,B:C,2,FALSE)</code>
                      <p className="text-xs text-gray-500 mt-1">Vertical lookup in table</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <div className="font-medium text-gray-900 mb-1">XLOOKUP</div>
                      <code className="text-sm text-gray-600">=XLOOKUP(A1,B:B,C:C)</code>
                      <p className="text-xs text-gray-500 mt-1">Modern lookup function</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <div className="font-medium text-gray-900 mb-1">INDEX/MATCH</div>
                      <code className="text-sm text-gray-600">=INDEX(C:C,MATCH(A1,B:B,0))</code>
                      <p className="text-xs text-gray-500 mt-1">Flexible lookup combination</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl">
                      <div className="font-medium text-gray-900 mb-1">IF</div>
                      <code className="text-sm text-gray-600">=IF(A1&gt;10,"Yes","No")</code>
                      <p className="text-xs text-gray-500 mt-1">Conditional logic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Features */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Advanced Features</h2>
                  <p className="text-gray-600">Power user shortcuts and techniques</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Data Analysis */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-green-600" />
                    Data Analysis
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">PivotTable</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Alt + N + V</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Filter</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Shift + L</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Sort</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Alt + A + S</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Remove Duplicates</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Alt + A + M</kbd>
                    </div>
                  </div>
                </div>

                {/* Charting */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                    Charting & Visualization
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Insert Chart</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">F11</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Format Chart</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + 1</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Select Chart Data</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + A</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Chart Elements</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Alt + J + C</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-10 text-white">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Pro Tips & Tricks</h2>
                  <p className="text-green-100">Advanced techniques to boost your Excel productivity</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Flash Fill</h3>
                  <p className="text-green-100 mb-3">Automatically fill data based on patterns you establish</p>
                  <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">Ctrl + E</kbd>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Quick Analysis</h3>
                  <p className="text-green-100 mb-3">Select data and press Ctrl + Q for instant analysis options</p>
                  <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">Ctrl + Q</kbd>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">F4 Key</h3>
                  <p className="text-green-100 mb-3">Repeat last action or toggle absolute/relative references</p>
                  <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">F4</kbd>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Ctrl + Enter</h3>
                  <p className="text-green-100 mb-3">Fill selected cells with the same value or formula</p>
                  <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">Ctrl + Enter</kbd>
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
                  <Target className="w-5 h-5 mr-2 text-green-600" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link href="/excel" className="block p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-green-600" />
                      <span className="font-medium text-green-900">Back to Training</span>
                    </div>
                  </Link>
                  <Link href="/excel/quiz" className="block p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="font-medium text-blue-900">Take Quiz</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Common Formulas */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-purple-600" />
                  Common Formulas
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-1">SUMIF</div>
                    <div className="text-gray-600">=SUMIF(range,criteria,sum_range)</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-1">COUNTIF</div>
                    <div className="text-gray-600">=COUNTIF(range,criteria)</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-1">CONCATENATE</div>
                    <div className="text-gray-600">=CONCATENATE(text1,text2)</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-1">TODAY</div>
                    <div className="text-gray-600">=TODAY()</div>
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
                  Keep this handy reference on your desk for quick access to Excel shortcuts.
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
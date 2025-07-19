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
  Mail,
  Calendar,
  Clock,
  Users,
  Send,
  Reply,
  Forward,
  Archive,
  Flag,
  Filter,
  SortAsc,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle
} from "lucide-react";
import PrintButton from "@/components/PrintButton";

export default function OutlookCheatsheetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              href="/outlook" 
              className="flex items-center text-orange-600 hover:text-orange-800 transition-all duration-300 transform hover:-translate-x-1 group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Outlook Training</span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-sm text-orange-600 bg-orange-100 px-3 py-2 rounded-full">
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Microsoft Outlook
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Outlook <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Cheatsheet</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master Microsoft Outlook with these essential keyboard shortcuts, email management tips, and tricks. 
            Print this page or bookmark it for quick reference during your work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Essential Shortcuts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <Keyboard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Essential Keyboard Shortcuts</h2>
                  <p className="text-gray-600">Master these shortcuts to work 10x faster in Outlook</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email Operations */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-orange-600" />
                    Email Operations
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">New Email</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Shift + M</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Reply</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + R</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Reply All</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Shift + R</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Forward</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + F</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Send</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Enter</kbd>
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
                      <span className="font-medium">Next Item</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">↓</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Previous Item</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">↑</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Next Folder</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Shift + ]</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Previous Folder</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Shift + [</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Go to Today</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + G</kbd>
                    </div>
                  </div>
                </div>

                {/* Email Management */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Archive className="w-5 h-5 mr-2 text-green-600" />
                    Email Management
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Delete</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Delete</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Archive</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Backspace</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Flag</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Insert</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Mark as Read</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Q</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Mark as Unread</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + U</kbd>
                    </div>
                  </div>
                </div>

                {/* Calendar */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                    Calendar
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">New Appointment</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Shift + A</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">New Meeting</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Shift + Q</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Today</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + G</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Next Day</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + →</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Previous Day</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + ←</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Features */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 mb-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Advanced Features</h2>
                  <p className="text-gray-600">Power user shortcuts and techniques</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Quick Steps */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-orange-600" />
                    Quick Steps
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Move to Folder</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Shift + V</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Categorize</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Shift + 1-9</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Create Rule</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + Shift + L</kbd>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="font-medium">Search</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + E</kbd>
                    </div>
                  </div>
                </div>

                {/* Email Formatting */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Bold className="w-5 h-5 mr-2 text-blue-600" />
                    Email Formatting
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
                      <span className="font-medium">Insert Hyperlink</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">Ctrl + K</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-10 text-white">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">Pro Tips & Tricks</h2>
                  <p className="text-orange-100">Advanced techniques to boost your Outlook productivity</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Rules & Automation</h3>
                  <p className="text-orange-100 mb-3">Create rules to automatically organize emails into folders</p>
                  <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">Ctrl + Shift + L</kbd>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Quick Parts</h3>
                  <p className="text-orange-100 mb-3">Save frequently used text as Quick Parts for quick insertion</p>
                  <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">Alt + F3</kbd>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Scheduling Assistant</h3>
                  <p className="text-orange-100 mb-3">Find the best meeting time for all attendees automatically</p>
                  <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">Ctrl + Shift + Q</kbd>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">Focused Inbox</h3>
                  <p className="text-orange-100 mb-3">Let Outlook learn which emails are important to you</p>
                  <kbd className="px-2 py-1 bg-white/20 rounded text-sm font-mono">Ctrl + Shift + I</kbd>
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
                  <Target className="w-5 h-5 mr-2 text-orange-600" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link href="/outlook" className="block p-3 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-orange-600" />
                      <span className="font-medium text-orange-900">Back to Training</span>
                    </div>
                  </Link>
                  <Link href="/outlook/quiz" className="block p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="font-medium text-blue-900">Take Quiz</span>
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
                    <div className="font-medium text-gray-900 mb-1">Out of Office</div>
                    <div className="text-gray-600">Ctrl + Shift + O</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-1">Check Names</div>
                    <div className="text-gray-600">Ctrl + K</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-1">Spell Check</div>
                    <div className="text-gray-600">F7</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl">
                    <div className="font-medium text-gray-900 mb-1">Address Book</div>
                    <div className="text-gray-600">Ctrl + Shift + B</div>
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
                  Keep this handy reference on your desk for quick access to Outlook shortcuts.
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
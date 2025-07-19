export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  tip?: string;
}

export const wordQuiz: QuizQuestion[] = [
  {
    question: "Which file extension is used for Word documents by default?",
    options: [".doc", ".docx", ".txt", ".pdf"],
    correct: 1,
    tip: "Since 2007, Word uses .docx as the default format for better compatibility and compression."
  },
  {
    question: "What is the shortcut to make text bold in Word?",
    options: ["Ctrl+B", "Ctrl+I", "Ctrl+U", "Ctrl+S"],
    correct: 0,
    tip: "Ctrl+B applies bold formatting. Remember: I = Italic, U = Underline."
  },
  {
    question: "Which feature checks spelling and grammar in a document?",
    options: ["Track Changes", "Spell Check", "Word Count", "SmartArt"],
    correct: 1,
    tip: "Spell Check can be accessed from the Review tab or by pressing F7."
  },
  {
    question: "How do you insert a page break?",
    options: ["Ctrl+Enter", "Ctrl+P", "Ctrl+Shift+N", "Ctrl+M"],
    correct: 0,
    tip: "Page breaks help organize content without repeatedly pressing Enter."
  },
  {
    question: "What is the function of the 'Track Changes' feature?",
    options: ["Counts words", "Shows formatting marks", "Records edits and comments", "Saves automatically"],
    correct: 2,
    tip: "Track Changes is useful for collaboration—it marks all edits for review."
  },
  {
    question: "Which tab contains the option to insert a table?",
    options: ["Home", "Insert", "Layout", "References"],
    correct: 1,
    tip: "Use Insert > Table to create tables and organize content."
  },
  {
    question: "What does the Format Painter do?",
    options: ["Paints shapes", "Copies formatting", "Inserts images", "Checks grammar"],
    correct: 1,
    tip: "Format Painter copies styles like font, color, and size to another text selection."
  },
  {
    question: "How can you add a header to your document?",
    options: ["Insert > Header", "Home > Header", "Layout > Header", "Review > Header"],
    correct: 0,
    tip: "Headers and footers can include page numbers, titles, or custom text."
  },
  {
    question: "Which shortcut is used to save a document?",
    options: ["Ctrl+S", "Ctrl+O", "Ctrl+N", "Ctrl+P"],
    correct: 0,
    tip: "Ctrl+S saves the current document. Use it frequently to avoid data loss!"
  },
  {
    question: "What is the default font in most versions of Word?",
    options: ["Arial", "Calibri", "Times New Roman", "Verdana"],
    correct: 1,
    tip: "Calibri replaced Times New Roman as the default in Word 2007."
  },
  {
    question: "How do you insert a hyperlink?",
    options: ["Ctrl+H", "Ctrl+K", "Ctrl+L", "Ctrl+Shift+H"],
    correct: 1,
    tip: "Ctrl+K opens the Insert Hyperlink dialog box."
  },
  {
    question: "Which feature allows you to see what a document will look like when printed?",
    options: ["Print Preview", "Read Mode", "Web Layout", "Outline"],
    correct: 0,
    tip: "Print Preview is found in File > Print and is great for final checks."
  },
  {
    question: "What is the function of the 'References' tab?",
    options: ["Insert images", "Manage citations and bibliography", "Change page layout", "Check spelling"],
    correct: 1,
    tip: "References tab helps with citations, table of contents, and bibliographies."
  },
  {
    question: "How do you create a bulleted list?",
    options: ["Home > Bullets", "Insert > Bullets", "Layout > Bullets", "Review > Bullets"],
    correct: 0,
    tip: "Bulleted and numbered lists are in the Home tab under Paragraph group."
  },
  {
    question: "Which option is used to change the page orientation?",
    options: ["Layout > Orientation", "Home > Orientation", "Insert > Orientation", "References > Orientation"],
    correct: 0,
    tip: "Use Layout > Orientation to switch between Portrait and Landscape."
  },
  // ✅ NEW QUESTIONS
  {
    question: "What is the shortcut for undoing an action in Word?",
    options: ["Ctrl+X", "Ctrl+Z", "Ctrl+Y", "Ctrl+Q"],
    correct: 1,
    tip: "Ctrl+Z = Undo, Ctrl+Y = Redo. Essential for quick edits."
  },
  {
    question: "Which feature in Word automatically creates a list of headings?",
    options: ["Table of Contents", "Index", "SmartArt", "Outline View"],
    correct: 0,
    tip: "A Table of Contents is generated from Heading styles applied in the document."
  },
  {
    question: "What is the purpose of the 'Navigation Pane' in Word?",
    options: ["To check spelling", "To view and search headings/pages", "To track changes", "To insert hyperlinks"],
    correct: 1,
    tip: "The Navigation Pane helps jump between headings or pages quickly."
  },
  {
    question: "How can you protect a Word document from editing?",
    options: ["File > Info > Protect Document", "Home > Protect Document", "Insert > Protect Document", "View > Protect Document"],
    correct: 0,
    tip: "You can add passwords or restrict editing under File > Info > Protect Document."
  },
  {
    question: "What does the 'Read Mode' view do?",
    options: ["Optimizes document for reading on screen", "Shows print layout", "Displays web layout", "Shows editing marks"],
    correct: 0,
    tip: "Read Mode removes distractions and adjusts layout for comfortable reading."
  }
];

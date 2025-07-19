export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  tip?: string;
}

export const wordQuiz: QuizQuestion[] = [
  {
    question: "What is the keyboard shortcut to save a document in Word?",
    options: ["Ctrl+S", "Ctrl+N", "Ctrl+O", "Ctrl+P"],
    correct: 0,
    tip: "Ctrl+S is the universal save shortcut. Use it frequently to avoid losing your work!"
  },
  {
    question: "Which feature allows you to see how your document will look when printed?",
    options: ["Print Preview", "Page Layout", "Reading View", "Draft View"],
    correct: 0,
    tip: "Print Preview shows exactly how your document will appear on paper, including margins and page breaks."
  },
  {
    question: "What does the Find and Replace feature do?",
    options: [
      "Only finds text",
      "Only replaces text",
      "Finds and optionally replaces text",
      "Deletes text"
    ],
    correct: 2,
    tip: "Find and Replace can locate specific text and optionally replace it with new text throughout your document."
  },
  {
    question: "Which view shows the document as it will appear when printed?",
    options: ["Draft", "Print Layout", "Web Layout", "Outline"],
    correct: 1,
    tip: "Print Layout view shows headers, footers, and page margins exactly as they'll appear in the final document."
  },
  {
    question: "What is the purpose of headers and footers?",
    options: [
      "To make text bold",
      "To add page numbers and document info",
      "To change font size",
      "To add borders"
    ],
    correct: 1,
    tip: "Headers and footers appear on every page and typically contain page numbers, dates, or document titles."
  },
  {
    question: "Which feature automatically corrects common spelling mistakes?",
    options: ["AutoCorrect", "Spell Check", "Grammar Check", "Thesaurus"],
    correct: 0,
    tip: "AutoCorrect fixes common typos automatically, like changing 'teh' to 'the' as you type."
  },
  {
    question: "What does the Undo feature do?",
    options: [
      "Deletes text",
      "Reverses the last action",
      "Saves the document",
      "Prints the document"
    ],
    correct: 1,
    tip: "Undo (Ctrl+Z) reverses your last action. You can undo multiple actions in sequence."
  },
  {
    question: "Which feature allows you to create a numbered or bulleted list?",
    options: ["AutoNumber", "List Format", "Bullets and Numbering", "AutoList"],
    correct: 2,
    tip: "Bullets and Numbering automatically formats lists with consistent spacing and indentation."
  },
  {
    question: "What is the purpose of track changes?",
    options: [
      "To change font styles",
      "To track editing changes for review",
      "To save automatically",
      "To print documents"
    ],
    correct: 1,
    tip: "Track Changes shows all edits, deletions, and additions so others can review your changes."
  },
  {
    question: "Which feature allows you to insert page breaks?",
    options: ["Page Break", "Section Break", "Column Break", "All of the above"],
    correct: 3,
    tip: "Different types of breaks control how content flows between pages, sections, and columns."
  },
  {
    question: "What does the Format Painter do?",
    options: [
      "Changes font color",
      "Copies formatting from one place to another",
      "Paints backgrounds",
      "Creates borders"
    ],
    correct: 1,
    tip: "Format Painter copies formatting (font, size, color, etc.) from selected text and applies it elsewhere."
  },
  {
    question: "Which feature allows you to create columns in a document?",
    options: ["Column Layout", "Multi-column", "Text Columns", "Page Columns"],
    correct: 2,
    tip: "Text Columns divide your page into multiple vertical sections, like in newspapers or newsletters."
  },
  {
    question: "What is the purpose of styles in Word?",
    options: [
      "To make text colorful",
      "To apply consistent formatting quickly",
      "To change page size",
      "To add pictures"
    ],
    correct: 1,
    tip: "Styles apply consistent formatting to headings, paragraphs, and other elements throughout your document."
  },
  {
    question: "Which feature allows you to insert a table?",
    options: ["Table Insert", "Insert Table", "Create Table", "Add Table"],
    correct: 1,
    tip: "Insert Table creates a grid where you can organize data in rows and columns."
  },
  {
    question: "What does the Word Count feature show?",
    options: [
      "Only word count",
      "Word count, character count, and page count",
      "Only character count",
      "Only page count"
    ],
    correct: 1,
    tip: "Word Count displays comprehensive statistics including words, characters (with and without spaces), and pages."
  },
  {
    question: "Which feature allows you to add comments to a document?",
    options: ["Add Comment", "Insert Comment", "New Comment", "Create Comment"],
    correct: 1,
    tip: "Comments allow you to add notes or feedback without changing the main document text."
  },
  {
    question: "What is the purpose of the Navigation Pane?",
    options: [
      "To navigate between documents",
      "To quickly jump to headings, pages, or search results",
      "To change document settings",
      "To format text"
    ],
    correct: 1,
    tip: "The Navigation Pane provides quick access to document structure and search functionality."
  },
  {
    question: "Which feature allows you to protect a document with a password?",
    options: ["Document Protection", "Password Protect", "Restrict Editing", "Secure Document"],
    correct: 2,
    tip: "Restrict Editing can prevent others from making changes to your document or require a password to edit."
  },
  {
    question: "What does the Mail Merge feature do?",
    options: [
      "Sends emails",
      "Combines a document template with a data source",
      "Merges multiple documents",
      "Creates mailing labels"
    ],
    correct: 1,
    tip: "Mail Merge personalizes documents by combining a template with data from a spreadsheet or database."
  },
  {
    question: "Which feature allows you to create a table of contents?",
    options: [
      "Auto Table of Contents",
      "Insert Table of Contents",
      "Create Contents",
      "Generate TOC"
    ],
    correct: 1,
    tip: "Table of Contents automatically creates a list of headings and their page numbers based on your document structure."
  }
];

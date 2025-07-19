export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export const excelQuiz: QuizQuestion[] = [
  {
    question: "Which symbol is used to start a formula in Excel?",
    options: ["=", "+", "-", "*"],
    correct: 0,
  },
  {
    question: "Which feature allows you to create a visual representation of your data?",
    options: ["Pivot Table", "Chart", "Conditional Formatting", "Data Validation"],
    correct: 1,
  },
  {
    question: "What is the keyboard shortcut to save a workbook?",
    options: ["Ctrl+S", "Ctrl+N", "Ctrl+O", "Ctrl+P"],
    correct: 0,
  },
  {
    question: "Which function adds up all the numbers in a range of cells?",
    options: ["AVERAGE", "SUM", "COUNT", "MAX"],
    correct: 1,
  },
  {
    question: "What does the VLOOKUP function do?",
    options: [
      "Looks up values vertically in a table",
      "Looks up values horizontally in a table",
      "Counts cells with text",
      "Finds the maximum value"
    ],
    correct: 0,
  },
  {
    question: "Which chart type is best for showing trends over time?",
    options: ["Pie Chart", "Line Chart", "Bar Chart", "Scatter Plot"],
    correct: 1,
  },
  {
    question: "What is the purpose of conditional formatting?",
    options: [
      "To change cell borders",
      "To format cells based on their values",
      "To add formulas",
      "To create charts"
    ],
    correct: 1,
  },
  {
    question: "Which key combination allows you to select all cells in a worksheet?",
    options: ["Ctrl+A", "Ctrl+C", "Ctrl+V", "Ctrl+X"],
    correct: 0,
  },
  {
    question: "What does the IF function do?",
    options: [
      "Performs mathematical calculations",
      "Tests a condition and returns different values",
      "Looks up data in a table",
      "Counts cells"
    ],
    correct: 1,
  },
  {
    question: "Which feature helps you automatically fill a series of data?",
    options: ["AutoSum", "AutoFill", "AutoFilter", "AutoComplete"],
    correct: 1,
  },
  {
    question: "What is a PivotTable used for?",
    options: [
      "Creating charts",
      "Summarizing and analyzing large datasets",
      "Formatting cells",
      "Adding formulas"
    ],
    correct: 1,
  },
  {
    question: "Which function calculates the average of a range of numbers?",
    options: ["SUM", "COUNT", "AVERAGE", "MAX"],
    correct: 2,
  },
  {
    question: "What does the CONCATENATE function do?",
    options: [
      "Adds numbers together",
      "Joins text strings together",
      "Finds the highest value",
      "Counts cells"
    ],
    correct: 1,
  },
  {
    question: "Which feature allows you to freeze rows or columns so they stay visible when scrolling?",
    options: ["Freeze Panes", "Split Window", "Hide Rows", "Group Data"],
    correct: 0,
  },
  {
    question: "What is the purpose of data validation?",
    options: [
      "To make cells look pretty",
      "To restrict the type of data that can be entered",
      "To add formulas automatically",
      "To create charts"
    ],
    correct: 1,
  }
]; 
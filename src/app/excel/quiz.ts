export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  tip?: string;
}

export const excelQuiz: QuizQuestion[] = [
  {
    question: "Which symbol is used to start a formula in Excel?",
    options: ["=", "+", "-", "*"],
    correct: 0,
    tip: "All Excel formulas must begin with the equals sign (=) to tell Excel that what follows is a calculation."
  },
  {
    question: "Which feature allows you to create a visual representation of your data?",
    options: ["Pivot Table", "Chart", "Conditional Formatting", "Data Validation"],
    correct: 1,
    tip: "Charts transform numerical data into visual formats like bars, lines, or pie slices to make patterns easier to see."
  },
  {
    question: "What is the keyboard shortcut to save a workbook?",
    options: ["Ctrl+S", "Ctrl+N", "Ctrl+O", "Ctrl+P"],
    correct: 0,
    tip: "Ctrl+S is the universal save shortcut across most applications. Use it frequently to avoid losing your work!"
  },
  {
    question: "Which function adds up all the numbers in a range of cells?",
    options: ["AVERAGE", "SUM", "COUNT", "MAX"],
    correct: 1,
    tip: "SUM is one of the most commonly used functions. You can also use the AutoSum button (Σ) on the Home tab."
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
    tip: "VLOOKUP searches the first column of a table and returns a value from the same row in a specified column."
  },
  {
    question: "Which chart type is best for showing trends over time?",
    options: ["Pie Chart", "Line Chart", "Bar Chart", "Scatter Plot"],
    correct: 1,
    tip: "Line charts are perfect for showing how values change over time, making trends and patterns easy to spot."
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
    tip: "Conditional formatting automatically applies colors, icons, or bars based on cell values, making data analysis faster."
  },
  {
    question: "Which key combination allows you to select all cells in a worksheet?",
    options: ["Ctrl+A", "Ctrl+C", "Ctrl+V", "Ctrl+X"],
    correct: 0,
    tip: "Ctrl+A selects all content. In Excel, it selects all cells with data, or all cells if you're in an empty cell."
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
    tip: "IF is a logical function that returns one value if a condition is true, and another value if it's false."
  },
  {
    question: "Which feature helps you automatically fill a series of data?",
    options: ["AutoSum", "AutoFill", "AutoFilter", "AutoComplete"],
    correct: 1,
    tip: "AutoFill recognizes patterns and can continue sequences like dates, numbers, or text automatically."
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
    tip: "PivotTables are powerful tools for summarizing, analyzing, and presenting large amounts of data in a meaningful way."
  },
  {
    question: "Which function calculates the average of a range of numbers?",
    options: ["SUM", "COUNT", "AVERAGE", "MAX"],
    correct: 2,
    tip: "AVERAGE adds all numbers in a range and divides by the count of numbers to find the mean value."
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
    tip: "CONCATENATE combines multiple text strings into one. You can also use the & operator for the same result."
  },
  {
    question: "Which feature allows you to freeze rows or columns so they stay visible when scrolling?",
    options: ["Freeze Panes", "Split Window", "Hide Rows", "Group Data"],
    correct: 0,
    tip: "Freeze Panes keeps selected rows or columns visible while you scroll through large datasets."
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
    tip: "Data validation ensures only appropriate data types or values can be entered, reducing errors and maintaining data quality."
  },
  {
    question: "Which function finds the highest value in a range?",
    options: ["MIN", "MAX", "AVERAGE", "COUNT"],
    correct: 1,
    tip: "MAX returns the largest number in a range. It's useful for finding peak values in datasets."
  },
  {
    question: "What does the COUNT function do?",
    options: [
      "Counts all cells in a range",
      "Counts only cells with numbers",
      "Counts only cells with text",
      "Counts empty cells"
    ],
    correct: 1,
    tip: "COUNT counts only cells that contain numbers. Use COUNTA to count all non-empty cells, including text."
  },
  {
    question: "Which keyboard shortcut creates a new workbook?",
    options: ["Ctrl+N", "Ctrl+O", "Ctrl+S", "Ctrl+P"],
    correct: 0,
    tip: "Ctrl+N creates a new blank workbook. This is faster than using the File menu."
  },
  {
    question: "What is the purpose of the TRIM function?",
    options: [
      "Removes all spaces from text",
      "Removes extra spaces from text",
      "Adds spaces to text",
      "Counts spaces in text"
    ],
    correct: 1,
    tip: "TRIM removes leading and trailing spaces, and reduces multiple spaces between words to single spaces."
  },
  {
    question: "Which chart type is best for showing parts of a whole?",
    options: ["Line Chart", "Bar Chart", "Pie Chart", "Scatter Plot"],
    correct: 2,
    tip: "Pie charts show how individual parts contribute to the total, making proportions easy to understand."
  },
  {
    question: "What does the TODAY() function return?",
    options: [
      "Current time only",
      "Current date only",
      "Current date and time",
      "Yesterday's date"
    ],
    correct: 1,
    tip: "TODAY() returns the current date. It updates automatically each time the workbook is opened or recalculated."
  },
  {
    question: "Which feature allows you to sort data alphabetically or numerically?",
    options: ["Filter", "Sort", "Group", "Subtotal"],
    correct: 1,
    tip: "Sort arranges data in ascending or descending order. You can sort by multiple columns for complex organization."
  },
  {
    question: "What is the purpose of the LEN function?",
    options: [
      "Counts characters in a text string",
      "Finds the length of a number",
      "Measures cell width",
      "Counts words in text"
    ],
    correct: 0,
    tip: "LEN counts all characters in a text string, including spaces and punctuation."
  },
  {
    question: "Which function rounds a number to a specified number of decimal places?",
    options: ["ROUND", "CEILING", "FLOOR", "INT"],
    correct: 0,
    tip: "ROUND rounds to the nearest value. ROUNDUP always rounds up, ROUNDDOWN always rounds down."
  },
  {
    question: "What does the SUBTOTAL function do?",
    options: [
      "Calculates totals for filtered data only",
      "Finds the smallest value",
      "Counts unique values",
      "Creates subtotals automatically"
    ],
    correct: 0,
    tip: "SUBTOTAL performs calculations (like SUM, AVERAGE) on visible cells only, ignoring hidden or filtered rows."
  },
  {
    question: "Which feature allows you to create a drop-down list in a cell?",
    options: ["Data Validation", "Conditional Formatting", "AutoFill", "Data Filter"],
    correct: 0,
    tip: "Data Validation with 'List' option creates a drop-down menu, ensuring only valid options can be selected."
  }
]; 
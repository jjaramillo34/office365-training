export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export const outlookQuiz: QuizQuestion[] = [
  {
    question: "Which protocol is commonly used to receive emails in Outlook?",
    options: ["SMTP", "IMAP", "FTP", "HTTP"],
    correct: 1,
  },
  {
    question: "What is the default folder for incoming emails?",
    options: ["Sent Items", "Drafts", "Inbox", "Outbox"],
    correct: 2,
  },
  {
    question: "Which feature allows you to schedule a meeting in Outlook?",
    options: ["Calendar", "Tasks", "Notes", "Contacts"],
    correct: 0,
  },
  {
    question: "How do you mark an email as important?",
    options: ["Flag it", "Move to Junk", "Delete it", "Archive it"],
    correct: 0,
  },
  {
    question: "What does the 'BCC' field do?",
    options: ["Sends a copy to all recipients", "Hides recipients from each other", "Marks as confidential", "Deletes the email"],
    correct: 1,
  },
  {
    question: "Which shortcut is used to create a new email?",
    options: ["Ctrl+N", "Ctrl+M", "Ctrl+Shift+N", "Ctrl+E"],
    correct: 0,
  },
  {
    question: "What is the purpose of the 'Rules' feature?",
    options: ["Format emails", "Automate email organization", "Send emails later", "Encrypt emails"],
    correct: 1,
  },
  {
    question: "How can you search for emails from a specific sender?",
    options: ["Use the search bar", "Sort by date", "Filter by size", "Archive emails"],
    correct: 0,
  },
  {
    question: "Which folder stores emails you have sent?",
    options: ["Inbox", "Sent Items", "Drafts", "Junk"],
    correct: 1,
  },
  {
    question: "What does the 'Out of Office' feature do?",
    options: ["Deletes emails", "Sends automatic replies", "Marks emails as read", "Archives emails"],
    correct: 1,
  },
  {
    question: "How do you attach a file to an email?",
    options: ["Insert > File", "File > Attach", "Home > Attach", "View > File"],
    correct: 0,
  },
  {
    question: "Which view shows your daily schedule?",
    options: ["Mail", "Calendar", "People", "Tasks"],
    correct: 1,
  },
  {
    question: "What is the purpose of the 'Junk' folder?",
    options: ["Store important emails", "Store spam or unwanted emails", "Store drafts", "Store sent emails"],
    correct: 1,
  },
  {
    question: "How do you create a recurring meeting?",
    options: ["Set recurrence in meeting options", "Send multiple invites", "Copy the meeting", "Forward the meeting"],
    correct: 0,
  },
  {
    question: "Which feature lets you categorize emails with colors?",
    options: ["Flags", "Categories", "Folders", "Rules"],
    correct: 1,
  }
]; 
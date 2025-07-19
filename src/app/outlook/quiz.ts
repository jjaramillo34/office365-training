export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  tip?: string;
}

export const outlookQuiz: QuizQuestion[] = [
  {
    question: "What is the keyboard shortcut to send an email in Outlook?",
    options: ["Ctrl+S", "Ctrl+Enter", "Ctrl+Send", "F5"],
    correct: 1,
    tip: "Ctrl+Enter sends the email immediately. Ctrl+S saves it as a draft instead."
  },
  {
    question: "Which feature allows you to organize emails into folders?",
    options: ["Email Sort", "Folder Organization", "Mail Rules", "All of the above"],
    correct: 3,
    tip: "You can manually create folders, use rules to auto-organize, or sort emails by various criteria."
  },
  {
    question: "What does the 'Out of Office' feature do?",
    options: [
      "Deletes emails automatically",
      "Sends automatic replies when you're away",
      "Forwards all emails to someone else",
      "Blocks incoming emails"
    ],
    correct: 1,
    tip: "Out of Office sends automatic responses to let people know you're unavailable and when you'll return."
  },
  {
    question: "Which feature allows you to schedule meetings with others?",
    options: ["Meeting Scheduler", "Calendar Invite", "Appointment Book", "Event Planner"],
    correct: 1,
    tip: "Calendar Invite sends meeting requests to participants and adds the event to everyone's calendar."
  },
  {
    question: "What is the purpose of the 'Drafts' folder?",
    options: [
      "To store deleted emails",
      "To save incomplete emails for later",
      "To archive old emails",
      "To store spam"
    ],
    correct: 1,
    tip: "Drafts automatically saves incomplete emails so you can finish them later without losing your work."
  },
  {
    question: "Which feature helps you find specific emails quickly?",
    options: ["Search", "Filter", "Sort", "All of the above"],
    correct: 3,
    tip: "Search, filter, and sort work together to help you locate emails by sender, subject, date, or content."
  },
  {
    question: "What does the 'Junk' folder contain?",
    options: [
      "Important emails",
      "Spam and suspicious emails",
      "Draft emails",
      "Sent emails"
    ],
    correct: 1,
    tip: "The Junk folder contains emails that Outlook's spam filter has identified as potentially unwanted."
  },
  {
    question: "Which feature allows you to flag important emails?",
    options: ["Email Flag", "Important Mark", "Priority Flag", "Star Email"],
    correct: 0,
    tip: "Flagging emails helps you mark them for follow-up and can set reminders for when to address them."
  },
  {
    question: "What is the purpose of the 'Sent Items' folder?",
    options: [
      "To store received emails",
      "To keep copies of emails you've sent",
      "To store deleted emails",
      "To organize contacts"
    ],
    correct: 1,
    tip: "Sent Items automatically stores copies of all emails you send, so you have a record of your communications."
  },
  {
    question: "Which feature allows you to create email templates?",
    options: ["Quick Parts", "Email Templates", "AutoText", "All of the above"],
    correct: 3,
    tip: "Quick Parts and templates let you save frequently used text or complete emails for quick reuse."
  },
  {
    question: "What does the 'Calendar' view show?",
    options: [
      "Only your appointments",
      "Your schedule, meetings, and events",
      "Only work hours",
      "Only holidays"
    ],
    correct: 1,
    tip: "Calendar shows your complete schedule including appointments, meetings, events, and reminders."
  },
  {
    question: "Which feature allows you to share your calendar with others?",
    options: ["Calendar Share", "Publish Calendar", "Export Calendar", "All of the above"],
    correct: 3,
    tip: "You can share your calendar in various ways: publish it, send it via email, or give others permission to view it."
  },
  {
    question: "What is the purpose of 'Categories' in Outlook?",
    options: [
      "To change email colors",
      "To organize emails and calendar items by color and label",
      "To mark emails as read",
      "To delete emails"
    ],
    correct: 1,
    tip: "Categories use colors and labels to help you organize and quickly identify related emails and calendar items."
  },
  {
    question: "Which feature allows you to set reminders for emails?",
    options: ["Email Alert", "Follow-up Flag", "Reminder Set", "Notification Flag"],
    correct: 1,
    tip: "Follow-up flags can set reminders to follow up on emails at specific times or dates."
  },
  {
    question: "What does the 'Archive' feature do?",
    options: [
      "Deletes emails permanently",
      "Moves old emails to an archive folder",
      "Forwards emails to another account",
      "Marks emails as read"
    ],
    correct: 1,
    tip: "Archive moves older emails to a separate folder to keep your main inbox organized without deleting them."
  },
  {
    question: "Which feature allows you to create contact groups?",
    options: ["Contact List", "Distribution List", "Email Group", "All of the above"],
    correct: 3,
    tip: "Contact groups (also called distribution lists) let you send emails to multiple people at once."
  },
  {
    question: "What is the purpose of 'Rules' in Outlook?",
    options: [
      "To change email settings",
      "To automatically organize and process emails",
      "To block all emails",
      "To forward all emails"
    ],
    correct: 1,
    tip: "Rules automatically perform actions on incoming emails, like moving them to folders or flagging them."
  },
  {
    question: "Which feature allows you to schedule recurring meetings?",
    options: ["Repeat Meeting", "Recurring Appointment", "Series Meeting", "All of the above"],
    correct: 3,
    tip: "Recurring meetings automatically schedule regular events like weekly team meetings or monthly reviews."
  },
  {
    question: "What does the 'Tasks' feature help you manage?",
    options: [
      "Only work tasks",
      "To-do items, reminders, and personal tasks",
      "Only calendar events",
      "Only emails"
    ],
    correct: 1,
    tip: "Tasks help you track to-do items, set deadlines, and manage both work and personal responsibilities."
  },
  {
    question: "Which feature allows you to set up email signatures?",
    options: ["Auto Signature", "Email Footer", "Signature Block", "All of the above"],
    correct: 3,
    tip: "Email signatures automatically add your contact information, title, or other text to outgoing emails."
  },
  {
    question: "What is the purpose of 'Conversation View'?",
    options: [
      "To show only new emails",
      "To group related emails together in threads",
      "To hide old emails",
      "To sort emails by date"
    ],
    correct: 1,
    tip: "Conversation View groups related emails together, making it easier to follow email discussions and replies."
  }
]; 
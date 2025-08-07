import type { ActivitySuggestion } from "../types/activity-suggestion";

// Mocked suggestions data
const suggestions: ActivitySuggestion[] = [
  {
    type: "call",
    contact: "John Smith",
    time: "30 mins ago",
    description:
      "You had a follow-up call with John Smith about pricing. Would you like to log it?",
  },
  {
    type: "meeting",
    contact: "Sarah Wilson",
    time: "11:00 AM",
    description:
      "Add summary notes from your discovery meeting with Sarah Wilson.",
  },
  {
    type: "email",
    contact: "Carlos Reyes",
    time: "Yesterday",
    description:
      "You sent an email to Carlos Reyes regarding product documentation. Log it?",
  },
  {
    type: "meeting",
    contact: "Emily Tan",
    time: "2:00 PM",
    description: "Log notes for your demo presentation with Emily Tan at 2 PM.",
  },
  {
    type: "call",
    contact: "Daniel Kim",
    time: "1 hour ago",
    description:
      "Sales qualification call with Daniel Kim completed. Would you like to update the lead status?",
  },
];

export { suggestions };

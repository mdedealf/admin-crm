type ActivitySuggestion = {
  type: "call" | "meeting" | "email";
  contact: string;
  time: string;
  description: string;
};

export { ActivitySuggestion };

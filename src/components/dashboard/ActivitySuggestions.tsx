import { useState, type FC } from "react";
import { suggestions } from "../../constant/activity-suggestion";
import type { ActivitySuggestion } from "../../types/activity-suggestion";
import LogInteractionModal from "../modal/LogInteractionModal";

import { LuPhone, LuCalendar, LuMail } from "react-icons/lu";

const ActivitySuggestions: FC = () => {
  const [selectedSuggestion, setSelectedSuggestion] =
    useState<ActivitySuggestion | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogClick = (suggestion: ActivitySuggestion) => {
    setSelectedSuggestion(suggestion);
    setModalOpen(true);
  };

  const handleSave = () => {
    console.log("Interaction Logged:");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Smart Suggestions</h2>
      <div className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-full">
                {suggestion.type === "call" && (
                  <LuPhone className="text-green-500" size={18} />
                )}
                {suggestion.type === "meeting" && (
                  <LuCalendar className="text-blue-500" size={18} />
                )}
                {suggestion.type === "email" && (
                  <LuMail className="text-red-500" size={18} />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  {suggestion.description}
                </p>
                <p className="text-xs text-gray-500 mt-1">{suggestion.time}</p>
              </div>
              <button
                className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors cursor-pointer"
                onClick={() => handleLogClick(suggestion)}
              >
                Log it
              </button>
            </div>
          </div>
        ))}
      </div>
      <LogInteractionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        suggestion={selectedSuggestion}
      />
    </div>
  );
};

export default ActivitySuggestions;

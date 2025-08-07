import type { FC } from "react";

interface LogInteractionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (summary: string, status: string, actions: string[]) => void;
  suggestion: {
    type: string;
    contact: string;
    description: string;
  } | null;
}

const LogInteractionModal: FC<LogInteractionModalProps> = ({
  isOpen,
  onClose,
  onSave,
  suggestion,
}) => {
  if (!isOpen || !suggestion) return null;

  const defaultSummary = `Summary: ${suggestion.description}`;
  const statuses = ["Interested", "Negotiating", "Closed"];
  const actions = ["Send Proposal", "Schedule Follow-up"];

  let selectedActions: string[] = [];

  return (
    <div className="fixed inset-0 bg-gray-950/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[400px] space-y-4 shadow-lg">
        <h2 className="text-lg font-semibold">Log Interaction</h2>

        <textarea
          defaultValue={defaultSummary}
          className="w-full p-2 border rounded"
          rows={3}
          id="summary"
        />

        <div>
          <label className="block text-sm font-medium mb-1">
            Suggested Actions
          </label>
          {actions.map((action) => (
            <div key={action}>
              <label className="flex items-center gap-2 text-lg">
                <input
                  type="checkbox"
                  value={action}
                  onChange={(e) => {
                    if (e.target.checked) selectedActions.push(action);
                    else
                      selectedActions = selectedActions.filter(
                        (a) => a !== action
                      );
                  }}
                />
                {action}
              </label>
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Lead Status</label>
          <select id="status" className="w-full border p-2 rounded">
            {statuses.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
            onClick={() => {
              const summary = (
                document.getElementById("summary") as HTMLTextAreaElement
              ).value;
              const status = (
                document.getElementById("status") as HTMLSelectElement
              ).value;
              onSave(summary, status, selectedActions);
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInteractionModal;

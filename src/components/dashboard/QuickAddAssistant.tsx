import { type FC, useState } from "react";
import { LuPlus, LuX, LuMic } from "react-icons/lu";

const QuickAddAssistant: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-colors flex items-center justify-center"
      >
        <LuPlus size={24} />
      </button>

      {/* Quick Add Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-950/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">Quick Add</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <LuX size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Contact Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>John Smith</option>
                    <option>Sarah Wilson</option>
                    <option>Mike Johnson</option>
                  </select>
                </div>

                {/* Activity Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Activity Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Call", "Meeting", "Email"].map((type) => (
                      <button
                        key={type}
                        className="px-4 py-2 text-sm border rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Voice Input */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Notes
                    </label>
                    <button
                      onClick={() => setIsRecording(!isRecording)}
                      className={`p-2 rounded-full ${
                        isRecording
                          ? "bg-red-50 text-red-600"
                          : "bg-gray-50 text-gray-600"
                      } hover:bg-gray-100`}
                    >
                      <LuMic size={18} />
                    </button>
                  </div>
                  <textarea
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    rows={3}
                    placeholder={
                      isRecording ? "Listening..." : "Add your notes here..."
                    }
                  />
                </div>

                {/* Lead Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Update Status
                  </label>
                  <div className="flex gap-2 overflow-x-auto p-2 pb-2">
                    {[
                      "New",
                      "Contacted",
                      "Demo Scheduled",
                      "Proposal",
                      "Negotiation",
                      "Closed",
                    ].map((status) => (
                      <button
                        key={status}
                        className="px-3 py-1 text-sm border rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-nowrap cursor-pointer"
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md cursor-pointer"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickAddAssistant;

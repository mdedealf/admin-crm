import { type FC } from "react";
import ActivitySuggestions from "../../components/dashboard/ActivitySuggestions";
import QuickAddAssistant from "../../components/dashboard/QuickAddAssistant";
import TimelineActivityFeed from "../../components/dashboard/TimelineActivityFeed";

const Dashboard: FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's what's happening today.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Activity Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Smart Suggestions */}
          <ActivitySuggestions />

          {/* Timeline Activity Feed */}
          <TimelineActivityFeed />
        </div>

        {/* Right Sidebar - Lead Status Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Lead Status Overview
            </h2>
            <div className="space-y-3">
              {[
                {
                  label: "New Leads",
                  count: 12,
                  color: "bg-blue-100 text-blue-800",
                },
                {
                  label: "To Contact",
                  count: 5,
                  color: "bg-yellow-100 text-yellow-800",
                },
                {
                  label: "Demo Scheduled",
                  count: 8,
                  color: "bg-green-100 text-green-800",
                },
                {
                  label: "Proposal Sent",
                  count: 3,
                  color: "bg-purple-100 text-purple-800",
                },
                {
                  label: "Negotiating",
                  count: 2,
                  color: "bg-pink-100 text-pink-800",
                },
              ].map((status) => (
                <div
                  key={status.label}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {status.label}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color}`}
                  >
                    {status.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Add Assistant - Floating Action Button */}
      <QuickAddAssistant />
    </div>
  );
};

export default Dashboard;

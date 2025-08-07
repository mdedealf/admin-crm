import { type FC } from "react";

interface Activity {
  id: string;
  type: "call" | "meeting" | "email" | "note" | "status_change";
  contact: string;
  description: string;
  time: string;
  status?: string;
}

const TimelineActivityFeed: FC = () => {
  // Mocked activities data
  const activities: Activity[] = [
    {
      id: "1",
      type: "call",
      contact: "John Smith",
      description: "Discussed pricing options and next steps",
      time: "2 hours ago",
      status: "Demo Scheduled",
    },
    {
      id: "2",
      type: "meeting",
      contact: "Sarah Wilson",
      description: "Product demo and technical requirements review",
      time: "4 hours ago",
    },
    {
      id: "3",
      type: "email",
      contact: "Mike Johnson",
      description: "Sent follow-up email with pricing details",
      time: "Yesterday",
    },
  ];

  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "call":
        return (
          <svg
            className="w-5 h-5 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        );
      case "meeting":
        return (
          <svg
            className="w-5 h-5 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        );
      case "email":
        return (
          <svg
            className="w-5 h-5 text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="px-6 py-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gray-50 rounded-full">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.contact}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  {activity.description}
                </p>
                {activity.status && (
                  <span className="inline-flex items-center px-2.5 py-0.5 mt-2 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {activity.status}
                  </span>
                )}
              </div>
              <button className="p-1 text-gray-400 hover:text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineActivityFeed;

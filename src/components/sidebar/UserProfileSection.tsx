import { type FC } from "react";

interface User {
  name: string;
  email: string;
  image: string;
}

interface UserProfileSectionProps {
  user?: User;
  onLogout?: () => void;
}

export const UserProfileSection: FC<UserProfileSectionProps> = ({
  user = {
    name: "John Doe",
    email: "john@example.com",
    image: "https://ui-avatars.com/api/?name=John+Doe",
  },
  onLogout,
}) => (
  <div className="flex items-center gap-3 p-4 border-t border-t-gray-100 hover:bg-gray-50 transition-colors">
    <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-700 truncate">{user.name}</p>
      <p className="text-xs text-gray-500 truncate">{user.email}</p>
    </div>
    <button
      onClick={onLogout}
      className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-500 transition-colors"
      title="Logout"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </button>
  </div>
);

export default UserProfileSection;

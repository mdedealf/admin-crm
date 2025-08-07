import { type FC } from "react";
import SearchBar from "./navbar/SearchBar";
import Logo from "./navbar/Logo";
import NotificationBadge from "./navbar/NotificationBadge";

interface NavbarProps {
  brand?: string;
  onSearch?: (query: string) => void;
  onNotificationClick?: () => void;
  notificationCount?: number;
  className?: string;
}

const Navbar: FC<NavbarProps> = ({
  brand = "Admin CRM",
  onSearch,
  onNotificationClick,
  notificationCount = 3,
  className = "",
}) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 h-16 bg-white text-gray-700 shadow-sm z-50 ${className}`}
    >
      <Logo brand={brand} />

      <div className="flex-1 flex justify-center px-8">
        <SearchBar
          onSearch={onSearch}
          placeholder="Search anything..."
          className="max-w-2xl"
        />
      </div>

      <div className="flex items-center gap-4">
        <NotificationBadge
          count={notificationCount}
          onClick={onNotificationClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;

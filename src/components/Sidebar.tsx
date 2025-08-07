import { type FC } from "react";
import type { MenuItem as MenuItemType } from "../types/menu-item";
import { defaultMenuItems } from "../constant/menu-item";
import MenuItem from "./sidebar/MenuItem";
import UserProfileSection from "./sidebar/UserProfileSection";

interface SidebarProps {
  menuItems?: MenuItemType[];
  className?: string;
  onMenuItemClick?: (item: MenuItemType) => void;
  onLogout?: () => void;
  user?: {
    name: string;
    email: string;
    image: string;
  };
}

const Sidebar: FC<SidebarProps> = ({
  menuItems = defaultMenuItems,
  className = "",
  onMenuItemClick = (item) => console.log("Menu item clicked:", item.label),
  onLogout = () => console.log("Logout clicked"),
  user,
}) => {
  return (
    <aside
      className={`fixed left-0 top-16 w-64 h-[calc(100vh-64px)] bg-white border-r border-r-gray-200 flex flex-col ${className}`}
    >
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <nav>
          <ul className="list-none p-0 m-0">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} onClick={onMenuItemClick} />
            ))}
          </ul>
        </nav>
      </div>
      <UserProfileSection user={user} onLogout={onLogout} />
    </aside>
  );
};

export default Sidebar;

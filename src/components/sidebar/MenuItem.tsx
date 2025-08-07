import { type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import type { MenuItem as MenuItemType } from "../../types/menu-item";

interface MenuItemProps {
  item: MenuItemType;
  onClick?: (item: MenuItemType) => void;
  className?: string;
}

export const MenuItem: FC<MenuItemProps> = ({
  item,
  onClick,
  className = "",
}) => {
  const location = useLocation();
  const isActive = location.pathname === item.href;

  const Icon = item.icon;

  return (
    <li className="mb-3">
      <Link
        to={item.href}
        className={`flex items-center w-full px-4 py-2.5 text-gray-700 rounded transition-colors duration-200 ${
          isActive ? "bg-gray-100" : "hover:bg-gray-50"
        } ${className}`}
        onClick={() => onClick?.(item)}
      >
        {Icon && (
          <span className="mr-3 text-gray-500 text-xl">
            <Icon />
          </span>
        )}
        {item.label}
      </Link>
    </li>
  );
};

export default MenuItem;

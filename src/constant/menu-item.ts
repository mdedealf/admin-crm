import type { MenuItem } from "../types/menu-item";
import {
  LuContact,
  LuLayoutDashboard,
  LuHandshake,
  LuBookUser,
  LuRoute,
} from "react-icons/lu";

const defaultMenuItems: MenuItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LuLayoutDashboard },
  { label: "Contacts", href: "/contacts", icon: LuContact },
  { label: "Deals", href: "/deals", icon: LuHandshake },
  { label: "Pipeline", href: "/pipeline", icon: LuRoute },
  { label: "Accounts", href: "/accounts", icon: LuBookUser },
];

export { defaultMenuItems };

import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InventoryIcon from "@mui/icons-material/Inventory";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import BugReportIcon from "@mui/icons-material/BugReport";

export const sideNavMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <SpaceDashboardIcon fontSize="small" />,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: <AccountBoxIcon fontSize="small" />,
  },
  {
    title: "Listing",
    path: "/dashboard/listing",
    icon: <InventoryIcon fontSize="small" />,
  },
  {
    title: "Events",
    path: "/dashboard/event",
    icon: <EventNoteIcon fontSize="small" />,
  },
  {
    title: "News",
    path: "/dashboard/news",
    icon: <ArticleIcon fontSize="small" />,
  },
  {
    title: "Testing",
    path: "/dashboard/testing",
    icon: <BugReportIcon fontSize="small" />,
  },
];

export const topNavMenu = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "categories",
    label: "Categories",
    path: "/categories/homemade",
  },
  {
    id: "events",
    label: "Events",
    path: "/events/",
  },
  {
    id: "news",
    label: "News",
    path: "/news/",
  },
];

export const userOption = [
  {
    id: 1,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    label: "Logout",
  },
];

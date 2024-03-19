import { SideBarItemProps } from "@/components/SideItem";
import AddIcon from "@mui/icons-material/Add";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AboutIcon from "@mui/icons-material/Info";
import LayersIcon from "@mui/icons-material/Layers";
import ListIcon from "@mui/icons-material/List";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

export const drawerWidth: number = 240;

const divider: SideBarItemProps = {
  title: "",
  link: "",
  icon: null,
  type: "divider",
};

const sidebarBody: SideBarItemProps[] = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <DashboardIcon />,
    type: "link",
  },
  {
    title: "Lowers",
    link: "/dashboard/lowers",
    icon: <LayersIcon />,
    type: "link",
  },
  {
    title: "Users",
    link: "/dashboard/users",
    icon: <PeopleIcon />,
    type: "group",
    children: [
      {
        title: "Add",
        link: "/add",
        icon: <AddIcon />,
        type: "link",
      },
      {
        title: "List",
        link: "/list",
        icon: <ListIcon />,
        type: "link",
      },
    ],
  },
];

const sidebarFooter = [
  {
    title: "Settings",
    link: "/settings",
    icon: <SettingsIcon />,
    type: "link",
  },
  {
    title: "About",
    link: "/about",
    icon: <AboutIcon />,
    type: "link",
  },
];

export const sidebarLinks = [...sidebarBody, divider, ...sidebarFooter];

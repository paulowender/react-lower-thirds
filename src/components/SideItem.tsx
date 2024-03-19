import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse, List } from "@mui/material";
import * as React from "react";

export interface SideBarItemProps {
  title: string | null;
  link: string;
  icon: React.ReactElement | null;
  type: string | null;
  children?: SideBarItemProps[];
}

interface SideBarProps {
  item: SideBarItemProps;
  path: string;
  onClick: (item: SideBarItemProps) => void;
  group?: string;
}

export default function SideBarIem(props: SideBarProps) {
  const { item, path, onClick, group = false } = props;

  const childActive = item.children
    ? item.children.some((child) => child.link == path)
    : false;

  const active = group
    ? path == group + item.link
    : path === item.link && !item.children;
  const expandedInt = group
    ? item.children?.some((child) => child.link == path)
    : active;
  console.log("🚀 - SIDEBAR", {
    childActive,
    item: item.title,
    href: item.link,
    path,
    group,
    active,
    expandedInt,
  });

  const [expanded, setExpanded] = React.useState(expandedInt);

  switch (item.type) {
    case "divider":
      return <Divider key={item.link} sx={{ my: 1 }} />;
    case "group":
      return (
        <List>
          <ListItemButton onClick={() => setExpanded(!expanded)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children?.map((child) => (
                <SideBarIem
                  key={child.link}
                  item={child}
                  path={path}
                  onClick={onClick}
                  group={item.link}
                />
              ))}
            </List>
          </Collapse>
        </List>
      );
    default:
      return (
        <ListItemButton
          onClick={() => onClick(item)}
          selected={active}
          sx={{ ...(group && { pl: 4 }) }}
          href={group ? group + item.link : item.link}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      );
  }
}

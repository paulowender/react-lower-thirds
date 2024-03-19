import { drawerWidth, sidebarLinks } from "@/constants/AppConstants";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Divider, IconButton, List, Toolbar, styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import SideBarIem from "./SideItem";

const DrawerWrapper = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Drawer(props: any) {
  const { open, toggleDrawer, path, setPath } = props;

  const handlePath = (item: any) => {
    setPath(item.link);
  };

  return (
    <DrawerWrapper variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        MENU
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {sidebarLinks.map((item, index) => (
          <SideBarIem
            key={index}
            item={item}
            path={path}
            onClick={handlePath}
          />
        ))}
      </List>
    </DrawerWrapper>
  );
}

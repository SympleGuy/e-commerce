import * as React from "react";
import { styled } from "@mui/material/styles";
import {
    Drawer,
    IconButton,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    List,
    Typography
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import { GlobalData, LinkStyle } from "./shared/GlobalData";
import { SidebarData } from "../data/SidebarData";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = GlobalData.sidebarWidth;

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    // padding: theme.spacing(0, 1),
    justifyContent: "flex-end",
    ...theme.mixins.toolbar
}));

const Sidebar = ({ handleDrawerClose, open, theme }) => {
    const location = useLocation();
    const [selectedPath, setSelectedPath] = React.useState(location.pathname);
    React.useEffect(() => {
        window.onpopstate = (e) => {
            setSelectedPath(location.pathname);
        };
    });
    const selectedHandle = (event, location) => {
        setSelectedPath(location);
        console.log(location);
    };
    return (
        <React.Fragment>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box"
                    }
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        flexGrow={1}
                        ml={"16px"}
                    >
                        Dashboard
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <Link to="/admin" style={LinkStyle}>
                            <ListItemButton
                                onClick={(event) => {
                                    // handleDrawerClose();
                                    selectedHandle(event, "/admin");
                                }}
                                selected={selectedPath === "/admin"}
                                sx={{
                                    "&.Mui-selected": {
                                        "&:hover": {
                                            color: "#fff",
                                            backgroundColor: "#1B2850"
                                        },
                                        background: "#1B2850",
                                        color: "#fff",
                                        ".MuiListItemIcon-root": {
                                            color: "#fff"
                                        }
                                    }
                                }}
                            >
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    {SidebarData.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <Link to={item.path} style={LinkStyle}>
                                <ListItemButton
                                    onClick={(event) => {
                                        // handleDrawerClose();
                                        selectedHandle(event, `${item.path}`);
                                    }}
                                    selected={selectedPath === `${item.path}`}
                                    sx={{
                                        "&.Mui-selected": {
                                            "&:hover": {
                                                color: "#fff",
                                                backgroundColor: "#1B2850"
                                            },
                                            background: "#1B2850",
                                            color: "#fff",
                                            ".MuiListItemIcon-root": {
                                                color: "#fff"
                                            }
                                        }
                                    }}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <DrawerHeader />
        </React.Fragment>
    );
};
export default Sidebar;

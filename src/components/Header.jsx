import { useState } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {
    Toolbar,
    IconButton,
    Typography,
    Avatar,
    Tooltip
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { GlobalData } from "./shared/GlobalData";
import AvatarMenuBox from "./AvatarMenuBox";

const drawerWidth = GlobalData.sidebarWidth;

// AppBar css (shouldForwardProp prevent styling props from being passed down and create invalid attribute)
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const Header = ({ handleDrawerOpen, open }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar
            position="fixed"
            open={open}
            sx={{
                background: "#191A1C"
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    ...(open && { justifyContent: "flex-end" })
                }}
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: "none" }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    flexGrow={1}
                    sx={{ ...(open && { display: "none" }) }}
                >
                    {/* <Link to={"/"}>Dashboard</Link> */}
                    Dashboard
                </Typography>
                <Tooltip title="Account Settings">
                    <IconButton onClick={handleClick}>
                        <Avatar sx={{ bgcolor: "#000" }}></Avatar>
                    </IconButton>
                </Tooltip>
                <AvatarMenuBox
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    openMenu={openMenu}
                />
            </Toolbar>
        </AppBar>
    );
};
export default Header;

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Navigate, Outlet } from "react-router";

export default function AdminPage({ token }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    let auth = { token: token };
    return auth.token ? (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Header handleDrawerOpen={handleDrawerOpen} open={open} />
            <Sidebar
                handleDrawerClose={handleDrawerClose}
                open={open}
                theme={theme}
            />
            <Outlet context={open} />
        </Box>
    ) : (
        <Navigate to="/login" />
    );
}

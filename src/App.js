import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./admin/components/Header";
import Sidebar from "./admin/components/Sidebar";
import { Outlet } from "react-router";
// import Header from "./client/components/Header";

export default function App() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
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
        // <Box>
        //     <Header />
        // </Box>
    );
}

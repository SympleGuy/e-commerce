import * as React from "react";
import { Container } from "@mui/system";
import Header from "./components/Header";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

export default function ClientPage() {
    return (
        <Container disableGutters maxWidth="xl" sx={{ bgcolor: "#F5F5F5" }}>
            <CssBaseline />
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
}

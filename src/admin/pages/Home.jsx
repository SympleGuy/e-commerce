import * as React from "react";
import { styled } from "@mui/material/styles";
import { GlobalData } from "../components/shared/GlobalData";
import { useOutletContext } from "react-router-dom";
import CardDisplay from "../components/CardDisplay";
import TableComp from "../components/shared/TableComp";
import { productCol } from "../data/TableColData";
import { productData } from "../data/MockData";

const drawerWidth = GlobalData.sidebarWidth;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: 0
        })
    })
);

const MainHeader = styled("div")(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

const HomeRoute = ({ open }) => {
    open = useOutletContext();

    return (
        <Main open={open}>
            <MainHeader />
            <CardDisplay />
            <TableComp col={productCol} rowData={productData} />
        </Main>
    );
};
export default HomeRoute;

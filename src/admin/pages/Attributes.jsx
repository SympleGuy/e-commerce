import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { GlobalData } from "../components/shared/GlobalData";
import { useOutletContext } from "react-router-dom";
import TableComp from "../components/shared/TableComp";
import { productCol } from "../data/TableColData";
import { productData } from "../data/MockData";
import { Box } from "@mui/material";
import TableHeader from "../components/shared/TableHeader";
import ButtonComp from "../components/shared/ButtonComp";
import ModalComp from "../components/shared/ModalComp";
import AddAttribute from "../components/form/AddAttribute";
const drawerWidth = GlobalData.sidebarWidth;

const Attributes = styled("attributes", {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
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
}));

const AttributesHeader = styled("div")(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
    // padding: "40px"
}));

const AttributesRoute = ({ open }) => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    open = useOutletContext();
    return (
        <Attributes open={open}>
            <AttributesHeader />
            <Box
                mb="30px"
                display="flex"
                justifyContent="space-between"
                alignItems="end"
            >
                <TableHeader
                    title={"Attributes List"}
                    subtitle={"Add/Update Color Attribute"}
                />
                <ButtonComp onCLickEv={handleOpen} variant="contained" onClick>
                    Add Attribute
                </ButtonComp>
            </Box>
            <ModalComp
                width="30vw"
                closeModal={handleClose}
                openModal={openModal}
            >
                <AddAttribute />
            </ModalComp>
            <TableComp col={productCol} rowData={productData} />
        </Attributes>
    );
};
export default AttributesRoute;

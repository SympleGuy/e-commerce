import * as React from "react";
import { useState, useEffect } from "react";
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
import AddProduct from "../components/form/AddProduct";
import { getFemaleProducts, getMaleProducts } from "../../services/apiService";
const drawerWidth = GlobalData.sidebarWidth;

const Products = styled("products", {
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

const ProductsHeader = styled("div")(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
    // padding: "40px"
}));

const ProductsRoute = ({ open }) => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const [maleProduct, setMaleProduct] = useState([]);
    const [femaleProduct, setFemaleProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, [maleProduct.id]);

    const getProduct = async () => {
        const res = await getMaleProducts();
        const respone = await getFemaleProducts();
        setMaleProduct(res.data.content);
        setFemaleProduct(respone.data.content);

        // console.log(res.data.content);
    };
    const allProduct = [...maleProduct, ...femaleProduct];

    open = useOutletContext();
    return (
        <Products open={open}>
            <ProductsHeader />
            <Box
                mb="30px"
                display="flex"
                justifyContent="space-between"
                alignItems="end"
            >
                <TableHeader
                    title={"Products List"}
                    subtitle={"Add/Update Product"}
                />
                <ButtonComp onCLickEv={handleOpen} variant="contained" onClick>
                    Add Product
                </ButtonComp>
            </Box>
            <ModalComp
                width="80vw"
                closeModal={handleClose}
                openModal={openModal}
            >
                <AddProduct closeModal={handleClose} />
            </ModalComp>
            <TableComp col={productCol} rowData={allProduct} />
        </Products>
    );
};
export default ProductsRoute;

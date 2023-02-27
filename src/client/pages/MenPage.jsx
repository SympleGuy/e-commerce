import ProductList from "../components/product/ProductList";
import { useState, useEffect } from "react";
import { getMaleProducts } from "../../services/apiService";
import { Box } from "@mui/material";
const MenPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchListProducts();
    }, []);

    const fetchListProducts = async () => {
        await getMaleProducts().then((res) => {
            setProducts(res.data.content);
        });
    };

    return (
        <Box height="1500px">
            <ProductList product={products} title={"Men"} />
        </Box>
    );
};
export default MenPage;

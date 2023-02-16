import { Box, Typography } from "@mui/material";
import * as react from "react";
import { getMaleProducts } from "../../../services/apiService";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = react.useState([]);

    react.useEffect(() => {
        fetchListProducts();
    }, []);

    const fetchListProducts = async () => {
        await getMaleProducts().then((res) => {
            setProducts(res.data.content);
        });
    };

    return (
        <Box display="flex" pt={10}>
            <Box pl="10px" minWidth="250px" minHeight="500px">
                <Typography variant="h2" fontWeight={700} fontSize={32}>
                    Men
                </Typography>
            </Box>
            <Box
                flexGrow={1}
                display="flex"
                gap="20px 15px"
                flexWrap="wrap"
                justifyContent="flex-end"
                pr={2}
            >
                {products.map((product) => (
                    <ProductCard key={product.id} item={product} />
                ))}
            </Box>
        </Box>
    );
};
export default ProductList;

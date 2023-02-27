import { Box, Typography, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ product, title }) => {
    // const [products, setProducts] = useState([product]);
    const [id, setId] = useState();
    return (
        <Box display="flex" pt={10}>
            <Box
                pl="10px"
                minWidth="250px"
                minHeight="500px"
                display="flex"
                flexDirection="column"
            >
                <Typography
                    variant="h2"
                    fontWeight={700}
                    fontSize={32}
                    gutterBottom
                >
                    {title}
                </Typography>
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={product.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search input"
                            InputProps={{
                                ...params.InputProps,
                                type: "search"
                            }}
                        />
                    )}
                />
            </Box>
            <Box
                flexGrow={1}
                display="flex"
                gap="50px 15px"
                flexWrap="wrap"
                justifyContent="left"
                pl={10}
            >
                {product.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </Box>
        </Box>
    );
};
export default ProductList;

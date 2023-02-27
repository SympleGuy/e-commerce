import { useParams } from "react-router";
import {
    Card,
    Container,
    Box,
    CssBaseline,
    Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Divider
} from "@mui/material";
import { useState, useEffect } from "react";
import {
    getDetailProduct,
    getDetailProductColor,
    getDetailImage,
    getDetailSize
} from "../../../services/apiService";
import { Stack } from "@mui/system";
import ProductCarousel from "./ProductCarousel";
import ProductSizeList from "./ProductSizeList";

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const [color, setColor] = useState("");
    const { productId } = useParams();
    useEffect(() => {
        fetchDetail();
    }, [productId]);

    const fetchDetail = async () => {
        try {
            const result = await getDetailProduct(productId);
            setProduct(result.data);
        } catch (error) {
            console.log("Failed to fetch product", error);
        }
    };
    const colorMap = [];

    for (var key in product.colorList) {
        if (product.colorList.hasOwnProperty(key)) {
            colorMap.push((product.colorList[key] += ""));
        }
    }

    return (
        <Container maxWidth="xl">
            <CssBaseline />
            <Box display="flex" justifyContent="space-between">
                <ProductCarousel
                    product={product}
                    productId={productId}
                    color={color}
                />
                <Stack spacing={2} p={5} maxWidth={500}>
                    <Typography
                        component="h1"
                        variant="h1"
                        fontSize={48}
                        fontWeight={700}
                    >
                        {product.title}
                    </Typography>
                    <Typography
                        component="h2"
                        variant="h2"
                        fontSize={32}
                        fontWeight={700}
                    >
                        {product.price} VND
                    </Typography>
                    <Typography>{product.description}</Typography>
                    <Divider
                        sx={{ bgcolor: "#000", borderBottomWidth: "2px" }}
                    />

                    <FormControl>
                        <FormLabel>Color: </FormLabel>
                        <RadioGroup
                            row
                            onChange={(e) => setColor(e.target.value)}
                        >
                            {colorMap.map((color) => (
                                <FormControlLabel
                                    key={color}
                                    value={color}
                                    control={<Radio />}
                                    label={color}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>

                    <ProductSizeList productId={productId} color={color} />
                </Stack>
            </Box>
        </Container>
    );
};
export default ProductDetail;

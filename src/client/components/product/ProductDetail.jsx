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
    getDetailProductColor
} from "../../../services/apiService";
import { Stack } from "@mui/system";

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);

    const { productId } = useParams();
    // useEffect( () => {
    //     fetchDetail();

    // }, [productId]);

    // const fetchDetail = async () => {
    //     try {
    //         const result = await getDetailProduct(productId);
    //         const resultColor = await getDetailProductColor(productId);
    //         setProduct(result.data);
    //         setColor(resultColor.data);
    //     } catch (error) {
    //         console.log("Failed to fetch product", error);
    //     }
    // };

    useEffect(() => {
        (async () => {
            try {
                const result = await getDetailProduct(productId);
                const resultColor = await getDetailProductColor(productId);
                setProduct(result.data);
                setColor(resultColor.data);
            } catch (error) {
                console.log("failed", error);
            }
        })();
    }, [productId]);

    return (
        <Container maxWidth="xl">
            <CssBaseline />
            <Box display="flex" justifyContent="space-between">
                <Card>aaaaaa</Card>
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
                        {product.price}
                    </Typography>
                    <Typography>{product.content}</Typography>
                    <Divider
                        sx={{ bgcolor: "#000", borderBottomWidth: "2px" }}
                    />
                    <FormControl>
                        <FormLabel>Color: </FormLabel>

                        <RadioGroup defaultValue={color[0]} row>
                            {color.map((color) => (
                                <FormControlLabel
                                    key={color}
                                    value={color}
                                    control={<Radio />}
                                    label={color}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Size: </FormLabel>
                        <RadioGroup defaultValue row></RadioGroup>
                    </FormControl>
                </Stack>
            </Box>
        </Container>
    );
};
export default ProductDetail;

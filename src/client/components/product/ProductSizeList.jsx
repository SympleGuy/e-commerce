import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    Button,
    FormControlLabel
} from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import SubmitForm from "./SubmitForm";
import { addToCart } from "../Cart/cartSlice";
import { useDispatch } from "react-redux";

import { getDetailSize } from "../../../services/apiService";

const ProductSizeList = ({ productId, color }) => {
    const [productMap, setProductMap] = useState({});
    const [size, setSize] = useState([]);
    const [selectedSize, setSelectedSize] = useState("");
    useEffect(() => {
        fetchSize();
    }, [color]);

    const fetchSize = async () => {
        try {
            const res = await getDetailSize(productId, color);
            setSize(res.data);
        } catch (error) {
            console.log("Failed to fetch product", error);
        }
    };
    const dispatch = useDispatch();

    const handleAddToCartSubmit = ({ quantity }) => {
        const action = addToCart({
            id: size.id,
            productMap,
            title: size.title,
            price: size.price,
            quantity: quantity
        });
        dispatch(action);
    };

    console.log(size);
    return (
        <Stack spacing={2}>
            <FormControl>
                <FormLabel>Size: </FormLabel>
                <RadioGroup onChange={(e) => setSelectedSize(e.target.value)}>
                    {size.map((item) => (
                        <FormControlLabel
                            key={item.size}
                            value={item.size}
                            control={<Radio />}
                            label={`${item.size}- Instock: ${item.stock}`}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
            <SubmitForm onSubmit={handleAddToCartSubmit} />
        </Stack>
    );
};
export default ProductSizeList;

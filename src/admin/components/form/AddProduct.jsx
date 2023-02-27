import {
    TextField,
    Grid,
    Typography,
    Divider,
    Stack,
    Autocomplete,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@mui/material";
import ButtonComp from "../shared/ButtonComp";
import { useState, useEffect } from "react";
import { getProductCategory } from "../../../services/apiService";
import axios from "axios";

const AddProduct = ({ closeModal }) => {
    const [category, setCategory] = useState([]);
    const [productTitle, setProductTitle] = useState("");
    const [productCateId, setProductCateId] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productContent, setProductContent] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productGender, setProductGender] = useState("female");
    const [productImage, setProductImage] = useState("");

    useEffect(() => {
        getCategory();
    }, [category.id]);

    const getCategory = async () => {
        const res = await getProductCategory();
        setCategory(res.data);
    };

    const handleOnSubmit = async (e) => {
        // e.preventDefault();
        const data = new FormData();
        data.append("title", productTitle);
        data.append("cateId", productCateId);
        data.append("description", productDescription);
        data.append("content", productContent);
        data.append("price", productPrice);
        data.append("gender", productGender);
        data.append("thumbnail", productImage);

        let res = await axios.post("/product/create", data, {
            baseURL: "http://localhost:8080/api/admin",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("accessToken")
            }
        });

        console.log(res);
    };

    return (
        <>
            <Typography p={2} variant="h5">
                Add Product
            </Typography>
            <Divider color="#000" />
            <form onSubmit={handleOnSubmit}>
                <Grid p={2} container direction="column" spacing={3}>
                    <Grid container item spacing={3}>
                        <Grid item xs={12} md={6} sm={12}>
                            <TextField
                                fullWidth
                                label="Title"
                                variant="filled"
                                type="text"
                                onChange={(e) =>
                                    setProductTitle(e.target.value)
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sm={12}>
                            <Autocomplete
                                getOptionLabel={(option) => option.label}
                                disablePortal
                                options={category.map((option) => ({
                                    label: option.title,
                                    value: option.id
                                }))}
                                onChange={(e, value) =>
                                    setProductCateId(value.value)
                                }
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                    <TextField {...params} label="Category" />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={3}>
                        <Grid item xs={12} md={6} sm={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                variant="filled"
                                type="text"
                                onChange={(e) =>
                                    setProductDescription(e.target.value)
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sm={12}>
                            <TextField
                                fullWidth
                                label="Price"
                                variant="filled"
                                type="number"
                                onChange={(event) => {
                                    if (event.target.value < 0) {
                                        setProductPrice(
                                            (event.target.value = 0)
                                        );
                                    } else {
                                        setProductPrice(event.target.value);
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={3}>
                        <Grid item xs={12} md={6} sm={12}>
                            <TextField
                                fullWidth
                                label="Content"
                                variant="filled"
                                type="text"
                                onChange={(e) =>
                                    setProductContent(e.target.value)
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sm={12}>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup
                                    row
                                    defaultValue={productGender}
                                    onChange={(e) =>
                                        setProductGender(e.target.value)
                                    }
                                >
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                    />
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid item>
                        Image:
                        <input
                            onChange={(e) => {
                                setProductImage(e.target.files[0]);
                            }}
                            type="file"
                        />
                    </Grid>
                </Grid>
                <Divider color="#000" />
                <Stack
                    p={2}
                    direction="row"
                    spacing={2}
                    justifyContent="flex-end"
                >
                    <ButtonComp
                        onCLickEv={closeModal}
                        color="error"
                        variant="contained"
                    >
                        Cancel
                    </ButtonComp>
                    <ButtonComp type="submit" variant="contained">
                        Save
                    </ButtonComp>
                </Stack>
            </form>
        </>
    );
};
export default AddProduct;

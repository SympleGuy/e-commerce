import { TextField, Grid, Typography, Divider, Stack } from "@mui/material";
import ButtonComp from "../shared/ButtonComp";

const AddProduct = () => {
    return (
        <>
            <Typography p={2} variant="h5">
                Add Product
            </Typography>
            <Divider color="#000" />
            <form>
                <Grid p={2} container direction="column" spacing={3}>
                    <Grid container item spacing={3}>
                        <Grid item xs={12} md={6} sm={12}>
                            <TextField
                                fullWidth
                                label="Product name"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sm={12}>
                            <TextField
                                fullWidth
                                label="Category"
                                variant="filled"
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={3}>
                        <Grid item xs={12} md={6} sm={12}>
                            <TextField
                                fullWidth
                                label="Brand"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sm={12}>
                            <TextField
                                fullWidth
                                label="Price"
                                variant="filled"
                            />
                        </Grid>
                    </Grid>

                    <Grid item>
                        Image: <input type="file" />
                    </Grid>
                </Grid>
                <Divider color="#000" />
                <Stack
                    p={2}
                    direction="row"
                    spacing={2}
                    justifyContent="flex-end"
                >
                    <ButtonComp color="error" variant="contained">
                        Cancel
                    </ButtonComp>
                    <ButtonComp variant="contained">Save</ButtonComp>
                </Stack>
            </form>
        </>
    );
};
export default AddProduct;

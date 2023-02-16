import { TextField, Grid, Typography, Divider, Stack } from "@mui/material";
import ButtonComp from "../shared/ButtonComp";
import { useState } from "react";

const AddAttribute = ({ closeModal }) => {
    const [color, setColor] = useState([]);
    const [stock, setStock] = useState([]);

    return (
        <>
            <Typography p={2} variant="h5">
                Add Color Attribute
            </Typography>
            <Divider color="#000" />
            <form>
                <Grid p={2} container direction="column" item spacing={3}>
                    <Grid item xs={12} md={4} sm={12}>
                        <TextField
                            fullWidth
                            label="Color Name"
                            variant="filled"
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                        <TextField
                            fullWidth
                            label="Stock"
                            variant="filled"
                            type="number"
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
                    <ButtonComp variant="contained">Save</ButtonComp>
                </Stack>
            </form>
        </>
    );
};
export default AddAttribute;

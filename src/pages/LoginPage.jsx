import * as React from "react";
import { CssBaseline, Box, TextField, Typography, Button } from "@mui/material";

const LoginPage = () => {
    return (
        <>
            <CssBaseline />
            <form>
                <Box
                    maxWidth={400}
                    borderRadius={5}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="5px 5px 10px #ccc"
                    m="auto"
                    mt={5}
                    p={3}
                    sx={{
                        ":hover": { boxShadow: "10px 10px 20px #ccc" }
                    }}
                >
                    <Typography variant="h3" p={3} textAlign="center">
                        Login
                    </Typography>
                    <Box display="flex" flexDirection="column" mb={3}>
                        <TextField
                            variant="outlined"
                            type="text"
                            placeholder="Name"
                            margin="normal"
                        />
                        <TextField
                            variant="outlined"
                            type="password"
                            placeholder="Password"
                            margin="normal"
                        />
                    </Box>
                    <Button
                        color="error"
                        variant="contained"
                        // sx={{ mt: "10", borderRadius: "10" }}
                    >
                        Login
                    </Button>
                </Box>
            </form>
        </>
    );
};
export default LoginPage;

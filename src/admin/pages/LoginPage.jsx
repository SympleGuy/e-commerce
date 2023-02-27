import * as React from "react";
import { CssBaseline, Box, TextField, Typography, Button } from "@mui/material";
import { authen } from "../../services/apiService";
import axios from "axios";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();
    const data = {
        username: userName,
        password: password
    };

    const url = "http://localhost:8080/api/site/login";

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post(url, data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(res.data);

        if (res.status === 200) {
            navigate("/admin");
            localStorage.setItem(
                "accessToken",
                res.data.tokenType + " " + res.data.accessToken
            );
        }
    };

    const handleOnChangeUserName = (event) => {
        setUserName(event.target.value);
    };

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <CssBaseline />
            <form onSubmit={handleOnSubmit}>
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
                            value={userName}
                            onChange={handleOnChangeUserName}
                        />
                        <TextField
                            variant="outlined"
                            type="password"
                            placeholder="Password"
                            margin="normal"
                            value={password}
                            onChange={handleOnChangePassword}
                        />
                    </Box>
                    <Button color="error" variant="contained" type="submit">
                        Login
                    </Button>
                </Box>
            </form>
        </>
    );
};
export default LoginPage;

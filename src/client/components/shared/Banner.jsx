import { Box } from "@mui/material";

const Banner = ({ children }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            gap="20px 0"
        >
            {children}
        </Box>
    );
};
export default Banner;

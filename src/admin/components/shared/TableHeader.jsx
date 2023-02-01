import { Typography, Box } from "@mui/material";
const TableHeader = ({ title, subtitle }) => {
    return (
        <Box>
            <Typography
                variant="h2"
                color="#222222"
                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color="#7286D3">
                {subtitle}
            </Typography>
        </Box>
    );
};
export default TableHeader;

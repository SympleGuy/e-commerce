import { Box, Stack, Typography } from "@mui/material";

const ProductHeader = () => {
    return (
        <Box display="flex" justifyContent="space-between">
            <Stack>
                <Typography>Results</Typography>
                <Typography>... Items</Typography>
            </Stack>
        </Box>
    );
};
export default ProductHeader;

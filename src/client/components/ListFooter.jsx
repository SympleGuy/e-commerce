import { Box, Stack, Typography } from "@mui/material";
import ListFooterItem from "./ListFooterItem";

export default function ListFooter({ children, header, href }) {
    return (
        <Box p="8px 30px">
            <Typography
                textTransform="capitalize"
                variant="h5"
                fontWeight={700}
                fontSize={20}
                mb="20px"
            >
                {header}
            </Typography>
            <Stack direction="column" spacing={1}>
                {children}
            </Stack>
        </Box>
    );
}

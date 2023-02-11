import { Typography, Stack } from "@mui/material";
import ShareButton from "./shared/ShareButton";

export default function BoxInner() {
    return (
        <Stack
            spacing={2}
            p="0 30px"
            maxWidth={550}
            position="absolute"
            top="30%"
            alignItems="flex-start" // fix full-width button
        >
            <Typography fontSize={23} fontWeight={700} color="#616161">
                Everyday collection 2023
            </Typography>
            <Typography fontSize={47} fontWeight={600} color="#212121">
                Be yourself
            </Typography>
            <Typography fontSize={20} fontWeight={600} color="#424242">
                The ideal selection for your everyday use ina Super Saver range
                within a reasonable price range is here for you to keep you stay
                steady % trendy.
            </Typography>
            <ShareButton>Explore</ShareButton>
        </Stack>
    );
}

import { Box, Card, CardMedia, Typography } from "@mui/material";

export default function CardItem({ item }) {
    return (
        <Box m="0 10px" height={400}>
            <Card>
                <CardMedia
                    sx={{
                        width: "100%",
                        height: 350
                    }}
                    image={item.image}
                />
            </Card>
            <Typography p="8px 10px">{item.title}</Typography>
        </Box>
    );
}

import { Box, Typography, Card, CardMedia, Paper } from "@mui/material";

export default function CardInner({ item }) {
    const PaperStyles = {
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        gap: "10px 0",
        bottom: 20,
        background: "transparent",
        paddingLeft: "10px"
    };
    return (
        <Box m="0 10px">
            <Card sx={{ position: "relative", bgcolor: "#000" }}>
                <CardMedia
                    sx={{
                        width: "100%",
                        height: 500,
                        opacity: 0.8
                    }}
                    image={item.image}
                />
            </Card>
            <Paper elevation={0} sx={PaperStyles}>
                <Typography color="#fff" fontWeight={700} fontSize={25}>
                    {item.title}
                </Typography>
                <Typography color="#ccc" fontSize={16}>
                    {item.detail}
                </Typography>
                <Typography color="#FFA15C" fontSize={14} fontWeight="bold">
                    {item.price}
                </Typography>
            </Paper>
        </Box>
    );
}

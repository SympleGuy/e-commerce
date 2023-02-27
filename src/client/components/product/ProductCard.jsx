import { Card, CardMedia, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/products/${item.id}`);
    };
    return (
        <Box
            width="100%"
            minheight={300}
            maxWidth={200}
            onClick={handleClick}
            // bgcolor="#ccc"
        >
            <Card>
                <CardMedia
                    sx={{
                        width: "100%",
                        height: 200
                    }}
                    image={item.thumbnailLink}
                />
            </Card>
            <Box p="8px 0">
                <Stack spacing={1} direction="row" p="5px 0">
                    {item.colorList.map((color) => (
                        // <Typography
                        //     minWidth={10}
                        //     lineHeight="15px"
                        //     color={`${item}`}
                        //     gutterBottom
                        //     fontSize={13}
                        // >
                        //     {item}
                        // </Typography>
                        <Box
                            border="1px solid #000"
                            height="15px"
                            width="15px"
                            bgcolor={`${color}`}
                        ></Box>
                    ))}
                </Stack>
                <Typography minHeight={80} fontWeight={400} fontSize={15}>
                    {item.title}
                </Typography>
                <Typography fontWeight={700} fontSize={18}>
                    {item.price} VND
                </Typography>
            </Box>
        </Box>
    );
};
export default ProductCard;

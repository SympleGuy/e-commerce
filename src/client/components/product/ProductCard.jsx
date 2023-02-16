import { Card, CardMedia, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/men/products/${item.id}`);
    };
    return (
        <Box width="100%" height={300} maxWidth={200} onClick={handleClick}>
            <Card>
                <CardMedia
                    sx={{
                        width: "100%",
                        height: 200
                    }}
                    image={item.thumbnailLink}
                />
            </Card>
            <Typography p="8px 10px">{item.title}</Typography>
        </Box>
    );
};
export default ProductCard;

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Card, CardMedia } from "@mui/material";
import { getDetailImage } from "../../../services/apiService";
import { useState, useEffect } from "react";

const ProductCarousel = ({ product, productId, color }) => {
    const [image, setImage] = useState([]);

    useEffect(() => {
        fetchImage();
    }, [color]);

    const fetchImage = async () => {
        try {
            const res = await getDetailImage(productId, color);
            setImage(res.data);
        } catch (error) {
            console.log("Failed to fetch product", error);
        }
    };
    console.log(product.thumbnailLink, color);
    return (
        <Box maxWidth="500px">
            {color === "" ? (
                <Box>
                    <img
                        src={`${product.thumbnailLink}`}
                        alt=""
                        style={{ width: "100%" }}
                    />
                </Box>
            ) : (
                <Carousel>
                    {image.map((item) => (
                        <div key={item}>
                            <img src={item} alt={item} />
                        </div>
                    ))}
                </Carousel>
            )}
        </Box>
    );
};
export default ProductCarousel;

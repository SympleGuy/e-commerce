import { Card, CardMedia, Grid, Button, Typography, Box } from "@mui/material";
import { collectionData } from "../data/BannerImageData";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BoxInner from "./BoxInner";
export default function BannerCollecion() {
    const ButtonStyles = {
        //button alignment
        position: "absolute",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        color: "#fff"
    };
    return (
        <Grid container spacing={1}>
            <Grid item container>
                <Grid
                    item
                    md={6}
                    sm={12}
                    height="550px"
                    bgcolor="#eeeeee"
                    position={"relative"}
                >
                    <BoxInner />
                </Grid>
                <Grid item md={6} sm={12} height="550px">
                    <Card sx={{ position: "relative", bgcolor: "#000" }}>
                        <CardMedia
                            sx={{
                                width: "100%",
                                height: 550,
                                opacity: 0.6
                            }}
                            image="https://themewagon.github.io/majestic-2/v1.0.0/assets/img/gallery/outfit.png"
                        />
                        <Button
                            variant="text"
                            sx={ButtonStyles}
                            endIcon={<ArrowForwardIcon />}
                        >
                            <Typography
                                textTransform="capitalize"
                                fontWeight={700}
                                fontSize={19}
                            >
                                Outfit
                            </Typography>
                        </Button>
                    </Card>
                </Grid>
            </Grid>
            {collectionData.map((item) => (
                <Grid item md={4} sm={12}>
                    <Card sx={{ position: "relative", bgcolor: "#000" }}>
                        <CardMedia
                            sx={{
                                width: "100%",
                                height: 400,
                                opacity: 0.6
                            }}
                            image={item.image}
                        />
                        <Button
                            variant="text"
                            sx={ButtonStyles}
                            endIcon={<ArrowForwardIcon />}
                        >
                            <Typography
                                textTransform="capitalize"
                                fontWeight={700}
                                fontSize={19}
                            >
                                {item.title}
                            </Typography>
                        </Button>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

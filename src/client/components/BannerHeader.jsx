import { Typography, Box, Card, Grid, CardMedia, Button } from "@mui/material";
const ButtonStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    p: "8px 48px",
    color: "#616161",
    fontWeight: 700,
    bgcolor: "#f9fafd",

    "&.MuiButtonBase-root:hover": {
        bgcolor: "#f9fafd"
    }
};
const BannerHeader = () => {
    return (
        <Box>
            <Box mb={10}>
                <Typography
                    variant="h1"
                    fontSize={40}
                    component="h1"
                    align="center"
                    fontWeight={400}
                    gutterBottom
                >
                    Just dropped & never seen before
                </Typography>
                <Typography
                    variant="h1"
                    fontSize={69}
                    component="h2"
                    align="center"
                    fontWeight={700}
                    letterSpacing={2}
                >
                    Designed specially for you
                </Typography>
            </Box>
            <Grid container direction="row">
                <Grid item md={6} sm={12}>
                    <Card sx={{ position: "relative" }}>
                        <CardMedia
                            sx={{
                                width: "100%",
                                height: 600
                            }}
                            image="https://themewagon.github.io/majestic-2/v1.0.0/assets/img/gallery/her.png"
                        />
                        <Button variant="contained" sx={ButtonStyles}>
                            For Her
                        </Button>
                    </Card>
                </Grid>
                <Grid item md={6} sm={12}>
                    <Card sx={{ position: "relative" }}>
                        <CardMedia
                            sx={{
                                width: "100%",
                                height: 600
                            }}
                            image="https://themewagon.github.io/majestic-2/v1.0.0/assets/img/gallery/him.png"
                        />
                        <Button variant="contained" sx={ButtonStyles}>
                            For Him
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};
export default BannerHeader;

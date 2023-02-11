import * as React from "react";
import { Container } from "@mui/system";
import Header from "./components/Header";
import { CssBaseline } from "@mui/material";
import BannerHeader from "./components/BannerHeader";
import ShareButton from "./components/shared/ShareButton";
import Banner from "./components/shared/Banner";
import BannerTitle from "./components/shared/BannerTitle";
import BannerCollecion from "./components/BannerCollection";
import CardItem from "./components/shared/CardItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bestSellers, flashSales, newArrivals } from "./data/BannerImageData";
import CardInner from "./components/shared/CardInner";
import TabCategory from "./components/TabCategory";
import Footer from "./components/Footer";

export default function Page() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const flashSalesProduct = flashSales.map((item) => (
        <CardItem item={item} />
    ));
    const newArrivalsProduct = newArrivals.map((item) => (
        <CardInner item={item} />
    ));
    const bestSellersProduct = bestSellers.map((item) => (
        <CardItem item={item} />
    ));
    return (
        <Container disableGutters maxWidth="xl" sx={{ bgcolor: "#F5F5F5" }}>
            <CssBaseline />
            <Header />
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "100px 0",
                    mt: 20
                }}
            >
                <BannerHeader />
                <Banner>
                    <BannerTitle>Flash Sales</BannerTitle>
                    <Carousel
                        swipeable={false}
                        infinite
                        responsive={responsive}
                    >
                        {flashSalesProduct}
                    </Carousel>
                    <ShareButton>View All</ShareButton>
                </Banner>
                <BannerCollecion />
                <Banner>
                    <BannerTitle>Explore New Arrivals</BannerTitle>
                    <Carousel
                        swipeable={false}
                        infinite
                        responsive={responsive}
                    >
                        {newArrivalsProduct}
                    </Carousel>
                </Banner>
                <Banner>
                    <BannerTitle>Shop By Category</BannerTitle>
                    <TabCategory />
                    <ShareButton>View All</ShareButton>
                </Banner>
                <Banner>
                    <BannerTitle>Best Sellers</BannerTitle>
                    <Carousel
                        swipeable={false}
                        infinite
                        responsive={responsive}
                    >
                        {bestSellersProduct}
                    </Carousel>
                </Banner>
                <Footer />
            </Container>
        </Container>
    );
}

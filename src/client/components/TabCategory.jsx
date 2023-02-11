import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabButton from "./shared/TabButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardItem from "./shared/CardItem";

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

const dataButton = [
    {
        id: 1,
        title: "T-shirt"
    },
    {
        id: 2,
        title: "Shirt"
    },
    {
        id: 3,
        title: "Shoes"
    },
    {
        id: 4,
        title: "Watch"
    },
    {
        id: 5,
        title: "Sunglasses"
    },
    {
        id: 6,
        title: "Bagpacks"
    }
];

const mockProductData = [
    {
        id: 1,
        category: "T-shirt",
        image: "https://themewagon.github.io/majestic-2/v1.0.0/assets/img/gallery/red-tshirt.png",
        title: "test",
        gender: "Male"
    },
    {
        id: 2,
        category: "T-shirt",
        image: "https://themewagon.github.io/majestic-2/v1.0.0/assets/img/gallery/red-tshirt.png",
        title: "test",
        gender: "Female"
    },
    {
        id: 3,
        category: "T-shirt",
        image: "https://themewagon.github.io/majestic-2/v1.0.0/assets/img/gallery/red-tshirt.png",
        title: "test",
        gender: "Male"
    },
    {
        id: 4,
        category: "T-shirt",
        image: "https://themewagon.github.io/majestic-2/v1.0.0/assets/img/gallery/red-tshirt.png",
        title: "test",
        gender: "Male"
    },
    {
        id: 5,
        category: "Shirt",
        image: "https://themewagon.github.io/majestic-2/v1.0.0/assets/img/gallery/shirt-1.png"
    },
    {
        id: 6,
        category: "Shirt",
        image: "https://themewagon.github.io/majestic-2/v1.0.0/assets/img/gallery/shirt-1.png"
    },
    {
        id: 7,
        category: "Shirt",
        image: "https://themewagon.github.io/majestic-2/v1.0.0/assets/img/gallery/shirt-1.png"
    },
    {
        id: 8,
        category: "Shirt",
        image: "https://themewagon.github.io/majestic-2/v1.0.0/assets/img/gallery/shirt-1.png"
    },
    {
        id: 9,
        category: "Shoes",
        image: "https://themewagon.github.io/majestic-2/v1.0.0/assets/img/gallery/shoe-1.png"
    }
];

function ButtonPanel({ gender }) {
    const [button, setButton] = React.useState("T-shirt");
    // const [gender, setGender] = React.useState("Male");
    const handleButton = (button) => {
        setButton(button);
    };
    const productList = mockProductData
        .filter((item) => item.category === `${button}`)
        .map((filterItem) => <CardItem item={filterItem}></CardItem>);

    return (
        <>
            <Box textAlign="center" mb="10px">
                {dataButton.map((item) => (
                    <TabButton
                        handleClick={(event) => {
                            handleButton(`${item.title}`);
                        }}
                        key={item.id}
                    >
                        {item.title}
                    </TabButton>
                ))}
            </Box>
            <Box>
                <Carousel swipeable={false} infinite responsive={responsive}>
                    {productList}
                </Carousel>
            </Box>
        </>
    );
}

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div role="tabpanel" hidden={value !== index}>
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`
    };
}

export default function TabCategory() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="For Women" {...a11yProps(0)} />
                    <Tab label="For Men" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ButtonPanel gender={0} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ButtonPanel gender={1} />
            </TabPanel>
        </Box>
    );
}

import {
    Box,
    Stack,
    TextField,
    Typography,
    InputAdornment
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import * as React from "react";
import ListFooter from "./ListFooter";
import { footerLink } from "../data/FooterData";
import ListFooterItem from "./ListFooterItem";

const companyInfo = footerLink
    .filter((item) => item.category === "Company Info")
    .map((filterItem) => <ListFooterItem>{filterItem.title}</ListFooterItem>);

const helpSupport = footerLink
    .filter((item) => item.category === "Help & Support")
    .map((filterItem) => <ListFooterItem>{filterItem.title}</ListFooterItem>);

const customerCare = footerLink
    .filter((item) => item.category === "Customer Care")
    .map((filterItem) => <ListFooterItem>{filterItem.title}</ListFooterItem>);

const Footer = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            bgcolor="#fff"
            p="15px 0"
        >
            <Box display="flex">
                <ListFooter header="Company Info">{companyInfo}</ListFooter>
                <ListFooter header="Help & Support">{helpSupport}</ListFooter>
                <ListFooter header="Customer Care">{customerCare}</ListFooter>
            </Box>
            <Stack pr={2} direction="column" paddingTop="8px" spacing={6}>
                <Box>
                    <Typography
                        variant="h5"
                        fontWeight={700}
                        fontSize={20}
                        gutterBottom
                    >
                        Signup For The Latest News
                    </Typography>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Enter Email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <ArrowForwardIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>
                <Box>
                    <Stack direction="row" spacing={2}>
                        <LocalPhoneIcon />
                        <Typography>+8401231238</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <EmailIcon />
                        <Typography>abc@gmail.com</Typography>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};
export default Footer;

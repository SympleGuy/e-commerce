import { Typography } from "@mui/material";

export default function ListFooterItem({ children, href }) {
    return (
        <Typography
            textTransform="capitalize"
            color="#616161"
            component="a"
            href="href"
            sx={{ textDecoration: "none" }}
        >
            {children}
        </Typography>
    );
}

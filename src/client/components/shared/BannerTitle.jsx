import { Typography } from "@mui/material";

export default function BannerTitle({ children }) {
    return (
        <Typography
            variant="h5"
            fontWeight={700}
            fontSize={40}
            align="center"
            gutterBottom
        >
            {children}
        </Typography>
    );
}

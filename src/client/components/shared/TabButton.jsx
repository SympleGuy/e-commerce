import { Button, Typography } from "@mui/material";

export default function TabButton({ children, handleClick }) {
    return (
        <Button
            variant="text"
            sx={{
                // bgcolor: "#e0e0e0",
                p: "8px 16px",
                borderRadius: "4px",
                color: "#000"
            }}
            onClick={handleClick}
        >
            <Typography textTransform="capitalize">{children}</Typography>
        </Button>
    );
}

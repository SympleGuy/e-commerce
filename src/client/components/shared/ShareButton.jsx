import { Button } from "@mui/material";

export default function ShareButton({ children }) {
    return (
        <Button
            variant="outlined"
            sx={{
                bgcolor: "#000",
                color: "#fff",
                p: "8px 48px",
                margin: "0 auto",
                textAlign: "center",

                "&.MuiButtonBase-root:hover": {
                    bgcolor: "#000"
                }
            }}
        >
            {children}
        </Button>
    );
}

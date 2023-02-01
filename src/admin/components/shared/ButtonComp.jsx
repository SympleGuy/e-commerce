import { Button } from "@mui/material";

export default function ButtonComp({ children, variant, onCLickEv, color }) {
    return (
        <Button color={color} onClick={onCLickEv} variant={variant}>
            {children}
        </Button>
    );
}

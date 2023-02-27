import { Button } from "@mui/material";

export default function ButtonComp({
    children,
    variant,
    onCLickEv,
    color,
    type
}) {
    return (
        <Button type={type} color={color} onClick={onCLickEv} variant={variant}>
            {children}
        </Button>
    );
}

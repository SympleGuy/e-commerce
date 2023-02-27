import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

SubmitForm.propTypes = {
    onSubmit: PropTypes.func
};

function SubmitForm({ onSubmit = null }) {
    const form = useForm({
        defaultValues: {
            quantity: 1
        }
    });
    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Add To Cart
            </Button>
        </form>
    );
}
export default SubmitForm;

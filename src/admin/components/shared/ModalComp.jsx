import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    borderRadius: 3,
    boxShadow: 24
    // p: 4
};

const ModalComp = ({ children, closeModal, openModal }) => {
    return (
        <div>
            <Modal
                open={openModal}
                onClose={closeModal}
                closeAfterTransition
                keepMounted
            >
                <Fade in={openModal}>
                    <Box sx={style}>{children}</Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default ModalComp;

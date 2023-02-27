import { Box, Stack, Typography, ButtonGroup, Button } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ColorLensIcon from "@mui/icons-material/ColorLens";

export const productCol = [
    { field: "id", headerName: "ID" },
    {
        field: "title",
        headerName: "Title",
        flex: 1
    },
    { field: "price", headerName: "Price" },
    { field: "gender", headerName: "Gender" },
    {
        field: "thumbnailLink",
        headerName: "Thumbnail",
        renderCell: ({ row: { thumbnailLink } }) => {
            return (
                <img
                    src={thumbnailLink}
                    alt={thumbnailLink}
                    style={{
                        width: "50px",
                        height: "50px"
                        // padding: "8px 10px"
                    }}
                />
            );
        }
    },
    {
        headerName: "Action",
        flex: 1,
        renderCell: ({ row: { action } }) => {
            return (
                <Stack spacing="1px" direction="row">
                    <Button>
                        <UpgradeIcon />
                    </Button>
                    <Button>
                        <DeleteIcon />
                    </Button>
                    <Button>
                        <InfoIcon />
                    </Button>
                    <Button>
                        <ColorLensIcon />
                    </Button>
                </Stack>
            );
        }
    }
];
export const customerCol = [
    { field: "id", headerName: "ID" },
    {
        field: "name",
        headerName: "Name",
        flex: 1
    },
    {
        field: "address",
        headerName: "Address",
        flex: 1
    },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
        field: "access",
        headerName: "Access",
        flex: 1,
        renderCell: ({ row: { access } }) => {
            return (
                <Box
                    width="10vw"
                    m="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    bgcolor={access === "admin" ? "#86C8BC" : "#CEEDC7"}
                    borderRadius="4px"
                >
                    {access === "admin" && <AdminPanelSettingsIcon />}
                    {access === "manager" && <SecurityIcon />}
                    {access === "user" && <LockIcon />}
                    <Typography color="#222222" sx={{ ml: "5px" }}>
                        {access}
                    </Typography>
                </Box>
            );
        }
    }
];

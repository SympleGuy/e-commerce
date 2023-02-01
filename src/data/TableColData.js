import { Box, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
export const productCol = [
    { field: "id", headerName: "ID" },
    {
        field: "name",
        headerName: "Name",
        flex: 1
    },
    {
        field: "category",
        headerName: "Category",
        flex: 1
    },
    { field: "brand", headerName: "Brand", flex: 1 },
    { field: "price", headerName: "Price", flex: 1 }
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

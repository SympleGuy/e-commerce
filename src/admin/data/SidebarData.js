import CheckroomIcon from "@mui/icons-material/Checkroom";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SellIcon from "@mui/icons-material/Sell";
export const SidebarData = [
    {
        title: "Products",
        path: "/products",
        icon: <CheckroomIcon />
    },
    {
        title: "Customers",
        path: "/customers",
        icon: <PeopleAltIcon />
    },
    {
        title: "Users",
        path: "/users",
        icon: <PersonIcon />
    },
    {
        title: "Attributes",
        path: "/attributes",
        icon: <ColorLensIcon />
    },
    {
        title: "Photos",
        path: "/photos",
        icon: <InsertPhotoIcon />
    },
    {
        title: "Orders",
        path: "/orders",
        icon: <SellIcon />
    }
];

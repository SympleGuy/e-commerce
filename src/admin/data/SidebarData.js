import CheckroomIcon from "@mui/icons-material/Checkroom";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const SidebarData = [
    {
        title: "Products",
        path: "/products",
        icon: <CheckroomIcon />,
        selected: 1
    },
    {
        title: "Customers",
        path: "/customers",
        icon: <PeopleAltIcon />,
        selected: 2
    },
    {
        title: "Users",
        path: "/users",
        icon: <PersonIcon />,
        selected: 3
    },
    {
        title: "Purchases",
        path: "/purchases",
        icon: <ShoppingCartIcon />,
        selected: 4
    }
];

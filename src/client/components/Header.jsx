import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { cartItemsCountSelector } from "./Cart/selector";
const pages = [
    {
        id: uuidv4(),
        title: "Women",
        link: "/women"
    },
    {
        id: uuidv4(),
        title: "Men",
        link: "/men"
    }
];

function Header() {
    const navigate = useNavigate();
    const handleCartClick = () => {
        navigate("/cart");
    };
    const cartItemsCount = useSelector(cartItemsCountSelector);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    return (
        <AppBar position="sticky" sx={{ bgcolor: "#4C7383" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <StoreMallDirectoryIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        }}
                    >
                        Kiwi
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" }
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorElNav)}
                            sx={{
                                display: { xs: "block", md: "none" }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.id}>
                                    <NavLink to={page.link}>
                                        <Typography textAlign="center">
                                            {page.title}
                                        </Typography>
                                    </NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <IconButton>
                        <StoreMallDirectoryIcon
                            sx={{
                                display: { xs: "flex", md: "none" },
                                mr: 1
                            }}
                        />
                    </IconButton>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        }}
                    >
                        Kiwi
                    </Typography>
                    {/* Menu Nav */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" }
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.id}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                <NavLink
                                    to={page.link}
                                    style={{
                                        color: "inherit",
                                        textDecoration: "none"
                                    }}
                                >
                                    <Typography textAlign="center">
                                        {page.title}
                                    </Typography>
                                </NavLink>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }} gap="0 30px" display="flex">
                        <Tooltip title="Cart" components="a" href="/cart">
                            <IconButton
                                sx={{ p: 0, color: "#fff" }}
                                onClick={handleCartClick}
                            >
                                <Badge
                                    badgeContent={cartItemsCount}
                                    color="error"
                                >
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;

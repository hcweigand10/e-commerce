import React, { useState, useContext } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import userContext from "../contexts/userContext";
import GoogleAuth from "./GoogleAuth";
import { Link, NavLink } from "react-router-dom";
import helpers from "../utils/helpers";

const pages = ["Home", "Get Started"];
const settings = ["Account"];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [activePage, setActivePage] = useState<string>(
        window.location.pathname || "Home"
    );

    const { userInfo, cart } = useContext(userContext);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    console.log(
        window.location.pathname.substring(1),
        helpers.toSnakeCase("Get Started")
    );
    console.log(
        window.location.pathname.substring(1) ===
            helpers.toSnakeCase("Get Started")
    );

    return (
        <AppBar position="static" id="sticky-nav">
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ width: "100%" }}>
                    <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        className="logo"
                        variant="h6"
                        component="a"
                        href="/"
                        noWrap
                        sx={{
                            mr: 2,
                            borderTop: "2px solid white",
                            borderBottom: "2px solid white",
                            height: "100%",
                            paddingTop: "16px",
                            paddingBottom: "16px",
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
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
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <Link
                                    to={
                                        page === "Home"
                                            ? "/"
                                            : helpers.toSnakeCase(page)
                                    }
                                >
                                    {page}
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        className="logo"
                        variant="h5"
                        component="a"
                        href="/"
                        noWrap
                        sx={{
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        id="nav-container"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Box className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link-active" : "nav-link"
                                }
                                end
                            >
                                Home
                            </NavLink>
                        </Box>
                        <Box className="nav-item">
                            <NavLink
                                to="get-started"
                                className={({ isActive }) =>
                                    isActive ? "nav-link-active" : "nav-link"
                                }
                            >
                                Get Started
                            </NavLink>
                        </Box>
                    </Box>
                    {userInfo.name ? (
                        <Box
                            id="profile-box"
                            sx={{
                                flexGrow: 0,
                                display: "inline-flex",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    mx: 1,
                                    fontStyle: "italic",
                                    fontSize: "13px",
                                    textAlign: "right",
                                    color: "gray"
                                }}
                            >
                                Hi there, {userInfo.name.split(" ")[0]}!
                            </Typography>
                            <Tooltip title="Open settings">
                                <Button
                                    id="profile-btn"
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt={userInfo.name}
                                        src={
                                            userInfo.pic ||
                                            "https://www.hardiagedcare.com.au/wp-content/uploads/2019/02/default-avatar-profile-icon-vector-18942381.jpg"
                                        }
                                    />
                                    <ArrowDropDownIcon />
                                </Button>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        onClick={handleCloseUserMenu}
                                    >
                                        <Typography textAlign="center">
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    ) : (
                        <GoogleAuth />
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;

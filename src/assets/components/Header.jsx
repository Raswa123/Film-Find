import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";

function Header() {
    const projectIntro =
        "FilmFind is a movie discovery platform built for movie lovers who enjoy exploring new films and revisiting old favorites. Search for movies, discover detailed information, check IMDb ratings, explore cast and genres, and find your next movie to watch—all in one simple and user-friendly platform.";

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{
                    background: "rgba(9, 6, 7, 0.95)",
                    backdropFilter: "blur(12px)",
                    borderBottom: "1px solid #321316",
                    boxShadow: "0 4px 25px rgba(0, 0, 0, 0.5)",
                }}
            >
                <Toolbar
                    sx={{
                        minHeight: "72px !important",
                        px: {
                            xs: 2,
                            sm: 4,
                        },
                    }}
                >
                    {/* Logo */}
                    <IconButton
                        component={Link}
                        to="/"
                        sx={{
                            mr: 1.5,
                            color: "#c46b70",
                            fontSize: "32px",
                            "&:hover": {
                                color: "#e0a0a3",
                                backgroundColor: "rgba(92, 16, 20, 0.2)",
                            },
                        }}
                    >
                        <BiSolidCameraMovie />
                    </IconButton>

                    {/* Brand */}
                    <Typography
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            textDecoration: "none",
                            fontSize: {
                                xs: "1.4rem",
                                sm: "1.7rem",
                            },
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                            color: "#f5eeee",
                        }}
                    >
                        Film
                        <span style={{ color: "#8f252c" }}>Find</span>
                    </Typography>
                    {/* Home */}
                    <Button sx={{
                        color: "#cbbabc",
                        fontSize: "0.8rem",
                        letterSpacing: "1.5px",
                        fontWeight: 600,

                        "&:hover": {
                            color: "#d98a8f",
                            backgroundColor: "rgba(92, 16, 20, 0.15)",
                        },
                    }} component={Link} to="/">
                        Home
                    </Button>




                    {/* About */}
                    <Tooltip title={projectIntro} arrow>
                        <Button
                            sx={{
                                color: "#cbbabc",
                                fontSize: "0.8rem",
                                letterSpacing: "1.5px",
                                fontWeight: 600,

                                "&:hover": {
                                    color: "#d98a8f",
                                    backgroundColor: "rgba(92, 16, 20, 0.15)",
                                },
                            }}
                        >
                            ABOUT US
                        </Button>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
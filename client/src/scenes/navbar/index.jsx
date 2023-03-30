import React from 'react';
import { useState } from 'react';
import { Typography,useTheme, useMediaQuery,IconButton,InputBase, FormControl, Select, MenuItem,} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Search,DarkMode, LightMode,Message, Notifications, Help, Menu} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode, setLogout } from "state";

import FlexBetween from 'components/FlexBetween';

const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const primaryLight = theme.palette.primary.light;

    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const neutralLight = theme.palette.neutral.light;

    const dispatch = useDispatch();
    const dark = theme.palette.neutral.dark;
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

    return (
        <FlexBetween>
            {/* Navbar left side */}
            <FlexBetween>
                <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="primary"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                        },
                    }}
                    >
                    Socialgram
                </Typography>

                {isNonMobileScreens && (
                <FlexBetween
                    backgroundColor={neutralLight}
                    borderRadius="9px"
                    gap="3rem"
                    padding="0.1rem 1.5rem"
                >
                    <InputBase placeholder="Search..." />
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
                )}
            </FlexBetween>

            {/* Navbar right side */}
            {/* desktop navbar  */}
            {isNonMobileScreens ? (
                <FlexBetween gap="2rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? (
                            <DarkMode sx={{ fontSize: "25px" }} />
                        ) : (
                            <LightMode sx={{ color: dark, fontSize: "25px" }} />
                        )}
                    </IconButton>
                    <Message sx={{ fontSize: "25px" }} />
                    <Notifications sx={{ fontSize: "25px" }} />
                    <Help sx={{ fontSize: "25px" }} />
                    <FormControl variant="standard" value={"Halisa"}>
                        <Select
                            value={"Halisa"}
                            sx={{
                                backgroundColor: neutralLight,
                                width: "150px",
                                borderRadius: "0.25rem",
                                p: "0.25rem 1rem",
                                "& .MuiSvgIcon-root": {
                                    pr: "0.25rem",
                                    width: "3rem",
                                },
                                "& .MuiSelect-select:focus": {
                                    backgroundColor: neutralLight,
                                },
                            }}
                            input={<InputBase />}
                        >
                            <MenuItem value={"Halisa"}>
                                <Typography>Halisa</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
                        </Select>
                    </FormControl>
                    
                </FlexBetween>
            ) : (
            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                <Menu />
            </IconButton>
        )}
        </FlexBetween>
    )
}

export default Navbar
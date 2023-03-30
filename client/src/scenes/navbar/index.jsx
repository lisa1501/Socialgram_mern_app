import React from 'react';
import { Typography,useTheme, useMediaQuery,IconButton,InputBase} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Search,DarkMode, LightMode,Message, Notifications, Help, Menu} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode} from "state";

import FlexBetween from 'components/FlexBetween';

const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const primaryLight = theme.palette.primary.light;

    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const neutralLight = theme.palette.neutral.light;

    const dispatch = useDispatch();
    const dark = theme.palette.neutral.dark;
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
                    
                </FlexBetween>
            ) : (
            <IconButton>
                <Menu />
            </IconButton>
        )}
        </FlexBetween>
    )
}

export default Navbar
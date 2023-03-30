import React from 'react';
import { Typography,useTheme, useMediaQuery,IconButton,InputBase,} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

import FlexBetween from 'components/FlexBetween';

const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const primaryLight = theme.palette.primary.light;

    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const neutralLight = theme.palette.neutral.light;
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

        </FlexBetween>
    )
}

export default Navbar
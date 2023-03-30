import React from 'react';
import { Typography,useTheme, } from '@mui/material';
import { useNavigate } from "react-router-dom";

import FlexBetween from 'components/FlexBetween';

const Navbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const primaryLight = theme.palette.primary.light;
    return (
        <FlexBetween>
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
            </FlexBetween>
        </FlexBetween>
    )
}

export default Navbar
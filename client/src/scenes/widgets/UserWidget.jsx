import { Box, Typography, Divider } from "@mui/material";
import React from 'react';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import FlexBetween from 'components/FlexBetween';
import UserImage from 'components/UserImage';
import WidgetWrapper from 'components/WidgetWrapper';
import { LocationOnOutlined, WorkOutlineOutlined } from "@mui/icons-material";

const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const token = useSelector((state) => state.token);
    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
            const data = await response.json();
            setUser(data);
        };
    
        useEffect(() => {
            getUser();
        }, []); // eslint-disable-line react-hooks/exhaustive-deps
        
        if (!user) {
            return null;
        }
    
        const {
            firstName,
            lastName,
            location,
            occupation,
            viewedProfile,
            impressions,
            friends,
        } = user;
    return (
        <WidgetWrapper>
            <FlexBetween>
                <FlexBetween>
                    <UserImage image={picturePath}/>
                    <Box>
                    <Typography>
                        {firstName} {lastName}
                    </Typography>
                    <Typography>
                        {friends.length} friends
                    </Typography>
                    </Box>
                </FlexBetween>
            </FlexBetween>

            <Divider />

            <Box>
                <Box>
                    <LocationOnOutlined />
                    <Typography>{location}</Typography>
                </Box>
                <Box>
                    <WorkOutlineOutlined />
                    <Typography>{occupation}</Typography>
                </Box>
            </Box>
            
            <Divider />

        </WidgetWrapper>
    )
}

export default UserWidget;
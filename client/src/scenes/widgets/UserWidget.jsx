import { Box, Typography, Divider } from "@mui/material";
import React from 'react';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import FlexBetween from 'components/FlexBetween';
import UserImage from 'components/UserImage';
import WidgetWrapper from 'components/WidgetWrapper';
import { LocationOnOutlined, WorkOutlineOutlined, EditOutlined, } from "@mui/icons-material";

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

            <Box>
                <FlexBetween>
                    <Typography>Who's viewed your profile</Typography>
                    <Typography>{viewedProfile}</Typography>
                </FlexBetween>
                <FlexBetween>
                    <Typography>Impressions of your post</Typography>
                    <Typography>{impressions}</Typography>
                </FlexBetween>
            </Box>

            <Divider />

            <Box p="1rem 0">
                <Typography >
                    Social Profiles
                </Typography>

                <FlexBetween >
                    <FlexBetween >
                        <img src="../assets/twitter.png" alt="twitter" />
                        <Box>
                            <Typography>
                                Twitter
                            </Typography>
                            <Typography>Social Network</Typography>
                        </Box>
                    </FlexBetween>
                    <EditOutlined />
                </FlexBetween>

                <FlexBetween >
                    <FlexBetween >
                        <img src="../assets/linkedin.png" alt="linkedin" />
                        <Box>
                            <Typography >
                                Linkedin
                            </Typography>
                            <Typography >Network Platform</Typography>
                        </Box>
                    </FlexBetween>
                    <EditOutlined />
                </FlexBetween>
            </Box>
        </WidgetWrapper>
    )
}

export default UserWidget;
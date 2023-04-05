import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {Box,Typography,useTheme} from "@mui/material";
import UserImage from './UserImage';
import FlexBetween from './FlexBetween';

function Comment({userId,comment,postId}) {
    const token = useSelector((state)=>state.token)
    const [user , setUser] = useState("");
    const { palette } = useTheme();
    const main = palette.neutral.main;

    const getCommentUser = async() => {
        const response = await fetch(`http://localhost:3001/users/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data);
    };

    useEffect(()=>{
        getCommentUser();
    },[comment]) // eslint-disable-line react-hooks/exhaustive-deps

    console.log(user)
    return (
        <FlexBetween>
            <Box sx={{display:"flex" ,alignItems:"center"}}>
                <UserImage image={user.picturePath} size="35px"/>
                <Box>
                    <Typography variant="h6" sx={{ m: "0.5rem 0rem -0.5rem 1rem"}}>{`${user.firstName} ${user.lastName}`}</Typography>
                    <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                        {comment}
                    </Typography>
                </Box>
            </Box>
        </FlexBetween>
    )
};

export default Comment
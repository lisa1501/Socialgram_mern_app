import WidgetWrapper from 'components/WidgetWrapper'
import { Typography, IconButton } from "@mui/material";
import {
    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    ShareOutlined,
} from "@mui/icons-material";
import { useState } from "react";

import UserInfo from "components/UserInfo";
import FlexBetween from 'components/FlexBetween';

const PostWidget = (
    {
        postId,
        postUserId,
        name,
        description,
        location,
        picturePath,
        userPicturePath,
        likes,
        comments,
    }
) => {
    const [isComments, setIsComments] = useState(false);
    const likeCount = Object.keys(likes).length;

    return (
        <WidgetWrapper m="2rem 0">
            <UserInfo
                name={name}
                subtitle={location}
                userPicturePath={userPicturePath}
            />
            <Typography  sx={{ mt: "1rem" }}>
                {description}
            </Typography>
            {picturePath && (
                <img
                    width="100%"
                    height="auto"
                    alt="post"
                    style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
                    src={`http://localhost:3001/assets/${picturePath}`}
                />
            )}
            <FlexBetween mt="0.25rem">
                <FlexBetween gap="1rem">
                    <FlexBetween gap="0.3rem">
                        <IconButton onClick={onclick}>
                            <FavoriteBorderOutlined />
                        </IconButton>
                        <Typography>{likeCount}</Typography>
                    </FlexBetween>

                    <FlexBetween gap="0.3rem">
                        <IconButton onClick={() => setIsComments(!isComments)}>
                            <ChatBubbleOutlineOutlined />
                        </IconButton>
                        <Typography>{comments.length}</Typography>
                    </FlexBetween>
                </FlexBetween>

                <IconButton>
                    <ShareOutlined />
                </IconButton>

            </FlexBetween>
        </WidgetWrapper>
    )
}

export default PostWidget

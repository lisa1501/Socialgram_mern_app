import { useState } from "react";
import { InputBase } from "@mui/material";

import WidgetWrapper from "components/WidgetWrapper";
import FlexBetween from 'components/FlexBetween';
import UserImage from 'components/UserImage';

const MyPostWidget = ({picturePath}) => {
    const [post, setPost] = useState("");
    return (
        <WidgetWrapper>
            <FlexBetween gap="1.5rem">
                <UserImage image={picturePath} />
                <InputBase 
                    placeholder="What's on your mind..."
                    onChange={(e) => setPost(e.target.value)}
                    value={post}
                />
            </FlexBetween>
        </WidgetWrapper>
    )
}

export default MyPostWidget

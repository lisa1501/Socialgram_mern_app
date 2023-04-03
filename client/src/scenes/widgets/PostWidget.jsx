import WidgetWrapper from 'components/WidgetWrapper'
import { Typography } from "@mui/material";

import UserInfo from "components/UserInfo";

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
        </WidgetWrapper>
    )
}

export default PostWidget

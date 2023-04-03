import WidgetWrapper from 'components/WidgetWrapper'
import React from 'react'
import { Typography} from "@mui/material";

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
            <Typography  sx={{ mt: "1rem" }}>
                {description}
            </Typography>
        </WidgetWrapper>
    )
}

export default PostWidget

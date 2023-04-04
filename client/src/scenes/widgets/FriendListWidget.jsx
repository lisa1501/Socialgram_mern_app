import WidgetWrapper from 'components/WidgetWrapper'
import { Typography, useTheme, Box} from "@mui/material";
import UserInfo from 'components/UserInfo';
import {useSelector } from "react-redux";

const FriendListWidget = () => {
    const { palette } = useTheme();
    const friends = useSelector((state) => state.user.friends);
    return (
        <WidgetWrapper>
            <Typography
                color={palette.neutral.dark}
                variant="h5"
                fontWeight="500"
                sx={{ mb: "1.5rem" }}
            >
                Friend List
            </Typography>

            <Box display="flex" flexDirection="column" gap="1.5rem">
                {friends.map((friend) => (
                    <UserInfo
                        key={friend._id}
                        friendId={friend._id}
                        name={`${friend.firstName} ${friend.lastName}`}
                        subtitle={friend.occupation}
                        userPicturePath={friend.picturePath}
                    />
                ))}
            </Box>
        </WidgetWrapper>
    )
}

export default FriendListWidget

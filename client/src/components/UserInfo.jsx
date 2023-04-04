import { Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import { PersonAddOutlined,PersonRemoveOutlined} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const UserInfo = ({friendId, name, subtitle, userPicturePath }) => {

    const { palette } = useTheme();
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;

    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
    const isFriend = friends.find((friend) => friend._id === friendId);
    const dispatch = useDispatch();

    const patchFriend = async () => {
        const response = await fetch(
            `http://localhost:3001/users/${_id}/${friendId}`,
                {
                    method: "PATCH",
                    headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            dispatch(setFriends({ friends: data }));
        };

    return (
        <FlexBetween>
            <FlexBetween gap="1rem">
                <UserImage image={userPicturePath} size="55px" />
                
                    <Typography
                        color={main}
                        variant="h5"
                        fontWeight="500"
                        sx={{
                            "&:hover": {
                                color: palette.primary.light,
                                cursor: "pointer",
                            },
                        }}
                    >
                        {name}
                    </Typography>

                    <Typography color={medium} fontSize="0.75rem">
                        {subtitle}
                    </Typography>
            
            </FlexBetween>

            <IconButton 
                sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
                onClick={() => patchFriend()}
            >
                {isFriend ? (
                    <PersonRemoveOutlined sx={{ color: primaryDark }} />
                    ) : (
                    <PersonAddOutlined sx={{ color: primaryDark }} />
                )}
            </IconButton>
        
        </FlexBetween>
    );
};

export default UserInfo;
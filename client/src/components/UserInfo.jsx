import { Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

const UserInfo = ({ name, subtitle, userPicturePath }) => {

    const { palette } = useTheme();
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

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

        
        </FlexBetween>
    );
};

export default UserInfo;
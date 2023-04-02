import { useState } from "react";
import {
    IconButton,
    Box,
    Divider,
    Typography,
    InputBase,
} from "@mui/material";
import {
    EditOutlined,
    DeleteOutlined,
    ImageOutlined,
} from "@mui/icons-material";

import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";

const MyPostWidget = ({ picturePath }) => {
    const [post, setPost] = useState("");
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    
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
            {isImage && (
                <Box>
                    <Dropzone
                        acceptedFiles=".jpg,.jpeg,.png"
                        multiple={false}
                        onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
                    >
                    {({ getRootProps, getInputProps }) => (
                        <FlexBetween>
                            <Box
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                {!image ? (
                                <p>Add Image Here</p>
                                ) : (
                                <FlexBetween>
                                    <Typography>{image.name}</Typography>
                                    <EditOutlined />
                                </FlexBetween>
                                )}
                            </Box>
                            {image && (
                                <IconButton
                                    onClick={() => setImage(null)}
                                >
                                    <DeleteOutlined />
                                </IconButton>
                            )}
                            </FlexBetween>
                        )}
                        </Dropzone>
                    </Box>
                )}

                <Divider sx={{ margin: "1.25rem 0" }} />

                <FlexBetween>
                    <FlexBetween onClick={() => setIsImage(!isImage)}>
                        <ImageOutlined  />
                        <Typography>
                            Image
                        </Typography>
                    </FlexBetween>
                </FlexBetween>
        </WidgetWrapper>
    );
};

export default MyPostWidget;
import { useState } from "react";
import {
    IconButton,
    Box,
    Divider,
    Typography,
    InputBase,
    useMediaQuery,
    Button
} from "@mui/material";
import {
    EditOutlined,
    DeleteOutlined,
    ImageOutlined,
    GifBoxOutlined,
    AttachFileOutlined,
    MicOutlined,
    MoreHorizOutlined
} from "@mui/icons-material";
import { useSelector,useDispatch } from "react-redux";

import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { setPosts } from "state";

const MyPostWidget = ({ picturePath }) => {
    const [post, setPost] = useState("");
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();

    const handlePost = async()=>{
        const formData = new FormData();
        formData.append("userId", _id);
        formData.append("description", post);
        if (image) {
            formData.append("picture", image);
            formData.append("picturePath", image.name);
        }

        const response = await fetch(`http://localhost:3001/posts`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: formData,
            });
            const posts = await response.json();
            dispatch(setPosts({ posts }));
            setImage(null);
            setPost("");
    }
    
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
                    {isNonMobileScreens ? (
                        <>
                            <FlexBetween gap="0.25rem">
                                <GifBoxOutlined  />
                                <Typography >Clip</Typography>
                            </FlexBetween>

                            <FlexBetween gap="0.25rem">
                                <AttachFileOutlined  />
                                <Typography >Attachment</Typography>
                            </FlexBetween>

                            <FlexBetween gap="0.25rem">
                                <MicOutlined  />
                                <Typography >Audio</Typography>
                            </FlexBetween>
                        </>
                    ) : (
                        <FlexBetween gap="0.25rem">
                            <MoreHorizOutlined />
                        </FlexBetween>
                    )}

                    <Button
                        disabled={!post}
                        onClick={handlePost}        
                    >
                        POST
                    </Button>
                </FlexBetween>
        </WidgetWrapper>
    );
};

export default MyPostWidget;
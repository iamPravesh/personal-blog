import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost, deletePost } from '../../../actions/posts';

import { Card, CardContent, CardActions, Typography, Button, Modal, Box, TextField } from '@mui/material';
import moment from 'moment';
import './post.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};


const Post = ({ post }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const handleEditModal = () => {
        setIsOpen(!isOpen);
    }
    const [postData, setPostData] = useState({
        title: post.title,
        content: post.content,
        id: post._id
    });

    return (
        <div
            className="post-card"
        >
            <Card
                style={{
                    padding: '10px',
                    paddingBottom: '0px',
                    height: '100%',
                }}
            >
                <CardContent
                    style={{
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h2"
                        style={{
                            fontWeight: '500',
                            marginBottom: '10px',
                            borderBottom: '1px solid #ccc',
                            width: '100%',
                            textAlign: 'center',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            padding: '10px',
                            paddingBottom: '0px',
                            height: '100%',
                        }}
                    >
                        {post.title}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h2"
                        style={{
                            fontWeight: '500',
                            paddingBottom: '10px',
                            borderBottom: '1px solid #ccc',
                            width: '100%',
                            paddingLeft: '20px',
                            height: '30vh',
                            overflow: 'auto',
                            '&::WebkitScrollbar': {
                                display: 'none'
                            }
                        }}
                    >
                        {post.content}
                    </Typography>
                </CardContent>
                <CardActions
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleEditModal}
                    >Edit</Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => dispatch(deletePost(post._id))}
                    >Delete</Button>
                </CardActions>
                <Typography variant="body2">Created at: {
                    moment(post.createdAt).format('MMMM Do YYYY, h a')
                }</Typography>
            </Card>
            <Modal
                open={isOpen}
                onClose={handleEditModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6">Edit {post.title}</Typography>
                    <form
                        autoComplete="off"
                        noValidate
                        onSubmit={(e) => {
                            e.preventDefault();
                            dispatch(updatePost(post._id, {
                                title: postData.title,
                                content: postData.content
                            }));
                            handleEditModal();
                        }
                        }
                    >
                        <TextField
                            id="title"
                            label="Title"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={postData.title}
                            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                        />
                        <TextField
                            id="content"
                            label="Content"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={postData.content}
                            onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                            multiline
                        />

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleEditModal}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Edit
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default Post
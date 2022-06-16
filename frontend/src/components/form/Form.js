import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@mui/material';

import { createPost } from '../../actions/posts';

const Form = ({ onClose }) => {
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        title: '',
        content: ''
    });

    const handleReset = () => {
        setPostData({
            title: '',
            content: ''
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createPost(postData));
        handleReset();
        onClose();
    }

    return (
        <Paper
            padding={20}
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <form
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "20vw",
                        padding: "10px 10px",
                    }}
                >
                    <Typography variant="h6">
                        Add a new post
                    </Typography>
                    <TextField
                        id="title"
                        label="Title"
                        variant="outlined"
                        margin="normal"
                        value={postData.title}
                        fullWidth
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    />
                    <TextField
                        id="content"
                        label="Content"
                        variant="outlined"
                        margin="normal"
                        value={postData.content}
                        fullWidth
                        onChange={(e) => setPostData({ ...postData, content: e.target.value })}
                        multiline
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{
                            marginTop: "20px",
                            fontSize: "20px",
                            fontWeight: "bold",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            borderRadius: "5px",
                            padding: "5px 5px",
                            backgroundColor: "#00bcd4",
                            color: "#fff",
                            '&:hover': {
                                backgroundColor: "#00acc1"
                            },
                            width: "40%"
                        }}
                    >
                        Add
                    </Button>
                </div>
            </form>
        </Paper>
    );
}

export default Form;
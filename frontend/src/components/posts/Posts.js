
import { useSelector } from 'react-redux'

import { Grid, CircularProgress } from '@mui/material';
import Post from './post/Post';

const Posts = () => {

    const posts = useSelector(state => state.posts);

    return (
        <>
            {posts.length < 1 ? <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%'
                }}
            >
                <CircularProgress />
            </div> : (
                <Grid
                    container
                    spacing={6}
                >
                    {posts.map((post, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            key={index}
                        >
                            <Post post={post} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    )
}

export default Posts
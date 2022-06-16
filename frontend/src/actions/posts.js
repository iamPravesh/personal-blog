import * as api from '../api';
import toast from 'react-hot-toast';

// Action creators

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.getPosts();
        dispatch({
            type: 'GET_POSTS',
            payload: data
        });
    }
    catch (err) {
        toast(err.message);
    }

}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({
            type: 'CREATE_POST',
            payload: data
        });
        toast('Post created successfully');
    }
    catch (err) {
        toast(err.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({
            type: 'UPDATE_POST',
            payload: data
        });
        toast('Post updated successfully');
    }
    catch (err) {
        toast(err.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({
            type: 'DELETE_POST',
            payload: id,
        });
        toast('Post deleted successfully');
    }
    catch (err) {
        toast(err.message);
    }
}
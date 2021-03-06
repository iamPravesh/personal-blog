import axios from 'axios';

const url = 'http://localhost:5000/posts/';

export const getPosts = () => axios.get(url);
export const createPost = (post) => axios.post(url, post);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
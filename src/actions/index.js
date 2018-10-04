import axios from 'axios';

export const getPosts = () => {
  return (
    async (dispatch) => {
      const posts = await axios.get('https://my-strapi-demo.herokuapp.com/post');
      dispatch({
        type: 'GET_POSTS',
        payload: posts.data,
      })
    }
  )
}

export const createPost = (title, content) => {
  return (
    async (dispatch) => {
      const response = await axios.post('https://my-strapi-demo.herokuapp.com/post', {
        title,
        content
      });
      dispatch({
        type: 'CREATE_POST',
        payload: response.data
      })
    }
  )
}
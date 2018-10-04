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
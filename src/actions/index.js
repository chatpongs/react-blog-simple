export const getPosts = () => {
  return (
    dispatch => {
      dispatch({
        type: 'GET_POSTS',
        payload: [{id: 1, title: 'Title1', content: 'Content1'}, {id: 2, title: 'Title2', content: 'Content2'}],
      })
    }
  )
}
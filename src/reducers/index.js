import { combineReducers } from 'redux';

const posts = (state = [], action) => {
  switch(action.type){
    case 'GET_POSTS':
      return action.payload;
    case 'CREATE_POST':
      return [...state, action.payload]
    default:
      return state;
  }
}

export default combineReducers({ posts });
import { combineReducers } from 'redux';

const posts = () => {
    return [{ title: 'Title', content: 'Content' }]
}

export default combineReducers({ posts });
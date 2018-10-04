import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostForm extends React.Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, content } = this.state;
    this.props.createPost(title, content);
  }
  render() {
    return (
      <div className="my-2">
        <h3 className="py-2">Create new post</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Post title" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea className="form-control" id="content" placeholder="Post content" onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createPost })(PostForm);
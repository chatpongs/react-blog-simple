import React from 'react';
import axios from 'axios';

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
    console.log(`${this.state.title} ${this.state.content}`);
    const response = await axios.post('https://my-strapi-demo.herokuapp.com/post', {
      title: this.state.title,
      content: this.state.content
    });
    console.log(response);
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

export default PostForm;
import React from 'react';

class PostForm extends React.Component {
  render() {
    return (
      <div className="my-2">
        <h3 className="py-2">Create new post</h3>
        <form>
          <div className="form-group">
            <label for="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Post title" />
          </div>
          <div className="form-group">
            <label for="content">Content</label>
            <textarea className="form-control" id="content" placeholder="Post content" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
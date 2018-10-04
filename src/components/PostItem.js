import React from 'react';

class PostItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="my-2 col-md-4"><img src="https://fakeimg.pl/1600x900/?text=Post" className="img-fluid" /></div>
        <div className="my-2 col-md-8">
          <p className="p-2 font-weight-bold">{this.props.post.title}</p>
          <p className="p-2">{this.props.post.content.slice(0, 256)} {this.props.post.content.length > 256 && '...'}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default PostItem;
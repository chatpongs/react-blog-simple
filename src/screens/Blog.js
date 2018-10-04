import React from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Blog extends React.Component {
  state = {
    posts: []
  }
  async componentDidMount() {
    const posts = await axios.get('https://my-strapi-demo.herokuapp.com/post');
    this.setState({posts: posts.data});
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1 className="p-2">LATEST NEWS</h1>
          <hr />
          <div className="row">
            {
              this.state.posts.map(post =>
                <React.Fragment>
                  <div className="my-2 col-md-4"><img src="https://fakeimg.pl/1600x900/?text=Post" className="img-fluid" /></div>
                  <div className="my-2 col-md-8">
                    <p className="p-2 font-weight-bold">{post.title}</p>
                    <p className="p-2">{post.content.slice(0, 256)} {post.content.length > 256 && '...'}</p>
                  </div>
                </React.Fragment>
              )
            }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Blog;
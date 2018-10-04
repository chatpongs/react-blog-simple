import React from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PostItem from '../components/PostItem';
import PostForm from '../components/PostForm';

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
          <h1 className="py-2">LATEST NEWS</h1>
          <hr />
          <div className="row">
            {
              this.state.posts.map(post => <PostItem post={post} />)
            }
          </div>
          <hr />
          <PostForm />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Blog;
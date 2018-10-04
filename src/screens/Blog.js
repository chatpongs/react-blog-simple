import React from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Blog extends React.Component {
  async componentDidMount() {
    const posts = await axios.get('https://my-strapi-demo.herokuapp.com/post');
    posts.data.forEach(post => {
      console.log(post.title);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">Blog</div>
        <Footer />
      </div>
    )
  }
}

export default Blog;
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Blog extends React.Component {
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
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PostItem from '../components/PostItem';
import PostForm from '../components/PostForm';
import { getPosts } from '../actions';

class Blog extends React.Component {
  state = {
    posts: []
  }
  async componentDidMount() {
    // const posts = await axios.get('https://my-strapi-demo.herokuapp.com/post');
    // this.setState({ posts: posts.data });
    this.props.getPosts();
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
              this.props.posts.map(post => <PostItem key={post.id} post={post} />)
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

const mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { getPosts })(Blog);
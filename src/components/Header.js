import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Simple Blog</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/blog">Blog</Link>
            <Link className="nav-item nav-link" to="/about">About</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
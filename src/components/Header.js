import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Simple Blog</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Blog</a>
            <a className="nav-item nav-link" href="#">About</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
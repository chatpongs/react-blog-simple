import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light justify-content-center">
        <div className="navbar-nav">
          &copy; ProGaming 2018
        </div>
      </nav>
    )
  }
}

export default Footer;
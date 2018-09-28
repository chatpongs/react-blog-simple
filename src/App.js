import React, { Component } from 'react';
import Home from './screens/Home';
import Blog from './screens/Blog';
import About from './screens/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Blog />
        <About />
      </div>
    );
  }
}

export default App;

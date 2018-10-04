import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Blog from './screens/Blog';
import About from './screens/About';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
      </Switch>
    );
  }
}

export default App;

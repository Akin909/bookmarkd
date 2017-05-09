import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import Reader from './Reader';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Route exact path="/" component={Home} />
          <Route
            path="/reader/:slug"
            render={({ match }) => {
              return <Reader slug={match.params.slug} />;
            }}
          />
          <BottomNav />
        </div>
      </Router>
    );
  }
}

export default App;

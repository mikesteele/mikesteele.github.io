import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './Homepage';
import DCSplashPage from './DCSplashPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dc">
          <DCSplashPage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

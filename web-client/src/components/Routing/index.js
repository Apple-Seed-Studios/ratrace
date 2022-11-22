import * as React from 'react';
import Main from '../Main/index';
import About from '../About/index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Routing() {
  return (

      <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
      <Route 
          path="/about" 
          element={<About
          />}>
        </Route>
        <Route 
          path="/" 
          element={<Main
          />}>
        </Route>
      </Routes>
    </div>
  </Router>
  );
}
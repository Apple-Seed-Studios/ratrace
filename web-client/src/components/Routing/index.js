import * as React from 'react';
import {
  Link
} from "react-router-dom";

export default function Routing() {
  return (


    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Progress">Progress</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      </div>
  );
}
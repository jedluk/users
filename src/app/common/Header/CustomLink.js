import React from 'react';
import { Link } from 'react-router-dom';

export default ({text, path}) => (
  <li className="nav-item px-2">
    <Link className="nav-link" to={`/${path}`}>
      {text}
    </Link>
  </li>
);

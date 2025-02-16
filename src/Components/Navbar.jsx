import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">All Post</Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">Add Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

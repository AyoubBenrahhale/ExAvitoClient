


import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Navig = props => {

    return (
   <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
        <div className="container">
          <a href="/home" className="navbar-brand">
          Users Management
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                 <Link to="/AddUser" className="nav-link">AddUser</Link>
              
              </li>
              <li className="nav-item">
                <Link to="/ShowUsers" className="nav-link">Users</Link> 
              </li>  
            </ul>
          </div>
        </div>
      </nav>
   );
   };

export default Navig;
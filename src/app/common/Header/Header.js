import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';

export default () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div className="container">
      <div className="navbar-brand" >Users Brand</div>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <CustomLink text="Dashboard" path="dashboard" />
          <CustomLink text="Management" path="management" />
          <CustomLink text="Add New User" path="management" />
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown mr-3">
            <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">
              <i className="fa fa-user"></i> Welcome root
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="#">
                <i className="fa fa-gear"></i> Settings
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
            <i className="fa fa-user-times"></i> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
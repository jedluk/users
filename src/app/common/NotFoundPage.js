import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="container mt-5">
    <div className="row">
      <div class="col-md-12 text-center">
        <h1>Ooops!</h1>
        <h2>404 Not Found!</h2>
        <p>Sorry, an error has occured, requested page not found!</p>
        <Link className="btn btn-dark" to="/dashboard">
          <i class="fas fa-home mx-1"></i>Take Me Home
        </Link>
      </div>
    </div>
  </div>
);

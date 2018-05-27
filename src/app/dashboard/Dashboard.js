import React, { Component } from "react";
import Header from "../common/Header/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import { userService } from "../../utils/services/user.service";

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    userService
      .getUser()
      .then(data => {
        this.setState({ users: data });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              {this.state.users.length > 0 ? (
                <div className="card">
                  <div className="card-header">
                    <h4>Users List</h4>
                  </div>
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(user => {
                      return (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>
                          <Link className="btn btn-secondary" to={{ pathname: `/management/${user.id}`, userId: user.id}}>
                              <i className="fa fa-angle-double-right" /> Management
                          </Link>
                          </td>
                        </tr>
                      );
                    })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <h1>Loading...</h1>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
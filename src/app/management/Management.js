import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../common/Header/Header";
import Footer from "../common/Footer";
import CustomButton from "./CustomButton";
import UserForm from "./UserForm";
import { userModel } from "../../utils/models/user.model";
import { userService } from "../../utils/services/user.service";

class Mananagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      disabled: true
    };
    this.toggleDisabled = this.toggleDisabled.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleAddNewUser = this.handleAddNewUser.bind(this);
  }

  componentDidMount() {
    const { userId } = this.props.location;
    userService
      .getUser(userId)
      .then(user => {
        this.setState({ user });
      })
      .catch(e => console.log(e));
  }

  handleAddNewUser() {
    this.setState({ user: userModel });
  }

  handleUpdateUser() {
    console.log("user updated");
    // MODAL

    // const user = this.state.user;
    // userService
    //   .updateUser(user.id, user)
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
    this.toggleDisabled();
  }

  handleDeleteUser() {
    console.log("user deleted");
    // MODAL
    setTimeout(() => {
      this.props.history.push("/dashboard");
    }, 3000);
    // userService
    //   .deleteUser(this.state.user.id)
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
  }

  toggleDisabled() {
    this.setState({ disabled: !this.state.disabled });
  }

  handleAction() {
    console.log("action handled");
  }

  handleChange(evt) {
    console.log(evt.target.name);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-9">
              {this.state.user ? (
                <UserForm
                  user={this.state.user}
                  disabled={this.state.disabled}
                />
              ) : (
                <h1>Loading user...</h1>
              )}
            </div>
            <div className="col-md-3 d-flex flex-md-column justify-content-md-center">
              <CustomButton
                faclass="fas fa-plus"
                btnText="Add New User"
                action={this.handleAction}
              />
              <CustomButton
                faclass="fas fa-minus"
                btnText="Delete User"
                action={this.handleDeleteUser}
              />
              <CustomButton
                faclass={this.state.disabled ? "fas fa-pencil-alt" : ""}
                btnText={this.state.disabled ? "Modify User" : "Save"}
                action={
                  this.state.disabled
                    ? this.toggleDisabled
                    : this.handleUpdateUser
                }
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Mananagement);

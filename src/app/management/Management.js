import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../common/Header/Header";
import Modal from "./userForm/Modal";
import Footer from "../common/Footer";
import CustomButton from "./userForm/CustomButton";
import UserForm from "./userForm/UserForm";
import userModel from "../../utils/models/user.model";
import { userService } from "../../utils/services/user.service";
import { ModalConstant } from "./userForm/ModalConstant";

class Mananagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      disabled: true,
      addUserMode: false,
      stickyButtonMode: "load",
      modal: false,
      modalMode: "ERROR"
    };
    this.actions = {
      handleChangeProperty: this.handleChangeProperty,
      handleChangeNestedProperty: this.handleChangeNestedProperty,
      handleChangeDoubleNestedProperty: this.handleChangeDoubleNestedProperty
    };
  }

  componentDidMount() {
    const { userId } = this.props.location;
    if (userId) {
      userService
        .getUser(userId)
        .then(user => this.setState({ user }))
        .catch(e => this.setState({ user: userModel }));
    } else {
      this.setState({ user: userModel, addUserMode: true, disabled: false });
      if (!sessionStorage.getItem("user")) {
        this.setState({ user: userModel, stickyButtonMode: "save" });
      }
    }
  }

  handleAddNewUser = () => {
    if (this.validateUser()) {
      userService
        .createUser(this.state.user)
        .then(() => {
          this.setState({ modalMode: "ADDED" });
          this.toggleModal();
        })
        .catch(() => {
          this.setState({ modalMode: "ERROR" });
          this.toggleModal();
        });
    } else {
      this.setState({ modalMode: "NOT_VALID" });
      this.toggleModal();
    }
  };

  handleUpdateUser = () => {
    userService
      .updateUser(this.state.user)
      .then(data => {
        this.setState({ modalMode: "UPDATED" });
        this.toggleModal();
      })
      .catch(err => {
        this.setState({ modalMode: "ERROR" });
        this.toggleModal();
      });
    this.toggleDisabled();
  };

  handleDeleteUser = () => {
    userService
      .deleteUser(this.state.user.id)
      .then(() => {
        this.setState({ modalMode: "DELETED" });
        this.toggleModal();
      })
      .catch(() => {
        this.setState({ modalMode: "ERROR" });
        this.toggleModal();
      });
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  toggleDisabled = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  handleChangeProperty = evt => {
    this.setState({
      user: { ...this.state.user, [evt.target.name]: evt.target.value }
    });
  };

  handleChangeNestedProperty = evt => {
    const [parent, child] = evt.target.name.split(".");
    this.setState({
      user: {
        ...this.state.user,
        [parent]: {
          ...this.state.user[parent],
          [child]: evt.target.value
        }
      }
    });
  };

  handleChangeDoubleNestedProperty = evt => {
    const [parent, child, grandchild] = evt.target.name.split(".");
    this.setState({
      user: {
        ...this.state.user,
        [parent]: {
          ...this.state.user[parent],
          [child]: {
            ...this.state.user[parent][child],
            [grandchild]: evt.target.value
          }
        }
      }
    });
  };

  validateUser = () => {
    return (
      this.state.user.name && this.state.user.username && this.state.user.email
    );
  };

  handleStickyButtonAction = () => {
    if (this.state.stickyButtonMode === "load") {
      let user = sessionStorage.getItem("user");
      if (user) {
        user = JSON.parse(user);
        this.setState({ user });
      }
      this.setState({ stickyButtonMode: "save" });
    } else {
      sessionStorage.setItem("user", JSON.stringify(this.state.user));
      this.setState({ stickyButtonMode: "load" });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-9">
              {this.state.user ? (
                <UserForm
                  actions={this.actions}
                  user={this.state.user}
                  disabled={this.state.disabled}
                />
              ) : (
                <h1>Loading user...</h1>
              )}
            </div>
            <div className="col-md-3 d-flex flex-md-column justify-content-md-center">
              {this.state.addUserMode ? (
                <div>
                  <CustomButton
                    faclass="fas fa-plus"
                    btnText="Add New User"
                    action={this.handleAddNewUser}
                    load={true}
                  />
                  <div
                    className="stickyLoader btn btn-info"
                    onClick={this.handleStickyButtonAction}
                  >
                    {this.state.stickyButtonMode === "load" ? "Load" : "Save"}
                  </div>
                </div>
              ) : (
                <div>
                  <CustomButton
                    faclass="fas fa-minus"
                    btnText="Delete User"
                    action={this.handleDeleteUser}
                  />
                  <CustomButton
                    faclass={
                      this.state.disabled ? "fas fa-pencil-alt" : "fas fa-save"
                    }
                    btnText={this.state.disabled ? "Modify User" : "Save"}
                    action={
                      this.state.disabled
                        ? this.toggleDisabled
                        : this.handleUpdateUser
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <Modal
          show={this.state.modal}
          mode={this.state.modalMode}
          close={this.toggleModal}
        />
      </div>
    );
  }
}

export default withRouter(Mananagement);

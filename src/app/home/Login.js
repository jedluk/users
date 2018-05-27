import React, { Component } from "react";
import { connect } from "react-redux";
import { userService } from "../../utils/services/user.service";
import { login } from '../actions/auth/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      incorrectCredentials: false
    };
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleLogin = (evt) => {
    evt.preventDefault();
    userService
      .login(this.state.name, this.state.password)
      .then(res => {
        const { status } = res;
        if (status === "correct") {
          this.props.login(this.state.name);
        } else {
          this.setState({ incorrectCredentials: true });
          setTimeout(() => {
            this.setState({ incorrectCredentials: false });
          }, 3000);
        }
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="loginBody">
        <div className="container loginBox">
          <div className="row">
            <div className="mx-auto col-md-5">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex justify-content-center align-items-center">
                    <i className="fas fa-lock mx-2" />
                    <h3>Login Panel</h3>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={this.handleLogin}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                    </div>
                    {this.state.incorrectCredentials ? (
                      <div className="my-2 text-danger">Incorrect pair</div>
                    ) : (
                      ""
                    )}
                    <input
                      type="submit"
                      className="btn btn-dark btn-block"
                      value="Login"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (name) => dispatch(login(name))
});

export default connect(undefined,mapDispatchToProps)(Login);

import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
  };

  handleChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

  submitForm = event => {
    event.preventDefault();
    const endpoint = "http://localhost:5000/api/auth/register";

    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res);
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/users");
      })
      .catch(err => {
        console.log("Sign Up Error", err);
      });
  };

  render() {
    return (
      <>
        <h2>Sign Up</h2>
        <form onSubmit={this.submitForm}>
          <div>
            <label htmlFor="username" />
            username:
            <input
              id="username"
              onChange={this.handleChange}
              value={this.state.username}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            password:
            <input
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div>
            <label htmlFor="department" />
            department:
            <input
              id="department"
              onChange={this.handleChange}
              value={this.state.department}
              type="text"
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </>
    );
  }
}

export default SignUp;

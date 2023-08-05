import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import "./signin.css";

class Login extends Component {
  constructor(props) {
    console.log("[Signin.js] Constructor");
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("[Signin.js] handleSubmit");
    axios
      .post("http://127.0.0.1:8000/users/login/", {
        Username: this.state.username,
        Password: this.state.password,
      })
      .then((response) => {
        if (response.status < 300) {
          console.log("[Signin.js] Call props.doLogin");
          this.props.doLogin();
          localStorage.setItem("token", response.data["token"]);
          localStorage.setItem("userId", response.data["UserID"]);
          localStorage.setItem("username", this.state.username);
          console.log(response.data);
          this.props.history.push("/");
        }
      });
  }
  render() {
    return (
      <section className="hero is-warning is-large">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6-tablet is-5-desktop is-4-widescreen">
                <form onSubmit={this.handleSubmit} className="box">
                  <div className="field">
                    <label className="label">아이디</label>
                    <div className="control has-icons-left">
                      <input
                        type="text"
                        className="input"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">패스워드</label>
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        className="input"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="level">
                    <div className="level-left">
                      <div className="level-item">
                        <div className="field">
                          <button className="button is-primary" type="submit">
                            로그인
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="level-right">
                      <div className="level-item">
                        <Link to="Signup">
                          <button className="btn btn-info">회원가입</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;

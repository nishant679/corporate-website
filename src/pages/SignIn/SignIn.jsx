import './SignIn.css';
import React, { Component } from 'react';
import { Input, Button, Icon, message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { LOGIN_URL } from '../utils/api';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: null,
      password: null,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  toggleLoading() {
    this.setState({ loading: !this.state.loading });
  }
  // handleSubmit() {
  //   this.toggleLoading();
  //   axios
  //     .post(LOGIN_URL, {
  //       email: this.state.email,
  //       password: this.state.password,
  //       userType: 'doctor',
  //     })
  //     .then(res => {
  //       this.toggleLoading();
  //       localStorage.setItem('token', res.data.response);
  //       window.location = '/';
  //     })
  //     .catch(err => {
  //       message.error(err.response.data.response);
  //       this.toggleLoading();
  //     });
  // }

  handleTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="signin">
        <div className="hero" />
        <div className="form-container">
          <div className="form animated fadeIn">
            <h2>Sign in to your Mobicare doctor account</h2>
            <Input
              placeholder="Enter your email"
              prefix={
                <Icon type="inbox" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              size="large"
              name="email"
              onChange={this.handleTextChange}
            />
            <Input
              placeholder="Enter your password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              type="password"
              name="password"
              onChange={this.handleTextChange}
            />
            <Button
              type="primary"
              icon="login"
              size="large"
              loading={loading}
              onClick={this.handleSubmit}
            >
              Sign In
            </Button>
            <Button type="link" size="large">
              <Link to="/signUp">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;

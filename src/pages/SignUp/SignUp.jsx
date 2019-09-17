import '../SignIn/SignIn.css';
import React, { Component } from 'react';
import { Input, Button, Icon, message, Form } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { LOGIN_URL } from '../utils/api';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: null,
      password: null,
      degrees: [],
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
    const { loading, degrees } = this.state;
    return (
      <div className="signin">
        <div className="hero" />
        <div className="form-container">
          <div className="form animated fadeIn">
            <h2>Sign up to create a Mobicare doctor account</h2>
            <Input
              placeholder="Email"
              prefix={
                <Icon type="inbox" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              size="large"
              name="email"
              onChange={this.handleTextChange}
            />
            <Input
              placeholder="Password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              type="password"
              name="password"
              onChange={this.handleTextChange}
            />
            <Input
              placeholder="Confirm Password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              type="password"
              name="password"
              onChange={this.handleTextChange}
            />
            <Input
              placeholder="Full Name"
              prefix={
                <Icon type="inbox" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              size="large"
              name="email"
              onChange={this.handleTextChange}
            />
            <Input
              placeholder="Address"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              type="password"
              name="password"
              onChange={this.handleTextChange}
            />
            <Input
              placeholder="Phone Number"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              type="password"
              name="password"
              onChange={this.handleTextChange}
            />
            <Button type="dashed" size="large">
              Add Degrees ({degrees.length} added)
            </Button>
            <Input
              placeholder="Speciality"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              type="password"
              name="password"
              onChange={this.handleTextChange}
            />
            <Input
              placeholder="Experience"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              type="password"
              name="password"
              onChange={this.handleTextChange}
            />
            <Input
              placeholder="Affiliation"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large"
              type="password"
              name="password"
              onChange={this.handleTextChange}
            />
            <Button
              type="primary"
              icon="plus"
              size="large"
              loading={loading}
              onClick={this.handleSubmit}
            >
              Create Account
            </Button>
            <Button type="link" size="large">
              <Link to="/">I already have an account</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create({ name: 'signUpForm' })(SignUp);

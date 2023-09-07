import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import passwordValidator from 'password-validator'; // Add this import

const schema = new passwordValidator(); // Create an instance of the schema
schema
  .is().min(8)
  .has().uppercase()
  .has().lowercase()
  .has().digits()
  .has().symbols();

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      if (!schema.validate(this.state.password)) {
        this.setState({ error: 'Password does not meet requirements' });
        return;
      }
      const formData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };

      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  } 

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="flex flex-col items-center">
        <form
          autoComplete="on"
          onSubmit={this.handleSubmit}
          className="mt-4 w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            disabled={disable}
            className="bg-themeOrange text-white py-2 px-4 rounded hover:bg-themeGreenDark focus:outline-none focus:ring focus:bg-themeGreenDark"
          >
            SIGN UP
          </button>
        </form>
        <div className="bg-themeGreen p-2 rounded text-white">
          Password must be a minimum of 8 characters, including at least one
          uppercase letter, one lowercase letter, one digit, and one special
          character.
        </div>
        <p className="text-red-500 mt-2">{this.state.error}</p>
      </div>
    );
  }
}
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { Link } from 'react-router-dom'
import SignUpForm from '../SignUpForm/SignUpForm';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="bg-themeDarkGreen min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-4">Log In</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-themeDarkGreen"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-themeGreen"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-themeGreen text-white py-2 px-4 rounded hover:bg-themeGreenDark focus:outline-none focus:ring focus:bg-themeGreenDark"
            >
              LOG IN
            </button>
          </div>
        </form>
        <h2 className='mt-3 bg-themeWhite'>New here? <Link to="/signup">Sign Up</Link></h2>
        <p className="text-red-500 mt-2">{error}</p>
      </div>
    </div>
  );
}

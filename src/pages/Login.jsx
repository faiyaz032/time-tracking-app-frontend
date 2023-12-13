import React from 'react';
import LoginForm from '../components/LoginForm';

export default function Login({ setIsAuthenticated, setRegisteredClicked, setName }) {
  const handleOnClick = e => {
    e.preventDefault();
    console.log('clicked');
    setRegisteredClicked(true);
  };

  return (
    <div class="form-container">
      <h2>Login</h2>
      <LoginForm setIsAuthenticated={setIsAuthenticated} setName={setName} />
      <div class="form-footer">
        Don't have an account?{' '}
        <a onClick={handleOnClick} href="#">
          Register
        </a>
      </div>
    </div>
  );
}

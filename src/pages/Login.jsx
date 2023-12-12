import React from 'react';
import LoginForm from '../components/LoginForm';

export default function Login({ setIsAuthenticated }) {
  return (
    <div class="form-container">
      <h2>Login</h2>
      <LoginForm setIsAuthenticated={setIsAuthenticated} />
      <div class="form-footer">
        Don't have an account? <a href="register.html">Register</a>
      </div>
    </div>
  );
}

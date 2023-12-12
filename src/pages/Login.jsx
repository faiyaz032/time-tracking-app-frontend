import React from 'react';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <div class="form-container">
      <h2>Login</h2>
      <LoginForm />
      <div class="form-footer">
        Don't have an account? <a href="register.html">Register</a>
      </div>
    </div>
  );
}

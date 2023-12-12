import React from 'react';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
  return (
    <div class="">
      <h2>Register</h2>
      <RegisterForm />
      <div class="form-footer">
        Already have an account? <a href="login.html">Login</a>
      </div>
    </div>
  );
}

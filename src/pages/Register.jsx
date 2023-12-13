import React from 'react';
import RegisterForm from '../components/RegisterForm';

export default function Register({ setRegisteredClicked }) {
  const handleOnClick = e => {
    e.preventDefault();
    setRegisteredClicked(false);
  };
  return (
    <div class="form-container">
      <h2>Register</h2>
      <RegisterForm setRegisteredClicked={setRegisteredClicked} />
      <div class="form-footer">
        Already have an account?{' '}
        <a onClick={handleOnClick} href="#">
          Login
        </a>
      </div>
    </div>
  );
}

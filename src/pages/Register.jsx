import React from 'react';
import RegisterForm from '../components/RegisterForm';

export default function Register({ setRegisteredClicked }) {
  const handleOnClick = e => {
    e.preventDefault();
    setRegisteredClicked(false);
  };
  return (
    <div className="form-container">
      <h2>Register</h2>
      <RegisterForm setRegisteredClicked={setRegisteredClicked} />
      <div className="form-footer">
        Already have an account?{' '}
        <a onClick={handleOnClick} href="#">
          Login
        </a>
      </div>
    </div>
  );
}

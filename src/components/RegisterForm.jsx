import React, { useState } from 'react';
import { register } from '../api';

export default function RegisterForm({ setRegisteredClicked }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await register({ name, email, password });
    if (response.status === 'success') {
      setRegisteredClicked(false);
      alert('Registered SuccessFully! Please Log In');
    } else {
      alert('Registration Failed!');
    }
  };

  return (
    <form>
      <div className="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="Name"
          name="Name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit} type="submit">
        Register
      </button>
    </form>
  );
}

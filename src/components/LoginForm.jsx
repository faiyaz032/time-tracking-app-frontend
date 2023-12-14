import React, { useState } from 'react';
import { login } from '../api';

export default function LoginForm({ setIsAuthenticated, setName }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await login(email, password);

    if (response.status === 'success') {
      setIsAuthenticated(true);
      setName(response.data.name);
    } else {
      alert('Incorrect email or password');
    }
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
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
        Login
      </button>
    </form>
  );
}

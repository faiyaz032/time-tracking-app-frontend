import React from 'react';

export default function RegisterForm() {
  return (
    <form class="form-container">
      <div class="form-group">
        <label for="username">Name</label>
        <input type="text" id="Name" name="Name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

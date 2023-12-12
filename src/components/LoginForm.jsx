import React from 'react';

export default function LoginForm() {
  return (
    <form action="#" method="post" class="form">
      <div class="form-group">
        <label for="username">Email</label>
        <input type="text" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

import React from 'react';
import { logout } from '../api';
import EntriesTable from '../components/EntriesTable';

export default function DashBoard({ isAuthenticated, setIsAuthenticated }) {
  const handleLogout = async e => {
    e.preventDefault();
    const response = await logout();
    if (response.status === 'success') {
      setIsAuthenticated(false);
    }
  };
  return (
    <>
      <header>
        <h1>Admin Dashboard - Time Tracking</h1>
      </header>

      <nav>
        <a href="#">Timesheet</a>
        {isAuthenticated ? (
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        ) : null}
      </nav>

      <main>
        <div class="welcome">
          <h2>Welcome, Admin!</h2>
          <p>
            This is your time tracking dashboard. Use the form below to create a work time entry.
          </p>
        </div>

        <form action="#" method="post">
          <h2>Create Work Time Entry</h2>
          <label for="date">Date:</label>
          <input type="date" id="date" name="date" required />

          <label for="startTime">Start Time:</label>
          <input type="time" id="startTime" name="startTime" required />

          <label for="endTime">End Time:</label>
          <input type="time" id="endTime" name="endTime" required />

          <label for="note">Note:</label>
          <input type="text" id="note" name="note" />

          <button type="submit">Submit Entry</button>
        </form>

        <EntriesTable />
      </main>
    </>
  );
}

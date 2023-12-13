import React from 'react';
import { logout } from '../api';

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
        <a href="#">All Entries</a>
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

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Day</th>
              <th>StartTime</th>
              <th>EndTime</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Add your dynamic data here --> */}
            <tr>
              <td>1</td>
              <td>2023-12-01</td>
              <td>Monday</td>
              <td>09:00 AM</td>
              <td>05:00 PM</td>
              <td>Meeting with clients</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2023-12-02</td>
              <td>Tuesday</td>
              <td>10:00 AM</td>
              <td>04:00 PM</td>
              <td>Project development</td>
            </tr>
            {/* <!-- Add more rows as needed --> */}
          </tbody>
        </table>
      </main>
    </>
  );
}

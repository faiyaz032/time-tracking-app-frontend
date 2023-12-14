import React, { useEffect, useState } from 'react';
import { getAllEntries, logout } from '../api';
import Charts from '../components/Charts';
import Dashboard from '../components/Dashboard';

export default function Home({ isAuthenticated, setIsAuthenticated, name }) {
  const [entries, setEntries] = useState([]);
  const [timesheetClicked, setTimesheetClicked] = useState(false);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await getAllEntries();

      if (response.data.length) {
        setEntries(response.data);
      }
    };
    fetchEntries();
  }, []);

  const handleTimesheetClick = () => {
    setTimesheetClicked(true);
  };

  const handleHomeClick = () => {
    setTimesheetClicked(false);
  };

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
        {!timesheetClicked ? (
          <a onClick={handleTimesheetClick} href="#">
            Weekly Timesheet
          </a>
        ) : (
          <a href="#" onClick={handleHomeClick}>
            Home
          </a>
        )}
        {isAuthenticated ? (
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        ) : null}
      </nav>

      <main>
        {!timesheetClicked && (
          <div class="welcome">
            <h2>Welcome, {name}</h2>
            <p>
              This is your time tracking dashboard. Use the form below to create a work time entry.
            </p>
          </div>
        )}

        <div className="section-container">
          {!timesheetClicked ? <Dashboard entries={entries} setEntries={setEntries} /> : <Charts />}
        </div>
      </main>
    </>
  );
}

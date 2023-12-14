import React, { useEffect, useState } from 'react';
import { getAllEntries, logout } from '../api';
import Charts from '../components/Charts';
import Dashboard from '../components/Dashboard';

export default function Home({ isAuthenticated, setIsAuthenticated, name }) {
  const [entries, setEntries] = useState([]);
  const [timesheetClicked, setTimesheetClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await getAllEntries();

        if (response.data.length) {
          setEntries(response.data);
        }
      } catch (error) {
        setError('Error fetching entries');
      } finally {
        setLoading(false);
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
    try {
      const response = await logout();
      if (response.status === 'success') {
        setIsAuthenticated(false);
      }
    } catch (error) {
      setError('Error logging out');
    }
  };

  return (
    <>
      <header>
        <h1>Your Time Tracking Buddy</h1>
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
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !timesheetClicked && (
          <div className="welcome">
            <h2>Welcome, {name}</h2>
            <p>
              This is your time tracking dashboard. Use the form below to create a work time entry.
            </p>
          </div>
        )}

        <div className="section-container">
          {!loading && !timesheetClicked ? (
            <Dashboard entries={entries} setEntries={setEntries} />
          ) : (
            <Charts />
          )}
        </div>
      </main>
    </>
  );
}

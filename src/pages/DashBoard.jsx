import React, { useEffect, useState } from 'react';
import { getAllEntries, logout } from '../api';
import CreateEntryForm from '../components/CreateEntryForm';
import EntriesTable from '../components/EntriesTable';

export default function DashBoard({ isAuthenticated, setIsAuthenticated }) {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await getAllEntries();

      if (response.data.length) {
        setEntries(response.data);
      }
    };
    fetchEntries();
  }, []);

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

        <CreateEntryForm setEntries={setEntries} />

        <EntriesTable entries={entries} setEntries={setEntries} />
      </main>
    </>
  );
}

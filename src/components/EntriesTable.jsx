import React, { useEffect, useState } from 'react';
import { getAllEntries } from '../api';
import formatDate from '../utils/formatDate';
import formatTime from '../utils/formatTime';
import getDayNameByDate from '../utils/getDayNameByDate';

export default function EntriesTable() {
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

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Day</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {entries?.map((entry, index) => {
          return (
            <tr>
              <td>{entries.length - index}</td>
              <td>{formatDate(entry.date)}</td>
              <td>{getDayNameByDate(entry.date)}</td>
              <td>{formatTime(entry.startTime)}</td>
              <td>{formatTime(entry.endTime)}</td>
              <td>{entry.note}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

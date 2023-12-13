import { useState } from 'react';
import { createWorkEntry } from '../api';
import validateTime from '../utils/validateTime';

export default function CreateEntryForm({ setEntries }) {
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const isValidTime = validateTime(startTime, endTime);

    if (!isValidTime) {
      return alert('Please provide a valid time gap');
    }

    const { data, status } = await createWorkEntry({ date, startTime, endTime, note });

    if (status === 'success') {
      setEntries(entries => {
        return [
          {
            id: entries.length ? entries.length + 1 : 1,
            date: data.date,
            startTime: `${data.startTime}:00`,
            endTime: `${data.endTime}:00`,
            note: data.note,
          },
          ...entries,
        ];
      });
    }
  };

  return (
    <form>
      <h2>Create Work Time Entry</h2>
      <label for="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        required
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <label for="startTime">Start Time:</label>
      <input
        type="time"
        id="startTime"
        name="startTime"
        required
        value={startTime}
        onChange={e => setStartTime(e.target.value)}
      />

      <label for="endTime">End Time:</label>
      <input
        type="time"
        id="endTime"
        name="endTime"
        required
        value={endTime}
        onChange={e => setEndTime(e.target.value)}
      />

      <label for="note">Note:</label>
      <input
        type="text"
        id="note"
        name="note"
        value={note}
        onChange={e => setNote(e.target.value)}
      />

      <button type="submit" onClick={handleSubmit}>
        Submit Entry
      </button>
    </form>
  );
}

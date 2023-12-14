import React from 'react';
import CreateEntryForm from './CreateEntryForm';
import EntriesTable from './EntriesTable';

export default function Dashboard({ entries, setEntries }) {
  return (
    <>
      <CreateEntryForm setEntries={setEntries} />
      <EntriesTable entries={entries} setEntries={setEntries} />
    </>
  );
}

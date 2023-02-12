import React, { useState } from "react";
import './Notes.css'
const StickyNote = ({ note, onDelete }) => (
  <div className="sticky-note">
    <p className="note-text">{note}</p>
    <button className="delete-button" onClick={onDelete}>
      Delete
    </button>
  </div>
);

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    setNotes([...notes, newNote]);
    setNewNote("");
  };

  const deleteNote = index => {
    setNotes(notes.filter((note, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Sticky Notes</h1>
      <div className="notes-container">
        {notes.map((note, index) => (
          <StickyNote
            key={index}
            note={note}
            onDelete={() => deleteNote(index)}
          />
        ))}
      </div>
      <div className="input-container">
        <textarea
          className="note-input"
          value={newNote}
          onChange={e => setNewNote(e.target.value)}
        />
        <button className="add-button" onClick={addNote}>
          Add Note
        </button>
      </div>
    </div>
  );
};

export default Notes;
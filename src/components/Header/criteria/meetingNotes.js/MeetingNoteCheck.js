import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { ACTIONS } from "../../../reviewState/Actions";
import "../quotations/quotation.css";

const MeetingNoteCheck = ({ dispatch, notes, weekID, leaderCode }) => {
  const [addNote, setAddNote] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("NoteChek", weekID);
    dispatch({
      type: ACTIONS.ADD_NOTES,
      payload: {
        id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
        value: addNote,
        weekID: weekID,
        leaderCode: leaderCode,
      },
    });
    setAddNote("");
  };
  const checkedHandler = (e) => {
    console.log("CheckedHandler", e.target.value, e.target.id);
    dispatch({
      type: ACTIONS.CHANGE_COMPLETE,
      payload: {
        isComplete: e.target.value,
        id: e.target.id,
        leaderCode: leaderCode,
      },
    });
  };

  return (
    <>
      {notes.map((note, index) => (
        <InputGroup key={index}>
          <Form.Control
            as="textarea"
            rows={1}
            placeholder={note.name}
            readOnly
          />

          <input
            className="FormCheck"
            type="checkbox"
            id={note.ID}
            checked={note.isComplete}
            value={note.isComplete}
            onChange={checkedHandler}
          />
        </InputGroup>
      ))}
      <Form onSubmit={(event) => submitHandler(event)}>
        <Form.Control
          onChange={(event) => setAddNote(event.target.value)}
          type="text"
          placeholder="+ Notes"
          size="sm"
          value={addNote}
          id={weekID}
        />
      </Form>
    </>
  );
};

export default MeetingNoteCheck;

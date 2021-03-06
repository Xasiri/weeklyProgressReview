import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ACTIONS } from "../../../reviewState/Actions";
import { useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";

import "../../../../Styles/Quotation/Quotation.scss";

const MeetingNoteCheck = ({ notes, weekID, leaderCode }) => {
  const [addNote, setAddNote] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
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
        <Row key={index} className="MeetingNote__list">
          <Col>
            <p>{`${index + 1}. ${note.name}`} </p>
          </Col>

          <Col xs={{ span: 1, offset: 5 }} md={{ span: 1, offset: 5 }}>
            <input
              className="MeetingNote_Check"
              type="checkbox"
              id={note.ID}
              checked={note.isComplete}
              value={note.isComplete}
              onChange={checkedHandler}
            />
          </Col>
        </Row>
      ))}
      <Form onSubmit={(event) => submitHandler(event)}>
        <Form.Control
          className="MeetingNote__Note"
          onChange={(event) => setAddNote(event.target.value)}
          type="text"
          placeholder="+ Notes"
          value={addNote}
          id={weekID}
        />
      </Form>
    </>
  );
};

export default MeetingNoteCheck;

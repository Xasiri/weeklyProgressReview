import React, { useState, useReducer } from "react";
import Header from "../Header/Header";
import MainReview from "../Header/main_review/MainReview";
import { ACTIONS } from "./Actions";
import { MeetingData } from "./TableState";
import produce from "immer";

const initialState = MeetingData;

function reducer(initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_ACTION:
      return produce(initialState, (draftState) => {
        draftState.map((data) => {
          if (data.TeamLeaderCode == action.payload.leaderCode) {
            data.weekData.map((week) => {
              if (week.weekID === action.payload.weekID) {
                week.approval.approvalComplete = action.payload.actionComplete;
                week.approval.date = action.payload.date;
              }
            });
          }
        });
      });

    case ACTIONS.ADD_NOTES:
      return produce(initialState, (draftState) => {
        draftState.map((data) => {
          if (data.TeamLeaderCode == action.payload.leaderCode) {
          }
          data.weekData.map((week) => {
            if (week.weekID === action.payload.weekID) {
              const newNote = {
                name: action.payload.value,
                isComplete: false,
                ID: action.payload.id,
              };
              week.notes.push(newNote);
            }
          });
        });
      });

    case ACTIONS.CHANGE_COMPLETE:
      return produce(initialState, (draftState) => {
        draftState.map((data) => {
          if (data.TeamLeaderCode == action.payload.leaderCode) {
            data.weekData.map((week) => {
              week.notes.map((note) => {
                if (note.ID === action.payload.id) {
                  note.isComplete = !note.isComplete;
                }
              });
            });
          }
        });
      });

    default:
      return initialState;
  }
}

Date.prototype.getWeek = function () {
  var onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
};

const getCurrentWeek = new Date().getWeek();

const ReviewState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [weekIs, setWeekIs] = useState(getCurrentWeek);
  const [leaderCode, setLeaderCode] = useState("01");

  const result = state.filter((data) => data.TeamLeaderCode == leaderCode);
  const weeksForReview = [];
  result[0].weekData.forEach(function (week) {
    const r = weekIs + 4;
    if (weekIs <= week.weekID && r >= week.weekID) {
      weeksForReview.push(week);
    }
  });

  return (
    <>
      <Header weekIs={weekIs} setWeekIs={setWeekIs} />
      <MainReview
        dispatch={dispatch}
        state={state}
        setLeaderCode={setLeaderCode}
        weeksForReview={weeksForReview}
        leaderCode={leaderCode}
      />
    </>
  );
};

export default ReviewState;

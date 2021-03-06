import { ACTIONS } from "./Actions";
import { MeetingData } from "../data/MeetingData";
import produce from "immer";

const initialState = MeetingData;

function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_STARTDATE:
      return produce(state, (draftState) => {
        draftState.map((data) => {
          data.startWeek = action.payload.startWeek;
          // console.log("Startsara", data.startWeek, action.payload.startWeek);
        });
      });

    case ACTIONS.ADD_ACTION:
      return produce(state, (draftState) => {
        draftState.map((data) => {
          if (data.TeamLeaderCode == action.payload.leaderCode) {
            data.weekData.map((week) => {
              if (week.weekID === action.payload.weekID) {
                console.log("fjsjf", action.payload.actionComplete);
                week.approval.approvalComplete = action.payload.actionComplete;
                week.approval.date = action.payload.date;
              }
            });
          }
        });
      });

    case ACTIONS.ADD_NOTES:
      return produce(state, (draftState) => {
        draftState.map((data) => {
          if (data.TeamLeaderCode == action.payload.leaderCode) {
          }
          data.weekData.map((week) => {
            if (week.weekID === action.payload.weekID) {
              // console.log("jshdjhds", action.payload);

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
      return produce(state, (draftState) => {
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
      console.log("object", state);
      return state;
  }
}

export default reviewReducer;

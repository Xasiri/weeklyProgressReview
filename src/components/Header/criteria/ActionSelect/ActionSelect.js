import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../../reviewState/Actions";
import Select from "react-select";

import "./ActionSelect.css";

const options = [
  { value: "completed", label: "COMPLETED", color: "green" },
  { value: "absent", label: "ABSENT", color: "red" },
  { value: "pending", label: "PENDING", color: "yellow" },
];

function dateValue() {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  const newdate = year + "/" + month + "/" + day;
  return newdate;
}

const ActionSelect = ({ weekID, leaderCode, approval }) => {
  const [completion, setCompletion] = useState("");
  const dispatch = useDispatch();

  const actionSelectHandler = (selectedOption) => {
    setCompletion(selectedOption);
    const date = dateValue();
    console.log(selectedOption, weekID, date, approval.approvalComplete);
    dispatch({
      type: ACTIONS.ADD_ACTION,
      payload: {
        date: date,
        actionComplete: selectedOption.label,
        weekID: weekID,
        leaderCode: leaderCode,
      },
    });
  };
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      overflow: "hidden",
      color: "red !important",
      // backgroundColor: approval.approvalComplete || "red",

      fontSize: 15,
      fontColor: "red",
      paddingLeft: "center",
      height: 46,
    }),
    singleValue: (styles) => ({
      ...styles,
      color:
        approval.approvalComplete === "ABSENT"
          ? "red"
          : approval.approvalComplete === "COMPLETED"
          ? "green"
          : "yellow",
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color:
          approval.approvalComplete === "ABSENT"
            ? "red"
            : approval.approvalComplete === "COMPLETED"
            ? "green"
            : "yellow",
      };
    },
  };
  return (
    <>
      <Select
        className="font-weight-bold"
        styles={colourStyles}
        options={options}
        onChange={actionSelectHandler}
        placeholder={approval.approvalComplete}
      />
      <p className="mt-3">{approval.date}</p>
    </>
  );
};

export default ActionSelect;

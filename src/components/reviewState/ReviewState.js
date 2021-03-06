// import React, { useState, useReducer } from "react";
// import MainReview from "../Header/main_review/MainReview";
// import WeekReview from "../pages/largeView/WeekReview";

// // Date.prototype.getWeek = function () {
// //   var onejan = new Date(this.getFullYear(), 0, 1);
// //   return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
// // };

// // const getCurrentWeek = new Date().getWeek();

// const ReviewState = () => {
//   // const [state, dispatch] = useReducer(reducer, initialState);
//   const [weekIs, setWeekIs] = useState("");
//   const [leaderCode, setLeaderCode] = useState("01");

//   // const result = state.filter((data) => data.TeamLeaderCode == leaderCode);
//   const weeksForReview = [];
//   // result[0].weekData.forEach(function (week) {
//   //   const r = weekIs + 4;
//   //   if (weekIs <= week.weekID && r >= week.weekID) {
//   //     weeksForReview.push(week);
//   //   }
//   // });

//   return (
//     <>
//       <MainReview
//         // dispatch={dispatch}
//         // state={state}
//         setLeaderCode={setLeaderCode}
//         weeksForReview={weeksForReview}
//         leaderCode={leaderCode}
//         />
//         <WeekReview />
//     </>
//   );
// };

// export default ReviewState;

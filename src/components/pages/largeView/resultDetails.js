export default function userResultWeeks(state, leaderCode, weekStart) {
  console.log(state);
  const weeksForReview = [];
  let arrayManipulation = [];
  let weekResult = [];
  let error = false;

  const result = state.filter(
    (data) => parseInt(data.TeamLeaderCode) === parseInt(leaderCode)
  );
  if (result.length) {
    result[0].weekData.forEach(function (week) {
      const r = weekStart + 3;
      if (
        (weekStart <= week.weekID && r >= week.weekID) ||
        "total" == week.weekID
      ) {
        weeksForReview.push(week);
      }
    });

    if (weeksForReview.length) {
      arrayManipulation = weeksForReview.shift();
      weeksForReview.push(arrayManipulation);
      weekResult = weeksForReview;
    }
  } else if (weekResult.length == 0) error = true;
  console.log(weekResult, error);
  const details = { weekResult: weekResult, error: error };
  return details;
}

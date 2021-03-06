import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { TeamContext } from "./context/TeamContext";
import ReviewState from "./components/reviewState/ReviewState";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamLeader from "./components/Header/criteria/TeamLeader/TeamLeader";
import MainNavigation from "./UIElements/navigation/MainNavigation";
import WeekReview from "./components/pages/largeView/WeekReview";
import useWindowDimensions from "./components/customHooks/getWindow";
import WeekOne from "./components/pages/largeView/WeekOne";
import CarousalComponent from "./components/pages/largeView/CarousalComponent";

function App() {
  const [teamLeaderData, setTeamLeaderData] = useState({
    teamLeaderCode: "",
    weekStart: "0",
  });

  let userInput = false;
  if (teamLeaderData.teamLeaderCode && teamLeaderData.weekStart) {
    userInput = true;
  }
  return (
    <TeamContext.Provider
      value={{
        weekStart: teamLeaderData.weekStart,
        leaderCode: teamLeaderData.teamLeaderCode,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <TeamLeader setTeamLeaderData={setTeamLeaderData} />
            </Route>

            <Route path="/week">
              {userInput ? (
                <CarousalComponent />
              ) : (
                <TeamLeader setTeamLeaderData={setTeamLeaderData} />
              )}
            </Route>
            <Route path="/total">
              {userInput ? (
                <CarousalComponent />
              ) : (
                <TeamLeader setTeamLeaderData={setTeamLeaderData} />
              )}
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </TeamContext.Provider>
  );
}

export default App;

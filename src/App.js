import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./Styles/index.scss";
import { TeamContext } from "./context/TeamContext";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamLeader from "./components/Header/criteria/TeamLeader/TeamLeader";
import MainNavigation from "./UIElements/navigation/MainNavigation";
import CarousalComponent from "./components/pages/largeView/Carosoul/CarousalComponent";

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

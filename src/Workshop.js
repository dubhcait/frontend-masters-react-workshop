import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// To see the final versions of each exercise, append .final to the path; 

import Exercise00 from "./00";
import Exercise01 from "./01";
import Exercise02 from "./02";
import { Timer as Exercise03 } from "./03/Timer";
import { Timer as Exercise04 } from "./04/Timer";
import { Timer as Exercise05 } from "./05/Timer";
import { ScratchApp } from "./scratch";
import { Exercise } from "./Exercise";

function getMarkdownLink(exercise) {
  return require(`./${exercise}/README.md`).default;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/00">
          <Exercise markdown={getMarkdownLink("00")}>
            <Exercise00 />
          </Exercise>
        </Route>
        <Route path="/01">
          <Exercise markdown={getMarkdownLink("01")}>
            <Exercise01 />
          </Exercise>
        </Route>
        <Route path="/02">
          <Exercise markdown={getMarkdownLink("02")}>
            <Exercise02 />
          </Exercise>
        </Route>
        <Route path="/03">
          <Exercise markdown={getMarkdownLink("03")}>
            <Exercise03 />
          </Exercise>
        </Route>
        <Route path="/04">
          <Exercise markdown={getMarkdownLink("04")}>
            <Exercise04 />
          </Exercise>
        </Route>
        <Route path="/05">
          <Exercise markdown={getMarkdownLink("05")}>
            <Exercise05 />
          </Exercise>
        </Route>
        <Route path="/">
          <Exercise markdown={getMarkdownLink("scratch")} backLink={null}>
            <ScratchApp />
          </Exercise>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

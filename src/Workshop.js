import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// To see the final versions of each exercise, append .final to the path;

import Exercise01 from "./01";
import Exercise02 from "./02";
import Exercise03 from "./03";
import Exercise04 from "./04";
import Exercise05 from "./05";
import { PokeApp  } from "./poke";
import { Exercise } from "./Exercise";

const  getMarkdownLink = (exercise) => {
  return require(`./${exercise}/README.md`).default;
}

const App = () => {
  return (
    <Router>
      <Switch>
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
          <Exercise markdown={getMarkdownLink("poke")} backLink={null}>
            <PokeApp />
          </Exercise>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

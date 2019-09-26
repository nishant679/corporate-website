import React from "react";
import news from "./containers/news";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/newsroom" component={news} />
      </div>
    </Router>
  );
}

export default App;

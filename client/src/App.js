import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} key={Books.title}/>
          <Route exact path="/books" component={Saved} key={Books.title}/>
          <Route component={NoMatch} key={Books.title}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

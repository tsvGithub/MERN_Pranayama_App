import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ShowPranayama from "./components/show-pranayama.component";
import EditPranayama from "./components/edit-pranayama.component";
import CreatePranayama from "./components/create-pranayama.component";
function App() {
  return (
    <Router>
      <div className="container">
        {/* <Link to="/enabling">
          <button>Enabling Route</button>
        </Link>
        <Link to="/disabling">
          <button>Disabling Route</button>
        </Link> */}

        {/* <Navbar /> */}

        <Route path="/" exact component={Navbar} />
        <Route path="/:id" component={ShowPranayama} />
        <Route path="/edit/:id" component={EditPranayama} />
        <Route path="/create" component={CreatePranayama} />
        <Route />
      </div>
    </Router>
  );
}

export default App;

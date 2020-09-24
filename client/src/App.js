import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ListPranayamas from "./components/list-pranayamas.component";
import EditPranayama from "./components/edit-pranayama.component";
import CreatePranayama from "./components/create-pranayama.component";
import SelectedPranayama from "./components/selected-pranayama.component";
// import ListDisabledPranayamas from "./components/list-disabled_pranayamas.component";
function App() {
  // debugger;
  return (
    <Router>
      <div className="container">
        <h1> Hello!</h1>
        <button>
          <Link to="/">Breath Pranayamas</Link>
        </button>
        <button>
          <Link to="/create">Create Pranayama</Link>
        </button>

        {/* <Link to="/">
          <button>All Pranayamas</button>
        </Link> */}
        {/* <Link to="/disabling">
          <button>Disabling Pranayamas</button>
        </Link> */}
        {/* <Link to="/create">
          <button>Create New Pranayama</button>
        </Link> */}

        {/* <Navbar /> */}

        {/* <Route path="/" exact component={Navbar} /> */}
        <Route path="/" exact component={ListPranayamas} />
        {/* <Route path="/disabling" exact component={ListDisabledPranayamas} /> */}
        <Route path="/edit/:id" exact component={EditPranayama} />
        <Route path="/create" exact component={CreatePranayama} />
        <Route path="/:id" exact component={SelectedPranayama} />
        {/*04/06 */}
        {/* <Route path="/disabling" exact component={ListDisabledPranayamas} /> */}
      </div>
    </Router>
  );
}

export default App;

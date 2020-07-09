import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";   //if get error on "Can't resolve 'react-router-dom'": need to import library
                            //https://reacttraining.com/react-router/web/guides/quick-start
                            //npm install --save react-router-dom

                          
import Dashboard from './Dashboard';
import CreateUser from './CreateUser';
import CreateUser2 from './CreateUser2';


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/createUser">Create User</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* <li>
            <Link to="/createUser2">Create User 2</Link>
          </li> */}
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/createuser">
            <CreateUser />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path= "/createUser2">
            <CreateUser2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
 
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;


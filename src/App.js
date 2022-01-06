import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";

import EmployeeList from "./components/employee list/EmployeeList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact="/">
          <Home />
        </Route>
        <Route to="/login">
          <Login />
        </Route>
        <Route to="/list">
          <EmployeeList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

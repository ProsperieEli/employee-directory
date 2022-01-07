import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import { UserProvider } from "./components/context/UserContext";
import ProfileCreate from "./views/profileCreate/ProfileCreate";
import EditProfile from "./views/profile/EditProfile";
import Header from "./components/header/Header";
import PrivateRoute from "./components/privacy/PrivateRoute";
import { ProfileProvider } from "./components/context/ProfileContext";

function App() {
  return (
    <UserProvider>
      <ProfileProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/profile">
              <ProfileCreate />
            </PrivateRoute>
            <PrivateRoute exact path="/edit-profile">
              <EditProfile />
            </PrivateRoute>
          </Switch>
        </Router>
      </ProfileProvider>
    </UserProvider>
  );
}

export default App;

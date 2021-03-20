import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import RidesInfo from './Components/RidesInfo/RidesInfo';
import NoMatch from './Components/NoMatch/NoMatch';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute.js/PrivateRoute';

export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
        <Router>
            <h4>e-mail: {loggedInUser.email}</h4>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/home">
                    <Homepage />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/login">
                    <Registration />
                </Route>
                <PrivateRoute path="/hire/:name">
                    <RidesInfo />
                </PrivateRoute>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
        </UserContext.Provider>
    );
}

export default App;

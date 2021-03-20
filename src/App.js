import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import RidesInfo from './Components/RidesInfo/RidesInfo';
import NoMatch from './Components/NoMatch/NoMatch';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
    return (
        <Router>
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
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/hire/:name">
                    <RidesInfo />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

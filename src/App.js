import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetails from './components/FriendDetails/FriendDetails';


function App() {


  return (
    <div >
<Router>
  <Switch>
    <Route path = "/home">
    <Home></Home>
    </Route>
    <Route path="/friend/:friendId">
    <FriendDetails></FriendDetails>
    </Route>
    <Route exact path="/">
    <Home></Home>
    </Route>
    <Route path="*">
    <NoMatch></NoMatch>
    </Route>
  </Switch>
</Router>


    </div>
  );
}

export default App;

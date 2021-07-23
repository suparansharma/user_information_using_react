import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Friend from './components/Friend/Friend';

function App() {

  const [friends,setFriends]=useState([]);
  useEffect(() =>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data=>setFriends(data))
  },[])
  return (
    <div >

   <h1>The number of users are : {friends.length}</h1>
   {
     friends.map(friend => <Friend friend={friend}></Friend>)
   }

    </div>
  );
}

export default App;

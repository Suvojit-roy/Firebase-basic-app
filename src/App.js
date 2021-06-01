
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Signup from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile'
import {auth} from './firebase';
import React,{useState,useEffect} from 'react'

function App() {
const [user,setUser]=useState('')
useEffect(()=>{
  auth.onAuthStateChanged(user=>{
    if(user) setUser(user)
    else setUser(null)
  })
},[])


  return (
    <Router>
        <Switch>
          
          <Route path="/profile" exact><Profile user={user}/></Route>
          <Route path="/" exact><Signup/ ></Route>
          <Route path="/login"  exact><Login/></Route>
        </Switch>

      </Router>
  );
}

export default App;

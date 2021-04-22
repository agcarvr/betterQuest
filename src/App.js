import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Nav from './Compontents/Nav/Nav'
import Home from './Compontents/Home/Home'
import Footer from './Compontents/Footer/Footer'
import User from './Compontents/User_Details/User_Deatails'
import Quest from './Compontents/Quests/Quests';



function App() {
  return (
    <div className="App">
      
      <Nav/>
      <main>
      
        <Route path='/' exact render={() => <Home/>}/>
        <Route path='/user' render={() => <User/>}/>
        <Route path='/quests' render={() => <Quest/>}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

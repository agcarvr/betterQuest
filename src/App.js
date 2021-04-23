import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Nav from './Compontents/Nav/Nav'
import Home from './Compontents/Home/Home'
import Footer from './Compontents/Footer/Footer'
import UserDetails from './Compontents/UserDetails/UserDetails'
import Quest from './Compontents/Quests/Quests';

const data = {
  "users": {
    "username": "Aide",
    "strength": "10",
    "endurance": "10",
    "wisdom": "10",
    "quests": [
      {
        "quest1": {
          "type": "Walking",
          "time": "5"
        }
      },
      {
        "quest2": {
          "type": "Studying",
          "time": "30"
        }
      },
      {
        "quest2": {
          "type": "Biking",
          "time": "15"
        }
      }
    ]
  }
}


function App() {
  return (
    <div className="App">
      
      <Nav/>
      <main>
      
        <Route path='/' exact render={() => <Home />}/>
        <Route path='/userdetails' render={() => <UserDetails data={data}/>}/>
        <Route path='/quests' render={() => <Quest data={data}/>}/>
        
      </main>
      <Footer/>
    </div>
  );
}

export default App;

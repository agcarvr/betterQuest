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
        // "quest1": {
          "type": "Walking",
          "time": "5",
          "stat": 'Endurance'
        // }
      },
      {
        // "quest2": {
          "type": "Studying",
          "time": "30",
          "stat": "Wisdom"
        // }
      },
      {
        // "quest2": {
          "type": "Biking",
          "time": "15",
          "stat": "Strength"
        // }
      }
    ]
  }
}


function App() {

  const [request, setRequest] = useState({});

  const makeAPICall = async () =>{
    try{
      const res = await fetch('');
      const apiData = await res.json();
      setRequest(apiData)
    } catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    makeAPICall()
  },[])

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

import { useState } from 'react';
import {Link} from 'react-router-dom'
import Sound from 'react-sound';
import QuestTheme from '../../sounds/happy.mp3';
import styles from './Quests.module.css';


export default function Quest({data, makeAPICall}){
    // console.log(` users strength:${data.strength[0]} users wisdom:${data.users.wisdom} users endurance${data.users.endurance}`)
    
    //thanks
    const scrollbox = {
    height:'120px',
    border:'1px solid #ccc',
    font: '16px/26px Georgia, Garamond, Serif',
    width:'40vw',
    overflow:'auto'};

    const [typeValue, setTypeValue] = useState("");
    const [timeValue, setTimeValue] = useState('');
    const [statValue, setStatValue] = useState('');
    const [newQuest, setNewQuest] = useState({
        "name": 'https://betterquest-api.herokuapp.com/user/1/',
        "stat": "",
        "total": "",
        "kind": ""
      });
    
    
    

    const handleChangeType = (e) => setTypeValue(e.target.value);
    const handleChangeTime = (e) => setTimeValue(e.target.value);
    const handleChangeStat = (e) => setStatValue(e.target.value);

 
      const updateStat = async (stat, time) => {
        const body = {
          "name": "https://betterquest-api.herokuapp.com/user/1/",
          
        }
        if( time / 30 >= 40 ){
          var newStat = 40
        } else{
          var newStat = Math.floor( time / 30 )
        }
        const stringStat = newStat.toString()
        console.log("sting stat:" + stringStat, "new stat:" + newStat)
        const oldStat = parseInt(data[stat][data[stat].length-1][stat])
        body[stat] = (oldStat + newStat).toString()
        // body[stat] = {
        //     "name": "https://betterquest-api.herokuapp.com/user/1/",
        //     stat: "20"
        // }
        try {
          const res = await fetch(`https://betterquest-api.herokuapp.com/${stat}/`,{
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
          })
          const data = await res.json()
          console.log(data)
          makeAPICall( )
        } catch (error) {
          console.log(error)
        }
      }
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
                'name': 'https://betterquest-api.herokuapp.com/user/1/',
                "stat": statValue,
                "total": timeValue,
                "kind": typeValue
        }
        try {
            const response = await fetch(
              "https://betterquest-api.herokuapp.com/quest/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
              }
            );
            const data = await response.json();
            // setTodos([..., data]);
            updateStat(statValue,timeValue)
            makeAPICall()
          } catch (error) {
            console.error(error);
          }
        // if(statValue === 'strength'){
        //     let numStat = parseInt(timeValue)
        //     let numUserStat = parseInt(data.users.strength)
        //     let newStat = (numStat / 30 * 5 ) + numUserStat
        //     if (newStat >= 40){
        //         newStat = 40
        //     }
        //     data.users.strength = newStat.toString()
        //     console.log(`new strength:${data.users.strength}`)
           
        // }
        // if(statValue === 'endurance' || statValue === ''){
        //     setStatValue('endurance')
        //     let numStat = parseInt(timeValue)
        //     let numUserStat = parseInt(data.users.endurance)
        //     let newStat = (numStat / 30 * 5 ) + numUserStat
        //     if (newStat >= 40){
        //         newStat = 40
        //     }
        //     data.users.endurance = newStat.toString()
        //     console.log(`new endurance:${data.users.endurance}`)
        // }
        // if(statValue === 'wisdom'){
        //     let numStat = parseInt(timeValue)
        //     let numUserStat = parseInt(data.users.wisdom)
        //     let newStat = (numStat / 30 * 5 ) + numUserStat
        //     if (newStat >= 40){
        //         newStat = 40
        //     }
        //     data.users.wisdom = newStat.toString()
        //     console.log(`new wisdom:${data.users.wisdom}`)
        // }
        // data.users.quests.unshift(newQuest);
        setTypeValue('');
        setTimeValue('');
        setStatValue('');
    };
    
    // console.log(data.users.quests)
    // console.log(typeValue, timeValue, statValue)

    return(
        <div className={styles.questules}>

            <Sound
               url={QuestTheme}
               playStatus={Sound.status.PLAYING}
               volume={3}
            >
            </Sound>

            <h1 className={styles.questheading}>Your New Quest for Today</h1>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300+display=swap" rel="stylesheet"></link>
            <form onSubmit={handleSubmit}>
                <label className={styles.questions} for='quest'>What stat did your quest enhance today? </label>
                <select className={styles.questname} id='quest' name='quest' value={statValue} onChange={handleChangeStat}>
                    <option className={styles.gains} value='null'>  </option>
                    <option className={styles.gains} value='endurance' >Endurance</option>
                    <option className={styles.gains} value='wisdom'>Wisdom</option>
                    <option className={styles.gains} value='strength'>Strength</option>
                </select><br/>
                <label className={styles.questions} for='quest-detail'>What did you do on your quest?</label>
                <input type='text' id='quest-detial' value={typeValue} onChange={handleChangeType}></input><br/>
                <label className={styles.questions} for='duration'>How long were you questing? (in minutes) </label>
                <input type='text' id='time' value={timeValue} onChange={handleChangeTime}></input><br/>
                <input type='submit' value='Declare your Quest'/>

                
            </form> 
            <h1 className={styles.username}>{data.username}'s Quests</h1>
            <ul style={scrollbox} className={styles.info}>
                {data.quest.map((quest, i) => {
                    return(
                        <li className={styles.levelup} style={{listStyleType: 'none'}} key={i}>
                            {data.username} leveled up their {quest.stat} while {quest.kind} for {quest.total} minutes
                        </li>
                    )
                })}
            </ul> 
            <Link to='/userdetails'>Profile</Link>
        </div>
    )
 }
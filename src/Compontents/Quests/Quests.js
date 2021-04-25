import { useState } from 'react';
import {Link} from 'react-router-dom'
import styles from './Quests.modules.css';


export default function Quest({data}){
    console.log(` users strength:${data.users.strength} users wisdom:${data.users.wisdom} users endurance${data.users.endurance}`)
    
    //thanks
    const scrollbox = {
    height:'120px',
    width:'100vw',
    border:'1px solid #ccc',
    font: '16px/26px Georgia, Garamond, Serif',
    overflow:'auto'};

    const [typeValue, setTypeValue] = useState("");
    const [timeValue, setTimeValue] = useState('');
    const [statValue, setStatValue] = useState('');
    
    

    const handleChangeType = (e) => setTypeValue(e.target.value);
    const handleChangeTime = (e) => setTimeValue(e.target.value);
    const handleChangeStat = (e) => setStatValue(e.target.value);

    let newQuest = {
        "type": typeValue,
        "time": timeValue,
        "stat": statValue,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(statValue === 'strength'){
            let numStat = parseInt(timeValue)
            let numUserStat = parseInt(data.users.strength)
            let newStat = (numStat / 30 * 5 ) + numUserStat
            if (newStat >= 40){
                newStat = 40
            }
            data.users.strength = newStat.toString()
            console.log(`new strength:${data.users.strength}`)
        }
        if(statValue === 'endurance' || statValue === ''){
            setStatValue('endurance')
            let numStat = parseInt(timeValue)
            let numUserStat = parseInt(data.users.endurance)
            let newStat = (numStat / 30 * 5 ) + numUserStat
            if (newStat >= 40){
                newStat = 40
            }
            data.users.endurance = newStat.toString()
            console.log(`new endurance:${data.users.endurance}`)
        }
        if(statValue === 'wisdom'){
            let numStat = parseInt(timeValue)
            let numUserStat = parseInt(data.users.wisdom)
            let newStat = (numStat / 30 * 5 ) + numUserStat
            if (newStat >= 40){
                newStat = 40
            }
            data.users.wisdom = newStat.toString()
            console.log(`new wisdom:${data.users.wisdom}`)
        }
        data.users.quests.unshift(newQuest);
        setTypeValue('');
        setTimeValue('');
        setStatValue('');
    };
    
    console.log(data.users.quests)
    console.log(typeValue, timeValue, statValue)

    return(
        <div>

            <h1>Your New Quest for Today</h1>
            <form onSubmit={handleSubmit}>
                <label for='quest'>what stat did your quest enhance today? </label>
                <select id='quest' name='quest' value={statValue} onChange={handleChangeStat}>
                    <option value='null'>  </option>
                    <option value='endurance' >Endurance</option>
                    <option value='wisdom'>Wisdom</option>
                    <option value='strength'>Strength</option>
                </select><br/>
                <label for='quest-detail'>What did you do on your quest?</label>
                <input type='text' id='quest-detial' value={typeValue} onChange={handleChangeType}></input><br/>
                <label for='duration'>How long were you questing? (in minutes) </label>
                <input type='text' id='time' value={timeValue} onChange={handleChangeTime}></input><br/>
                <input type='submit' value='Declare your Quest'/>

                
            </form> 
            <h1>{data.users.username}'s Quests</h1>
            <ul style={scrollbox}>
                {data.users.quests.map((quest, i) => {
                    return(
                        <li style={{listStyleType: 'none'}} key={i}>
                            {data.users.username} leveled up their {quest.stat} while {quest.type} for {quest.time} minutes
                        </li>
                    )
                })}
            </ul>
            <Link to='/userdetails'>Profile</Link>
        </div>
    )
 }
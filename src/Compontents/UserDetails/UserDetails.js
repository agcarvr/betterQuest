import {Link} from 'react-router-dom'
import styles from './UserDetails.modules.css';

export default function UserDetails({ data }) {
    return(

        <div>
             <img src="https://i.imgur.com/OF63QJV.png" width="200" height="200" className="app-logo" alt="betterQuest-app-logo" />
            <h1 className='hey-there'>|~ Hey There, {data.users.username}! ~|</h1>
            
            <h3 classname='stat-info'><u>Here are your current stats:</u></h3>
            
            <p><b>Strength:</b> {data.users.strength}</p>
            <p><b>Endurance:</b> {data.users.endurance}</p>
            <p><b>Wisdom:</b> {data.users.wisdom}</p>
            
            <Link to="/quests"><h3>How will you better yourself today?</h3></Link>
            
        </div>
    )
}
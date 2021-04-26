import {Link} from 'react-router-dom'

export default function UserDetails({ data }) {
    return(
        <div>

            <h1>Hey There, {data.users.username}!</h1>
            
            <h3><u>Here are your current stats:</u></h3>
            
            <p><b>Strength:</b> {data.users.strength}</p>
            <p><b>Endurance:</b> {data.users.endurance}</p>
            <p><b>Wisdom:</b> {data.users.wisdom}</p>
            
            <Link to="/quests"><h3>How will you better yourself today?</h3></Link>
            
        </div>
    )
}
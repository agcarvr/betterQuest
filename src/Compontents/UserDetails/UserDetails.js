import {Link} from 'react-router-dom'
import styles from './UserDetails.modules.css';
import  '../../Spritework/Black_Mage.gif';
import  '../../Spritework/White_Mage.gif';
import  '../../Spritework/Knight.gif';

export default function UserDetails({ data }) {
    return(
        <div className={styles.main}>
            <h1>Hey There, {data.users.username}!</h1>
            
            <h3><u>Here are your current stats:</u></h3>
            
            <p><img src="../../Spritework/Black_Mage.gif"/><b>Strength:</b> {data.users.strength}</p>
            <p><img src="../../Spritework/Knight.gif"/><b>Endurance:</b> {data.users.endurance}</p>
            <p><img src="../../Spritework/White_Mage.gif"/><b>Wisdom:</b> {data.users.wisdom}</p>
            
            <Link to="/quests"><h3>How will you better yourself today?</h3></Link>
            
        </div>
    )
}
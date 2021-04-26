import {Link} from 'react-router-dom'
import Sound from 'react-sound';
import Winds from '../../sounds/WindsOfStories.mp3'
import styles from './UserDetails.module.css';

export default function UserDetails({ data }) {
    return(

        <div>

            <Sound
            url={Winds}
            playStatus={Sound.status.PLAYING}
            volume={3}>
            </Sound>
            
             {/* <img src="https://i.imgur.com/OF63QJV.png" width="200" height="200" className="app-logo" alt="betterQuest-app-logo" /> */}
            <h1 className={styles.userheader}>|~ Hey There, {data.users.username}! ~|</h1>
            
            <div className={styles.surrounding}>
            <h3><u className={styles.UserDetails}>Here are your current stats:</u></h3>
            
            <p className={styles.UserGains}><b>Strength:</b> {data.users.strength}</p>
            <p className={styles.UserGains}><b>Endurance:</b> {data.users.endurance}</p>
            <p className={styles.UserGains}><b>Wisdom:</b> {data.users.wisdom}</p>
            <div className={styles.linkdivhome}>
            <Link to="/quests"><h3 className={styles.questlink}>Better Yourself Here</h3></Link>
            </div>
            </div>
        </div>
    )
}
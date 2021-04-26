import {Link} from 'react-router-dom';
import Sound from 'react-sound';
import TownTheme from '../../sounds/TownTheme.mp3';
import styles from './Home.module.css';


export default function Home (){
    return(
        <div>
            <Sound
            url={TownTheme}
            playStatus={Sound.status.PLAYING}>

            </Sound>
           
            <div className={styles.mainlogo}>
            {/* <img src="https://i.imgur.com/OF63QJV.png" width="200" height="200" className="app-logo" alt="betterQuest-app-logo" /> */}
            </div>
            <div className={styles.homebody}>
            <h1 className={styles.logoappname}>~ Welcome to your Real Life State Tracker ~</h1>
            <div className={styles.linkdivhome}>
            <Link to='/userdetails'  className={styles.userlink}><div>Profile</div></Link>
            <Link to='/quests' className={styles.questslink}> <div>Quests</div></Link>
            </div>
            </div>
            
        </div>
    )
}
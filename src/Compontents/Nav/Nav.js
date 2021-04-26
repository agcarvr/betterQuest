import {Link} from 'react-router-dom';
import styles from './Nav.module.css';


export default function Nav (){
    return(
        <div className={styles.navbar}>
            <Link to='/' className={styles.main}>
                <div className='header' >
                    <img src='https://i.imgur.com/OF63QJV.png' width="200" height="200" className="app-logo" alt="betterQuest-app-logo" ></img>
                </div>
            </Link>
        </div>
    )
}


import {Link} from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer () {
    return (
        <div className="footerbody">
            <h1>Better Quest</h1>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300+display=swap" rel="stylesheet"></link>
            <ul className="footletts">
                <li className={styles.links}><Link to='/'  className='user-link'><b>Profile</b></Link></li>
                <li className={styles.links}><Link to='/' className='user-link'> <b>Log out</b></Link></li>
                <li className={styles.links}><a href="" className=''><b>Donate</b></a></li>
                <li className={styles.links}><Link to='/' className=''><b>About Us</b></Link></li>
            </ul>
        </div>
    )
}
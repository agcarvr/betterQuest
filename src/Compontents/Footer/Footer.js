import {Link} from 'react-router-dom';
import "../../Spritework/GUIDe.png";
import styles from './Footer.modules.css';

export default function Footer () {
    return (
        <div className="footerbody">
            <h1>Better Quest</h1>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300+display=swap" rel="stylesheet"></link>
            <ul className="footletts">
                <li className="fuuut"><Link to='/'  className='user-link'><b>Profile</b></Link></li>
                <li className="fuuut"><Link to='/' className='user-link'> <b>Log out</b></Link></li>
                <li className="fuuut"><a href="" className=''><b>Donate</b></a></li>
                <li className="fuuut"><Link to='/' className=''><b>About Us</b></Link></li>
            <img src="../../Spritework/GUIDe.png" className="Guide"></img>
            </ul>
        </div>
    )
}
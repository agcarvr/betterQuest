import {Link} from 'react-router-dom';
import 'Footer.css';

export default function Footer () {
    return (
        <div className="footerbody">
            <h1>Better Quest</h1>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300+display=swap" rel="stylesheet"></link>
            <ul className="footletts">
                <li><Link to='/'  className='user-link'>Profile</Link></li>
                <li><Link to='/' className='user-link'> Log out</Link></li>
                <li><a href="" className=''><b>Donate</b></a></li>
                <li><Link to='/' className=''>About Us</Link></li>
            </ul>
        </div>
    )
}
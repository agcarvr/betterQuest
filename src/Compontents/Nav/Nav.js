import {Link} from 'react-router-dom';
import styles from './Nav.module.css';


export default function Nav (){
    return(
        <div className='nav-bar'>
            <Link to='/' className={styles.main}>
                <div className='header' >Better Quest</div>
            </Link>
        </div>
    )
}


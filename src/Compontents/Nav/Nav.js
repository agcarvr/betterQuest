import {Link} from 'react-router-dom';


export default function Nav (){
    return(
        <div className='nav-bar'>
            <Link to='/' className='nav-link home-link'><div className='header' >Better Quest</div></Link>
    
        </div>
    )
}
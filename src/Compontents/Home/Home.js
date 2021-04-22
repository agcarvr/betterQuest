import {Link} from 'react-router-dom'

export default function Home (){
    return(
        <div>
            <h1>this is home</h1>
            <Link to='/user'  className='user-link'><div>Profile</div></Link>
            <Link to='/quests' className='quests-link'> <div>Quests</div></Link>
        </div>
    )
}
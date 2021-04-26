import {Link} from 'react-router-dom'

export default function Home (){
    return(
        <div>
           
            <div>
            <img src="https://i.imgur.com/OF63QJV.png" width="200" height="200" className="app-logo" alt="betterQuest-app-logo" />
            </div>
            <div>
            <h1 className="logo-app-name">Welcome to your Real Life State Tracker</h1>
            <Link to='/userdetails'  className='user-link'><div>Profile</div></Link>
            <Link to='/quests' className='quests-link'> <div>Quests</div></Link>
            </div>
            
        </div>
    )
}
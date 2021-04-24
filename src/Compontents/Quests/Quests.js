import {Link} from 'react-router-dom'
const handleSubmit = () => {

}

export default function Quest(){
    return(
        <div>

            <h1>Your New Quest for Today</h1>
            <form onSubmit={handleSubmit}>
                <label for='quest'>what type of quest did you do today? </label>
                <select id='quest' name='quest'>
                    <option value='endurance'>Endurance</option>
                    <option value='wisdom'>Wisdom</option>
                    <option value='strength'>Strength</option>
                </select><br/>
                <label for='quest-detail'>What did you do on your quest?</label>
                <input type='text' id='quest-detial'></input><br/>
                <label for='duration'>How long were you questing? (in hours.minutes) </label>
                <input type='text' id='duration'></input>

                
            </form> 
            <h1>Your Quests</h1>
            <ul>
                <li>quest1</li>
                <li>quest2 </li>
            </ul>
            <Link to='/newquest' className='new-quest-link'>Add a Quest</Link>
        </div>
    )
}
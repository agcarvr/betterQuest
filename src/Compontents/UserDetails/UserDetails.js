export default function UserDetails({ data }) {
    return(
        <div>

            <h1>Hey There, {data.users.username}!</h1>
            
            <h3><u>Here are your current stats:</u></h3>
            
            <p><b>Strength:</b> {data.users.strength}</p>
            <p><b>Endurance:</b> {data.users.endurance}</p>
            <p><b>Wisdom:</b> {data.users.wisdom}</p>
            
            <h3>I wonder how much you will improve today!</h3>
            
        </div>
    )
}
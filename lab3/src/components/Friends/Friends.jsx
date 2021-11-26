import { useNavigate } from "react-router";

export default function Friends({user, users}) {
  const navigate = useNavigate();
  let friends = users.filter((item)=> user.friends.includes(item.id))
  return (
    <div>
      <h1>Friends of {user.name}</h1>
      <ul>
        {
          friends.map(item => (
            <li>{item.name}</li>
            ))
        }
        
      </ul>
    </div>
    
  )
}
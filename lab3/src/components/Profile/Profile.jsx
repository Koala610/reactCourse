import { useParams } from "react-router"

export default function Profile() {
  const { profile } = useParams();

  return (
    <section>
      <h1>Profile page!</h1>
      <p>Your selected profile is: Elon Musk</p>
    </section>
    
  )
}
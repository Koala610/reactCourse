export default function Home({user}) {

  return (
    <div>
      <h1>Hi {user.name !== "" ? user.name : "guest"}! This is my site!</h1>
      <h2>To access functionality log into your account</h2>
    </div>
    
  )
}
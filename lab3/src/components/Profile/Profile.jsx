

export default function Profile({user}) {
  if (user === undefined){
    return(
      <div>
        <h1>Error</h1>
      </div>
      )
  }

  return (
    <section>
      <h1>Profile</h1>
      <h2>Hi, {user.name}!</h2>
      <h2>Age: {user.age}!</h2>

    </section>
    
  )
}
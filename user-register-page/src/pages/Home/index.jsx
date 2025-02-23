import './style.css'
import Trash from "../../assets/trash.svg"
function Home() {

  const users = [
    {
      id: "23232",
      name: "John",
      age: 22,
      email: "calango@gmail.com"
    }, 
    {
      id: "23232",
      name: "Aline",
      age: 22,
      email: "aline@gmail.com"
    },
    
  ]
  return (
    <>
    <div>
      <div className='container'>
        <form>
          <h1>User's Register</h1>
          <input placeholder="Name" name="name" type="text" />
          <input placeholder="Age" name="age" type="number" />
          <input placeholder="E-Mail" name="e-mail" type="email" />
          <button type='button'> Register</button>
        </form>
      {users.map((user) => (
        <div key={user.id}>
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>E-mail: {user.email}</p>
        </div>
        <button>
          <img src={Trash}/>
        </button>
      </div>
      ))}
      </div>
      
    </div>
    </>
  )
}

export default Home

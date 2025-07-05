import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from "../../assets/trash.svg"
import api from '../../../services/api'

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/users')
    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    })
    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
    <div >
      <div className="flex justify-center items-center h-screen pt-[100px]">
        <form className='flex flex-col flex-wrap gap-8 p-8 rounded-xl bg-[#2E2D4E] w-[400px] max-w-1/2 mb-5'>
          <h1 className='text-white text-3xl text-center'>User's Register</h1>
          <input className='border-[1px] border-solid border-[#48456C] rounded-4xl h-10
          bg-[#363653] text-white text-[1rem] pl-2.5 outline-none' placeholder="Name" name="name" type="text" ref={inputName}/>
          <input className='border-[1px] border-solid border-[#48456C] rounded-4xl h-10
          bg-[#363653] text-white text-[1rem] pl-2.5 outline-none' placeholder="Age" name="age" type="number" ref={inputAge}/>
          <input className='border-[1px] border-solid border-[#48456C] rounded-4xl h-10
          bg-[#363653] text-white text-[1rem] pl-2.5 outline-none' placeholder="E-Mail" name="e-mail" type="email" ref={inputEmail}/>
          <button className='rounded-[30px] hover:opacity-80 bg-[#8B8AE1] h-10 cursor-pointer text-white font-bold border-none' type='button' onClick={createUsers}> Register</button>
        </form>
      {users.map((user) => (
        <div key={user.id} className='flex justify-between bg-[#2E2D4E] m-[10px] p-[10px] w-[400px] rounded-[10px]'>
        <div>
          <p className='text-white font-bold'>Name: <span className='font-normal'>{user.name}</span></p>
          <p className='text-white font-bold'>Age: <span className='font-normal'>{user.age}</span></p>
          <p className='text-white font-bold'>E-mail: <span className='font-normal'>{user.email}</span></p>
        </div>
        <button className='bg-transparent hover:opacity-50 border-none cursor-pointer' onClick={() => {deleteUsers(user.id)}}>
          <img className='max-w-[40px] max-h-[40px]' src={Trash}/>
        </button>
      </div>
      ))}
      </div>
      
    </div>
    </>
  )
}

export default Home

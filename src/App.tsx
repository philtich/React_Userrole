import './index.css'

import { useState, useEffect } from 'react'


import { Form } from './components/Form';
import { MemberView } from './components/View/MemberView';

export type Inputs = {
  id: number,
  firstname: string;
  lastname: string;
  role: string
  newsletter: boolean
}

function App() {
  
  const [members, setMembers] = useState([
    {
    id: 1,
    firstname: "Seppi",
    lastname: "Maier",
    role: "Editor",
    newsletter: false
   },
   {
    id: 2,
    firstname: "Mirka",
    lastname: "Selma",
    role: "User",
    newsletter: false
   },
   {
    id: 3,
    firstname: "Klausi",
    lastname: "Müller",
    role: "Editor",
    newsletter: false
   },
   {
    id: 4,
    firstname: "Gerhard",
    lastname: "Krisch",
    role: "Admin",
    newsletter: true
   },
   {
    id: 5,
    firstname: "Benedikt",
    lastname: "Müller",
    role: "User",
    newsletter: true
   }
  ])

  const deleteById = (id:number) => {
    const newMembersArray = members.filter((member: Inputs) => member.id !== id);
      setMembers(newMembersArray)
    }

  return (
    <main className='flex flex-col md:flex-row gap-8 md:gap-4 container h-screen justify-center items-center'>
    <Form allMembers={members}
    setMembers = {(arr: Inputs[]) => setMembers(arr)}/>
    <MemberView allMembers={members}
    deleteById={(id: any) => deleteById(id)}/>                 
    </main>
  )
}

export default App

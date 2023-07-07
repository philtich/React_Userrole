import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Inputs } from '../App';

type FormProps = {
    allMembers: Inputs[]
    setMembers: (arr: Inputs[]) => void
}

const schema = yup.object().shape({
  id: yup.number(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  role: yup.string().required(),
  newsletter: yup.boolean()
  
})


export function Form({ allMembers, setMembers }: FormProps) {
  const { register,
    handleSubmit,
    formState: { errors },
    } = useForm<Inputs>({
      resolver: yupResolver(schema),
    })

    
    const onSubmit = (data: Inputs, e: any) => {
       e.preventDefault();

      const newMember = {
       id: Math.random(), 
       firstname:  data.firstname,
       lastname: data.lastname,
       role: data.role,
       newsletter: data.newsletter
       }
      
       setMembers([newMember, ...allMembers])
       e.target.reset()
       
    }
    
    useEffect(() => {
        const storedMembers = localStorage.getItem('users');
        if (storedMembers) {
          setMembers(JSON.parse(storedMembers));
        }
      }, []);
    
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(allMembers));
      }, [allMembers]);

      
  return (
<section className='flex flex-col w-full md:w-1/2 justify-center items-center py-6'>
  <div className='flex justify-center items-center flex-col gap-4 w-full'>
    <h1 className="text-3xl font-bold  text-blue-500">User Form </h1>
    <form name="myForm"onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
      <input className="block" type="text" placeholder="FirstName" {...register("firstname")}/>
      <input className="block" type="text" placeholder="LastName" {...register("lastname")}/>
      <select form="myForm"{...register("role")}>
          <option value="User">User</option>
          <option value="Editor">Editor</option>
          <option value="Admin">Admin</option>
        </select>
        <div className='flex gap-1 flex-row'>
        <input type="checkbox" value=''{...register("newsletter")}/>
        <span>Newsletter</span>
      </div>
      <button className="bg-blue-500 text-white p-2 uppercase"type="submit">Absenden</button>
        {errors.firstname && <p className='errorP'>{"Please insert your First Name"}</p>}
        {errors.lastname && <p className='errorP'>{"Please insert your Last Name"}</p>} 
        {errors.lastname && <p className='errorP'>{"Please select your role"}</p>} 
    </form>
  </div>
</section>
  );
}


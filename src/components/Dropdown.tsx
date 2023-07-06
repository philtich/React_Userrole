import React, { useState } from 'react';
import Select from 'react-select';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type Inputs = {
  firstname: string;
  lastname: string;
  role: string
  newsletter: any
}

const members:any= []

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  role: yup.string().required(),
  newsletter: yup.boolean()

})


export function Dropdown() {
  const { register,
    handleSubmit,
    formState: { errors },
    } = useForm<Inputs>({
      resolver: yupResolver(schema),
    })
    
    const onSubmit = (data: Inputs, e: any) => {
      e.target.reset(); 

      const newMember = {
       firstname:  data.firstname,
       lastname: data.lastname,
       role: data.role,
       newsletter: data.newsletter
       }
      
      members.push(newMember)
      console.log(members);

      
    }

  return (
<>
<h1 className="text-3xl font-bold underline">
  Form 
  </h1>
  <form name="myForm"onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder="FirstName" {...register("firstname")}/>
    <input type="text" placeholder="LastName" {...register("lastname")}/>
    <button className="border border-black p-2"type="submit">Submit</button>
    {errors.firstname && <p>{"Please insert your First Name"}</p>}
    {errors.lastname && <p>{"Please insert your Last Name"}</p>} 
    {errors.lastname && <p>{"Please select your role"}</p>} 
    </form>
    <select form="myForm"{...register("role")}>
        <option value="User">User</option>
        <option value="Editor">Editor</option>
        <option value="Admin">Admin</option>
    </select>
    <span>Newsletter</span>
    <input type="checkbox" value=''
            {...register("newsletter")}/>
  </>
  );
}
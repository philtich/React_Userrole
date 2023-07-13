import React from 'react'

import { Inputs } from '../../App';

type MemberShowProps = {
    member: Inputs;
    deleteById:(id: any) => void
}
export const MemberShow = ({
    member: { lastname, firstname, role, id, newsletter}, deleteById}: MemberShowProps) =>{

  return (
    <div key={id}className='flex border-b border-gray-600 gap-6 justify-between items-center p-2'>
        <div className="flex flex-col gap-1">
            <div className='flex flex-col md:flex-row gap-1 w-1/2 md:w-full'>
                <p className='text-black'>{firstname}</p>
                <span className='text-black'>{lastname}</span>
            </div>
            <p className={`text-xs ${newsletter === true ? "text-green-400" : "text-red-400"}`}>Newsletter</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-end items-end md:justify-between w-full md:w-1/4'>
            <button onClick={() => deleteById(id)} className='rounded-full w-6 h-6 md:w-8 md:h-8 p-1 text-sm font-thin'><img src="/src/assets/delete-button-svgrepo-com.svg" alt="deletebutton"></img></button>
            <p className='text-black flex justify-center items-center'>{role}</p>    
        </div>        
    </div>
  )
}

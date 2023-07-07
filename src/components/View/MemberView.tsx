import React from 'react'
import { Inputs } from '../../App'
import { MemberShow } from './MemberShow'

type MemberViewProps = {
    allMembers: Inputs [],
    deleteById:(id: any) => void

}


export const MemberView =({ allMembers, deleteById }: MemberViewProps) => {
    
   
  return (
    <div className='grid border border-gray-300 items-center justify-between grid-cols-1 gap-2 p-1 md:p-6 overflow-y-auto overflow-x-hidden w-full md:w-1/2 h-[450px] mb-6 md:mb-0'>
            {allMembers.map((el: Inputs) => (
            <MemberShow key={el.id} member={el}
            deleteById={(id: any) => deleteById(id)}
            />
            ))}
        </div>
  )
}
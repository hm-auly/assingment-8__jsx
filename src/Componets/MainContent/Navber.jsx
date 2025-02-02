import React from 'react'
import NavUp from '../Setup/Nav/NavUp'
import NavDown from '../Setup/Nav/NavDown'
import Button from '../Setup/Btn/Button'
import { Outlet } from 'react-router-dom'

export  const  desh = () => {
  return (
    <>
        <section>
           <NavDown>
               <div>
                  <p className='text-gray-700'>back</p>
                  <Title>Dashboard</Title>
               </div> 

               <div className='flex gap-5 flex-col md:flex-row items-center'>
                  <div className='flex gap-3 bg-white w-[190px] rounded-md border-1 py-[12px] px-[10px] items-center'>
                     <i class="fa-solid fa-magnifying-glass"></i>
                     <input type="text" placeholder='Search incident' className='Navinput  w-[88px] ' />
                  </div>

                  <div className='NavinputDi flex gap-3 bg-white w-[190px] rounded-md border-1 py-[12px] px-[10px] items-center;'>
                     <input type="text" placeholder='Sort By: Date modified' className='Navinput' />
                  </div>

                    
                  
               </div>
            </NavDown>
        </section>

        <Outlet />
    </>
  )
}


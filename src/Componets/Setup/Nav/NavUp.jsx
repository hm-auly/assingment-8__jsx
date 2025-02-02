import React, { useState } from 'react'
import { Navlink, ProfileInfo } from '../Array'
import NavMano from './NavMano'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



function NavUp() {
    const [isactiv, setactiv] = useState(false);

    const mano = () => {
        setactiv(true);
        isactiv === true ? setactiv(false) : setactiv(true);
    }

  return (
  <section>
    <div className=' max-w-[1440px] flex  justify-center bg-secondary text-[#A1A1AA] px-5'>
        <div className='flex items-center justify-between w-[1269px] py-[18px]'>
            <div>
                <img src="/Logo.svg" alt="" />
            </div>
            <div className='md:flex lg:gap-8 gap-2 hidden'>
                {Navlink.map(({linkName, linkAdd}, index) => (
                    <div key={index}>
                        <Link to={linkAdd} className='hover:font-bold text-[9px] md:text-sm hover:text-black duration-300'>{linkName}</Link>
                    </div>
                ))

                }
            </div>

            <div className='md:flex items-center gap-3 hidden'>
               <div className='w-12 h-12 flex justify-center items-center bg-white rounded-full'> <i class="text-gray-500 fa-solid fa-bell text-3xl"></i></div>
               <div><img src="/Images/Proimg.svg" alt="" /></div>
               <div>
                {ProfileInfo.map(({Name, Gmail}, i) => (
                    <div key={i}>
                        <h4 className='font-[94px]'>{Name}</h4>
                        <p className='text-sm'>{Gmail}</p>
                    </div>
                ))}
               </div>
            </div>

            <button className='md:hidden block hover:text-gray-700' onClick={mano} >
            {isactiv === false ? <i class="fa-solid fa-bars text-3xl "></i> : <i class="fa-solid fa-xmark text-3xl "></i>}
            </button>
            
           
        </div>
   
    </div>
    {isactiv &&  <NavMano />}
    <Outlet />
 </section>   
  )
}
export default NavUp;

import React, { useState } from 'react'
import { Navlink, ProfileInfo } from '../Array'
import { Link } from 'react-router-dom'

function NavMano() {
    const [isactiv, setactiv] = useState(true);

   const mano = () => {
      setactiv(false);
      isactiv === true ? setactiv(false) : setactiv(true);
  }


  return (
    <>
    { isactiv &&
     <section className='px-5 py-5 h-screen '>

        
     <div className='flex items-center gap-5 '>
               <div><img src="/Images/Proimg.svg" alt="" /></div>
               <div>
                {ProfileInfo.map(({Name, Gmail}, i) => (
                    <div key={i}>
                        <h4 className='font-[94px]'>{Name}</h4>
                        <p className='text-sm'>{Gmail}</p>
                    </div>
                ))}
               </div>
               <div className='w-12 h-12 flex justify-center items-center bg-white rounded-full'> <i class="text-gray-500 fa-solid fa-bell text-3xl"></i></div>
      </div>

         <div className='flex  flex-col gap-3 py-5 px-5'>
            {Navlink.map(({linkName, linkAdd}, index) => (
                    <div key={index}>
                       <Link onClick={mano} to={linkAdd} className='hover:font-bold hover:text-black duration-300'>{linkName}</Link>
                    </div>
                 ))
            }
         </div>

     </section>
}
    </>
  )
}

export default NavMano
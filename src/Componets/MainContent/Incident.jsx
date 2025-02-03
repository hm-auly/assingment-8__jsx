import React from 'react'
import ImciNavDown from '../Setup/Nav/ImciNavDown';
import { incidenInfo } from '../Setup/Array';
import Title from '../Setup/Text/Title';

function Incident() {
  return (
   <>
      <section>
        <div className=''>

            <ImciNavDown />


          <div className='flex flex-col items-center gap-8 justify-center py-7'> 
            <div className='w-[753px]'>
            <Title>Which of these best describes the incident?</Title>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 w-[753px]'>
              {incidenInfo.map(({img, des}, i) => (
                <div key={i} className='bg-secondary w-[180px] h-[69px] flex items-center justify-start px-5 py-[22px] rounded-[6px] hover:shadow-sm hover:shadow-gray-500 duration-300'>
                  <div className='flex  gap-[10px]'>
                    <img src={img} alt="" />
                    <p className='text-[#71717A] '>{des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>  

        </div>
      </section>
   </>
  )
}

export default Incident;
import React from 'react'
import { DeshboartCardInfo } from '../Setup/Array';

function DeshbaortCard() {
  return (
    <>
        <section className='flex justify-center py-5'>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:w-[1300px] gap-5'>
                        {DeshboartCardInfo.map(({cardimg, cardhead, carddes,  price}, index) => (
                        <div key={index} className='shadow-md shadow-gray-400 hover:shadow-none w-[306px] h-[340px] transition-all duration-300 '>
                        <div className='flex flex-col gap-0.5'>
                              <div className=''>
                                 <img className='w-100 ' src={cardimg} alt="" />
                                 </div>
                                    <h4 className='font-bold leading-[30px] px-3'>{cardhead}</h4>
                                     <p className='text-xs text-[#71717A] px-3'>{carddes}</p>
                                    <p className='font-bold leading-[30px] px-3'>{price}</p>
                                 </div>
                                </div>
                            ))}
                         </div>
                 </div>
        </section>
    </>
  )
}

export default DeshbaortCard;
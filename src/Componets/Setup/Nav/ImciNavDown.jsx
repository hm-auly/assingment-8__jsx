import React from 'react'
import NavDown from './NavDown'
import Title from '../Text/Title'
import cn from '../Libe/cn'

function ImciNavDown({chldren}) {
  return (
    <>
      <section className='NavDoewn'>
        <div className='NavDoewnItem'>
                <div>
                    <div className='flex items-center gap-5'>
                        <div >
                           <p className='h-10 w-10 rounded-full hover:bg-[#b3b3cb] bg-[#E4E4E7] flex items-center justify-center'><i class="fa-solid fa-x  text-[#71717A] hover:text-black"></i></p>
                        </div>
                        <div>
                            <p className='text-[#71717A]'>Home - Incidents - New Incident</p>
                            <Title>New Incident</Title>
                        </div>
                    </div>
                </div>

                <div className=' lg:w-[527px] w-full h-1 bg-secondary rounded-[10px]'>
                    <div className='w-[98px] h-1 bg-primary'>

                    </div>
                </div>

                <div className='flex gap-3'>
                   
                    <button className='btn2'>Back</button>
                    <button className='btn'>Next step</button>
                </div>
           
        </div>
      </section>
    </>
  )
}

export default ImciNavDown
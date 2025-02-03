import React, { useState } from 'react'
import ImciNavDown from '../Setup/Nav/ImciNavDown';
import { incidenInfo } from '../Setup/Array';
import Title from '../Setup/Text/Title';
import { Link } from 'react-router-dom';

function Incident() {
  const [isactiv, setactiv] = useState(10)
  
  return (
   <>
      <section>
        <div>

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
                    <Link to="/next"> <button className='btn'>Next step</button> </Link>
                </div>
           
        </div>
      </section>


          <div className='flex flex-col items-center gap-8 justify-center py-7'> 
            <div className='w-[753px]'>
            <Title>Which of these best describes the incident?</Title>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 w-[753px]'>
              {incidenInfo.map(({img, des}, i) => (
                <div key={i} className={`incidentCard  bg-secondary ${isactiv === i && "inciC" }  `}  onClick={() => setactiv(i)} >
                  <div className='flex  gap-[10px]'>
                    <img src={img} alt="" />
                    <p className={`text-[#71717A] ${isactiv === i && "text-white"} `}>{des}</p>
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
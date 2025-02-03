import React, { useState } from 'react'
import DeshbaortCard from '../Setup/DeshbaortCard'
import NavDown from '../Setup/Nav/NavDown'
import Text from './Text'
import Title from '../Setup/Text/Title';
import { Link } from 'react-router-dom';

function Incidents() {
  //  const [isactiv, setactiv] = useState(false);
  //     const open = () => {
  //         isactiv === true ? setactiv(false): setactiv(true)
  //     }
  return (
    <>
      <section>
        <div>

        <NavDown>
              <div>
                  <p className='text-gray-700'>Home - Incidents</p>
                   <Title>Incidents</Title>
               </div> 

                <div  className='flex gap-5 flex-col md:flex-row items-center'>
                  <div className='flex gap-3 bg-white w-[190px] rounded-md border-1 py-[12px] px-[10px] items-center'>
                     <i class="fa-solid fa-magnifying-glass"></i>
                     <input type="text" placeholder='Search incident' className='Navinput  w-[88px] ' />
                  </div>

                  <div className='NavinputDi flex gap-3 bg-white w-[190px] rounded-md border-1 py-[12px] px-[10px] items-center;'>
                     <input type="text" placeholder='Sort By: Date modified' className='Navinput' />
                  </div>
                    
                    <Link to="/Stapber"> 
                        <button className='"bg-primary py-2 px-6 rounded-md bg-primary text-white shadow-md hover:shadow-gray-500 hover:bg-secondary hover:text-black transition-all duration-300"'><i class="fa-solid fa-plus"></i> New Incident</button>
                    </Link>
                </div>
          </NavDown>




          <DeshbaortCard > </DeshbaortCard>
        </div>
      </section>
    </>
  )
}

export default Incidents
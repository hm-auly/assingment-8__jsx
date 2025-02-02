import React, { useState } from 'react'
import { DeshboartCardInfo } from '../Setup/Array';
import NavDown from '../Setup/Nav/NavDown';
import Title from '../Setup/Text/Title';
import Text from './Text';

function Deshboard() {
    const [isactiv, setactiv] = useState(false);
    const open = () => {
        isactiv === true ? setactiv(false): setactiv(true)
    }
  return (
    <>
        <section> 
          <NavDown>
              <div>
                  <p className='text-gray-700'>back</p>
                   <Title>Dashboard</Title>
               </div> 

                <div  className='flex gap-5 flex-col md:flex-row items-center'>
                  <div className='flex gap-3 bg-white w-[190px] rounded-md border-1 py-[12px] px-[10px] items-center'>
                     <i class="fa-solid fa-magnifying-glass"></i>
                     <input type="text" placeholder='Search incident' className='Navinput  w-[88px] ' />
                  </div>

                  <div className='NavinputDi flex gap-3 bg-white w-[190px] rounded-md border-1 py-[12px] px-[10px] items-center;'>
                     <input type="text" placeholder='Sort By: Date modified' className='Navinput' />
                  </div>
                    <button className='"bg-primary py-2 px-6 rounded-md bg-primary text-white shadow-md hover:shadow-gray-500 hover:bg-secondary hover:text-black transition-all duration-300"'>Cypher AI</button>
                </div>
          </NavDown>

        <section className='flex  justify-center py-5'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-[1300px] gap-5'>
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

                <div></div>
             <div className='flex flex-col h-[490px]'>
              { isactiv === true &&  <Text />}
                 <div className='flex md:justify-end md:items-end justify-center h-[200px]   md:h-[480px]'>
                   <button onClick={open} className=''>
                     {isactiv === false ? <p className='text-content'>C</p> : <i class="fa-solid fa-xmark text-3xl text-content"></i>}
                   </button>
                 </div>
              </div>
              </div>
        </div>     
    </section>     
   </section>
 </>
  )
}

export default Deshboard;
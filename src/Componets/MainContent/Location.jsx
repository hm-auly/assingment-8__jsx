import React from 'react'
import Title from '../Setup/Text/Title'
import { Link } from 'react-router-dom'


const LOcanfo = [
  {
    by1: "Location",
    head1: "Tulare County,  Los Angles, CA 23415"
  },
  {
    by2: "Approx. Cost:",
    head2: "$60,607,456.00"
  },

]
// const mapfun = () => {
//   return <div>
//     {LOcanfo.map(({by1, head1, by2, head2}, i) => (

//     ))}
//   </div>
// }

// const {by1, head1, by2, head2} = LOcanfo[cu]

function Location() {
  return (
    <>
      <section>   
        <section className='NavDoewn'>
            <div className='NavDoewnItem'>
                <div>
                    <div className='flex items-center gap-5'>
                        <div >
                           <p className='h-10 w-10 rounded-full hover:bg-[#b3b3cb] bg-[#E4E4E7] flex items-center justify-center'><img src="/Fi/fi20.svg" alt="" /></p>
                        </div>
                        <div>
                            <p className='text-[#71717A]'>Incidents - DR-4699 March 2023 Severe Storms</p>
                            <Title >DR-4699 March 2023 Severe Stormst</Title>
                        </div>
                    </div>
                </div>


                <div className='flex gap-3'>
                   
                    <button className='btn2' >Back</button>
                    <Link to="/next3"> <button className='btn'>Next step</button> </Link>
                </div>
           
            </div>
        </section>

      <section className='flex justify-center'>
         <div className='w-[1300px] flex justify-between py-7'>
        <div className=' flex flex-col gap-[30px]'>
                <div className='flex items-center gap-6'>
                   <div className='bg-secondary hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center'>
                     <i class="fa-solid fa-location-dot text-[#71717A]"></i>
                   </div>
                   <div>
                     <p className='text-[#6B7280]'>Location</p>
                     <Title className={"text-[20px]"}>Tulare County, Los Angles, CA 23415</Title>
                   </div>
                 </div>

                 <div className='flex items-center gap-6'>
                   <div className='bg-secondary hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center'>
                   <i class="fa-brands fa-youtube text-[#71717A]"></i>
                   </div>
                   <div>
                     <p className='text-[#6B7280]'>Approx. Cost:</p>
                     <Title className={"text-[20px]"}>$60,607,456.00</Title>
                   </div>
                 </div>
                 <hr className='text-[#e4e4ec]' />
                 <div>
                   <p className='font-bold'>Description</p>
                   <p className='text-[#71717A] max-w-[677px]'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                 </div>
          
          </div>



          <div>
            <div className='flex flex-col gap-[10px]'>
              <p className='text-[#71717A]'>Incident Map</p>
              <img src="/Images/Lo3.svg" alt="" />
              <p className='text-[#71717A]'>Start 19.1232, -118.233     End 19.3245, -119.2323</p>
            </div>
          </div>



         </div>
      </section>
       
      </section>
    </>
  )
}

export default Location
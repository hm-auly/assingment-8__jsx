import React from 'react'
import Title from '../Setup/Text/Title'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const section1info = [
    {
        hed: "Let’s give the incident a title?",
        des: "Make a title that will easily identify the incidents"
    } 
];
const section2info = [
    {
        hed2: "Describe what happened during the incident?",
        des2: "Share some information about the incident. The when, where, how. "
    }
]


function Incident2() {
    let naviget = useNavigate()
  const handclick = () => {
    naviget("/stap")
  }

  return (
    <>
      <section className=''>
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

                <div className=' md:w-[300px] xl:w-[527px] w-full h-1 bg-secondary rounded-[10px]'>
                    <div className='w-[98px] h-1 bg-primary'>

                    </div>
                </div>

                <div className='flex gap-3'>
                   
                    <button className='btn2' onClick={handclick}>Back</button>
                    <Link to="/next3"> <button className='btn'>Next step</button> </Link>
                </div>
           
            </div>
          </section>

         <section className=' flex justify-center py-7 px-5'> 
           <div className='md:w-[752px] flex flex-col gap-4'> 
           <div>
            {section1info.map((prv, i) => (
                <div key={i}>
                        <Title>{prv.hed}</Title>
                        <p className='text-sm text-[#71717A] py-3'>{prv.des}</p>
                        <input type="text" placeholder='Add title here' className='border-none outline-none w-full py-3 px-[10px] bg-secondary' />
                </div>
            ))}
           </div>

           <div>
            {section2info.map((prv, i) => (
                <div key={i}>
                    <div>
                    <Title>{prv.hed2}</Title>
                        <p className='text-sm text-[#71717A] py-3'>{prv.des2}</p>
                        <textarea className='border-none outline-none bg-secondary w-full py-3 px-[10px] h-[127px] ' placeholder='Type here'></textarea>
                    </div>
                </div>
            ))}
         </div>
         </div> 
         </section> 

        </div>
      </section>
    </>
  )
}

export default Incident2
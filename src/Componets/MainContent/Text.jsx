import React from 'react'


function Text() {
    const imginfo = [
        {
            img: "/Images/camera.svg"
        },
        {
            img: "/Images/galery.svg"
        },
        {
            img: "/Images/miut.svg"
        },
    ]

    const textInfo = [
        {
            textMe: "Lorem ipsum dolar sit general sac mascho werho"
        },
        {
            textYOU: "Lorem ipsum dolar sit general sac mascho werho"
        },
        {
            textYOU: "Lorem ipsum dolar sit general sac mascho werho"
        },
        {
            textMe: "Lorem ipsum dolar sit general sac mascho werho"
        },
        {
            textYOU: "Enter your question..."
        }
    ]

  return (
    <>
        <section className='bg-[#F4F4F5] h-[475px]'>
          
             <h4 className='bg-primary h-16 text-2xl flex justify-center items-center font-bold text-white mb-4 '>Chat with Cypher</h4>
            {textInfo.map((pr, i) => (
                <div key={i}>
                   <div className='flex justify-end'>
                      <p className='bg-[#3F3F46] text-white  w-[231px] text-start px-3 rounded-md'>{pr.textMe}</p>
                   </div>
                    <div>
                       <p  className='bg-[#F4F4F5] text-black my-3 w-[231px] px-3 rounded-md' >{pr.textYOU}</p>
                    </div>
                </div>
            ))}
            <div className='flex justify-between items-center px-2 py-2'>
                <div className='flex gap-2'>
                    {imginfo.map(({img}, i) => (
                     <div key={i}>
                          <img src={img} alt="" />
                     </div>
                    ))}
                </div>
                <div>
                    <button className='btnText px-2 py-1 '>Send</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Text
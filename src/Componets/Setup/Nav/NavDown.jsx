import React from 'react'
import Button from '../Btn/Button';

function NavDown({children}) {
  return (
    <>
        <section className='py-5 max-w-[1440px] px-5 bg-secondary flex  justify-center'>
            <div className='flex flex-col md:flex-row gap-9 items-center justify-between w-[1268px]'>
                {children}
            </div>
                
        </section>
    </>
  )
}

export default NavDown;
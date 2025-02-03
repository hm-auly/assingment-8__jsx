import React from 'react'
import Button from '../Btn/Button';

function NavDown({children}) {
  return (
    <>
        <section className='NavDoewn'>
            <div className='NavDoewnItem'>
                {children}
            </div>
                 
        </section>
    </>
  )
}

export default NavDown;
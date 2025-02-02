import React, { Children } from 'react'
import cn from '../Libe/cn';

function Button({className, Children}) {
  return (
    <>
        <section>
            <div>
                <button className={cn("bg-primary py-2 px-6 rounded-md text-white shadow-md hover:shadow-gray-500 hover:bg-secondary hover:text-black transition-all duration-300", 
                   className)}>
                     {Children}
                </button>
            </div>
        </section>
    </>
  )
}

export default Button;
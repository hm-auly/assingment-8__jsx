import React from 'react'
import cn from './Libe/cn'

function NavSetup({className, children}) {
  return (
   <button className={cn("bg-red-500",
    className
    )}>
{children}

   </button>
  )
}

export default NavSetup
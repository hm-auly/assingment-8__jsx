import React from 'react'
import cn from '../Libe/cn'

function Title({className, children}) {
  return (
     <>
        <section>
            <div>
                <h1 className={cn("text-[26px] leading-[33px] font-bold text-black",
                    className
                )}>
                   {children}
                </h1>
            </div>
        </section>
     </>
  )
}

export default Title
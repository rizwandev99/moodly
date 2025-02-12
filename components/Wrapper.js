import React from 'react'

function Wrapper({children}) {
  return (
    <div 
    className='flex flex-col flex-1'
    >{children}</div>
  )
}

export default Wrapper
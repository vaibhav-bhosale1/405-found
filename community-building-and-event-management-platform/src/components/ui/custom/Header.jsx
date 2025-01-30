import React from 'react'
import { Button } from '../../ui/button'


const Header = () => {
  return (
    <div className='p-3 flex justify-between items-center shadow-sm px-5' >
        <div>Logo</div>
      <div className=''>
        <Button>Sign in</Button>
      </div>
    </div>
  )
}

export default Header

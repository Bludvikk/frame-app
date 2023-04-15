
import React from 'react'
import Container from '../Container'

import Search from './Search'
import Logo from './Logo'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <div className='fixed w-10/12 bg-slate-950 rounded-lg z-10 shadow-lg'>
        
        <div className='py-2 border-b-[1px]'>
            <Container>
              <div className='
              flex
              flex-row
              items-center
              justify-between
              gap-3
              md:gap-0
              '
              >
                <Logo />
                <Search />
                <UserMenu />
              </div>
            </Container>
        </div>
        
        </div>
  )
}

export default Navbar
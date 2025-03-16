import React from 'react'
import {HeaderLogo} from './header/index'

export default function Header() {
  return (
    <div className='navbarContainer'>
      <ul className='navbar'>
        <li className='link'><HeaderLogo /></li>
        <li className='link'>Finish</li>
        <li className='link'>Restart</li>
        <li className='link'>Help</li>
      </ul>
    </div>
  )
}

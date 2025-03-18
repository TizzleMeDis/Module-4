import React, {useState} from 'react'
import {HeaderLogo} from './header/index'

export default function Header({setFinished, setPlay, setCurrentQ, setAnswers}) {

  const handleRefresh = () => {
    setPlay(false);
    setFinished(false);
    setCurrentQ(0);
    setAnswers(0);
    setPlay(true);
    
  }

  const handleAutoComplete = () => {
    console.log("Finished from link")
    setFinished(true);
  }
  
  const handleHelpScreen = () => {

  }

  return (
    <div className={`navbarContainer`}>
      <ul className='navbar'>
        <li className='link'><a href='./'><HeaderLogo /></a></li>
        <li className='link'><button onClick={handleAutoComplete}>Finish</button></li>
        <li className='link'><button onClick={handleRefresh}>Restart</button></li>
        <li className='link'><button>Help</button></li>
      </ul>
    </div>
  )
}

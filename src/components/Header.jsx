import React, {useState} from 'react'
import {HeaderLogo} from './header/index'

export default function Header({setFinished, setPlay, setCurrentQ, setAnswers}) {
  const [visible, setVisible] = useState(false)

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
    setVisible(!visible)
  }

  return (
    <div className={`navbarContainer`}>
      <ul className='navbar'>
        <li className='link'><a href='./'><HeaderLogo /></a></li>
        <li className='link'><button className="generalBtn" onClick={handleAutoComplete}>Finish</button></li>
        <li className='link'><button className="generalBtn" onClick={handleRefresh}>Restart</button></li>
        <li className='link'><button className="generalBtn" onClick={handleHelpScreen}>Help</button></li>
      </ul>

      <div className={`help-screen${visible ? " invisible" : ""}`}>
        <h1 className='help-screen-title'>Help Screen</h1>
        <ul className='help-screen-list'>
          <li><p className='help-screen-text'>Want to reset the settings just press the logo Open-Trivia</p></li>
          <li><p className='help-screen-text'>If you want to restart the quiz just hit restart to jump you to the beginning</p></li>
          <li><p className='help-screen-text'>Lastly if you're done just click the Finish button to complete the quiz and see how many you got.</p></li>
          <li><p className='help-screen-text'>If you're done with the help screen just click help.</p></li>
        </ul>
      </div>
    </div>
  )
}

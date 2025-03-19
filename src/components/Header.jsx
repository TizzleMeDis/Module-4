import React, {useState} from 'react'
import {HeaderLogo} from './header/index'
import styles from './styles/Navbar.module.css'

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
    <div>
      <ul className={styles.navbar}>
        <li className={styles.link}><a href='./'><HeaderLogo /></a></li>
        <li className={styles.link}><button className={styles.generalBtn} onClick={handleAutoComplete}>Finish</button></li>
        <li className={styles.link}><button className={styles.generalBtn} onClick={handleRefresh}>Restart</button></li>
        <li className={styles.link}><button className={styles.generalBtn} onClick={handleHelpScreen}>Help</button></li>
      </ul>

      <div className={`${styles.helpScreen} ${visible ? styles.invisible : ""}`}>
        <h1 className={styles.helpScreenTitle}>Help Screen</h1>
        <ul className={styles.helpScreenList}>
          <li><p className={styles.helpScreenText}>Want to reset the settings just press the logo Open-Trivia</p></li>
          <li><p className={styles.helpScreenText}>If you want to restart the quiz just hit restart to jump you to the beginning</p></li>
          <li><p className={styles.helpScreenText}>Lastly if you're done just click the Finish button to complete the quiz and see how many you got.</p></li>
          <li><p className={styles.helpScreenText}>If you're done with the help screen just click help.</p></li>
        </ul>
      </div>
    </div>
  )
}

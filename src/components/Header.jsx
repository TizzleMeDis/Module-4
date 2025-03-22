import React, {useState} from 'react'
import {HeaderLogo} from './header/index'
import styles from './styles/Navbar.module.css'

export default function Header({setFinished, setPlay, setCurrentQ, setAnswers}) {
  const [visible, setVisible] = useState(true)

  const handleRefresh = () => {
    setPlay(false);
    setFinished(false);
    setCurrentQ(0);
    setAnswers(0);
    setPlay(true);
    
  }

  const handleAutoComplete = () => {
    console.log("Finished..")
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
          <li><p className={styles.helpScreenText}>Want to <em>reset the settings with new test.</em> Just <em>press</em> the <em>logo <b>Open-Trivia</b></em></p></li>
          <li><p className={styles.helpScreenText}>If you want to <em>restart the quiz</em> just <em>hit <b>restart</b></em> to jump you to the beginning</p></li>
          <li><p className={styles.helpScreenText}>Lastly if you're done just click the <em>Finish button</em> to <em>complete the <b>quiz</b></em> and see how many you got.</p></li>
          <li><p className={styles.helpScreenText}><em>If</em> you're <em>done</em> with the help screen just <em>Click <b>help.</b></em></p></li>
        </ul>
      </div>
    </div>
  )
}

import React from "react";
import HeaderLogo from "./HeaderLogo"
import styles from "../styles/Welcome.module.css"

export default function WelcomeText() {
  return (
    <div className={styles.welcomeText}>
      <h1>Welcome to</h1>
      <HeaderLogo />
    </div>
  );
}

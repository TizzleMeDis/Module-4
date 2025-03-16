import React, { useState, useEffect } from 'react'

export default function HeaderLogo() {
    const [colorIndex, setColorIndex] = useState(0); // holds state of color of text
    
    //----------- Design is to create a array of changing colors on the text -----------//
      useEffect(() => {
        const interval = setInterval(() => {
          setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
        }, 300); // Change speed here if needed
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []); // Starts interval to change state of color
    
      const triviaHeader = () => {
        return triviaWord.split("").map((char, index) => (
          <span key={index} style={{ color: colors[(index + colorIndex) % colors.length], transition: 'all ease 200ms' }}>{/** This line styles Each Letter to different colors */}
            {char}
          </span>
        ));
      };
    
    const triviaWord = "Open-Trivia";
    const colors = [
      "coral", "dodgerblue", "mediumseagreen", "goldenrod", "orchid",
      "salmon", "teal", "slategray", "lightcoral", "mediumorchid", "royalblue"
    ]; // Color pallete generated for special opener

    return (
        <h1 className='logo'>{triviaHeader()}</h1>
    )
}

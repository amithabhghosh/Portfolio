import React from 'react'
import './Banner.css'
import { useState,useEffect } from 'react'
import profileImage from '../../images/profileImage.png'
export const Banner = () => {
    const phrases = [
        "Front-End Developer.",
        "JavaScript Developer",
        "React Developer.",
      ];
    
      const [text, setText] = useState(""); 
      const [index, setIndex] = useState(0); 
      const [charIndex, setCharIndex] = useState(0); 
      const [isDeleting, setIsDeleting] = useState(false); 
      const typingSpeed = 200; // Typing speed
      const deletingSpeed = 200; // Deleting speed
      const delayBetweenPhrases = 1500; // Delay before starting the next phrase
    
      useEffect(() => {
        const handleTyping = () => {
          const currentPhrase = phrases[index];
    
          if (isDeleting) {
            // Remove characters
            setText(currentPhrase.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // Add characters
            setText(currentPhrase.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          }
    
          // When the phrase is fully typed
          if (!isDeleting && charIndex === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
          }
    
          // When the phrase is fully deleted
          if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          }
        };
    
        const typingDelay = isDeleting ? deletingSpeed : typingSpeed;
        const typingTimeout = setTimeout(handleTyping, typingDelay);
    
        return () => clearTimeout(typingTimeout); // Cleanup
      }, [charIndex, isDeleting, index, phrases]);
  return (
    <div className='banner'>
         <div className="bannerDetails">
            <h2>I am Amithabh Ghosh</h2>
            <h3>I am a <span>{text}</span></h3>
         </div>
         <div className="bannerImage">
            <img src={profileImage} alt="" />
         </div>
    </div>
  )
}

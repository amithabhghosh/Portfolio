import React from 'react'
import './AboutContent.css'
import profileImage from '../../images/profileImage.png'
export const AboutContent = () => {
  return (
    <div className='aboutContent'>
<h2>About Me</h2>
<div className="aboutMain">
    <img src={profileImage} alt="" />
    <div className="aboutDetails">
    <p>Hi, I’m Amithabh Ghosh, a budding Front-End Developer with a solid foundation in building responsive and dynamic web applications. I specialize in React and Redux, crafting efficient state-managed applications with seamless user interfaces.
        <br />

As a fresher, I bring enthusiasm, a quick learning ability, and a passion for turning ideas into impactful digital experiences. My experience includes creating interactive web components, integrating APIs, and optimizing performance for a great user experience.

I’m eager to contribute my skills to innovative projects and collaborate with teams to build applications that make a difference.</p>
<button>Download Resume</button>
    </div>
 

</div>
        </div>


  )
}

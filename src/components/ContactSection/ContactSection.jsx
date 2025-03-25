import React from 'react'
import './ContactSection.css'
export const ContactSection = () => {
  return (
    <div className='contactSection'>
<h2>Contact Me</h2>
<div className="nameColumn">
<input type="text"  placeholder='First Name' />
<input type="text" placeholder='Last Name' />
<input type="email" placeholder='Your Email Address'/>
<textarea name="" rows={5} placeholder='Enter Your Message'></textarea>

</div>
<button>Message Me</button>
    </div>
  )
}

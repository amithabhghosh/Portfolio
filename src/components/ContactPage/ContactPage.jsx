import React from 'react'
import './ContactPage.css'
export const ContactPage = () => {
  return (
    <div className='contactPage'>
        <h2>Contact Me</h2>
<div className="contactDetails">
<input type="text"  placeholder='First Name' />
<input type="text" placeholder='Last Name' />
<input type="email" placeholder='Your Email Address'/>
<textarea name="" rows={5} placeholder='Enter Your Message'></textarea>
</div>
<button>Message</button>
    </div>
  )
}

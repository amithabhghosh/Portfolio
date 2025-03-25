import React from 'react'
import './MajorProjects.css'
import doctorWebsite from '../../images/doctorWebsite.png'
import shopWebsite from '../../images/shopWebsite.png'
import protfolioImage from '../../images/Jobo.png'
import { Link, Links } from 'react-router-dom'
export const MajorProjects = () => {
  const doctorHandleClick=()=>{
    window.open("https://doctorworld.netlify.app/", "_blank", "noopener,noreferrer");
  }
  const ShopHandleClick=()=>{
    window.open("https://shoppee254.netlify.app/", "_blank", "noopener,noreferrer");
  }
  const PortfolioHandleClick=()=>{
    window.open("https://jobo-vkhb.onrender.com/", "_blank", "noopener,noreferrer");
  }
  return (
  <div className='majorProjects'>
<h2>Major Projects</h2>
<div className="majorProjectContainer">

<div className="majorProjectsBody">
   
    <img src={protfolioImage} alt="" />
    <p>My Personal Portfolio</p>
    <button onClick={PortfolioHandleClick}>View Website</button>

</div>

<div className="majorProjectsBody">
   
    <img src={doctorWebsite} alt="" />

<p>Hospital Appointment Booking Website</p>
<button onClick={doctorHandleClick}>View Website</button>
    
</div>

<div className="majorProjectsBody">
    
    <img src={shopWebsite} alt="" />
    <p>Ecommerce Platform</p>
  <button onClick={ShopHandleClick} >View Website</button>

</div>  


</div>
    </div>
    
  )
}

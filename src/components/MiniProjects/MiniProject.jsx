import React from 'react'
import './MiniProject.css'
import portfolioImage from'../../images/profolioImage.png'
import { Link } from 'react-router-dom'
import weatherWebsite from '../../images/weatherWebsite.png'
import moviewWebiste from '../../images/movieWebsite.png'
import burgerWebsite from '../../images/burgerWebsite.png'
export const MiniProject = () => {
  const handleWeatherClick=()=>{
    window.open("https://weatherforecastcityapp.netlify.app/", "_blank", "noopener,noreferrer");
  }
  const handleMovieClick=()=>{
    window.open("https://filmreviewing.netlify.app/", "_blank", "noopener,noreferrer");
  }
  const handleBurgerClick=()=>{
    window.open("https://burgerbrigade.netlify.app/", "_blank", "noopener,noreferrer");
  }
  return (
    <div className='miniProject'>
<h2>Mini Projects</h2>
<div className="miniProjectContainer">
<Link>
<div className="miniProjectBody">
    <img src={weatherWebsite} alt="" />
    <p>Weather Forecast Website</p>
    <button onClick={handleWeatherClick}>View Website</button>
</div>
</Link>
<Link>
<div className="miniProjectBody">
    <img src={moviewWebiste} alt="" />
    <p>Movie Review Website</p>
    <button onClick={handleMovieClick}>View Website</button>
</div>
</Link>
<Link>
<div className="miniProjectBody">
    <img src={burgerWebsite} alt="" />
    <p>Burger Website Design</p>
    <button onClick={handleBurgerClick}>View Website</button>
</div>
</Link>
</div>
    </div>
  )
}

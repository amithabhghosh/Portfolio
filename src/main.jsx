import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import { About } from './Pages/About.jsx'
import { Contact } from './Pages/Contact.jsx'
import { Projects } from './Pages/Projects.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },{
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      },{
        path:"/projects",
        element:<Projects/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>
<StrictMode>
    <App />
  </StrictMode>
 </RouterProvider>
 
)

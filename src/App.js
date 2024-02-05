import React from 'react'
import LayOut from './components/LayOut/LayOut'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Profolio from './components/Profolio/Profolio'
import Notfound from './components/Notfound/Notfound'
import Startframwork from './components/Startframwork/Startframwork'

export default function App() {
   const routers = createBrowserRouter([{
    path: '',
    element:<LayOut/> ,
    children :[
      {path:'' , element:<Startframwork/>},
      {path:'about' , element:<About/>},
      {path:'profolio' , element:<Profolio/>},
      {path:'contact' , element:<Contacts/>},
      {path:'*' , element:<Notfound/>}
    ],
   },
  ])
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}

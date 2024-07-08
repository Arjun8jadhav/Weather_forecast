import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './components/home'
import { Weather } from './components/weather'
const router= createBrowserRouter([
   {
      path: '/',
      element: (
         <Home/>
      )
   },
   {
      path: '/main',
      element: (
         <Weather/>
      )
   }
])
function App() {


  return (
    
     <>
      <RouterProvider router={router}/>
     </>
  )
}

export default App

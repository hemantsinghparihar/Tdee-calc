import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import Result from './pages/Result.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Terms from './pages/Terms.jsx'
import Privecy from './pages/Privecy.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/> 
      <Route path='about' element={<About/>}/> 
      <Route path='faq' element={<FAQ/>} />  
      <Route path='contact' element={<Contact/>} /> 
      <Route path='results' element={<Result/>}/>
      <Route path='terms' element={<Terms/>} />
      <Route path='privecy' element={<Privecy/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  </StrictMode>,
)

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import SignIn from './pages/signin'
import SignUp from './pages/signUp'
import Profile from './pages/Profile'
import HousePrediction from './pages/HousePrediction'
import React from 'react'
import './app.css'
function App() {
  return <BrowserRouter>
  <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/sign-in' element={<SignIn/>}></Route>
<Route path='/sign-up' element={<SignUp/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/profile' element={<Profile/>}></Route>
<Route path='/price-predict' element={<HousePrediction/>}></Route>



  </Routes>
  
  
  
  </BrowserRouter>
}

export default App

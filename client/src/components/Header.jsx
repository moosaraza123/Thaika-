import {FaSearch} from 'react-icons/fa'
import{Link} from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import './Header.css'
function Header() {
  return <>
  <header className='HeaderDiv'> 

<div className="HeaderICon" >
    
    </div>
    


    
    <form >

<input type="text" placeholder='  Search....'/>

    </form>

<div className="HeaderHome">

</div>

<div className="HeaderBtns">
<a href="/about">
<p>About</p>
</a>

</div>
<div className="HeaderBtns">

<a href="/sign-in">
<p>SignIn</p>
</a>

</div>


  </header>
  
  
  </>
}

export default Header
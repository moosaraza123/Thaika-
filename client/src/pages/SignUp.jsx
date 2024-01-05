import React from 'react'
import '../styles/SignIn.css'
import Sign from '/Sign.svg'
import Rectangle from '/Rectangle.svg'
import Google from '/google.svg'
import P from '/P.svg'
import '../styles/SignUp.css'
function SignUp() {
  return <>
  <div className="SignupDiv">
<div className="SignMockup">
<img srcset={Sign} id='mockup1' />

<div className="mockup2">
<img srcset={Rectangle} id='mockup2' />
<img src={P} id='mockup3' />


</div>

<a href="/sign-up" id='mockupText'>Already have an account?</a>
<a href="/sign-in" id='mockupText2'>Sign In</a>

</div>

<div className="SignInForm">

<form>

<div className="SinputFields">
<label htmlFor="text" className='label'>Username<span> *</span></label>
<input type="text" />

</div>

  <div className='SinputFields'>
<label htmlFor="email" className='label'>Email<span> * </span></label>
<input type="email" />
</div>

<div className="SinputFields">
<label htmlFor="password" className='label'>Password<span> *</span></label>
<input type="password" />

</div>



</form>

<button className='SignInBtn1'>Sign Up</button>
<button className='SignInBtn2'><img srcset={Google} />Continue with google</button>


</div>


  </div>
  
  
  
  </>
}

export default SignUp

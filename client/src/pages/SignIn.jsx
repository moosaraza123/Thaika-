import React from 'react'
import '../styles/SignIn.css'
import Sign from '/Sign.svg'
import Rectangle from '/Rectangle.svg'
import Google from '/google.svg'
import N from '/n.svg'
function SignUp() {
  return <>
  <div className="SignInDiv">
<div className="SignMockup">
<img srcset={Sign} id='mockup1' />

<div className="mockup2">
<img srcset={Rectangle} id='mockup2' />
<img src={N} id='mockup3' />


</div>

<a href="/sign-up" id='mockupText'>Don’t have an account?</a>
<a href="/sign-up" id='mockupText2'>Register here</a>

</div>

<div className="SignInForm">

<form>
  <div className='inputFields'>
<label htmlFor="email" className='label'>Email<span> * </span></label>
<input type="text" />
</div>

<div className="inputFields">
<label htmlFor="password" className='label'>Password<span> *</span></label>
<input type="password" />

</div>


</form>

<button className='SignInBtn1'>Sign in</button>
<button className='SignInBtn2'><img srcset={Google} />Continue with google</button>


</div>


  </div>
  
  
  
  </>
}

export default SignUp

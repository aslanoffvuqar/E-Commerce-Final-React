import React from 'react';
import style from './Sign_up.module.css';
import signImage from './Side Image.jpg';
import googleImage from './google.png';
export default function Sign_up() {
  return (
    <div className={style.container_signup}>
      <div className={style.img_sign_up}>
        <img className={style.img_sign_up2} src={signImage} alt="sign-up" />
      </div>
      <div className={style.create_account}>

<div className={style.main_text}>
<h1 className={style.exclusive_h1}>Log in to Exclusive</h1>
<p className={style.details_p}>Enter your details below</p>
</div>

        <div className={style.form_signup}>
          <div className={style.div_for_form}>
          <form className={style.form_input}>
            <div>
              <input 
                type="text" 
                className={style.input_name}  
                id="name" 
                placeholder="Name" 
              />
            </div>
            <div>
              <input 
                type="text" 
                className={style.input_email}  
                id="emailOrPhone" 
                placeholder="Email or Phone Number" 
              />
            </div>
            <div>
              <input 
                type="password"  
                className={style.input_password} 
                id="password" 
                placeholder="Password" 
              />
            </div>
          </form> 
          </div>
          
        </div>
      
<div className={style.buttons_div}>
<button className={style.button_create} type="submit">Create Account</button>
<button className={style.button_google} type="submit">
  <img className={style.buttonImage} src={googleImage} alt="Google" />
  <span>Sign up with Google</span>
</button>
</div>
<div className={style.footer_signup}>
<div className={style.have_account}><a href="#">Already have account?</a>
</div>
<div className={style.havelog}>
  <a href="#">Log in</a>
</div>
</div>
</div>













    </div>
  );
}

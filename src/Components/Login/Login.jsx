import React from 'react';
import style from './login.module.css';
import loginImage from './Side Image (1).jpg'; // убедитесь, что изображение находится в той же директории

export default function Login() {
  return (
    <div className={style.container}>
      <div className={style.img_login}>
        <img className={style.img_login2} src={loginImage} alt="login" />
      </div>

      <div className={style.form_main}>
        <h1 className={style.exclusive}>Log in to Exclusive</h1>
        <p className={style.details}>Enter your details below</p>
        <div className={style.frame755}>
          <form>
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
            <div className={style.botton_buttons}>
              <button className={style.button_1} type="submit">Log In</button>
              <p className={style.forget_passsword}>
                <a className={style.forget_passsword2} href="#">Forget Password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

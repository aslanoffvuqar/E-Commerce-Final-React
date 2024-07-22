import React, { useState } from "react";
import style from "./Sign_up.module.css";
import signImage from "./Side Image.jpg";
import googleImage from "./google.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { auth } from '../../Firebase/Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'
export default function Sign_up() {
  const { t } = useTranslation();
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  }
  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      createUserWithEmailAndPassword(auth, email, password)
      Swal.fire({
        title: "Good job!",
        text: "You success create account!",
        icon: "success"
      });
      history('/Login')
    } catch (err) {
      Swal.fire({
        title: 'error',
        text: 'Check your email address or password',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    }
  }
  return (
    <div className={style.container_signup}>
      <div className="allBox">
        <img className={style.img_sign_up} src={signImage} alt="sign-up" />

        <div className="container">
          <div className={style.create_account}>
            {/* <div className={style.main_text}> */}
            <h1 className={style.exclusive_h1}>{t("Create an account")}</h1>
            <p className={style.details_p}>{t("Enter your details below")}</p>

            <div className={style.form_signup}>
              <div className={style.div_for_form}>
                <form className={style.form_input} onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      className={style.input_name}
                      id="name"
                      placeholder={t("Name")}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className={style.input_email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="emailOrPhone"
                      placeholder={t("Email or Phone Number")}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className={style.input_password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      placeholder={t("Password")}
                    />
                  </div>

                  <div className={style.buttons_div}>
                    <button className={style.button_create} type="submit">
                      {t("Create Account")}
                    </button>
                    <button onClick={() => handleIconClick('https://mail.google.com/')} className={style.button_google} type="submit">
                      <img
                        className={style.buttonImage}
                        src={googleImage}
                        alt="Google"
                      />
                      <span>{t("Sign up with Google")}</span>

                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className={style.footer_signup}>
              {/* <div className={style.have_account}> */}
              <p>{t("Already have account?")}</p>
              {/* </div> */}
              {/* <div className={style.havelog}> */}
              <Link className={style.LoginLine} to="/Login">
                {t("Log in")}
              </Link>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

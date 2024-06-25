import React from "react";
import { useState } from "react";
import style from "./login.module.css";
import loginImage from "./Side Image (1).jpg";
import { useTranslation } from "react-i18next";
import { auth } from '../../Firebase/Firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const { t } = useTranslation();
  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("login successfully");
      history('/Home')
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div className={style.allBox}>
        <img className={style.img_login2} src={loginImage} alt="login" />
        <div className="container">
          <div className={style.form_main}>
            <h1 className={style.exclusive}>{t("Log in to Exclusive")}</h1>
            <p className={style.details}>{t("Enter your details below")}</p>
            <div className={style.frame755}>
              <form onSubmit={handleSubmit}>
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
                <div className={style.botton_buttons}>
                  <button className={style.button_1} type="submit">

                    {t("Log In")}
                  </button>
                  <p className={style.forget_passsword}>
                    <a className={style.forget_passsword2} href="#">

                      {t("Forget Password?")}
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

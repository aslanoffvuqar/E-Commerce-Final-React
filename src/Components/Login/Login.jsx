import React, { useState } from "react";
import style from "./login.module.css";
import loginImage from "./Side Image (1).jpg";
import { useTranslation } from "react-i18next";
import { auth } from '../../Firebase/Firebase';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Login() {
  const { t } = useTranslation(); 
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true); 
      Swal.fire({
        title: "Congratulations!",
        text: "You have successfully logged in!",
        icon: "success"
      });
      history('/UserHome');  
    } catch (err) {
      Swal.fire({
        title: 'error',
        text: 'Check your email address or password',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false); 
      Swal.fire({
        title: "Logged Out",
        text: "You have successfully logged out!",
        icon: "success"
      });
      history('/'); 
    } catch (err) {
      Swal.fire({
        title: 'error',
        text: 'An error occurred while logging out',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    }
  }

  return (
    <div>
      <div className={style.allBox}>
        <img className={style.img_login2} src={loginImage} alt="login" />
        <div className="container">
          <div className={style.form_main}>
            <h1 className={style.exclusive}>{t("Exclusive'a giriş yap")}</h1>
            <p className={style.details}>{t("Aşağıya bilgilerinizi giriniz")}</p>
            <div className={style.frame755}>
              {isLoggedIn ? (
                <div>
                  <button className={style.button_1} onClick={handleLogout}>
                    {t("Çıkış Yap")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      className={style.input_email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="emailOrPhone"
                      placeholder={t("Email veya Telefon Numarası")}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className={style.input_password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      placeholder={t("Şifre")}
                    />
                  </div>
                  <div className={style.botton_buttons}>
                    <button className={style.button_1} type="submit">
                      {t("Giriş Yap")}
                    </button>
                    <p className={style.forget_passsword}>
                      <a className={style.forget_passsword2} href="#">
                        {t("Şifremi Unuttum?")}
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
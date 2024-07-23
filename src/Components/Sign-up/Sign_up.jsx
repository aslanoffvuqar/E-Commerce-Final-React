import React, { useState, useEffect } from "react";
import style from "./Sign_up.module.css";
import signImage from "./Side Image.jpg";
import googleImage from "./google.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { auth } from '../../Firebase/Firebase';
import { createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import Swal from 'sweetalert2';

export default function Sign_up() {
  const { t } = useTranslation();
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  }
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: "Good job!",
        text: "You have successfully created an account!",
        icon: "success"
      });
      history('/Login');
    } catch (err) {
      Swal.fire({
        title: 'Error',
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
        title: 'Error',
        text: 'An error occurred while logging out',
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
            <h1 className={style.exclusive_h1}>{t("Create an account")}</h1>
            <p className={style.details_p}>{t("Enter your details below")}</p>
            <div className={style.form_signup}>
              <div className={style.div_for_form}>
                {isLoggedIn ? (
                  <div className={style.buttons_div}>
                    <button className={style.button_create} onClick={handleLogout}>
                      {t("Logout")}
                    </button>
                  </div>
                ) : (
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
                      <button onClick={() => handleIconClick('https://mail.google.com/')} className={style.button_google} type="button">
                        <img
                          className={style.buttonImage}
                          src={googleImage}
                          alt="Google"
                        />
                        <span>{t("Sign up with Google")}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className={style.footer_signup}>
              <p>{t("Already have account?")}</p>
              <Link className={style.LoginLine} to="/Login">
                {t("Log in")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import googleIcon from "../../assets/googleIcon.png";
import FacebookIcon from "../../assets/FacebookIcon.png";
import TwitterIcon from "../../assets/TwitterIcon.png";
import background from "../../assets/background.png";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <>
      <div className={styles.logo}>BabElhikam</div>
      <div className={styles.container}>
        <div className={styles.background}>
          <img src={background} alt="background" />
        </div>
        <div className={styles.loginForm}>
          <h2 className={styles.title}>Log into my account</h2>
          <p>
            Welcome back! Log in to access your favorite quotes, submit new
            ones, and continue your journey of inspiration and wisdom.
          </p>
          <div className={styles.socialButtons}>
            <button>
              <img src={googleIcon} alt="google" />
              Google
            </button>
            <button>
              <img src={FacebookIcon} alt="facebook" />
              Facebook
            </button>
            <button>
              <img src={TwitterIcon} alt="twitter" />
              Twitter
            </button>
          </div>
          <hr />
          <form action="" className={styles.form}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.email}
              placeholder="Work email"
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.password}
              placeholder="Password"
            />
            <div className={styles.forgotPassword}>
              <Link
                className={styles.forgotPasswordLink}
                to={"/forgot-password"}
              >
                <p className={styles.forgotPasswordText}>
                  <span>Forgot password?</span>
                </p>
              </Link>
            </div>
            <button>Login</button>
          </form>
          <hr />
          <div className={styles.center}>
            <p>
              No account yet?{" "}
              <Link className={styles.createAccountLink} to={"/"}>
                <span>Create an account</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

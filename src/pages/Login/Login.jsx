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
        <div className={styles.signUpForm}>
          <h2>Log into my account</h2>
          <p>
            Create a free account to save your favorite quotes, submit your own,
            and connect with a community of wisdom seekers. Start your journey
            today—it's quick and easy!
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
            <label htmlFor="">
              Password <p id={styles.passwordCheck}>(min. 8 char)</p>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.password}
              placeholder="Password"
            />
            <div className={styles.forgotPassword}>
              <Link className={styles.forgotPasswordLink}>
                <p className={styles.forgotPasswordText}>
                  <span>Forgot password?</span>
                </p>
              </Link>
            </div>
            <button>Create an account</button>
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

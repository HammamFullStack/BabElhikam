import React from "react";
import googleIcon from "../../assets/googleIcon.png";
import FacebookIcon from "../../assets/FacebookIcon.png";
import TwitterIcon from "../../assets/TwitterIcon.png";
import background from "../../assets/background.png";
import styles from "./signUp.module.css";
export const SignUp = () => {
  return (
    <>
      <div className={styles.logo}>BabElhikam</div>
      <div className={styles.container}>
        <div className={styles.background}>
          <img src={background} alt="signUp background" />
        </div>
        <div className={styles.signUpForm}>
          <h2>Create an account</h2>
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
            <label htmlFor="email" className={styles.block}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Work email"
              className={styles.block}
            />
            <label htmlFor="password" className={styles.block}>
              Password <p id={styles.passwordCheck}>(min. 8 char)</p>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={styles.block}
            />
            <label htmlFor="confirmPassword" className={styles.block}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={styles.block}
            />
            <button>Create an account</button>
          </form>
          <p>
            Already have an account? <span>Login here</span>
          </p>
        </div>
      </div>
    </>
  );
};

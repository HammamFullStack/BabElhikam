import React from "react";
import googleIcon from "../../assets/googleIcon.png";
import FacebookIcon from "../../assets/FacebookIcon.png";
import TwitterIcon from "../../assets/TwitterIcon.png";
import background from "../../assets/background.png";
import styles from "./signUp.module.css";
import { Link } from "react-router-dom";
export const SignUp = () => {
  return (
    <>
      <div className={styles.logo}>BabElhikam</div>
      <div className={styles.container}>
        <div className={styles.background}>
          <img src={background} alt="background" />
        </div>
        <div className={styles.signUpForm}>
          <h2 className={styles.title}>Create an account</h2>
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
            <label htmlFor="" >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.email}
              placeholder="Work email"
            />
            <label htmlFor="" >
              Password <p id={styles.passwordCheck}>(min. 8 char)</p>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.password}
              placeholder="Password"
            />
            <label htmlFor="" >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={styles.confirmPassword}
              placeholder="Confirm Password"
            />
            <button>Create an account</button>
          </form>
          <div className={styles.center}>
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className={styles.noUnderLine}>
                <span>Login here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

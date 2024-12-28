import React from "react";
import background from "../../assets/background.png";
import styles from "./ForgotPassword.module.css";
import { Link } from "react-router-dom";
export const ForgotPassword = () => {
  return (
    <>
      <div className={styles.logo}>BabElhikam</div>
      <div className={styles.container}>
        <div className={styles.background}>
          <img src={background} alt="background" />
        </div>
        <div className={styles.ForgotPasswordForm}>
          <h2 className={styles.title}>Forgot password?</h2>
          <p>
            We'll send you an email with instructions
          </p>
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
            <button>Recover Password</button>
          </form>
          <hr />
          <Link to={'/login'}><button className={styles.goBack}>Go Back</button></Link>
        </div>
      </div>
    </>
  );
};

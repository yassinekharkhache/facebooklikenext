import React from "react";
import styles from "../register/page.module.css";
import "../register/globals.css";
import { Lmodir } from "../register/page";
import Link from "next/link";

export default function register() {
  return (
    <div className={styles.container}>
      <Lmodir />
      <Loginform />
    </div>
  );
}

function Loginform() {
  return (
    <div className={styles.form}>
      <input type="text" placeholder="nickname or Email" />
      <input type="password" placeholder="password" />
      <p className={styles.redirect}>don't have account <Link href={"/register"}> register</Link></p>
      <input type="button" value="submit" />
    </div>
  );
}

import React from "react";
import styles from "./page.module.css";
import "./globals.css";
import Link from "next/link";

export default function login() {
  return (
    <div className={styles.container}>
      <Lmodir />
      <Registerform />
    </div>
  );
}

export function Lmodir() {
  return (
    <div className={styles.lmodir}>
      <h1>lmodir</h1>
      <p>
        Make it eazy to comunication
        <br />
        with the world
      </p>
    </div>
  );
}

function Registerform() {
  const days = [];
  for (let day = 1; day < 32; day++) {
    days.push(day);
  }
  const years = [];
  for (let year = 2025; year >= 1920; year--) {
    years.push(year);
  }
  return (
    <div className={styles.form}>
      <input type="text" placeholder="nickname" />
      <input type="email" placeholder="Email" />
      
      <div>
        <label>Birthday</label>
        <div className={styles.split}>
          <select id="day" required>
            <option value="">Day</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <select required>
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select required>
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.split}>
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last name" />
      </div>
      <input type="password" placeholder="password" />
      <input type="password" placeholder="image" />
      <p>already have account <Link href={"/login"}> register</Link></p>
      <input type="button" value="submit" />
    </div>
  );
}
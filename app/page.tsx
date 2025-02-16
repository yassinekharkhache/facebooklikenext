import styles from "./sidebar.module.css";
import Image from "next/image";
import "./globals.css";

export default function home() {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  );
}

export  function Sidebar() {
  return (
    <div className={styles.leftSidebar}>
      <div className={styles.logo}>
        <a href="/">
          <Image
          className={styles.logo}
          src="/logo.png"
          alt="Next.js logo"
          width={100}
          height={60}
          priority
        />
        </a>
      </div>
      <div className={styles.nav}>
        <div className={`${styles.menuItem} ${styles.secondary}`}>
          <i className="fas fa-home"></i> <span>&nbsp;Home</span>
        </div>
        <div className={`${styles.menuItem} ${styles.secondary}`}>
          <i className="fas fa-user"></i> <span>&nbsp;Profile</span>
        </div>
        <div className={`${styles.menuItem} ${styles.secondary}`}>
          <i className="fa-solid fa-user-group"></i> <span>&nbsp;Groups</span>
        </div>
        <div className={`${styles.menuItem} ${styles.secondary}`}>
          <i className="fas fa-envelope"></i> <span>&nbsp;Chats</span>
        </div>
        <div className={`${styles.menuItem} ${styles.secondary}`}>
          <i className="fas fa-bell"></i> <span>&nbsp;Notifications</span>
        </div>
        <div className={`${styles.menuItem} ${styles.danger}`}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i> <span>&nbsp;Sign out</span>
        </div>
      </div>
    </div>
  );
}

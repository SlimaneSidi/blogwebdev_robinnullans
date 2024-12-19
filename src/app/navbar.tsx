"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link href="/" legacyBehavior>
          <a className={styles.siteName}>BlogWebDev</a>
        </Link>
      </div>
      <div className={styles.right}>
        <Link href="/post" legacyBehavior>
          <a className={styles.siteName}>Créer un Post</a>
        </Link>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
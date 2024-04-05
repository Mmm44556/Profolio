import React from 'react';
import Links from './links/links';
import styles from './navbar.module.css';
import utils from '@/css/utils.module.css'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div >
        <Links />
      </div>
      <button className={utils.button}>
        Explore
      </button>
    </div>
  );
}

export default Navbar;

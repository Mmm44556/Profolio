"use client"
import { useState } from 'react';
import Navlink from './navlink/navlink';
import styles from './links.module.css';
const links = [
  {
    title: 'About us',
    path: '/about'
  },
  {
    title: 'Service',
    path: '/service'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'More',
    path: '/more'
  },

]
const Links = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={`${styles.links} `}>
        {
          links.map(e => (
            <Navlink key={e.title} items={e} />
          ))
        }
      </div>
      <button 
      className={styles.menuBtn}
      onClick={()=>setIsOpen(v=>!v)}>
        Menu
      </button>
      {
        isOpen && (<div className={styles.mobileLinks}>
          {
            links.map(e => <Navlink key={e.title} items={e} />)
          }
        </div>)
      }
    </div>
  );
}

export default Links;

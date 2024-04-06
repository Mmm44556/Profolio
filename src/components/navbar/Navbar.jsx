"use client"
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link'
import Navlink from './navlink/navlink';
import styles from './navbar.module.css';
const links = [

  {
    title: '首頁',
    path: '/home'
  },
  {
    title: '關於',
    path: '/about'
  },
  {
    title: '作品',
    path: '/portfolio'
  },
  {
    title: '聯絡',
    path: '/contact'
  }

]
const Navbar = () => {
  const topLine = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      'backgroundColor': "rgb(255,255,255)"
    }
  }
  const centerLine = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0,
    }
  }
  const bottomLine = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
      'backgroundColor': "rgb(255,255,255)"
    }
  }
  const listVar = {
    closed: {
      x: "100vw"
    },
    opened: {
      x: 0,
      transition: {
        when:"beforeChildren",
        staggerChildren: 0.2
      }
    }
  }
  const itemsVar = {
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border h-full px-4  sm:px-8 md:px-12 lg:px-18 xl:px-20 text-base">
      <div className='flex items-center justify-start gap-20 w-full'>

        <div className='hidden md:flex gap-6 '>
          {
            links.map(e => (
              <Navlink key={e.title} items={e} />
            ))
          }
        </div>
        {
          isOpen && (<motion.div
            variants={listVar}
            initial="closed"
            animate="opened"
            className={styles.mobileLinks}>
            {
              links.map(e => (
                <motion.div
                  variants={itemsVar}
                  key={e.title}>
                  <Navlink
                    items={e} />
                </motion.div>
              ))
            }
          </motion.div>)
        }
        <div className=' justify-center md:hidden lg:flex'>
          <Link href="/home"
            className='bg-black text-white rounded-lg p-1 font-semibold flex items-center md:hidden lg:flex'>
            <span className='text-white mx-1'>
              Mmm44556
            </span>
            <span className='bg-white text-black w-12 h-8 rounded-lg m-1 flex items-center justify-center' >.dev</span>
          </Link>

        </div>
      </div>

      <div className='flex items-center justify-center   w-4/12'>
        <button
          className='z-50  md:hidden h-8 flex flex-col fixed end-4 justify-between '
          onClick={() => setIsOpen(v => !v)}>
          <motion.div
            variants={topLine}
            animate={isOpen ? 'opened' : 'closed'}
            className={`w-10 h-1 rounded bg-black origin-left`}></motion.div>
          <motion.div
            variants={centerLine}
            animate={isOpen ? 'opened' : 'closed'}
            className={`w-10 h-1 rounded bg-black `}></motion.div>
          <motion.div
            variants={bottomLine}
            animate={isOpen ? 'opened' : 'closed'}
            className={`w-10 h-1 rounded bg-black  origin-left`}></motion.div>
        </button>
        <div className='flex gap-2   max-md:hidden'>
          <Link href="#">
            <Image
              alt="github"
              width={24}
              height={24}
              src={'/assets/social_media/github.svg'}
            />
          </Link>
          <Link href="#">
            <Image
            alt="gmail"
              width={24}
              height={24}
              src={'/assets/social_media/gmail.svg'}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

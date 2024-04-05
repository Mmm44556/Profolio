"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './navlink.module.css';
const Navlink = ({ items }) => {

  const pathName = usePathname();

  return (
    <>
      <Link href={items.path}
        className={`${style.container} ${pathName === items.path && style.active}`}>
        {items.title}
      </Link>
    </>
  );
}

export default Navlink;

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
        className={` ${pathName === items.path && style.active} rounded-md px-4`}>
        {items.title}
      </Link>
    </>
  );
}

export default Navlink;

"use client"
import React from 'react';
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <motion.div className='h-full' initial={{ y: '-200dvh' }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      Contact
    </motion.div>
  );
}

export default Contact;

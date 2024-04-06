"use client"
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '@/components/navbar/Navbar'
import { usePathname } from 'next/navigation'

const pathNameToZh = {
  'home': '首頁',
  'about': '關於',
  'portfolio': '作品',
  'contact': '聯絡'
}
const TransitionProvider = ({ children }) => {

  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait" >
      <div key={pathName} className='h-screen w-screen'>
        <motion.div className='w-screen h-screen bg-black fixed rounded-b-[100px] z-50'
          animate={{ height: '0dvh' }}
          exit={{ height: '140dvh' }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div className=' fixed m-auto top-0 bottom-0 left-0 right-0 text-white cursor-default text-8xl z-40 w-fit h-fit'
          initial={{ opacity: 1}}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {pathNameToZh[pathName.substring(1)]}
        </motion.div>
        <motion.div className='w-screen h-screen bg-black fixed rounded-t-[100px] bottom-0 z-30'
          initial={{ height: '140dvh' }}
          animate={{ height: '0dvh', transition: { delay: 0.5 } }}

        />
        <div className='h-24'>
          <Navbar />
        </div>
        <div className='h-[calc(100dvh-6rem)]'>
          {children}
        </div>
      </div>
    </AnimatePresence >
  );
}

export default TransitionProvider;

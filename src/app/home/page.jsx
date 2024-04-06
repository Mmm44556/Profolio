
"use client"
import Image from 'next/image';
import { motion } from 'framer-motion'
import utils from '@/css/utils.module.css'

// export const metadata = {
//   title: 'about title',
//   description: 'about description'
// }

const About = () => {
  return (
    <>

      <motion.div className='h-full' initial={{y:'-200dvh'}} animate={{y:"0%"}} transition={{duration:1}}>

        <div className="grid grid-cols-subgrid  md:grid-cols-2 h-full px-4  sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">

          <div className='max-md:order-last flex flex-col justify-center items-start gap-8' >
            <h2 className='text-6xl font-bold'>
              買上祐
            </h2>
            <span className='leading-8  text-xl'>
              我是一位能將想法轉為現實的前端開發人員，平常有想法時喜歡坐在電腦前搭配一杯咖啡開啟我的CODEING之旅
              ，這過程讓我很享受且很滿足。
            </span>
            <div className='flex gap-4'>
              <button className={`${utils.button} rounded-lg ring-black text-white bg-black ring-1 p-4`}>
                作品集
              </button>
              <button className={`${utils.button} rounded-lg ring-black text-black ring-1 p-4 border border-black`}>
                聯絡我
              </button>
            </div>
          </div>

          <div
            className='max-md:order-1 relative w-full  overflow-hidden  flex justify-end'>

            <div className='w-full h-full relative '>
              <Image
                fill
                className='aspect-auto object-contain scale-110 max-md:scale-150'
                src={'/assets/figure/graduation_2.png'} />
            </div>


          </div>

        </div>

      </motion.div>
    </>
  );
}

export default About;

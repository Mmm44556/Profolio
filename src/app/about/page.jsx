"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
const About = () => {
  const containerRef = useRef();
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const rotateForward = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateForward2 = useTransform(scrollYProgress, [0, 0.6], [-250, 0]);
  console.log(rotateForward2, isSkillRefInView)
  return (
    <motion.div className='h-full' initial={{ y: '-200dvh' }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className='h-full overflow-scroll md:flex' ref={containerRef}>

        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-20 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-3/5 max-md:w-full'>
          <div className='flex flex-col gap-12 justify-center '>
            <h2 className='font-bold text-2xl'>title</h2>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laborum. Iusto esse delectus voluptas consectetur, omnis, molestiae aspernatur nobis vero nesciunt, eum eius consequuntur optio non quos. Nulla, aspernatur. Aspernatur!
            </p>
            <span>
              quote
            </span>
          </div>
          <motion.div
            style={{ translateX: rotateForward2 }}
            transition={{ delay: 0.5 }}
            className='flex flex-col gap-12 justify-center '
            ref={skillRef}>
            <h2
              className='font-bold text-2xl border'>skill
            </h2>

            <div >skill list</div>

            <div>skill svg</div>

          </motion.div>

          <div className='flex flex-col gap-12 justify-center'>

            <h2 className='font-bold text-2xl'>exp</h2>
            <div>

              <div>
                list items
              </div>
            </div>
          </div>
        </div>

        <div className='hidden md:block w-1/3 border border-red-700 h-full'>
          <div className='border h-1/2'>
            <motion.div
              className='w-28 h-28 bg-blue-500 sticky top-1'
              style={{ rotate: rotateForward }}
            >
              svg
            </motion.div>
          </div>

          {/* <div className='border '>
            <motion.div
              className='w-40 h-40 bg-blue-500 sticky top-1'
              style={{ rotate: rotateForward }}
            >
              svg
            </motion.div>
            124343
          </div> */}
          <div className='border  h-5/6'>
            <motion.div
              className='w-28 h-28 bg-blue-500 sticky top-1'
              style={{ rotate: rotateForward }}>
              svg
            </motion.div>
          899878
          </div>
          <div className='border h-5/6'>
            4566788
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

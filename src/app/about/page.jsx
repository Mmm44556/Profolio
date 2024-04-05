import { Suspense } from 'react';
import Image from 'next/image';
import styles from './about.module.css'
import utils from '@/css/utils.module.css'

export const metadata = {
  title: 'about title',
  description: 'about description'
}

const About = () => {
  return (
    <>
      <div >

        <div className={styles.headerContainer}>
          <div className={styles.textContainer}>
            <h2>
              Deliver exceptional service that exceeds expectations
            </h2>
          </div>

          <div>
            <span>
              Experience the best service for all your needs. Sign up today!
            </span>

            <div >
              <input type="text"
                className={utils.input}
                style={{ marginRight: '1rem' }}
                placeholder='Enter your email!' />
              <button className={utils.button}>Sign up</button>
            </div>
            <span>By signing up, you agree to our Terms and Conditions.</span>
          </div>


        </div>

      </div>

      <div className={styles.imageContainer}>

        <Image
          src="/assets/banner.png"
          alt="banner"
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsLClZAAAE8gILvhEHFAAAAABJRU5ErkJggg=="
        />


      </div>

    </>
  );
}

export default About;

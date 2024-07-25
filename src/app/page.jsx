import React from 'react'
import styles from './home.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Explore the World Through Stories</h1>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        blanditiis adipisci minima reiciendis a autem assumenda dolore.
      </p>
      <div className={styles.buttons}>
        <Link href={'./blog'}><button className={styles.button}>Read Stories</button></Link>
        <Link href={'./contact'}><button className={styles.button}>Contact</button></Link>
      </div>
    </div>
  </div>
);
};

export default Home;
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
      Your ultimate destination for captivating travel stories and adventures. Immerse yourself in tales from around the world, discover hidden gems, and find inspiration for your next journey. Join our community of explorers and share your unique travel experiences. Whether you’re a seasoned globetrotter or planning your first trip, Wanderlust Chronicles has something for everyone. Let’s embark on this journey together!
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
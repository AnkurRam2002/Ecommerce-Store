import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          About Us
        </h1>
        <p className={styles.desc}>
        Welcome to VoyageVerse, your ultimate destination for exploring the world through the eyes of passionate travelers. Founded by a group of wanderlust enthusiasts, Travel Stories aims to bring the beauty and excitement of global adventures right to your screen. Our mission is to inspire, inform, and connect a community of travelers who share a love for discovering new places and cultures.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Exciting Stories</p>
          </div>  
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about2.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};


export default AboutPage
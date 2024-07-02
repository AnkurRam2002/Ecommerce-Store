import React from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'


const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image src='/post.png' alt="" fill className={styles.img} />
        </div>
      <div className={styles.textContainer}>
      <h1 className={styles.title}>Title</h1>
      <div className={styles.detail}>
       <Image src='/user.png' alt="" className={styles.avatar} width={50} height={50}/>
       <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Name</span></div>
        <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>Date</span>
       </div>
      </div>
      <div className={styles.content}>Desc</div>
      </div>
    </div>
  )
}

export default SinglePostPage
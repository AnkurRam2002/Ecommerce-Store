import React from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const data = await res.json()
  return data
}

const SinglePostPage = async ({params}) => {

  const {slug} = params;

  const posts = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image src='/post.png' alt="" fill className={styles.img} />
        </div>
      <div className={styles.textContainer}>
      <h1 className={styles.title}>{posts.title}</h1>
      <div className={styles.detail}>
       <Image src='/user.png' alt="" className={styles.avatar} width={50} height={50}/>
        <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>Date</span>
       </div>
      </div>
      <div className={styles.content}>{posts.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage
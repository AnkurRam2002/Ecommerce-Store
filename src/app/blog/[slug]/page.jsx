import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';

const getData = async (slug) => {
  const res = await fetch(`https://voyage-verse.vercel.app/api/blog/${slug}`,{next:{revalidate:1800}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({params}) => {

  const {slug} = params;

  const posts = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image src={posts.img} alt="image" 
          fill className={styles.img} />
        </div>
      <div className={styles.textContainer}>
      <h1 className={styles.title}>{posts.title}</h1>
      <div className={styles.detail}>
      <Suspense fallback={<div>Loading...</div>}>
       <PostUser userId={posts.userId} />
       </Suspense>
        <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{posts.createdAt?.toString().slice(0, 10)}</span>
       </div>
      </div>
      <div className={styles.content}>{posts.desc}</div>
      </div>
    </div>
  )
}

export default SinglePostPage
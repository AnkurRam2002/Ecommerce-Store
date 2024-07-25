import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import React from 'react'

export const metadata = {
  title: "Blog Page",
  description: "Blog description",
};

const getData = async () => {
  const res = await fetch("https://voyage-verse.vercel.app/api/blog", {next:{revalidate:1800}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {

  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage
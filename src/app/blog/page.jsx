import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import React from 'react'

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data
}

const BlogPage = async () => {

  const posts = await getData()

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
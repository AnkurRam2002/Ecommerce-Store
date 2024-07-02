import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import React from 'react'

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}

export default BlogPage
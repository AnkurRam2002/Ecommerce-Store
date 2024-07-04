import Image from 'next/image';
import React from 'react'
import styles from './postUser.module.css'

const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"});
    const data = await res.json()
    return data
  }

const PostUser = async ({userId}) => {

    const user = await getData(userId);
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
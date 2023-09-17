'use client'
import React, { useState } from 'react'
import NewsBox from '@/components/newsBox/NewsBox'
import { formatDate } from '@/utils/formatters'
import styles from './allNews.module.css'

const NewsFeed = ({ posts }) => {
  const [loadedPostsAmount, setloadedPostsAmount] = useState(6)
  const loadedPosts = posts
    .slice(0, loadedPostsAmount)
    .sort((a, b) => b.createdAt - a.createdAt)

  const handleShowMore = () => {
    setloadedPostsAmount((prev) => (prev += 6))
  }

  return (
    <>
      <div className={styles.allNews}>
        {loadedPosts.map((post) => (
          <NewsBox
            img="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/374695941_772865564844234_7895243309541219263_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Vj6wbot2FOwAX8Kz2Cw&_nc_ht=scontent-waw1-1.xx&oh=00_AfDmPeGD7L3OX8O7Jmd9Vy9LF-evJ549MurZ6qYYAjkgqg&oe=65070454"
            key={post.id}
            title="Post title"
            desc={post.message}
            createdAt={formatDate(post.createdAt)}
            id={post.id}
          />
        ))}
      </div>
      <div className={styles.feedInfo}>
        {loadedPostsAmount >= posts.length ? (
          <p className={styles.noNews}>No more news</p>
        ) : (
          <button className="btn" onClick={() => handleShowMore()}>
            Show more
          </button>
        )}
      </div>
    </>
  )
}

export default NewsFeed

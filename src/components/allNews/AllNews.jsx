'use client'
import React, { useState } from 'react'
import NewsBox from '@/components/newsBox/NewsBox'
import { formatDate } from '@/utils/formatters'
import styles from './allNews.module.css'

const AllNews = ({ posts }) => {
  const [loadedPostsAmount, setloadedPostsAmount] = useState(6)
  const loadedPosts = posts.slice(0, loadedPostsAmount)

  const handleShowMore = () => {
    setloadedPostsAmount((prev) => (prev += 6))
  }

  return (
    <>
      <div className={styles.allNews}>
        {loadedPosts.map((post) => (
          <NewsBox
            img={post.photos[0]}
            key={post.id}
            title="Post title"
            desc={post.message}
            createdAt={formatDate(post.createdAt)}
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

export default AllNews

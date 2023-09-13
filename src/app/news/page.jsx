import { getPagePosts } from '@server/db/services/pagePostService'
import { React } from 'react'
import styles from './page.module.css'
// import NewsBox from '@/components/newsBox/NewsBox'
import Image from 'next/image'
import { allNews } from '@/constants/data'
import { getText } from '@/utils/textUtils'
import AllNews from '@/components/allNews/AllNews'
// import { formatDate } from '@/utils/formatters'
export const metadata = {
  title: `${getText('home.meta.title')} | ${getText('page.news')}`,
  description: getText('home.meta.description'),
}

const News = async () => {
  const posts = await getPagePosts()

  return (
    <main>
      <div className={styles.mainNewsContainer}>
        <Image
          src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349298515_990978428579842_2940259476220223937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSDgRqwS_bYAX-dCkDY&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwqkjSW8i3uvonKP3v8jB8-K7WdEGxsYRcNdUv6Febmg&oe=64ADEE6C"
          alt="mainPoster"
          fill={true}
          className={styles.mainNewsPhoto}
        />
      </div>

      <div className={styles.allNewsContainer}>
        <h3 className={styles.allNewsTitle}>{allNews}</h3>
        <AllNews posts={posts} />
      </div>
    </main>
  )
}

export default News

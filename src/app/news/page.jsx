import { React } from 'react'
import styles from './page.module.css'
import NewsBox from '@/components/newsBox/NewsBox'
import Image from 'next/image'

const allNews = [
  {
    imgUrl:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349298515_990978428579842_2940259476220223937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSDgRqwS_bYAX-dCkDY&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwqkjSW8i3uvonKP3v8jB8-K7WdEGxsYRcNdUv6Febmg&oe=64ADEE6C',
    title: 'Polish Open',
    desc: 'PO Tournament',
    id: 0,
  },
  {
    imgUrl:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349298515_990978428579842_2940259476220223937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSDgRqwS_bYAX-dCkDY&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwqkjSW8i3uvonKP3v8jB8-K7WdEGxsYRcNdUv6Febmg&oe=64ADEE6C',
    title: 'European Open',
    desc: 'European Tournament',
    id: 1,
  },
  {
    imgUrl:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349298515_990978428579842_2940259476220223937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSDgRqwS_bYAX-dCkDY&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwqkjSW8i3uvonKP3v8jB8-K7WdEGxsYRcNdUv6Febmg&oe=64ADEE6C',
    title: 'Ichiban Cup',
    desc: 'Polsih Tournament',
    id: 2,
  },
  {
    imgUrl:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349298515_990978428579842_2940259476220223937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSDgRqwS_bYAX-dCkDY&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwqkjSW8i3uvonKP3v8jB8-K7WdEGxsYRcNdUv6Febmg&oe=64ADEE6C',
    title: 'Polish Open',
    desc: 'PO Tournament',
    id: 3,
  },
  {
    imgUrl:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349298515_990978428579842_2940259476220223937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSDgRqwS_bYAX-dCkDY&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwqkjSW8i3uvonKP3v8jB8-K7WdEGxsYRcNdUv6Febmg&oe=64ADEE6C',
    title: 'European Open',
    desc: 'European Tournament',
    id: 4,
  },
  {
    imgUrl:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349298515_990978428579842_2940259476220223937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSDgRqwS_bYAX-dCkDY&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwqkjSW8i3uvonKP3v8jB8-K7WdEGxsYRcNdUv6Febmg&oe=64ADEE6C',
    title: 'Ichiban Cup',
    desc: 'Polsih Tournament',
    id: 5,
  },
]

const News = () => {
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
        <h3 className={styles.allNewsTitle}>All news</h3>
        <div className={styles.allNews}>
          {allNews.map((item) => (
            <NewsBox
              img={item.imgUrl}
              key={item.id}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default News

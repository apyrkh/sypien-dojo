import { React } from 'react'
import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import ColorBar from '@/components/colorBar/ColorBar'
import Button from '@/components/button/Button'
import TitleText from '@/components/titleText/TitleText'
import NewsPoster from '@/components/newsPoster/NewsPoster'
import NewsBox from '@/components/newsBox/NewsBox'

const pageColor = '#DDB54D'

const mainNews = [
  {
    image:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/341038030_171995525756637_2302024163547647754_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FdIMy8Ia33cAX9J97ke&_nc_ht=scontent-waw1-1.xx&oh=00_AfAgBJmpvOZKiAnUKRyydFOs6oLCOu2kHOUfBpZ-28cbuQ&oe=64A6AF30',
    title: 'Polish Open',
    desc: 'PO Tournament',
    id: 0,
  },
  {
    image:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/341038030_171995525756637_2302024163547647754_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FdIMy8Ia33cAX9J97ke&_nc_ht=scontent-waw1-1.xx&oh=00_AfAgBJmpvOZKiAnUKRyydFOs6oLCOu2kHOUfBpZ-28cbuQ&oe=64A6AF30',
    title: 'European Open',
    desc: 'European Tournament',
    id: 1,
  },
  {
    image:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/341038030_171995525756637_2302024163547647754_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FdIMy8Ia33cAX9J97ke&_nc_ht=scontent-waw1-1.xx&oh=00_AfAgBJmpvOZKiAnUKRyydFOs6oLCOu2kHOUfBpZ-28cbuQ&oe=64A6AF30',
    title: 'Ichiban Cup',
    desc: 'Polsih Tournament',
    id: 2,
  },
]

const allNews = [
  {
    title: 'Polish Open',
    desc: 'PO Tournament',
    id: 0,
  },
  {
    title: 'European Open',
    desc: 'European Tournament',
    id: 1,
  },
  {
    title: 'Ichiban Cup',
    desc: 'Polsih Tournament',
    id: 2,
  },
  {
    title: 'Polish Open',
    desc: 'PO Tournament',
    id: 3,
  },
  {
    title: 'European Open',
    desc: 'European Tournament',
    id: 4,
  },
  {
    title: 'Ichiban Cup',
    desc: 'Polsih Tournament',
    id: 5,
  },
]

const News = () => {
  return (
    <main>
      <div
        className={styles.mainNewsContainer}
        style={{ backgroundColor: pageColor }}
      >
        {mainNews.map((item) => (
          <NewsPoster
            key={item.id}
            color={pageColor}
            image={item.image}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
      <div className={styles.allNewsContainer}>
        <h3 className={styles.allNewsTitle}>All news</h3>
        <div className={styles.allNews}>
          {allNews.map((item) => (
            <NewsBox
              key={item.id}
              color={pageColor}
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

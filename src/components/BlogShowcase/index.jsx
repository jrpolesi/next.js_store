import { useState } from 'react'
import { SectionTitle } from '../general/SectionTitle'
import { Card } from './Card'
import styles from './style.module.scss'

export function BlogShowcase(props) {
  const [posts, setPosts] = useState([])

  useState(() => {
    async function getPosts() {
      const res = await fetch('/api/blog/posts', { method: 'GET' })
      const data = await res.json()
      setPosts(data)
    }

    getPosts()
  }, [])

  const cards = posts.map((post) => (
    <Card
      key={post.id}
      data={{
        title: post.title,
        subtitle: post.subtitle,
        image: post.image
      }}
    />
  ))

  return (
    <section className={styles.showcase} style={{backgroundColor: `${props.backgroundColor}`}}>
      <div className='container'>
        <SectionTitle>our blog</SectionTitle>
        <div>
          {posts && cards}
        </div>
      </div>
    </section>
  )
}


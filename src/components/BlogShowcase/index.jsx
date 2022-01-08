import { useState } from 'react'
import { Card } from './Card'
import styles from './style.module.scss'

export function BlogShowcase() {
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
        subtitle: post.subtitle
      }}
    />
  ))

  return (
    <section className={styles.showcase}>
      {posts && cards}
    </section>
  )
}


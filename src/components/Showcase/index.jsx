import { Card } from './Card'
import styles from './style.module.scss'

export function Showcase(props) {
  const cards = props.data.map((card) => <Card key={card.id} data={card} />)
  return (
    <section className={styles.showcase}>
      <h1>{props.title}</h1>
      <div>{cards}</div>
    </section>
  )
}


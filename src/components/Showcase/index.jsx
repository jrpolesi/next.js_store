import { SectionTitle } from '../general/SectionTitle'
import { Card } from './Card'
import styles from './style.module.scss'

export function Showcase(props) {
  const cards = props.data.map((card) => <Card key={card.id} data={card} />)
  return (
    <section className={`${styles.showcase} ${styles[`${props.addClass}`]}`}  style={{backgroundColor: `${props.backgroundColor}`}}>
      <div className='container'>
        <SectionTitle>{props.title}</SectionTitle>
        <div>{cards}</div>
      </div>
    </section>
  )
}


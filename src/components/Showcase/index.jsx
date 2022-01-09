import { SectionTitle } from '../general/SectionTitle'
import { Card } from './Card'
import styles from './style.module.scss'

export function Showcase(props) {
  const cards = props.data.map((card) => <Card key={card.id} data={card} />)
  const style = props.backgroundColor && { backgroundColor: `${props.backgroundColor}` }
  return (
    <section
      className={`${styles.showcase} ${props.addClass ?
        styles[`${props.addClass}`] :
        ''}`}
      style={style}
    >
      <div className='container'>
        <SectionTitle>{props.title}</SectionTitle>
        <div>{cards}</div>
      </div>
    </section>
  )
}


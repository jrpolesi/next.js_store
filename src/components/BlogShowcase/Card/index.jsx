import styles from './style.module.scss'

export function Card(props){
  return(
    <article className={styles.card}>
      <img className={styles.card__image} src={props.data.image} alt={props.data.title} />
      <div>
        <h3 className={styles.card__title}>{props.data.title}</h3>
        <p className={styles.card__subtitle}>{props.data.subtitle}</p>
      </div>
    </article>
  )
}


import styles from './style.module.scss'

export function Card(props){
  return(
    <article className={styles.card}>
      <img className={styles.card__image} src="https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-beispiel-wei%C3%9F-stempel-text-auf-rotem-backgroud.jpg" alt={props.data.title} />
      <div>
        <h3 className={styles.card__title}>{props.data.title}</h3>
        <p className={styles.card__subtitle}>{props.data.subtitle}</p>
      </div>
    </article>
  )
}


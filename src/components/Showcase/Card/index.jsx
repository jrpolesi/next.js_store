import styles from './style.module.scss'

export function Card({ data, ...rest }) {
  return (
    <article className={styles.showcase__card}>
      <img className={styles.card__image} src={data.image} alt={data.title} />
      <div className={styles.card__info}>

        <div>
          <h3 className={styles.card__title}>{data.title}</h3>
          <span className={styles.card__price}>${data.price.toFixed(2)}</span>
        </div>

        <p className={styles.card__description}>{data.description}</p>

        <div className={styles.card__tag}>{data.category}</div>
      </div>
    </article>
  )
}
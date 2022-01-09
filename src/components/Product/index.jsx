import styles from './style.module.scss'

export function Product({ product, ...rest }) {
  return (
    <div className='container'>
      <section className={styles.product}>
        <div className={styles.product__imageWraper}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.product__info}>
          <div className={styles.product__titleContainer}>
            <h1 className={styles.product__title}>
              {product.title}
              <span className={styles.product__id}>.000{product.id}</span>
            </h1>
          </div>
          <div className={styles.product__category}>{product.category}</div>
          <p className={styles.product__description}>{product.description}</p>
          <span className={styles.product__price}>U$ {product.price.toFixed(2)}</span>
          <button className={styles.product__button}>Add to cart</button>
          <span>{product.rating.rate}</span>
        </div>
      </section>
    </div>
  )
}


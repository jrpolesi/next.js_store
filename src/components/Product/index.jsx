import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'

import starIcon from '../../assets/images/star-icon.svg'
import semiStarIcon from '../../assets/images/semistar-icon.svg'

export function Product({ product, ...rest }) {
  const [stars, setStars] = useState(null)

  useEffect(() => {
    const fullStars = Math.floor(product.rating.rate)
    const hasRest = !Number.isInteger(product.rating.rate)
    let stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <div className={styles.star}>
          <Image src={starIcon} alt='star' />
        </div>
      )
    }

    if (hasRest) {
      stars.push(
        <div className={styles.product__semistar}>
          <Image src={semiStarIcon} alt='star' />
        </div>
      )
    }

    setStars(stars)
  }, [])

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

          <div className={styles.product__imageWraper__mobile}>
            <img src={product.image} alt={product.title} />
          </div>

          <p className={styles.product__description}>{product.description}</p>

          <span className={styles.product__price}>U$ {product.price.toFixed(2)}</span>

          <button className={styles.product__button}>Add to cart</button>

          <div className={styles.product__stars}>
            {stars}
            <span>{product.rating.rate} ({product.rating.count})</span>
          </div>
        </div>

      </section>
    </div>
  )
}


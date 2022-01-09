import styles from './style.module.scss'
import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'

export function Cart(props) {
  const { products, setProducts } = useContext(CartContext)

  function handleDelete(){
    setProducts([])
  }

  const cartItems = products.map((product) => (
    <div key={product.id} className={styles.cart__item}>
      <div className={styles.cart__image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.item__info}>
        <h2>{product.title}</h2>
        <span>Quantity: {product.quantity}</span>
      </div>
      <span className={styles.item__price}>${(product.price * product.quantity).toFixed(2)}</span>
    </div>
  ))

  const totalPrice = products.reduce((acc, {price, quantity}) => acc + (price * quantity), 0)
  return (
    <section suppressHydrationWarning={true} className={`${styles.cart} ${props.className}`}>
      <div className={styles.cart__content}>
        <h2 className={styles.cart__title}>Meu carriho</h2>
        {cartItems.length > 0 ?
          <div className={styles.cart__items}>
            {cartItems}
          </div> :
          <h2>Carrinho vazio</h2>
        }
      </div>
      <div className={styles.cart__totalPrice} >
        <button onClick={handleDelete}>Delete cart</button>
        <p>Total: <span>${totalPrice.toFixed(2)}</span></p>
      </div>
    </section>
  )
}
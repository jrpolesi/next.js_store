import styles from './style.module.scss'
import Image from 'next/image'
import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'

export function Cart() {
  const { products } = useContext(CartContext)

  const cartItems = products.map((product) => (
    <div key={product.id}>
      <h2>{product.title}</h2>
      <span>{product.price * product.quantity}</span>
      {/* <img src={product.image} alt={product.title} /> */}
    </div>
  ))
  return (
    <section suppressHydrationWarning={true} className={styles.cart}>
      {cartItems}
    </section>
  )
}
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export function CartProvider(props) {
  const [products, setProducts] = useState([])

  useState(() => {
    if (typeof window !== 'undefined') {
      const products = JSON.parse(sessionStorage.getItem('cart'))
      if (products) {
        setProducts(products)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('cart', JSON.stringify(products))
    }
  }, [products])

  function increaseItem(cart, productId){
    const increased = cart.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1
        }
      } else {
        return product
      }
    })
    return increased
  }


  function addToCart(cart, product) {
    const item = cart.find(({ id }) => id === product.id)
    let updated
    if (item) {
      updated = increaseItem(cart, product.id)
    } else {
      updated = [...cart, product]
    }
    return updated
  }

  const values = { products, setProducts, addToCart }

  return (
    <CartContext.Provider value={values}>
      {props.children}
    </CartContext.Provider>
  )
}
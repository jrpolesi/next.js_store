import { CustomHead } from "../../components/CustomHead"
import { CartProvider } from "../../Contexts/CartContext"
import { Header } from "../../components/Header"
import { Showcase } from "../../components/Showcase"
import { Footer } from "../../components/Footer"

export default function Category(props) {
  return (
    <>
      <CustomHead title="Next.js store" />
      <CartProvider>
        <Header />
      </CartProvider>
      <Showcase data={props.products} addClass="noLargePadding" />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const products = await res.json()
  return {
    props: {
      products
    }
  }
}

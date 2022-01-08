
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Showcase } from "../../components/Showcase"

export default function Category(props) {
  return (
    <>
      <Header />
      <Showcase title={null} data={props.products} backgroundColor="#FFFFFF" />
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

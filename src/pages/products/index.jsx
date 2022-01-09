import { CustomHead } from "../../components/CustomHead"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Showcase } from "../../components/Showcase"

export default function Category(props) {
  return (
    <>
      <CustomHead title="Next.js store" />
      <Header />
      <Showcase title={'all products'} data={props.products} />
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

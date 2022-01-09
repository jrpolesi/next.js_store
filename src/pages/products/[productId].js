import { CustomHead } from "../../components/CustomHead"
import { Header } from "../../components/Header"
import { Card } from "../../components/Showcase/Card"
import { Footer } from "../../components/Footer"

export default function Category(props) {


  return (
    <>
      <CustomHead title="Next.js store" />
      <Header />
      <Card data={props.product} />
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const productId = context.params.productId
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
  const product = await res.json()
  return {
    props: {
      product
    }
  }
}


export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  const paths = products.map((product) => ({
    params: {
      productId: product.id.toString()
    }
  }))

  return {
    paths: paths,
    fallback: 'blocking'
  }
}
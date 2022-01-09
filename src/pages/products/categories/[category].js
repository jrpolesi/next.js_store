import { Showcase } from "../../../components/Showcase"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { CustomHead } from "../../../components/CustomHead"

export default function Category(props) {


  return (
    <>
      <CustomHead title="Next.js store" />
      <Header />
      <Showcase title={null} data={props.products} addClass="noLargePadding"/>
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const category = context.params.category
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  const products = await res.json()
  return {
    props: {
      products
    }
  }
}


export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  const categories = await res.json()

  const paths = categories.map((category) => ({
    params: {
      category: category
    }
  }))

  return {
    paths: paths,
    fallback: false
  }
}
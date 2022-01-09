import styles from '../styles/Home.module.scss'
import { CustomHead } from '../components/CustomHead'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HomePicture } from '../components/HomePicture'
import { Showcase } from '../components/Showcase'
import { BlogShowcase } from '../components/BlogShowcase'

export default function Home(props) {
  return (
    <>
      <CustomHead title="Next.js store" />

      <Header isTransparent={true}/>
      <HomePicture />

      <Showcase title={'new products'} data={props.data.mainProducts} />
      <Showcase title={props.data.randomCategory.category} data={props.data.randomCategory.data} backgroundColor="#ECECEC" />
      <BlogShowcase backgroundColor="#FFFFFF" />

      <Footer />
    </>
  )
}

// Para renderizar nossos componentes com dados diretamente pelo servidor (SSR: Server Side Rendering) devemos exportar uma async function
// essa function deve ter o nome de getServerSideProps()
// Esa function recebe como parametro (context) um objeto com informaçoes como pathname, query (consulte documentação para mais detalhes)
// toda vez que nossa pagina for 'requisitada' essa função ira ser executada no lado do servidor e então popular nossa pagina antes de enviar para o cliente
// nós temos o acesso ao return dessa function atraves do props do nosso componente
// ** é necessario retornar um objeto com uma propriedade chamada props (return {props: { }})
// ** Só podemos utilizar essa function dentro dos componentes da pasta pages (não podemos utilizar em non-pages files/components)
export async function getServerSideProps(context) {
  async function getRandomCategory() {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    const data = await res.json()
    const categories = data
    data.splice(data.indexOf('men\'s clothing'), 1)

    const randomIndex = Math.floor(Math.random() * categories.length)

    return categories[randomIndex]
  }

  let res = await fetch('https://fakestoreapi.com/products?limit=4')
  let data = await res.json()
  const mainProducts = data

  const category = await getRandomCategory()

  res = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=4`)
  data = await res.json()
  const randomCategory = data

  return {
    props: {
      data: {
        mainProducts,
        randomCategory: {
          data: randomCategory,
          category: category
        }
      }
    },
  }
}
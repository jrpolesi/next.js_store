import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import closeIcon from '../../../assets/images/close-icon.svg'

export function NavUl(props) {
  return (
    <>
      {props.isMobile &&
        <div className={styles.nav__logoAndClose}>
          <div className={styles.header__closeMenu} onClick={props.handleMenuSandwichClick}>
            <Image src={closeIcon} alt="menu" />
          </div>
          <figure className={styles.header__logo}>
            {/* <img src="" alt="" /> */}
            <h1>Logo aqui</h1>
            <figcaption>Nome da loja</figcaption>
          </figure>
        </div>
      }
      <ul className={props.isMobile ? styles.nav__ul__mobile : styles.nav__ul}>
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/products">
          <a>
            <li>All products</li>
          </a>
        </Link>
        <Link href="/products/categories/electronics">
          <a>
            <li>Eletronics</li>
          </a>
        </Link>
        <Link href="/products/categories/jewelery">
          <a>
            <li>jewelery</li>
          </a>
        </Link>
        <Link href="/products/categories/men's clothing">
          <a>
            <li>men&apos;s clothing</li>
          </a>
        </Link>
        <Link href="/products/categories/women's clothing">
          <a>
            <li>women&apos;s clothing</li>
          </a>
        </Link>
      </ul>
    </>
  )
}


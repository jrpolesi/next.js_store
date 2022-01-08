import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import userIcon from '../../assets/images/user-icon.svg'
import cartIcon from '../../assets/images/cart-icon.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div>
          <figure className='header__logo'>
            {/* <img src="" alt="" /> */}
            <h1>Logo aqui</h1>
            <figcaption>Nome da loja</figcaption>
          </figure>
          <nav className={styles.header__nav}>
            <ul>
              <Link href='/products'>
                <a>
                  <li>Home</li>
                </a>
              </Link>
              <Link href='/products'>
                <a>
                  <li>All products</li>
                </a>
              </Link>
              <Link href='/products'>
                <a>
                  <li>Eletronics</li>
                </a>
              </Link>
              <Link href='/products'>
                <a>
                  <li>jewelery</li>
                </a>
              </Link>
              <Link href='/products'>
                <a>
                  <li>men's clothing</li>
                </a>
              </Link>
              <Link href='/products'>
                <a>
                  <li>women's clothing</li>
                </a>
              </Link>
            </ul>
          </nav>
        </div>
        <div className={styles.header__user}>
          <Image src={cartIcon} alt="login" />
          <Image src={userIcon} alt="login" />
        </div>
      </div>
    </header>)
}
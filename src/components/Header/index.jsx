import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import userIcon from '../../assets/images/user-icon.svg'
import cartIcon from '../../assets/images/cart-icon.svg'
import menuIcon from '../../assets/images/menu-icon.svg'
import closeIcon from '../../assets/images/close-icon.svg'

export function Header() {
  const [showMenu, setShowMenu] = useState('none')

  function handleMenuSandwichClick() {
    setShowMenu(prevState => prevState === 'none' ? 'block' : 'none')
  }


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
              <Link href='/'>
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
          <nav className={styles.header__nav__sandwich} style={{ display: `${showMenu}` }}>
            <div className={styles.header__closeMenu} onClick={handleMenuSandwichClick}>
              <Image src={closeIcon} alt="menu" />
            </div>
            <figure className={styles.header__logo}>
              {/* <img src="" alt="" /> */}
              <h1>Logo aqui</h1>
              <figcaption>Nome da loja</figcaption>
            </figure>
            <ul>
              <Link href='/'>
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
          <Image src={cartIcon} alt="cart" />
          <Image src={userIcon} alt="login" />
          <div className={styles.header__menuSandwich} onClick={handleMenuSandwichClick}>
            <Image src={menuIcon} alt="menu" />
          </div>
        </div>
      </div>
    </header>)
}
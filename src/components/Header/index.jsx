import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { NavUl } from './NavUl'

import userIcon from '../../assets/images/user-icon.svg'
import cartIcon from '../../assets/images/cart-icon.svg'
import menuIcon from '../../assets/images/menu-icon.svg'
import { Cart } from '../Cart'

export function Header(props) {
  const [showMenu, setShowMenu] = useState('none')

  function handleMenuSandwichClick() {
    setShowMenu(prevState => prevState === 'none' ? 'block' : 'none')
  }


  return (
    <header className={styles.header} style={{backgroundColor: `${props.isTransparent && 'transparent'}`}}>
      <div className='container'>
        <div>
          <figure className='header__logo'>
            {/* <img src="" alt="" /> */}
            <h1>Logo aqui</h1>
            <figcaption>Nome da loja</figcaption>
          </figure>
          <nav className={styles.header__nav}>
            <NavUl
              showMenu={showMenu}
              handleMenuSandwichClick={handleMenuSandwichClick}
            />
          </nav>
          <nav className={styles.header__nav__mobile} style={{ display: `${showMenu}` }}>
            <NavUl
              isMobile={true}
              handleMenuSandwichClick={handleMenuSandwichClick}
            />
          </nav>
        </div>
        <div className={styles.header__user}>
          <Cart />
          <Image src={cartIcon} alt="cart" />
          <Image src={userIcon} alt="login" />
          <div className={styles.header__menuSandwich} onClick={handleMenuSandwichClick}>
            <Image src={menuIcon} alt="menu" />
          </div>
        </div>
      </div>
    </header>)
}
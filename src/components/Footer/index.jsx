import styles from './style.module.scss'
import Link from 'next/link'

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className='container'>
          <nav className={styles.footer__nav}>
            <h4>NEXT STORE</h4>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
              <Link href="/products">
                <a>
                  <li>Products</li>
                </a>
              </Link>
            </ul>
          </nav>
        </div>
      </footer>
      <div className={styles.footer__bottom}>
        <div className='container'>
          ©2021 Next Store
        </div>
      </div>
    </>
  )
}


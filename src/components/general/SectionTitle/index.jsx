import styles from './style.module.scss'

export function SectionTitle(props) {
  return (
    <h2 className={styles.section__title}>
      {props.children}
    </h2>
  )
}


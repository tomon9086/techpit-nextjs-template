import { FC } from 'react'
import styles from './index.module.css'

const DefaultLayout: FC<{}> = ({ children }) => {
  return (
    <div>
      <header />
      <main className={styles.mainContainer}>{children}</main>
      <footer />
    </div>
  )
}

export default DefaultLayout

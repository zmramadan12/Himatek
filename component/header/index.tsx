import Link from 'next/link'
import styles from './Header.module.css'

export default function header() {
  return (
    <header className={styles.container}>
        <title>Test new</title>
        <ul className={styles.list}>
          <li className={styles.item}><Link legacyBehavior href="/"><a id="link">Home</a></Link></li>
          <li className={styles.item}><Link legacyBehavior href="/blog"><a id="link">Blog</a></Link></li>
          <li className={styles.item}><Link legacyBehavior href="/users"><a id="link">Users</a></Link></li>
        </ul>
      </header>
  )
}

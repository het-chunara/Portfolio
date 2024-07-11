import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#projects" className={styles.navLink}>
            Projects
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#blog" className={styles.navLink}>
            Blog
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#contact" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

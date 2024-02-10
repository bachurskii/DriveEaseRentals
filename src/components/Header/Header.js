import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/">
          <img src="/img/logo.png" alt="Logo" className={styles.logo} />
        </Link>
        <ul className={styles.lists}>
          <li className={styles.list}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.list}>
            <Link to="/catalog">Cars</Link>
          </li>

          <li className={styles.list}>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;

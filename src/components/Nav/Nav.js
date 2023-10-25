import styles from "./Nav.module.css"

export function Nav() {
    return (
        <nav>
            <ul className={styles.ul}>
                <li className={styles.li}><a href="#home">home</a></li>
                <li className={styles.li}><a href="#about">about</a></li>
                <li className={styles.li}><a href="#menu">menu</a></li>
                <li className={styles.li}><a href="#reservations">reservations</a></li>
                <li className={styles.li}><a href="#order-online">order online</a></li>
                <li className={styles.li}><a href="#login">login</a></li>
            </ul>
        </nav>
    )
}
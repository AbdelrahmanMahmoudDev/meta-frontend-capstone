import styles from "./Nav.module.css"
import {NavLink} from "react-router-dom"
export function Nav() {
    return (
        <nav>
            <ul className={styles.ul}>
                <li className={styles.li}><NavLink to="/">home</NavLink></li>
                <li className={styles.li}><a href="#about">about</a></li>
                <li className={styles.li}><a href="#menu">menu</a></li>
                <li className={styles.li}><NavLink to="/reservations">reservations</NavLink></li>
                <li className={styles.li}><NavLink to="/order-online">order online</NavLink></li>
                <li className={styles.li}><NavLink to="/login">login</NavLink></li>
            </ul>
        </nav>
    )
}
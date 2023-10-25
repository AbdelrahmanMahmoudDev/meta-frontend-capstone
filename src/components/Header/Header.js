import {Nav} from "./../Nav"
import Logo from "./../../img/Logo.png"
import styles from "./Header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo"/>
            <Nav />
        </header>
    )
}
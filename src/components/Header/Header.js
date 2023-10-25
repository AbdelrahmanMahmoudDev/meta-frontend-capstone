import {Nav} from "./../Nav"
import Logo from "./../../img/Logo.png"

export function Header() {
    return (
        <header>
            <img src={Logo} alt="logo"/>
            <Nav />
        </header>
    )
}
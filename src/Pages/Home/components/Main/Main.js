import styles from "./Main.module.css"
import {Hero} from "./../Hero"
import {Specials} from "./../Specials"
import {Testimonials} from "./../Testimonials"
import {About} from "./../About"
import {Menu} from "../../../Menu"
import { Reservations } from "../../../Reservations"
import { OrderOnline } from "../../../OrderOnline"
import { Login } from "../../../Login"

import {Routes, Route} from "react-router-dom"

export function Main() {
    return (
        <main className={styles.main}>

            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </main>
    )
}
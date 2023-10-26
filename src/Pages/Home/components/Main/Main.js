import styles from "./Main.module.css"
import {Hero} from "./../Hero"
import {Specials} from "./../Specials"
import {Testimonials} from "./../Testimonials"
import {About} from "./../About"

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
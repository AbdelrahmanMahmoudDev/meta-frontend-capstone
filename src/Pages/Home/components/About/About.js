import styles from "./About.module.css"

export function About() {
    return (
        <section id="about" className={styles.aboutSection}>
            <section>
                <article>
                    <h1>little lemon</h1>
                    <h4>chicago</h4>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </article>
                <article>
                    <img src={require("./../../../../img/restaurant.jpg")} alt="restaurant" />
                    <img src={require("./../../../../img/restaurant chef B.jpg")} alt="restaurant chef" />
                </article>
            </section>
        </section>
    )
}
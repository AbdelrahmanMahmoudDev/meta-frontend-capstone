import footerImage from "./../../../../img/restaurantfood.jpg"
import styles from "./Footer.module.css"

export function Footer() {
    return (
        <footer className={styles.footerSection}>
            <section>
                <section>
                    <img src={footerImage} width="239px" height="347px" alt="food display"/>
                </section>
                <section>
                    <h6>doormat navigation</h6>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>menu</li>
                        <li>reservations</li>
                        <li>order online</li>
                        <li>login</li>
                    </ul>
                </section>
                <section>
                    <h6>contact</h6>
                    <ul>
                        <li>address</li>
                        <li>phone number</li>
                        <li>email</li>
                        <li>reservations</li>
                        <li>order online</li>
                        <li>login</li>
                    </ul>
                </section>
                <section>
                    <h6>social media links</h6>
                    <ul>
                        <li>address</li>
                        <li>phone number</li>
                        <li>email</li>
                    </ul>
                </section>
            </section>
        </footer>
    )
}
import styles from "./Hero.module.css"
import restaurantImg from "./../../../../img/restaurantfood.jpg"
export function Hero() {
    return (
        <div className={styles.hero}>
            <section>
                <section>
                    <article>
                        <h1>little lemon</h1>
                        <h4>Chicago</h4>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </article>
                    <button>Reserve a Table</button>
                </section>
                <img src={restaurantImg} alt="Our delicious food"/>
            </section>
        </div>
    )
}
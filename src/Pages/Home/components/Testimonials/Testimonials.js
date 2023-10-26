import styles from "./Testimonials.module.css"
import {Container} from "./../../../common"
const data = [
    {
        title: "name",
        rating: "rating",
        reviewText: "reviewText",
        image: require("./../../../../img/profile-1.jpg")
    },
    {
        title: "name",
        rating: "rating",
        reviewText: "reviewText",
        image: require("./../../../../img/profile-2.jpg")
    },
    {
        title: "name",
        rating: "rating",
        reviewText: "reviewText",
        image: require("./../../../../img/profile-3.jpg")
    },
    {
        title: "name",
        rating: "rating",
        reviewText: "reviewText",
        image: require("./../../../../img/profile-4.jpg")
    },
]

export function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <Container>
                <h1>Testimonials</h1>
                <section className={styles.cardContainer}>
                    {data.map((item, index) => (
                        <article key={index}>
                            <div className={styles.row}>
                                <p>{item.rating}</p>
                            </div>
                            <div className={styles.row}>
                                <img src={item.image} alt={item.title}/>
                                <p>{item.title}</p>
                            </div>
                            <div className={styles.row}>
                                <p>{item.reviewText}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </Container>
        </section>
    )
}
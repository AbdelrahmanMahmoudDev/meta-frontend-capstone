import styles from "./Specials.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'

const data = [{
    title: "Greek Salad",
    price: 12.99,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: require("./../../../../img/greek salad.jpg")
},
{
    title: "Bruchetta",
    price: 5.99,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: require("./../../../../img/bruchetta.jpg")
},
{
    title: "Lemon Dessert",
    price: 5.00,
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: require("./../../../../img/lemon dessert.jpg")
}
]

export function Specials() {
    return (
        <section id="menu" className={styles.specialsSection}>
            <section>
                <section style={{paddingBottom: "20px"}}>
                    <section className={styles.mainDesc}>
                        <h1>this weeks specials!</h1>
                        <button>Online Menu</button>
                    </section>
                    <section className={styles.cardContainer}>
                        {data.map((item, index) => (
                            <article key={index} style={{backgroundColor: "#EDEFEE"}}>
                                <img src={item.image} alt={item.title} />
                                    <section>
                                        <h6>{item.title}</h6>
                                        <p>${item.price.toFixed(2)}</p>
                                    </section>
                                    <p>{item.description}</p>
                                    <section className={styles.deliverySection}>
                                        <p>Order a delivery</p>
                                        <FontAwesomeIcon icon={faMotorcycle} />
                                    </section>
                            </article>
                        ))}
                    </section>
                </section>
            </section>
        </section>
    )
}
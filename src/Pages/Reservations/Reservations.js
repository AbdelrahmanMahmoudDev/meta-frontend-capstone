import {Header} from "./../common"
import {useState} from "react"
import styles from "./Reservations.module.css"
function BookingPage() {
    const fullDate = new Date();
    
    const occasionTypes = {
        birthday: "Birthday",
        anniversary: "Anniversary",
    }

    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
    
    const reserveLimits = {
        firstHour: Number(availableTimes[0]),
        lastHour: Number(availableTimes[availableTimes.length - 1]),
    }

    const [inputData, setInputData] = useState({
        date: `${fullDate.getFullYear()}-${fullDate.getMonth() + 1}-${String(fullDate.getDate()).padStart(2, '0')}`,
        time:
        `${fullDate.getHours() <= reserveLimits.lastHour && fullDate.getHours() >= reserveLimits.firstHour ?
            fullDate.getHours() : reserveLimits.firstHour }:00`,
        guestCount: 1,
        occasion: occasionTypes.birthday,
    })

    return(
        <section className={styles.formSection}>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" value={inputData.date} id="res-date" onChange={e => setInputData(prev => {return {...prev, date: e.target.value}})} />
                <label htmlFor="res-time">Choose time</label>
                <select required id="res-time" value={inputData.time} onChange={e => setInputData(prev => {return {...prev, time: e.target.value}})}>
                    {availableTimes.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input reqired type="number" placeholder="1" min="1" max="10" id="guests"
                onChange={e => setInputData(prev => {return {...prev, guestCount: e.target.value}})} />
                <label htmlFor="occasion">Occasion</label>
                <select required id="occasion" value={inputData.occasion} onChange={e => setInputData(prev => {return {...inputData, occasion: e.target.value}})}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </section>
    );
}

export function Reservations() {
    return (
        <>
            <Header />
            <BookingPage />
        </>
    )
}
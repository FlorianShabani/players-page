
import React, { useState, useEffect } from 'react'

import styles from '../styles/PlayerForm.module.css'

export default function PlayerForm({ handleSubmit, responseOK, formText, player }) {

    const [errorSubmit, setErrorSubmit] = useState(false)

    const [formData, setFormData] = useState({
        name: player.name,
        age: player.age,
        team: player.team
    })

    useEffect(() => {
        if (player.name !== undefined) {
            setFormData({
                name: player.name,
                age: player.age,
                team: player.team
            })
        }
    }, [player])

    console.log(player, formData)

    function validFormData() {
        if (formData.name === undefined) {
            return false
        } else if (formData.team === undefined) {
            return false
        } else if (formData.age === undefined) {
            return false
        }

        if (formData.age < 0) {
            return false
        }
        return true
    }

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : type === "number" ? parseInt(value) : value
        }))
    }

    function onSubmit(event) {
        event.preventDefault()

        console.log(formData)

        if (validFormData()) {
            console.log("SUBMITTTEEEEDDDDDDDDDDDDDDDDD")
            handleSubmit(formData)
            setErrorSubmit(false)
        } else {
            setErrorSubmit(true)
        }
    }

    return (
        <div className={styles.body}>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.title}>{formText.title}</div>
                <div className={styles.subtitle}>{formText.subtitle}</div>
                <div className={`${styles.inputContainer} ${styles.ic1}`}>
                    <input
                        id="name"
                        className={styles.input}
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <div className={styles.cut} />
                    <label htmlFor="name" className={styles.placeholder}>
                        Full Name
                    </label>
                </div>
                <div className={`${styles.inputContainer} ${styles.ic2}`}>
                    <input
                        id="team"
                        className={styles.input}
                        type="text"
                        name="team"
                        onChange={handleChange}
                        value={formData.team}
                    />
                    <div className={styles.cut} />
                    <label htmlFor="team" className={styles.placeholder}>
                        Team
                    </label>
                </div>

                <div className={`${styles.inputContainer} ${styles.ic2}`}>
                    <input
                        id="age"
                        className={styles.input}
                        type="number"
                        name="age"
                        onChange={handleChange}
                        value={formData.age}
                    />
                    <div className={styles.cut} />
                    <label htmlFor="age" className={styles.placeholder}>
                        Age
                    </label>
                    {(formData.age < 0) && <p className={`${styles.notOkMessage} ${styles.subtitle}`}>Age cannot be negative</p>}
                </div>

                <button className={styles.submit}>
                    Submit
                </button>
                {!validFormData() && <p className={`${styles.notOkMessage} ${styles.subtitle}`}>Invalid Form Data</p>}
                {(responseOK === "true" && !errorSubmit) && <p className={`${styles.okMessage} ${styles.subtitle}`}>{formText.okSubmitMessage}</p>}
                {(responseOK === "false" || errorSubmit) && <p className={`${styles.notOkMessage} ${styles.subtitle}`}>{formText.notOkSubmitMessage}</p>}
            </form>
        </div>
    )
}   
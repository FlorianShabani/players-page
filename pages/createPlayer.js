import styles from '../styles/createPlayer.module.css'

import { useState } from 'react'

export default function createPlayer() {
    // "" - no response yet, "true", "false"
    const [responeOK, setResponeOK] = useState("")

    const [formData, setFormData] = useState({
        name: 'Florian',
        age: 20,
        team: 'LFC'
    })


    console.log(formData)
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        try {fetch("http://localhost:8080/api/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }).then(response => {
            if (response.status === 200) {
                setResponeOK("true")
            } else {
                setResponeOK("false")
            }
        });
        } catch (error) {
            console.log("error")
            setResponeOK("false")
        }
    }

    return (
        <div className={styles.body}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.title}>Create player</div>
                <div className={styles.subtitle}>Enter the players info!</div>
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
                        team
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
                </div>

                <button type="text" className={styles.submit}>
                    Submit
                </button>
                {responeOK === "true" && <p className={`${styles.okMessage} ${styles.subtitle}`}>Player Added Succsessfully</p>}
                {responeOK === "false" && <p className={`${styles.notOkMessage} ${styles.subtitle}`}>Error Adding Player</p>}
            </form>
        </div>
    )
}
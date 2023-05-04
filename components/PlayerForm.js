
import React, { useState, useEffect } from 'react'

import styles from '../styles/PlayerForm.module.css'

export default function PlayerForm({ handleSubmit, responseOK, setResponseOK }) {
    const [invalidFormData, setInvalidFormData] = useState({
        name: false,
        age: false,
        team: false
    })

    const [formData, setFormData] = useState({
        name: 'Florian',
        age: 20,
        team: 'LFC'
    })

    useEffect(() => {
        setInvalidFormData(validateFormData(formData))
    }, [formData])


    function validateFormData(data) {
        let invalidData = { ...invalidFormData }
        if (data.age < 0) {
            invalidData.age = true
        } else {
            invalidData.age = false
        }
        return invalidData
    }

    console.log(formData, invalidFormData)
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : type === "number" ? parseInt(value) : value
        }))
    }

    function onSubmit(event) {
        event.preventDefault()

        if (!invalidData) {
            handleSubmit(event)
        }
        
    }

    function invalidData() {
        return Object.values(invalidFormData).every(validData => !validData)
    }

    return (
        <div className={styles.body}>
            <form className={styles.form} onSubmit={onSubmit}>
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
                    {invalidFormData.age && <p className={`${styles.notOkMessage} ${styles.subtitle}`}>Age cannot be negative</p>}
                </div>

                <button type="text" className={styles.submit}>
                    Submit
                </button>
                {!invalidData() && <p className={`${styles.notOkMessage} ${styles.subtitle}`}>Invalid Form Data</p>}
                {responseOK === "true" && <p className={`${styles.okMessage} ${styles.subtitle}`}>Player Added Succsessfully</p>}
                {responseOK === "false" && <p className={`${styles.notOkMessage} ${styles.subtitle}`}>Error Adding Player</p>}
            </form>
        </div>
    )
}   
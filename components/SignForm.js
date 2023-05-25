import { useState } from "react"
import styles from '../styles/PlayerForm.module.css'

export default function SignForm({handleSubmit, responseOK, formText, player }) {

    const [errorSubmit, setErrorSubmit] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    function validFormData() {
        // if (formData.name === "") {
        //     return false
        // } else if (formData.team === "") {
        //     return false
        // } else if (formData.age < 0) {
        //     return false
        // }
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

        console.log(formData);

        if (validFormData()) {
            handleSubmit(formData)
            setErrorSubmit(false)
        } else {
            setErrorSubmit(true)
        }
    }

    return (
        <div className={styles.body}>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.title}>
                    {formText.title}
                    <span className={styles.idText}>{(player.id) && "ID : " + player.id}</span>
                </div>
                <div className={styles.subtitle}>{formText.subtitle}</div>
                <div className={`${styles.inputContainer} ${styles.ic1}`}>
                    <input
                        id="email"
                        className={styles.input}
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <div className={styles.cut} />
                    <label htmlFor="email" className={styles.placeholder}>
                        Email
                    </label>
                </div>
                <div className={`${styles.inputContainer} ${styles.ic2}`}>
                    <input
                        id="password"
                        className={styles.input}
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.team}
                    />
                    <div className={styles.cut} />
                    <label htmlFor="password" className={styles.placeholder}>
                        Password
                    </label>
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
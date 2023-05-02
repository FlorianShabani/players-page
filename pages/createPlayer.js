import styles from '../styles/createPlayer.module.css'

export default function createPlayer() {
    return (
        <div className={styles.body}>
            <div className={styles.form}>
                <>
                    <div className={styles.title}>Welcome</div>
                    <div className={styles.subtitle}>Let's create your account!</div>
                    <div className={`${styles.inputContainer} ${styles.ic1}`}>
                        <input id="name" className={styles.input} type="text" placeholder=" " />
                        <div className={styles.cut} />
                        <label htmlFor="name" className={styles.placeholder}>
                            First name
                        </label>
                    </div>
                    <div className={`${styles.inputContainer} ${styles.ic2}`}>
                        <input id="team" className={styles.input} type="text" placeholder=" " />
                        <div className={styles.cut} />
                        <label htmlFor="team" className={styles.placeholder}>
                            Last name
                        </label>
                    </div>

                    <div className={`${styles.inputContainer} ${styles.ic2}`}>
                        <input id="age" className={styles.input} type="number" placeholder=" " />
                        <div className={styles.cut} />
                        <label htmlFor="age" className={styles.placeholder}>
                            Last name
                        </label>
                    </div>
                    
                    <button type="text" className={styles.submit}>
                        submit
                    </button>
                </>
            </div>
        </div>
    )
}
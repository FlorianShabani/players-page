import Link from "next/link"

import styles from "../styles/Homepage.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Players API</h1>
            <div>
                <Link className={styles.link} href="/players">See Players</Link>
                <Link className={styles.link} href="/createPlayer">Create Players</Link>
                <Link className={styles.link} href="/auth/signin">Sign In</Link>
                <Link className={styles.link} href="/auth/signup">Sign Up</Link>
            </div>
        </div>
    )
}

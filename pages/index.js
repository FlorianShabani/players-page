import Link from "next/link"

import styles from "../styles/Homepage.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Players API</h1>
            <div>
                <Link className={styles.link} href="/players"><button>See Players</button></Link>
                <Link className={styles.link} href="/createPlayer"><button>Create Players</button></Link>
                <Link className={styles.link} href="/auth/signin"><button>Sign In</button></Link>
            </div>
        </div>
    )
}

import styles from '../styles/Player.module.css'
import Link from 'next/link'

export default function Player({ player, handleDelete }) {

    return (
        <div className={styles.card}>
            <PlayerTools handleDelete={handleDelete}/>
            <Link href={`/player/${player.id}`}>
                <div className={styles.card_content}>
                    <p className={styles.text}>{player.id}</p>
                    <p className={styles.text}>{player.name}</p>
                    <p className={styles.text}>{player.age}</p>
                    <p className={styles.text}>{player.team}</p>
                </div>
            </Link>
        </div >
    )
}

function PlayerTools({handleDelete}) {
    return (
        <div className={styles.tools}>
            <div className={styles.circle} onClick={handleDelete}>
                <span className={`${styles.red} ${styles.box}`}>

                </span>
            </div>
            <div className={styles.circle}>
                <span className={`${styles.yellow} ${styles.box}`}>

                </span>
            </div>
        </div>
    )
}
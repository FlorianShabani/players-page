import Link from 'next/link'
import styles from '../styles/Player.module.css'
import { useState } from 'react'

export default function Player({ player, handleDelete }) {
    //Which type of action the user is performing on the player ("View", "Delete", "Edit")
    const [cardType, setCardType] = useState("View")

    let Card;

    if (cardType === "View") {
        Card = <ViewPlayer player={player} />
    } else if (cardType === "Delete") {
        Card = <DeletePlayer player={player} handleDelete={handleDelete} />
    } else if (cardType === "Edit") {
        Card = <EditPlayer player={player} />
    }


    return (
        <>
            <div className={styles.card}>
                <PlayerTools cardType={cardType} switchDelete={() => setCardType("Delete")} switchEdit={() => setCardType("Edit")} switchView={() => setCardType("View")
                } />
                {cardType === "View" && <Link href={`/player/${player.id}`} />}
                {Card}
            </div >
        </>
    )
}

function PlayerTools({ cardType, switchView, switchDelete, switchEdit }) {
    return (
        <div className={styles.tools}>
            {cardType !== "Delete" &&
                <div className={`${styles.circle} ${styles.red} ${styles.box}`} onClick={switchDelete}>
                </div>}
            {cardType !== "View" &&
                <div className={`${styles.circle} ${styles.green} ${styles.box}`} onClick={switchView}>
                </div>}
            {cardType !== "Edit" &&
                <div className={`${styles.circle} ${styles.yellow} ${styles.box}`} onClick={switchEdit}>
                </div>}
        </div>
    )
}

function ViewPlayer({ player }) {
    return (
        <div className={styles.cardContent}>
            <p className={styles.text}>{player.id}</p>
            <p className={styles.text}>{player.name}</p>
            <p className={styles.text}>{player.age}</p>
            <p className={styles.text}>{player.team}</p>
        </div>
    )
}

function DeletePlayer({ player, handleDelete }) {
    return (
        <div className={styles.cardContent}>
            <label className={styles.deleteText} for="deleteButton">Delete Player?</label>
            <button id="deleteButton" className={styles.deleteButton} onClick={handleDelete}>Delete</button>
        </div>
    )
}

function EditPlayer({ player, handleEdit }) {
    return (
        <div className={styles.cardContent}>
            <button className={styles.editButton} onClick={handleEdit}>Edit</button>
        </div>
    )
}
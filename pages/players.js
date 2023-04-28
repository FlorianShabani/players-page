import { useState, useEffect } from "react";
import styles from '../styles/Players.module.css'
import PlayerCard from '../components/PlayerCard'
import Link from 'next/link'

export default function Players() {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/players")
            .then(res => res.json())
            .then(data => {
                setPlayers(() => data)
                console.log(players)
            })
    }, [])

    function handleDelete(id) {
        fetch(`http://localhost:8080/api/players/${id}`, { method: "DELETE" })
            .then((response) => {
                if (response.status === 200) {
                    setPlayers((prev) => (
                        prev.filter(player => player.id !== id)
                    ))
                }
            })
    }

    const Players = players.map(player => (
        <PlayerCard key={player.id} player={player} handleDelete={() => { handleDelete(player.id) }} />
    )
    )

    return (
        <>
            <h1>Players API</h1>
            <div className={styles.playersGrid}>
                {Players}
            </div>
        </>
    )
}

function newPlayerForm() {
    return (<p>Players Form</p>)
}
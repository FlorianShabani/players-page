import { useEffect, useState } from "react";
import PlayerCard from '../components/PlayerCard';
import styles from '../styles/Players.module.css';


export default function PlayersGrid() {

    const [players, setPlayers] = useState([])
    const [deletedAction, setDeletedAction] = useState(true)


    useEffect(() => {
        fetch("http://localhost:8081/api/players")
        .then(res => res.json())
        .then(data => {
            setPlayers(() => data)
            console.log(players)
            })
        }, [])
        
        function handleDelete(id) {
            fetch(`http://localhost:8081/api/players/${id}`, { method: "DELETE" })
            .then((response) => {
                if (response.status === 200) {
                    setPlayers((prev) => (
                        prev.filter(player => player.id !== id)
                        ))
                        setDeletedAction(prev => !prev)
                    }
                })
            }
            
    //TODO Dont give error when no players are fetched
    const Players = players.map(player => (
        <PlayerCard key={player.id} player={player} handleDelete={() => { handleDelete(player.id) }} />
    )
    )

    return (
        <>
            <DeleteNotification animate={deletedAction} />
            <h1>All Players</h1>
            <div className={styles.playersGrid}>
                {Players}
            </div>
        </>
    )
}


function DeleteNotification({ animate }) {
    const [triggerAnimation, setTriggerAnimation] = useState(animate)

    let deleteNotification = (
        <div className={styles.deleteNotification}>
            <p>Deleted Successfully</p>
        </div>
    )

    useEffect(() => {
        setTriggerAnimation(true)
        setTimeout(() => {
            setTriggerAnimation(false)
        }, 2000)
    }, [animate])

    return (
        <>
            {triggerAnimation && deleteNotification}
        </>
    )
}
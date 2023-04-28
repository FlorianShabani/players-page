import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Player from '../../components/PlayerCard'

export default function PlayerPage() {
    const [player, setPlayers] = useState({});


    const router = useRouter()
    const { id } = router.query


    useEffect(() => {
        fetch(`http://localhost:8080/api/players/${id}`)
            .then(res => res.json())
            .then(data => {
                setPlayers(data)
            })
    }, [])

    return (
        <Player player={player} />
    )
}
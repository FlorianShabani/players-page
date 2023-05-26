import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Player from '../../components/PlayerCard';
import { fetchData } from '../../utils/auth';

export default function PlayerPage() {
    const [player, setPlayers] = useState({});


    const router = useRouter()
    const { id } = router.query


    useEffect(() => {
        if (id !== undefined) {
            fetchData(`api/players/${id}`, 'GET', null)
                .then(res => res.json())
                .then(data => {
                    setPlayers(data)
                })
        }
    }, [id]);

    return (
        <Player player={player} />
    )
}
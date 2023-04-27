import Link from "next/link"
import { useEffect } from "react"
import { useState } from "react"

export default function Home() {

    const [players, setPlayers] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:8080/api/players")
    //         .then(res => res.json())
    //         .then(data => {
    //             setPlayers(data)
    //         })
    // }, [])

    return (
        <>
            <h1>Players API</h1>

            <Link href="/players">See Players</Link>
        </>
    )
}

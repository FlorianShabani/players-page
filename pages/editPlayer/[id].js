import PlayerForm from "../../components/PlayerForm";

import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

export default function editPlayer() {
    // "" - no response yet, "true", "false"
    const [player, setPlayer] = useState({});
    const [responseOK, setResponseOK] = useState("")

    const router = useRouter()
    const { id } = router.query

    const formText = {
        title: "Edit Player",
        subtitle: "Edit the players info!",
        okSubmitMessage: "Player Edited Successfully",
        notOkSubmitMessage: "Error Editing Player"
    }
    //Fetch players information
    useEffect(() => {
        if (id !== undefined) {
            fetch(`http://localhost:8081/api/players/${id}`)
                .then(res => res.json())
                .then(data => {
                    setPlayer(data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [id])

    function handleSubmit(formData) {
        console.log("HANDLED")
        try {
            fetch(`http://localhost:8081/api/players/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            }).then(response => {
                if (response.status === 200) {
                    setResponseOK("true")
                } else {
                    setResponseOK("false")
                }
            });
        } catch (error) {
            console.log("error", error)
            setResponseOK("false")
        }
    }

    return (
        <PlayerForm
            handleSubmit={handleSubmit}
            responseOK={responseOK}
            formText={formText}
            player={player} />
    )
}
import { useEffect, useState } from 'react'

import PlayerForm from "../components/PlayerForm"

export default function createPlayer() {
    // "" - no response yet, "true", "false"

    let formText = {
        title : "Create Player",
        subtitle : "Enter the players info!",
        okSubmitMessage : "Player Added Successfully",
        notOkSubmitMessage : "Error Adding Player"
    }

    const [responseOK, setResponseOK] = useState("")

    function handleSubmit(formData) {
        console.log("HANDLED")
        try {
            fetch("http://localhost:8080/api/players", {
                method: "POST",
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
            formText={...formText}
            player={{}}
            />
    )
}
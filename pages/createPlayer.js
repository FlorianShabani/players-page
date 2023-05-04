import { useEffect, useState } from 'react'

import PlayerForm from "../components/PlayerForm"

export default function createPlayer() {
    // "" - no response yet, "true", "false"

    const [responseOK, setResponseOK] = useState("")

    function handleSubmit(event) {
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
            console.log("error")
            setResponseOK("false")
        }
    }

    return (
        <PlayerForm
            handleSubmit={handleSubmit}
            responseOK={responseOK}
            />
    )
}
import { useEffect, useState } from 'react'

import PlayerForm from "../components/PlayerForm"

export default function createPlayer() {
    
    let formText = {
        title : "Create Player",
        subtitle : "Enter the players info!",
        okSubmitMessage : "Player Added Successfully",
        notOkSubmitMessage : "Error Adding Player"
    }
    
    // "" - no response yet, "true", "false"
    const [responseOK, setResponseOK] = useState("")

    function handleSubmit(formData) {
        console.log("HANDLED")
        try {

            console.log(JSON.stringify(formData))
            fetchData("api/players", 'POST', formData).then(response => {
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
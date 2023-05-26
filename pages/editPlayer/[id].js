import PlayerForm from "../../components/PlayerForm";

import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { fetchData } from "../../utils/auth";

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
            fetchData(`api/players/${id}`, 'GET', null)
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
            fetchData(`api/players/${id}`, 'PATCH', formData)
                .then(response => {
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
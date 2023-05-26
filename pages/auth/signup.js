import { useState } from "react";
import SignForm from "../../components/SignForm";
import login from "../../utils/auth";

export default function signUp() {

    let formText = {
        title: "Sign Up",
        subtitle: "Enter your email address and password",
        okSubmitMessage: "Sign in successfull",
        notOkSubmitMessage: "Error signing in",
    }

    const [responseOK, setResponseOK] = useState("")

    async function handleSubmit(formData) {
        try {
            fetch("http://localhost:8081/auth/signup", 
            {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => {
                    if (response.status === 200) {
                        setResponseOK("true")
                    } else {
                        setResponseOK("false")
                    }
                    return response.json()
                }).then(data => {
                    const { access_token } = data;
                    console.log(data);
                    login(access_token)
                })
        } catch (error) {
            console.log("error", error)
            setResponseOK("false")
        }
    }

    return (
        <SignForm handleSubmit={handleSubmit}
            responseOK={responseOK}
            formText={...formText}
            player={{}} />
    )
}
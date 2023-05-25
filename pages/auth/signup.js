import { useState } from "react";
import SignForm from "../../components/SignForm";

export default function signUp() {

    let formText = {
        title: "Sign Up",
        subtitle: "Enter your email address and password",
        okSubmitMessage: "Sign in successfull",
        notOkSubmitMessage: "Error signing in",
    }

    const [responseOK, setResponseOK] = useState("")

    async function handleSubmit(formData) {
        // Make the login API call
        try {
            fetch("http://localhost:8081/auth/signin", {
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
                return response.json()
            }).then(data => {
                console.log(data);
            })
        } catch (error) {
            console.log("error", error)
            setResponseOK("false")
        }
        //...
        // Extract the JWT from the response
        // const { jwt_token } = await response.json()
        //...
        // Do something the token in the login method
        //await login({ jwt_token })
    }

    return (
        <SignForm handleSubmit={handleSubmit}
            responseOK={responseOK}
            formText={...formText}
            player={{}} />
    )
}
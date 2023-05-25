import { useState } from "react";
import SignForm from "../../components/SignForm";

export default function signIn() {

    let formText = {
        title: "Sign In",
        subtitle: "Enter your email address and password",
        okSubmitMessage: "Sign in successfull",
        notOkSubmitMessage: "Error signing in",
    }

    const [responseOK, setResponseOK] = useState("")

    function handleSubmit(formData) {
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

                const { jwt_token } = data;

                login({ jwt_token })
            })
        } catch (error) {
            console.log("error", error)
            setResponseOK("false")
        }
        //...
        // Extract the JWT from the response
        //...
        // Do something the token in the login method
    }

    return (
        <SignForm handleSubmit={handleSubmit}
            responseOK={responseOK}
            formText={...formText}
            player={{}} />
    )
}
import { useState } from "react";
import SignForm from "../../components/SignForm";
import login, { fetchData } from '../../utils/auth';


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
            fetchData("auth/signin", "POST", formData)
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
        <div>
            <SignForm handleSubmit={handleSubmit}
                responseOK={responseOK}
                formText={...formText}
                player={{}} />
        </div>
    )
}
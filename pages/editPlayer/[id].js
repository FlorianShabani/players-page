import PlayerForm from "../components/PlayerForm";

export default function editPlayer() {
    return (
        <PlayerForm
            styles={styles}
            formData={formData}
            invalidFormData={invalidFormData}
            responseOK={responeOK}
            handleSubmit={handleSubmit}
            handleChange={handleChange} />
    )
}
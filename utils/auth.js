export default function login(jwtToken) {
    sessionStorage.setItem("jwtToken", jwtToken);
    console.log("Logged in");
}
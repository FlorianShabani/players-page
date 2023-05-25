export default function login(jwtToken) {
    sessionStorage.setItem("jwtToken", jwtToken);
    console.log("Logged in");
}

export const axiosInstance = axios.create({
    headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("jwtToken")}`, // Add or modify headers as needed
        'Content-Type': 'application/json',
    },
});
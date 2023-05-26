import axios from "axios";

export default function login(jwtToken) {
    sessionStorage.setItem("jwtToken", jwtToken);
    console.log(sessionStorage.getItem("jwtToken"));
}

const axiosInstance = axios.create({
    baseURL: 'https://localhost:8081',
    headers: {
      'Content-Type': 'application/json',
    },
});
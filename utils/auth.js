export default function login(jwtToken) {
    sessionStorage.setItem("jwtToken", jwtToken);
    console.log(sessionStorage.getItem("jwtToken"));
}

export function fetchData(url, method, data) {
    return fetch("http://localhost:8081/" + url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer" + sessionStorage.getItem("jwtToken"),
        },
        data: (data) ? JSON.stringify(data) : null,
    });
}
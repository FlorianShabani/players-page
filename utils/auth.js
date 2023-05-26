export default function login(jwtToken) {
    sessionStorage.setItem("jwtToken", jwtToken);
    console.log(sessionStorage.getItem("jwtToken"));
}

export function logout() {
    sessionStorage.removeItem("jwtToken");
}

export function fetchData(url, method, data) {
    const params = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + sessionStorage.getItem("jwtToken"),
        },
    }

    if(data) {
        params.body = JSON.stringify(data)
    }

    return fetch("http://localhost:8081/" + url, params);
}
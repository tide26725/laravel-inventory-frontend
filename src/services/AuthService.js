import axios from "axios";

const authService = axios.create({
    baseURL: "http://localhost:8000/api/",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    }
});

export default authService;


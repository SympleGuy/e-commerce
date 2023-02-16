import axios from "axios";
const instanse = axios.create({
    baseURL: "http://localhost:8080/api/site",
    headers: {
        "Content-Type": "application/json"
    }
});

export default instanse;

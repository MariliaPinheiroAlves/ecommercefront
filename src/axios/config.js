import axios from "axios";

const url = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export default url
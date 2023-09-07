import axios from "axios";

const ramApi = axios.create({
    baseURL: 'https://rickandmortyapi.com'
});

export default ramApi;
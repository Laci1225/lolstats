import axios from "axios"

export const httpClient = axios.create({
    baseURL: "https://eun1.api.riotgames.com", headers: {
    }
})
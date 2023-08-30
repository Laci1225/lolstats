import axios from "axios"

export const httpClient = axios.create({
    baseURL: "/api", headers: {
        "X-Riot-Token": ""
    } //,params: {"api_key": ""}
})
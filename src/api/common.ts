import axios from "axios"

const httpClientEun1 = axios.create({
    baseURL: "/api", headers: {
        "X-Riot-Token": ""
    } //,params: {"api_key": ""}
})
const httpClientEurope = axios.create({
    baseURL: "/apii", headers: {
        //"X-Riot-Token": ""
    },params: {"api_key": ""}
})

export {httpClientEun1, httpClientEurope}
import axios from "axios"

const httpClientEun1 = axios.create({
    baseURL: "/api", headers: {
        "X-Riot-Token": "RGAPI-9dee5e48-8b5a-4426-94ec-7a4bff164b96"
    } //,params: {"api_key": ""}
})
const httpClientEurope = axios.create({
    baseURL: "/apii", headers: {
        //"X-Riot-Token": "RGAPI-9dee5e48-8b5a-4426-94ec-7a4bff164b96"
    },params: {"api_key": "RGAPI-9dee5e48-8b5a-4426-94ec-7a4bff164b96"}
})

export {httpClientEun1, httpClientEurope}
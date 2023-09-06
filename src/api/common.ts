import axios from "axios"

const httpClientEun1 = axios.create({
    baseURL: "/eun-api", headers: {
        "X-Riot-Token": ""
    } //,params: {"api_key": ""}
})
const httpClientEurope = axios.create({
    baseURL: "/europe-api", headers: {
        "X-Riot-Token": ""
    }//,params: {"api_key": ""}
})

export {httpClientEun1, httpClientEurope}
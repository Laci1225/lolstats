import {httpClient} from "../api/common";
import {useEffect, useState} from "react";
import {Summoner} from "../models/summoner";

export default function useSummonerData(name: string): Summoner | null {
    const [smData, setSmData] = useState<Summoner | null>(null);
    useEffect(() => {
        if (name) {
            httpClient.get("/lol/summoner/v4/summoners/by-name/" + name + "?api_key=")//TODO
                .then(value => {
                    setSmData(value.data);
                }).catch(error => {
                console.error("Error fetching summoner data:", error);
            });
        }
    }, [name])
    return smData;
}
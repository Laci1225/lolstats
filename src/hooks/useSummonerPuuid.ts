import {useEffect, useState} from "react";
import {Summoner} from "../models/summoner.ts";
import {httpClientEun1} from "../api/common.ts";

export default function useSummonerPuuid(puuid: string) {
    const [smData, setSmData] = useState<Summoner | null>(null);
    useEffect(() => {
        httpClientEun1.get<Summoner>("/summoner/v4/summoners/by-puuid/" + puuid)
            .then(value => {
                setSmData(value.data);
            }).catch(error => {
            console.error("Error fetching summoner data:", error);
        });
    }, [puuid])
    return smData;
}
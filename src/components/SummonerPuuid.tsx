import {getSummonerPuuid} from "../api/match.ts";
import {useEffect, useState} from "react";
import {Summoner} from "../models/summoner.ts";

interface SummonerPuuidProps {
    puuid: string
}

export default function SummonerPuuid({puuid}: SummonerPuuidProps) {
    const [a, setA] = useState<Summoner>()
    useEffect(() => {
        getSummonerPuuid(puuid).then(value => setA(value));
    }, []);
    return a?.name
}
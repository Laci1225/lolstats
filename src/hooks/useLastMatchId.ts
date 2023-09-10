import {useEffect, useState} from "react";
import {httpClientEurope} from "../api/common.ts";

export default function useLastXMatchId(puuid: string, x: number) {
    const [gameId, setGameId] = useState<string | string[]>("");
    useEffect(() => {
        httpClientEurope.get(`/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${x}`)
            .then(value => setGameId(value.data))
            .catch(error => {
                console.error("Error fetching game  data:", error)
            });
    }, [puuid, x]);
    return gameId
}
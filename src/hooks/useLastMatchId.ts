import {useEffect, useState} from "react";
import {httpClientEurope} from "../api/common.ts";

export default function useLastXMatchId(puuid: string, from: number,to:number) {
    const [gameId, setGameId] = useState<string[]>([]);
    useEffect(() => {
        httpClientEurope.get<string[]>(`/match/v5/matches/by-puuid/${puuid}/ids?start=${from}&count=${to}`)
            .then(value => setGameId(value.data))
            .catch(error => {
                console.error("Error fetching game  data:", error)
            });
    }, [puuid, from, to]);
    return gameId
}
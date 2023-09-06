import {useEffect, useState} from "react";
import {httpClientEurope} from "../api/common.ts";

export default function useLastMatchId(puuid: string) {
    const [gameId, setGameId] = useState<string>("");
    useEffect(() => {
        httpClientEurope.get("/match/v5/matches/by-puuid/uxvmRs3Xs7dyUjv-kP1kCQZBbNAXaoHGOe4tDh0yQ7Q2fkSBmDOjLathFdzbCfhLSyW6MxSheA7Nhw/ids?start=0&count=1")
            .then(value => setGameId(value.data))
            .catch(error => {
                console.error("Error fetching gameafdsf  data:", error)
            });
    }, [puuid]);
    return gameId;
}
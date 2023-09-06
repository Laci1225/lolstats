import {useEffect, useState} from "react";
import {httpClientEurope} from "../api/common.ts";
import {Match} from "../models/match.ts";

export default function useLastMatchData(lastGameId: string): Match | null {
    const [game, setGame] = useState<Match | null>(null);
    useEffect(() => {
        if (lastGameId)
            httpClientEurope.get("match/v5/matches/" + lastGameId)
                .then(value => setGame(value.data))
    }, [lastGameId]);
    return game;
}

//    /match/v5/matches/by-puuid/uxvmRs3Xs7dyUjv-kP1kCQZBbNAXaoHGOe4tDh0yQ7Q2fkSBmDOjLathFdzbCfhLSyW6MxSheA7Nhw/ids?start=0&count=1
//    /match/v5/matches/by-puuid/uxvmRs3Xs7dyUjv-kP1kCQZBbNAXaoHGOe4tDh0yQ7Q2fkSBmDOjLathFdzbCfhLSyW6MxSheA7Nhw/ids?start=0&count=1
//    /match/v5/matches/by-puuid/uxvmRs3Xs7dyUjv-kP1kCQZBbNAXaoHGOe4tDh0yQ7Q2fkSBmDOjLathFdzbCfhLSyW6MxSheA7Nhw/ids?start=0&count=1
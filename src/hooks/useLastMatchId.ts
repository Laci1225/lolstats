import {useEffect, useState} from "react";
import {httpClientEurope} from "../api/common.ts";

export default function useLastMatchId(puuid: string) {
    const [gameId, setGameId] = useState<string>("");
    console.log(puuid);
    useEffect(() => {
        httpClientEurope.get("https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count=1")
            .then(value => setGameId(value.data))
            .catch(error => {
                console.error("Error fetching gameafdsf  data:", error)
            });
    }, [puuid]);
    return gameId;
}
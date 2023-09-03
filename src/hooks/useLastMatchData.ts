import {useEffect, useState} from "react";
import {httpClientEurope} from "../api/common.ts";
import {Match} from "../models/match.ts";

export default function useLastMatchData(lastGameId: string): Match | null {
    const [game, setGame] = useState<Match | null>(null);
    useEffect(() => {
        httpClientEurope.get("https://europe.api.riotgames.com/lol/match/v5/matches/" + lastGameId + "?api_key=RGAPI-9dee5e48-8b5a-4426-94ec-7a4bff164b96")
            .then(value => setGame(value.data))
    }, [lastGameId]);
    return game;
}
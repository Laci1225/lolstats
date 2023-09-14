import {Match} from "../models/match.ts";
import {useEffect, useState} from "react";
import {getSummonerPuuid} from "../api/match.ts";

interface LoserProp {
    currentMatch: Match;
}

export default function Losers({currentMatch}: LoserProp) {
    const losers = currentMatch.info.participants.slice(5, 10);
    const [names, setNames] = useState<string[]>([]);
    const loserNames = names.slice(5, 10);
    useEffect(() => {
        currentMatch.metadata.participants.map(puuid =>
            getSummonerPuuid(puuid).then(
                value => setNames(value2 => [...value2, value.name])));
    }, []);

    return (
        <>
            {
                losers.map((value, index) =>
                    <div className={"player-cell"} key={index}>
                        {loserNames[index]}
                        {value.win ? "    Win    " : "    Lose    "}
                        {value.kills}/{value.deaths}/{value.assists}
                    </div>
                )
            }
        </>
    );
}
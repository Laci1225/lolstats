import {JSX, useEffect, useState} from "react";
import {Match} from "../models/match.ts";
import {getSummonerPuuid} from "../api/match.ts";


interface WinnersProps {
    currentMatch: Match
}

function Winners({currentMatch}: WinnersProps): JSX.Element {
    const winners = currentMatch.info.participants.slice(0, 5);
    const [names, setNames] = useState<string[]>([]);
    const winnerNames = names.slice(0, 5);

    useEffect(() => {
        currentMatch.metadata.participants.map(puuid =>
            getSummonerPuuid(puuid).then(
                value => setNames(value2 => [...value2, value.name])));
    }, []);
    return (<>
        {
            winners.map((value, index) =>
                <div className={"player-cell"} key={index}>
                    {winnerNames[index]}
                    {value.win ? "    Win   " : "    Lose   "}
                    {value.kills}/{value.deaths}/{value.assists}
                </div>)
        }
    </>);
}

export default Winners;
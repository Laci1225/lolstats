import {Match} from "../models/match.ts";
import {useEffect, useState} from "react";
import {getSummonerPuuid} from "../api/match.ts";

interface LoserProp {
    currentMatch: Match;
}

export default function Losers({currentMatch}: LoserProp) {
    const losers = currentMatch.info.participants.slice(5, 10);
    const [names, setNames] = useState<string[]>([]);
    useEffect(() => {
        async function fetchSummonerNames() {
            const namesArray = [];
            for (const id of currentMatch.metadata.participants.slice(5, 10)) {
                const response = await getSummonerPuuid(id);
                const summonerName = response.name;
                namesArray.push(summonerName);
            }
            setNames(namesArray);
            /*currentMatch.metadata.participants.map(puuid =>
                getSummonerPuuid(puuid).then(
                    value => setNames(value2 => [...value2, value.name])));*/
        }

        fetchSummonerNames();
    }, []);

    return (
        <>
            {names.length === 5 ? (
                <>
                    {
                        losers.map((value, index) =>
                            <div className={"player-cell"} key={index}>
                                <div>{names[index]}</div>
                                <div>{value.win ? "Win" : "Lose"}</div>
                                <div>{value.kills}/{value.deaths}/{value.assists}</div>
                            </div>
                        )
                    }
                </>
            ) : "Loading..."}
        </>
    );
}
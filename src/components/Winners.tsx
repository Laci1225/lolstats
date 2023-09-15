import {JSX, useEffect, useState} from "react";
import {Match} from "../models/match.ts";
import {getSummonerPuuid} from "../api/match.ts";


interface WinnersProps {
    currentMatch: Match
}

function Winners({currentMatch}: WinnersProps): JSX.Element {
    const winners = currentMatch.info.participants.slice(0, 5);
    const [names, setNames] = useState<string[]>([]);

    useEffect(() => {
        async function fetchSummonerNames() {
            const namesArray = [];
            for (const id of currentMatch.metadata.participants.slice(0, 5)) {
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
    return (<>
        {names.length === 5 ? (
            <>
                {
                    winners.map((value, index) =>
                        <div className={"player-cell"} key={index}>
                            <div>{names[index]}</div>

                            <div>{value.win ? "Win" : "Lose"}</div>
                            <div>{value.kills}/{value.deaths}/{value.assists}</div>
                        </div>
                    )
                }
            </>
        ) : "Loading..."}
    </>);
}

export default Winners;
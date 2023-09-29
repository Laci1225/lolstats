import {Summoner} from "../../../models/summoner.ts";
//import {useNavigate} from "react-router-dom";
import CurrentMatchData from "../../../pages/CurrentMatchData.tsx";
import {useEffect, useState} from "react";
import {getLastXMatchId} from "../../../api/match.ts";

interface LastMatchDataProps {
    summonerData: Summoner
}

export default function LastXMatch({summonerData}: LastMatchDataProps) {
    const [displayedMatchCount, setDisplayedMatchCount] = useState(0);
    const [lastXMatch, setLastXMatch] = useState<string[]>([]);

    useEffect(() => {
        getLastXMatchId(summonerData.puuid,
            0, displayedMatchCount + 10).then(matches => setLastXMatch(matches));
    }, [displayedMatchCount, summonerData]);
    return (
        <>
            <div className="">
                {lastXMatch.map(
                    gameId =>
                        <div key={gameId} className={``}>
                            <CurrentMatchData id={gameId} summonerData={summonerData}/>
                        </div>
                )}
            </div>
            <button onClick={() => setDisplayedMatchCount(displayedMatchCount + 10)}>More</button>
        </>
    )
}
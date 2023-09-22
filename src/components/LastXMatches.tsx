import {Summoner} from "../models/summoner.ts";
//import {useNavigate} from "react-router-dom";
import CurrentMatchData from "../Pages/CurrentMatchData.tsx";
import {useEffect, useState} from "react";
import {getLastXMatchId} from "../api/match.ts";

interface LastMatchDataProps {
    summonerData: Summoner
}

export default function LastXMatch({summonerData}: LastMatchDataProps) {
    /*const navigate = useNavigate();
    const onMatchIDClick = (value: string) => {
        navigate(`/${value}`)
    }*/
    const [displayedMatchCount, setDisplayedMatchCount] = useState(0);
    const [lastXMatch, setLastXMatch] = useState<string[]>([]);

    useEffect(() => {
        getLastXMatchId(summonerData.puuid,
            displayedMatchCount, displayedMatchCount + 10).then(matches => setLastXMatch(matches));
    }, [displayedMatchCount, summonerData]);
    return (
        <>
            <div className="">
                {lastXMatch.map(
                    gameId =>
                        <div key={gameId}>
                            <CurrentMatchData fromSummonerPage={gameId} summonerData={summonerData}/>
                        </div>
                )}
            </div>
            <button onClick={() => setDisplayedMatchCount(displayedMatchCount + 10)}>More</button>
        </>
    )
}
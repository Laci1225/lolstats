import {useEffect, useState} from "react";
import {getSummonerLeagueData} from "../api/match.ts";
import {LeagueData} from "../models/summonerLeague.ts";

interface LeagueDataProps {
    summonerId: string
}

export default function SummonerLeagueData({summonerId}: LeagueDataProps) {
    const [leagueData, setLeagueData] = useState<LeagueData>();
    useEffect(() => {
            getSummonerLeagueData(summonerId).then(
                value => setLeagueData(value.leagueData[0]));
    }, [summonerId]);
    console.log(leagueData?.tier)
    return (
        <div>Egy egy almafa: {leagueData?.tier}</div>
    )
}
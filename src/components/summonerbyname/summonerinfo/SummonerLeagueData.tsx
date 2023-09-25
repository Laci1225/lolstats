import {useEffect, useState} from "react";
import {getSummonerLeagueData} from "../../../api/match.ts";
import {LeagueData} from "../../../models/summonerLeague.ts";

interface LeagueDataProps {
    summonerId: string
}

export default function SummonerLeagueData({summonerId}: LeagueDataProps) {
    const [leagueData, setLeagueData] = useState<LeagueData>();
    useEffect(() => {
        getSummonerLeagueData(summonerId).then(
            value => setLeagueData(value[0]));
    }, [summonerId]);
    return (
        <div>
            {leagueData ? (
                <div className="flex h-fit bg-gray-700 rounded mt-2">
                    <div className="w-1/3">
                        <img className="w-max" src={`src/img/tiers/${leagueData.tier.toLowerCase()}.webp`} alt="TierLogo"/>
                    </div>
                    <div className="w-1/3 text-xs">
                        <div>{leagueData.tier} {leagueData.rank}</div>
                        <div> {leagueData.leaguePoints}LP</div>
                    </div>
                    <div className="w-1/3 text-xs">
                        <div className="">{leagueData.wins}W/{leagueData.losses}L</div>
                        <div className="">Win
                            rate: {Math.round(leagueData.wins / (leagueData.wins + leagueData.losses) * 100)}%
                        </div>
                    </div>
                </div>
            ) : "Loading..."}
        </div>
    )
}
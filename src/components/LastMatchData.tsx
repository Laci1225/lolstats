import {Summoner} from "../models/summoner.ts";
import useLastMatchId from "../hooks/useLastMatchId.ts";
import LastMatchInfo from "./LastMatchInfo.tsx";

interface LastMatchDataProps {
    summonerData: Summoner
}

export default function LastMatchData({summonerData}: LastMatchDataProps) {
    const lastGameId = useLastMatchId(summonerData.puuid, 1);

    return (<div className="title"><LastMatchInfo lastGameId={typeof lastGameId === "string" ? lastGameId : "0"}/></div>)
}
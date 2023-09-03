import {Summoner} from "../models/summoner.ts";
import useLastMatchId from "../hooks/useLastMatchId.ts";
//import LastMatchInfo from "./LastMatchInfo.tsx";

interface LastMatchDataProps {
    summonerData: Summoner
}

export default function LastMatchData({summonerData}: LastMatchDataProps) {
    const lastGameId = useLastMatchId(summonerData.puuid);

    return (<div>{lastGameId}{/*<LastMatchInfo lastGameId={lastGameId}/>*/} </div>)
}
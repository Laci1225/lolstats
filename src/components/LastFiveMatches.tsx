import {Summoner} from "../models/summoner.ts";
import useLastMatchId from "../hooks/useLastMatchId.ts";
//import {useNavigate} from "react-router-dom";
import CurrentMatchData from "../Pages/CurrentMatchData.tsx";

interface LastMatchDataProps {
    summonerData: Summoner
}

export default function LastFiveMatch({summonerData}: LastMatchDataProps) {
    /*const navigate = useNavigate();
    const onMatchIDClick = (value: string) => {
        navigate(`/${value}`)
    }*/


    const lastGamesId = useLastMatchId(summonerData.puuid, 5);
    return (
        <div className="title flex-col">{
            lastGamesId.map(
                gameId =>
                    <div key={gameId}>
                        <CurrentMatchData fromSummonerPage={gameId} summonerData={summonerData}/>)
                    </div>
            )}
        </div>
    )
}
import {Summoner} from "../models/summoner.ts";
import useLastMatchId from "../hooks/useLastMatchId.ts";
import {useNavigate} from "react-router-dom";

interface LastMatchDataProps {
    summonerData: Summoner
}

export default function LastFiveMatch({summonerData}: LastMatchDataProps) {
    const navigate = useNavigate();
    const onMatchIDClick = (value: string) => {
        navigate(`/${value}`)
    }


    const lastGamesId = useLastMatchId(summonerData.puuid, 5);
    return (<div className="title">{lastGamesId.map(
        value =>
            <div key={value}>
                <a onClick={() => {
                    onMatchIDClick(value)
                }}>{value}</a>
            </div>)} </div>)
}
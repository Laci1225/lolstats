import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Match} from "../models/match.ts";
import {getMatchData} from "../api/match.ts";
import "./current-match-data.css"
import CurrentMatchData2 from "../components/CurrentMatchData2.tsx";
import {Summoner} from "../models/summoner.ts";

type CurrentMatchDataParams = {
    id: string;
}

interface Param {
    fromSummonerPage: string;
    summonerData: Summoner
}

export default function CurrentMatchData({fromSummonerPage, summonerData}: Param) {

    let {id} = useParams<CurrentMatchDataParams>();
    if (fromSummonerPage)
        id = fromSummonerPage
    const [currentMatch, setCurrentMatch] = useState<Match>();
    useEffect(() => {
        if (id) {
            getMatchData(id).then(value => setCurrentMatch(value))
        }
    }, [id])

    return (<>
        {currentMatch ? (
                <>
                    <CurrentMatchData2 currentMatch={currentMatch} summonerData={summonerData}/>
                </>
            )
            : "Loading..."
        }
    </>)
}
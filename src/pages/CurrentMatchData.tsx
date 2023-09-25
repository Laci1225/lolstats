import {useEffect, useState} from "react";
import {Match} from "../models/match.ts";
import {getMatchData} from "../api/match.ts";
import CurrentMatchData2 from "../components/summonerbyname/lastxmatch/CurrentMatchData2.tsx";
import {Summoner} from "../models/summoner.ts";
import {useParams} from "react-router-dom";


interface Param {
    id: string;
    summonerData: Summoner
}

type CurrentMatchDataParams = {
    matchId: string;
}

export default function CurrentMatchData({id, summonerData}: Param) {

    const {matchId} = useParams<CurrentMatchDataParams>();

    const [currentMatch, setCurrentMatch] = useState<Match>();
    useEffect(() => {
        getMatchData(matchId ? matchId : id).then(value => setCurrentMatch(value))
    }, [id, matchId])

    return (<>
        {currentMatch ? (
                <>
                    <CurrentMatchData2 currentMatch={currentMatch} summonerData={summonerData}/>
                </>
            )
            : ""
        }
    </>)
}
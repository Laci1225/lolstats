import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {Match} from "../models/match.ts";
import {getMatchData, getSummonerPuuid} from "../api/match.ts";
import "./current-match-data.css"
import Team from "../components/Team.tsx";
import {toDate} from 'date-fns'

type CurrentMatchDataParams = {
    id: string
}
interface Param{
    id2: string
}
//TODO date-fns@2.30.0
export default function CurrentMatchData({id2}: Param) {

    let {id} = useParams<CurrentMatchDataParams>();
    if (id2)
        id = id2
    const [currentMatch, setCurrentMatch] = useState<Match>();
    const [names, setNames] = useState<string[]>([]);
    useEffect(() => {
        if (id) {
            getMatchData(id).then(value => setCurrentMatch(value))
        }
    }, [id])
    const getSummonerNames = useCallback(() => {
        return Promise.all(
            currentMatch.metadata.participants.map(puuid =>
                getSummonerPuuid(puuid))
        ).then(summoners => summoners.map(summoner => summoner.name));
    }, [currentMatch]);
    useEffect(() => {
        if (currentMatch)
            getSummonerNames().then(
                summonerNames => setNames(summonerNames));
    }, [currentMatch, getSummonerNames]);


    return (<>
        {currentMatch && names.length === 10 ? (<>
                <div className="all-data">

                    <div className="macro-data">
                        <div>{new Date(currentMatch.info.gameCreation).toLocaleString()}</div>
                        <div>{//TODO function
                            (Math.floor(currentMatch.info.gameDuration / 3600) !== 0) ? (
                                `${Math.floor(currentMatch.info.gameDuration / 3600)} h`
                            ) : ""}
                            {
                                `${Math.floor(currentMatch.info.gameDuration / 60)} min ` +
                                `${currentMatch.info.gameDuration % 60} sec`
                            }</div>
                        <div>{ toDate(currentMatch.info.gameEndTimestamp).toLocaleString()}</div>
                        {}
                    </div>
                    <div className="overall">
                        <div className="winners">
                            <Team currentMatch={currentMatch} blue={true}
                                  names={names.slice(0, 5)}/>
                        </div>
                        <div className="losers">
                            <Team currentMatch={currentMatch} blue={false}
                                  names={names.slice(5, 10)}/>
                        </div>
                    </div>
                </div>
            </>) :
            "Loading..."
        }
    </>)
}
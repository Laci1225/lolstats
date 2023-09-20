import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {Match} from "../models/match.ts";
import {getMatchData, getSummonerPuuid} from "../api/match.ts";
import "./current-match-data.css"
import Team from "../components/Team.tsx";
import {toDate, formatDistanceToNow, secondsToMinutes, secondsToHours} from 'date-fns'

type CurrentMatchDataParams = {
    id: string
}

interface Param {
    fromSummonerPage: string
}

//TODO date-fns@2.30.0
export default function CurrentMatchData({fromSummonerPage}: Param) {

    let {id} = useParams<CurrentMatchDataParams>();
    if (fromSummonerPage)
        id = fromSummonerPage
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

    const date = (date: number) => {
        const hour = secondsToHours(date);
        const min = secondsToMinutes(date) - hour * 60;
        const sec = date - hour * 3600 - min * 60;
        return hour ? `${hour} hour ${min} min ${sec} sec` : `${min} min ${sec} sec`;
    }

    const [isOpen, setOpen] = useState(false);
    const toggleDropdown = () => {
        setOpen(!isOpen);
    };

    return (<>
        {currentMatch && names.length === 10 ? (<>
                <div className="flex flex-col m-2">

                    <div className="macro-data">
                        <div>{new Date(currentMatch.info.gameCreation).toLocaleString()}</div>
                        <div>{date(currentMatch.info.gameDuration)}</div>
                        <div>{formatDistanceToNow(toDate(currentMatch.info.gameEndTimestamp))}</div>
                    </div>
                    <button onClick={toggleDropdown}>
                    {isOpen ? 'Collapse' : 'Expand'}
                </button>
                    {isOpen && (<>
                    <div className="flex flex-row">
                        <div className="bg-blue-900 w-1/2 mx-4 rounded">
                            <Team currentMatch={currentMatch} blue={true}
                                  names={names.slice(0, 5)}/>
                        </div>
                        <div className="bg-blue-900 w-1/2 mx-4 rounded">
                            <Team currentMatch={currentMatch} blue={false}
                                  names={names.slice(5, 10)}/>
                        </div>
                    </div>
                            </>)}
                </div>
            </>) :
            "Loading..."
        }
    </>)
}
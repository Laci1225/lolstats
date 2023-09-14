import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Match} from "../models/match.ts";
import {getMatchData, getSummonerPuuid} from "../api/match.ts";
import Winners from "../components/Winners.tsx";
import "./current-match-data.css"
import Losers from "../components/Losers.tsx";

type CurrentMatchDataParams = {
    id: string
}

export default function CurrentMatchData() {
    const {id} = useParams<CurrentMatchDataParams>();
    const [currentMatch, setCurrentMatch] = useState<Match>();
    const [names, setNames] = useState<string[]>([]);
    useEffect(() => {
        if (id) {
            getMatchData(id).then(value => setCurrentMatch(value))
        }
        if (currentMatch) {
            currentMatch.metadata.participants.map(puuid =>
                getSummonerPuuid(puuid).then(
                    value => setNames(value2 => [...value2, value.name]))
            )
        }
    }, [id])
    return (<>
        {currentMatch ? (<>
                <div className="all-data">

                    <div className="macro-data">
                        alma
                    </div>
                <div className="overall">
                    <div className="winners">
                        {<Winners currentMatch={currentMatch}/>}
                    </div>
                    <div className="losers">
                        <Losers currentMatch={currentMatch} names={names}/>
                    </div>
                </div>
                </div>
            </>) :
            "Loading..."
        }

    </>)
}
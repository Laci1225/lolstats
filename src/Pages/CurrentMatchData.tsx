import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Match} from "../models/match.ts";
import {getMatchData} from "../api/match.ts";
import Winners from "../components/Winners.tsx";
import "./current-match-data.css"
import Losers from "../components/Losers.tsx";

type CurrentMatchDataParams = {
    id: string
}
export default function CurrentMatchData() {
    const {id} = useParams<CurrentMatchDataParams>();
    const [currentMatch, setCurrentMatch] = useState<Match>();

    useEffect(() => {
        if (id) {
            getMatchData(id).then(value => setCurrentMatch(value))
        }
            
    }, [id])
    return (<>
        {currentMatch ? (<>
                <div className="all-data">

                    <div className="macro-data">
                        <div>{currentMatch.info.gameCreation}</div>
                        {}
                    </div>
                    <div className="overall">
                        <div className="winners">
                            <Winners currentMatch={currentMatch}/>
                        </div>
                        <div className="losers">
                            <Losers currentMatch={currentMatch}/>
                        </div>
                    </div>
                </div>
            </>) :
            "Loading..."
        }
    </>)
}
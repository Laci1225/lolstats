/*import {useEffect, useState} from "react";
import {getMatchData} from "../api/match.ts";
import {Match} from "../models/match.ts";
import SummonerPuuid from "./SummonerPuuid.tsx";

interface LastGameInfoProps {
    lastGameId: string
}

export default function LastMatchInfo({lastGameId}: LastGameInfoProps) {
    const [lastMatchData, setLastMatchData] = useState<Match>();
    useEffect(() => {
        getMatchData(lastGameId).then(value => setLastMatchData(value)).catch();
    }, [lastGameId]);
    const [isOpen, setOpen] = useState(false);
    const toggleDropdown = () => {
        setOpen(!isOpen);
    };
    return (
        <>
            <h2>Participants</h2>
            <button onClick={toggleDropdown}>
                {isOpen ? 'Collapse' : 'Expand'}
            </button>
            {isOpen && lastMatchData && (
                <>
                    {
                         lastMatchData.metadata.participants
                             .map(value =>
                                 <div key={value}>
                                     {
                                         <SummonerPuuid puuid={value}/>
                                     }
                                 </div>
                             )
                    }
                </>
            )
            }
        </>
    )
}*/
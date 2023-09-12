import useMatchData from "../hooks/useMatchData.ts";
import SummonerPuuid from "./SummonerPuuid.tsx";
import {useState} from "react";

interface LastGameInfoProps {
    lastGameId: string
}

export default function LastMatchInfo({lastGameId}: LastGameInfoProps) {
    const lastMatchData = useMatchData(lastGameId);
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
                        lastMatchData?.metadata.participants
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
}
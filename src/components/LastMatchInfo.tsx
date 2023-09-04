import useLastMatchData from "../hooks/useLastMatchData.ts";
import SummonerPuuid from "./SummonerPuuid.tsx";
import {useCallback, useState} from "react";

interface LastGameInfoProps {
    lastGameId: string
}

export default function LastMatchInfo({lastGameId}: LastGameInfoProps) {
    const lastMatchData = useLastMatchData(lastGameId);
    const [isOpen, setOpen] = useState(false);
    const toggleDropdown = () => {
        setOpen(!isOpen);
    };
    const callback =
        useCallback(() => {
            return lastMatchData?.metadata.participants
                .map(value =>
                    <div key={value}>
                        {
                            <SummonerPuuid puuid={value}/>
                        }
                    </div>
                )
        }, [lastMatchData?.metadata.participants])

    return (
        <>
            <h2>Participants</h2>
            <button onClick={toggleDropdown}>
                {isOpen ? 'Collapse' : 'Expand'}
            </button>
            {isOpen && lastMatchData && (
                <>
                    {
                        callback()
                    }
                </>
            )
            }
        </>
    )
}
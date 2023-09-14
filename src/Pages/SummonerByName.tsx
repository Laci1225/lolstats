import './summoner-by-name.css'
import SummonerData from "../components/SummonerData.tsx";
import {useState} from "react";
import useSummonerData from "../hooks/useSummonerData.ts";
import SummonerInfo from "../components/SummonerInfo.tsx";
import LastFiveMatch from "../components/LastFiveMatches.tsx";
import {useNavigate} from "react-router-dom";

function SummonerByName() {
    const [name, setName] = useState("");

    const summonerData = useSummonerData(name);

    const navigate = useNavigate();
    const onMatchIDClick = () => {
        navigate(`/match`)
    }

    return (
        <div className="bc">
            <div className="all-side">
                <div className="left-side">
                    <SummonerData setName={setName}/>
                </div>
                <div className="right-side">
                    {
                        summonerData && (
                            <>
                                <SummonerInfo summonerData={summonerData}/>
                                <LastFiveMatch summonerData={summonerData}/>
                                <div className="title">
                                    <button onClick={onMatchIDClick}>Last game</button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SummonerByName

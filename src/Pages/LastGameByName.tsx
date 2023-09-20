import {useState} from "react";
import useSummonerData from "../hooks/useSummonerData.ts";
import SummonerInput from "../components/SummonerInput.tsx";
import LastMatchData from "../components/LastMatchData.tsx";
import './summoner-by-name.css'

function LastGameByName() {
    const [name, setName] = useState("");

    const summonerData = useSummonerData(name);

    return (
        <div className="bc">

            <div className="all-side">
                <div className="left-side">
                    Last Game
                    <SummonerInput setName={setName}/>
                </div>
                <div className="right-side">
                    {
                        summonerData && (
                            <LastMatchData summonerData={summonerData}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default LastGameByName;
import '../SummonerByName.css'
import SummonerData from "../components/SummonerData.tsx";
import {useState} from "react";
import useSummonerData from "../hooks/useSummonerData.ts";
import SummonerInfo from "../components/SummonerInfo.tsx";

function SummonerByName() {
    const [name, setName] = useState("");

    const summonerData = useSummonerData(name);

    return (
        <div className="all-side">
            <div className="left-side">
                <SummonerData setName={setName}/>
            </div>
            <div className="right-side">
                {
                    summonerData && (
                        <SummonerInfo summonerData={summonerData}/>
                    )
                }
            </div>
        </div>
    )
}

export default SummonerByName

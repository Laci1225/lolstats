import {useState} from "react";
import useSummonerData from "../hooks/useSummonerData.ts";
import SummonerData from "../components/SummonerData.tsx";
import LastMatchData from "../components/LastMatchData.tsx";

function  LastGameByName(){
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
                        <LastMatchData summonerData={summonerData}/>
                    )
                }
            </div>
        </div>
    )
}
export default LastGameByName;
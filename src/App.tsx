import './App.css'
import GetSummoner from "./components/GetSummoner";
import {useState} from "react";
import useSummonerData from "./hooks/useSummonerData";
import VisualizeData from "./components/VisualizeData";

function App() {
    const [name, setName] = useState("");

    const summonerData = useSummonerData(name);
    //const matchData = useMatchData();
    return (
        <div className="all-side">
            <div className="left-side">
                <GetSummoner setName={setName}/>
            </div>
            <div className="right-side">
                {summonerData && (
                    <VisualizeData summonerData={summonerData}/>
                )}
            </div>
        </div>
    )
}

export default App

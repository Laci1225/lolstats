import './summoner-by-name.css'
import SummonerInput from "../components/SummonerInput.tsx";
import {useState} from "react";
import useSummonerData from "../hooks/useSummonerData.ts";
import SummonerInfo from "../components/SummonerInfo.tsx";
import LastFiveMatch from "../components/LastFiveMatches.tsx";

function SummonerByName() {
    const [name, setName] = useState("");
    const summonerData = useSummonerData(name);
    //const navigate = useNavigate();
    /*const onMatchIDClick = () => {
        navigate(`/match`)
    }*/
    return (
        <div className="w-screen">
            <div className="inline w-3/6">
                <div className="">
                    <SummonerInput setName={setName}/>
                </div>
                <div className="w-9/12 mx-auto">
                    {
                        summonerData && (
                            <div className={"flex border-4 border-amber-400"}>
                                <div className={"w-1/5 break-words"}>
                                    <SummonerInfo summonerData={summonerData}/>
                                    </div>
                                    <div className={"w-4/6 block mx-auto"}>
                                    <LastFiveMatch summonerData={summonerData}/>
                                </div>
                                <div className="title">
                                    {//<button onClick={onMatchIDClick}>Last game</button>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SummonerByName

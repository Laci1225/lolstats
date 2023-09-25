import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import SummonerInput from "../summonerbyname/lastxmatch/SummonerInput.tsx";
import SummonerInfo from "../summonerbyname/summonerinfo/SummonerInfo.tsx";
import LastXMatch from "../summonerbyname/lastxmatch/LastXMatches.tsx";
import {getSummonerData} from "../../api/match.ts";
import {Summoner} from "../../models/summoner.ts";

type CurrMatchTypedInParams = {
    summonerName: string;
}

export default function CurrMatchTypedIn() {
    const {summonerName} = useParams<CurrMatchTypedInParams>();
    const [name, setName] = useState(summonerName);
    const [summonerData, setSummonerData] = useState<Summoner>();
    useEffect(() => {
        if (name)
            getSummonerData(name).then(value => setSummonerData(value))
    }, [name]);
    //const summonerData = useSummonerData(name);

    return (
        <div className="">
            <div className="flex flex-col">
                <div className="bg-gray-700">
                    <SummonerInput setName={setName}/>
                </div>
                <div className="min-w-[1024px] mx-auto  w-[1024px]">
                    {
                        summonerData && (
                            <div className={"flex border-4 border-amber-400 "}>
                                <div className={"w-2/6 break-words"}>
                                    <SummonerInfo summonerData={summonerData}/>
                                </div>
                                <div className={"w-full block rounded m-2"}>
                                    <LastXMatch summonerData={summonerData}/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
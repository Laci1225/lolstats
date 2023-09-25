import SummonerInput from "../components/summonerbyname/lastxmatch/SummonerInput.tsx";

function SummonerByName() {
    //const [name, setName] = useState("");
    //const summonerData = useSummonerData(name);

    return (
        <div className="">
            <div className="flex flex-col">
                <div className="bg-gray-700">
                    <SummonerInput setName={name => name}/>
                </div>
                {/*<div className="min-w-1024 mx-auto  w-1024">
                    {
                        summonerData && (
                            <div className={"flex border-4 border-amber-400 "}>
                                <div className={"w-2/6 break-words"}>
                                    <SummonerInfo summonerData={summonerData}/>
                                </div>
                                <div className={"w-full block rounded m-2"}>
                                    <LastXMatch summonerData={summonerData}/>
                                </div>
                                <div className="title">
                                </div>
                            </div>
                        )
                    }
                </div>*/}
            </div>
        </div>
    )
}

export default SummonerByName

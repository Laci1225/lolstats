import useLastMatchData from "../hooks/useLastMatchData.ts";
//import SummonerPuuid from "./SummonerPuuid.tsx";

interface LastGameInfoProps {
    lastGameId: string
}

export default function LastMatchInfo({lastGameId}: LastGameInfoProps) {
    const valami = useLastMatchData(lastGameId);
    if (valami) {
        console.log(valami.metadata.participants)
    }
    return (
        <>
            {
                valami?.metadata.participants/*
                    .map(value =>
                        <div>
                            {
                                //<SummonerPuuid puuid={value}/>
                            }
                        </div>
                    )*/
            }
        </>
    )
}
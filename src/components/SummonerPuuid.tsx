import useSummonerPuuid from "../hooks/useSummonerPuuid.ts";

export default function SummonerPuuid(puuid: string) {
    const a = useSummonerPuuid(puuid);
    return (a?.name)
}
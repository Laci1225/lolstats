import useSummonerPuuid from "../hooks/useSummonerPuuid.ts";

interface SummonerPuuidProps {
    puuid: string
}
export default function SummonerPuuid({puuid}:SummonerPuuidProps) {
    const a = useSummonerPuuid(puuid);
    return (a?.name)
}
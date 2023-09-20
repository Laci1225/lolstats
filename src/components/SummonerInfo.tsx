import {JSX} from "react";
import {Summoner} from "../models/summoner";
import useBestChampion from "../hooks/useBestChampion";
import ChampionName from "./ChampionName";
import SummonerLeagueData from "./SummonerLeagueData.tsx";

interface Props {
    summonerData: Summoner;
}


export default function SummonerInfo({summonerData}: Props): JSX.Element {
    const bestChampion = useBestChampion(summonerData.id);
    return (
        <>
            <div className="bg-gray-700 rounded mt-2">Summoner information:
                <div className="indent">Name: {summonerData.name}</div>
                <div className="indent">Summoner level: {summonerData.summonerLevel}</div>
                {//<div className="whitespace-nowrap overflow-auto indent">ID: {summonerData.id}</div>
                }
            </div>
            <SummonerLeagueData summonerId={summonerData.id}/>
            <div className="bg-gray-700 rounded mt-2">Best champion information:
                {bestChampion ? (
                    <>
                        <div className="indent">
                            Name: <ChampionName id={bestChampion.championId}/>
                        </div>
                        <div className="indent">Level: {bestChampion.championLevel}</div>
                        <div className="indent">Points: {bestChampion.championPoints}</div>
                    </>
                ) : "Loading..."}
            </div>
        </>)
}
import {JSX} from "react";
import {Summoner} from "../models/summoner";
import useBestChampion from "../hooks/useBestChampion";
import ChampionName from "./ChampionName";

interface Props {
    summonerData: Summoner;
}


export default function SummonerInfo({summonerData}: Props): JSX.Element {
    const bestChampion = useBestChampion(summonerData.id);
    return (
        <>
            <div className="title">Summoner information:
                <div className="indent">ID: {summonerData.id}</div>
                <div className="indent">AccountId: {summonerData.accountId}</div>
                <div className="indent">PuuId: {summonerData.puuid}</div>
                <div className="indent">Name: {summonerData.name}</div>
                <div className="indent">Summoner level: {summonerData.summonerLevel}</div>
            </div>
            <div className="title">Best champion information:
                {bestChampion ? (
                    <>
                        <div className="indent">ID: {bestChampion.championId}</div>
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
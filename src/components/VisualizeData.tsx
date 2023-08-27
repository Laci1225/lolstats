import {JSX} from "react";
import {Summoner} from "../models/summoner";

interface Props {
    summonerData: Summoner;
}

export default function VisualizeData({summonerData}: Props): JSX.Element {
    return (
        <>
            <div className="title">Summoner information:
                <div>{summonerData.id}</div>
                <div>{summonerData.name}</div>
                <div>{summonerData.summonerLevel}</div>
            </div>
        </>
    )
}
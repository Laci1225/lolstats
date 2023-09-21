import {useCallback, useEffect, useState} from "react";
import {getSummonerPuuid} from "../api/match.ts";
import {formatDistanceToNowStrict, secondsToHours, secondsToMinutes, toDate} from "date-fns";
import {Match, Participant} from "../models/match.ts";
import Team from "./Team.tsx";
import {Summoner} from "../models/summoner.ts";

interface CurrentMatch2Param {
    currentMatch: Match;
    summonerData: Summoner
}

export default function CurrentMatchData2({currentMatch, summonerData}: CurrentMatch2Param) {

    const [names, setNames] = useState<string[]>([]);
    const [searchedSummoner, setSearchedSummoner] = useState<Participant>()
    const [isOpen, setOpen] = useState(false);

    const getSummonerNames = useCallback(() => {
        return Promise.all(
            currentMatch.metadata.participants.map(puuid =>
                getSummonerPuuid(puuid))
        ).then(summoners => summoners.map(summoner => summoner.name));
    }, [currentMatch]);

    useEffect(() => {
        currentMatch.info.participants.filter(value => value.puuid === summonerData.puuid).map(value => setSearchedSummoner(value))
        if (isOpen)
            getSummonerNames().then(
                summonerNames => setNames(summonerNames));
    }, [currentMatch, getSummonerNames, isOpen, summonerData.puuid]);

    const date = (date: number) => {
        const hour = secondsToHours(date);
        const min = secondsToMinutes(date) - hour * 60;
        const sec = date - hour * 3600 - min * 60;
        return hour ? `${hour} hour ${min} min ${sec} sec` : `${min} min ${sec} sec`;
    }

    const toggleDropdown = () => {
        setOpen(!isOpen);
    };
    const backgroundColor = searchedSummoner?.win ? "bg-blue-900" : "bg-red-900";
    const arrowBackgroundColor = searchedSummoner?.win ? "bg-blue-800" : "bg-red-800";
    const matchLeftBorder = searchedSummoner?.win ? "border-l-8 border-l-blue-400" : "border-l-8 border-l-red-400";
    const arrowColor = searchedSummoner?.win ? "" : "fill-red";
    return (
        <>
            {
                searchedSummoner ? (<>
                    <div className={`flex flex-col mb-2 rounded ${ matchLeftBorder}`}>
                        <div className={`flex flex-row w-full text-sm ${backgroundColor} rounded p-1 bg-blue-`}>
                            <div className="w-2/12 flex flex-col">
                                <div>{formatDistanceToNowStrict(toDate(currentMatch.info.gameEndTimestamp), {addSuffix: true})}</div>
                                <div>{searchedSummoner.win ? "Victory" : "Lose"}</div>
                                <div>{date(currentMatch.info.gameDuration)}</div>
                            </div>
                            <div className="w-3/12">

                                <img src={`src/img/champions/${searchedSummoner.championId}.png`} alt=""/>
                                {searchedSummoner.win ? "Win" : "Lose"}
                                {searchedSummoner.kills}/{searchedSummoner.deaths}/{searchedSummoner.assists}
                            </div>
                            <div className="w-2/12">{}</div>
                            <div className="w-2/12">{}</div>
                            <div className="w-2/12">{}</div>
                            <div className="w-1/12">
                            <button className={`w-1/2 ${arrowBackgroundColor} h-full flex justify-center items-center p-0 float-right`} onClick={toggleDropdown}>
                                {isOpen ? <img className={`rotate-180 ${arrowColor}`} src="src/img/download.svg" alt="Less"/> :
                                    <img className={`${arrowColor}`} src="src/img/download.svg" alt="More"/>}
                            </button>
                                </div>
                        </div>
                        {isOpen && names.length === 10 && (
                            <>
                                <div className="macro-data">
                                    <div>{toDate(currentMatch.info.gameCreation).toLocaleString()}</div>
                                    <div>{date(currentMatch.info.gameDuration)}</div>
                                    <div>{toDate(currentMatch.info.gameEndTimestamp).toLocaleString()}</div>
                                </div>
                                <div className={`flex flex-row my-2`}>
                                    <div className={`${backgroundColor} w-1/2 mr-1 rounded`}>
                                        <Team currentMatch={currentMatch} blue={true}
                                              names={names.slice(0, 5)}/>
                                    </div>
                                    <div className={`${backgroundColor} w-1/2 mr-1 rounded`}>
                                        <Team currentMatch={currentMatch} blue={false}
                                              names={names.slice(5, 10)}/>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </>) : "Loading..."
            }
        </>
    )
}
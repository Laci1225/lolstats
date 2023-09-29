import {MouseEventHandler, useCallback, useEffect, useState} from "react";
import {getSummonerPuuid} from "../../../api/match.ts";
import {formatDistanceToNowStrict, toDate} from "date-fns";
import {Match, Participant} from "../../../models/match.ts";
import Team from "./Team.tsx";
import {Summoner} from "../../../models/summoner.ts";
import {formatDate} from "../../../utils/date.ts";
import {Spinner} from '@chakra-ui/react'

interface CurrentMatch2Param {
    currentMatch: Match;
    summonerData: Summoner
}

interface TimeFramesProps {
    gameEndTimestamp: number;
    gameDuration: number;
    hasWon: boolean;
    matchTypeColor: string
}

function TimeFrames({gameEndTimestamp, gameDuration, hasWon, matchTypeColor}: TimeFramesProps) {
    return (<div className="w-2/12 flex flex-col text-xs justify-center">
        <div className={`${matchTypeColor} font-bold `}>Ranked Solo</div>
        <div>{formatDistanceToNowStrict(toDate(gameEndTimestamp), {addSuffix: true})}</div>
        <div>-----------</div>
        <div>{hasWon ? "Victory" : "Lose"}</div>
        <div>{formatDate(gameDuration, true)}</div>
    </div>)
}

interface ChampionAndScoreParams {
    searchedSummoner: Participant
}

function ChampionAndScore({searchedSummoner}: ChampionAndScoreParams) {
    return (
        <div className="w-3/12 flex flex-col">
            <div className={"flex flex-row"}>
                <div className={"w-4/6 flex flex-row"}>
                    <img className={"rounded-full mr-1"} src={`src/img/champions/${searchedSummoner.championId}.png`}
                         alt=""/>
                    <div className={""}>
                        <img src={`src/img/summonerspells/${searchedSummoner.summoner1Id}.png`} alt="" width={30}/>
                        <img src={`src/img/summonerspells/${searchedSummoner.summoner2Id}.png`} alt="" width={30}/>
                    </div>
                    <div className={""}>
                    </div>
                </div>
                <div className={"w-2/6 flex flex-col justify-center"}>
                    <div className={"flex flex-row "}>
                        <div className={"font-bold text-sm mr-1"}>{searchedSummoner.kills}</div>
                        /
                        <div className={"font-bold text-sm mx-1 text-red-400"}>{searchedSummoner.deaths}</div>
                        /
                        <div className={"font-bold text-sm ml-1"}>{searchedSummoner.assists}</div>
                    </div>
                    <div className={"text-center"}>{((searchedSummoner.kills + searchedSummoner.assists) /
                        ((searchedSummoner.deaths === 0) ? 1 : searchedSummoner.deaths)).toFixed(2)}:1 KDA
                    </div>
                </div>

            </div>
            <div className={"flex items-start"}>almafa</div>
        </div>
    )
}

interface DropdownButtonProps {
    arrowBackgroundColor: string;
    toggleDropdown: MouseEventHandler;
    isOpen: boolean;
    arrowColor: string;
    namesLength: number;
}

function DropdownButton({arrowBackgroundColor, toggleDropdown, isOpen, arrowColor, namesLength}: DropdownButtonProps) {
    return (
        <div className="w-1/12">
            <button className={`w-1/2 ${arrowBackgroundColor} h-full flex justify-center items-center p-0 float-right`}
                    onClick={toggleDropdown}>
                {isOpen && namesLength === 10 ?
                    <svg className={`rotate-180 ${arrowColor}`} width="24" height="24" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13.2 16.5 9l1.5 1.4-6 5.6-6-5.6L7.5 9z" fillRule="nonzero"/>
                    </svg>
                    :
                    isOpen ? <Spinner className={"h-4 w-4"}/>
                        :
                        <svg className={`${arrowColor}`} width="24" height="24" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13.2 16.5 9l1.5 1.4-6 5.6-6-5.6L7.5 9z" fillRule="nonzero"/>
                        </svg>
                }
            </button>
        </div>)
}

interface MacroDataProps {
    gameCreation: number;
    gameDuration: number;
    gameEndTimestamp: number
}

function MacroData({gameCreation, gameDuration, gameEndTimestamp}: MacroDataProps) {
    return (
        <div className="flex mx-[10%] h-[10vh] items-center justify-between">
            <div>{toDate(gameCreation).toLocaleString()}</div>
            <div>{formatDate(gameDuration, false)}</div>
            <div>{toDate(gameEndTimestamp).toLocaleString()}</div>
        </div>
    )
}

interface GameStatisticProps {
    backgroundColor: string
    currentMatch: Match;
    names: string[];
}

function GameStatistic({backgroundColor, currentMatch, names}: GameStatisticProps) {
    return (
        <div className={`flex flex-row h-[30vh]`}>
            <div className={`${backgroundColor} w-1/2 mr-1 rounded`}>
                <Team currentMatch={currentMatch} blue={true}
                      names={names.slice(0, 5)}/>
            </div>
            <div className={`${backgroundColor} w-1/2 mr-1 rounded`}>
                <Team currentMatch={currentMatch} blue={false}
                      names={names.slice(5, 10)}/>
            </div>
        </div>
    )
}

export default function CurrentMatchData2({currentMatch, summonerData}: CurrentMatch2Param) {

    const [names, setNames] = useState<string[]>([]);
    const [searchedSummoner, setSearchedSummoner] = useState<Participant>()
    const [isOpen, setOpen] = useState(false);
    const backgroundColor = searchedSummoner?.win ? "bg-blue-900/50" : "bg-red-900/50";
    const arrowBackgroundColor = searchedSummoner?.win ? "bg-blue-800  hover:bg-blue-900/50" : "bg-red-800 hover:bg-red-900/50";
    const leftMarginColor = searchedSummoner?.win ? "border-l-8 border-l-blue-400" : "border-l-8 border-l-red-400";
    const matchTypeColor = searchedSummoner?.win ? "text-blue-400" : "text-red-400";
    const arrowColor = searchedSummoner?.win ? "fill-blue-500" : "fill-red-500";

    const toggleDropdown = () => {
        setOpen(!isOpen);
    };

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


    return (
        <>
            {
                searchedSummoner ? (<>
                        <div className={`flex flex-col mb-2 rounded`}>
                            <div
                                className={`flex flex-row w-full text-sm ${backgroundColor} rounded p-1  ${leftMarginColor}`}>
                                <TimeFrames gameEndTimestamp={currentMatch.info.gameEndTimestamp}
                                            matchTypeColor={matchTypeColor}
                                            gameDuration={currentMatch.info.gameDuration} hasWon={searchedSummoner.win}/>
                                <ChampionAndScore searchedSummoner={searchedSummoner}/>
                                <div className="w-2/12">{}</div>
                                <div className="w-2/12">{}</div>
                                <div className="w-2/12">{}</div>
                                <DropdownButton arrowBackgroundColor={arrowBackgroundColor} toggleDropdown={toggleDropdown}
                                                isOpen={isOpen} arrowColor={arrowColor} namesLength={names.length}/>
                            </div>
                            {isOpen && names.length === 10 && (
                                <>
                                    <MacroData gameCreation={currentMatch.info.gameCreation}
                                               gameDuration={currentMatch.info.gameDuration}
                                               gameEndTimestamp={currentMatch.info.gameEndTimestamp}/>
                                    <GameStatistic backgroundColor={backgroundColor} currentMatch={currentMatch}
                                                   names={names}/>
                                </>
                            )}
                        </div>
                    </>) :
                    <Spinner className={"h-6 w-6"}/>
            }
        </>
    )
}
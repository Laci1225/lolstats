import {Match} from "../models/match.ts";
import {httpClientEun1, httpClientEurope} from "./common.ts";
import {Summoner} from "../models/summoner.ts";
import {LeagueData} from "../models/summonerLeague.ts";

export const getMatchData = (lastGameId: string): Promise<Match> => {
    return httpClientEurope.get<Match>("match/v5/matches/" + lastGameId)
        .then(value => value.data)
}
export const getSummonerPuuid = (puuid: string): Promise<Summoner> => {
    return httpClientEun1.get<Summoner>("/summoner/v4/summoners/by-puuid/" + puuid)
        .then(value => value.data)
}
export const getSummonerLeagueData = (summonerId: string): Promise<LeagueData[]> => {
    return httpClientEun1.get(`/league/v4/entries/by-summoner/${summonerId}`)
        .then(value => value.data)
}
export const getLastXMatchId = (puuid: string, from: number, to: number):Promise<string[]> => {
    return httpClientEurope.get(`/match/v5/matches/by-puuid/${puuid}/ids?start=${from}&count=${to}`)
        .then(value => value.data)
}
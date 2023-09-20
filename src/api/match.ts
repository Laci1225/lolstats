import {Match} from "../models/match.ts";
import {httpClientEun1, httpClientEurope} from "./common.ts";
import {Summoner} from "../models/summoner.ts";
import {SummonerLeague} from "../models/summonerLeague.ts";

export const getMatchData = (lastGameId: string): Promise<Match> => {
    /*const [game, setGame] = useState<Match>();
    useEffect(() => {
        if (lastGameId)*/
    return httpClientEurope.get<Match>("match/v5/matches/" + lastGameId)
        .then(value => value.data)
    /*}, [lastGameId]);
    return <Match>game;*/
}
export const getSummonerPuuid = (puuid: string): Promise<Summoner> => {
    //const [smData, setSmData] = useState<Summoner | null>(null);
    //useEffect(() => {
    return httpClientEun1.get<Summoner>("/summoner/v4/summoners/by-puuid/" + puuid)
        .then(value => value.data)
    /*        .then(value => {
                setSmData(value.data);
            }).catch(error => {
            console.error("Error fetching summoner data:", error);
        });
    }, [puuid])
    return smData;*/
}
export const getSummonerLeagueData = (summonerId: string):Promise<SummonerLeague> => {
    return httpClientEun1.get(`/league/v4/entries/by-summoner/${summonerId}`)
        .then(value => value.data)
}
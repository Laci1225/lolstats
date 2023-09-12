import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import useMatchData from "../hooks/useMatchData.ts";
import {Match} from "../models/match.ts";

type CurrentMatchDataParams = {
    id: string
}

export default function CurrentMatchData() {
    const {id} = useParams<CurrentMatchDataParams>();
    const [currentMatch, setCurrentMatch] = useState<Match>()
    const matchData = useMatchData(id as string);
    useEffect(() => {
        if (id) {
            setCurrentMatch(matchData);
        }
    }, [id, matchData]);
    return (<>{currentMatch?.info.gameCreation}</>)
}
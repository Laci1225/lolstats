import {JSX} from "react";
import {Match} from "../models/match.ts";


interface WinnersProps {
    currentMatch: Match
}

function Winners({currentMatch}:WinnersProps): JSX.Element {
    return (<>

        <div className="player-cell">{currentMatch.info.gameCreation}</div>
        <div className="player-cell"></div>
        <div className="player-cell"></div>
        <div className="player-cell"></div>
        <div className="player-cell"></div>
    </>);
}

export default Winners;
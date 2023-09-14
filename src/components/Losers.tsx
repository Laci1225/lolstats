import {Match} from "../models/match.ts";

interface LoserProp {
    currentMatch: Match;
    names: string[];
}

export default function Losers({currentMatch, names}: LoserProp) {
    return (<>{
        //currentMatch.info.participants.map((value, index) =>
        <div className="player-cell">names[index] value.win ? "Win" : "Lose"</div>
        }
        </>);
    }
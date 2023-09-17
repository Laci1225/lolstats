import {Match} from "../models/match.ts";

interface TeamsProps {
    currentMatch: Match
    blue: boolean
    names: string[]
}

export default function Team({currentMatch, blue, names}: TeamsProps) {
    const team = blue ? currentMatch.info.participants.slice(0, 5) :
        currentMatch.info.participants.slice(5, 10);
    return (<>
            <>
                {
                    team.map((value, index) =>
                        <div className={"player-cell"} key={index}>
                            <div>{names[index]}</div>
                            <div>{value.win ? "Win" : "Lose"}</div>
                            <div>{value.kills}/{value.deaths}/{value.assists}</div>
                        </div>
                    )
                }
            </>
    </>);
}

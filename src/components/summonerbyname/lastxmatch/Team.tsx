import {Match} from "../../../models/match.ts";

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
                team.map((participant, index) =>
                    <div className={"flex flex-row h-[20%] items-center justify-between" +
                        " border-b-2 border-dashed border-b-slate-200 last-of-type:border-b-0"} key={index}>
                        <div className="w-1/2">{names[index]}</div>
                        <div className="w-1/4">{participant.win ? "Win" : "Lose"}</div>
                        <div className="w-1/4">{participant.kills}/{participant.deaths}/{participant.assists}</div>
                    </div>
                )
            }
        </>
    </>);
}

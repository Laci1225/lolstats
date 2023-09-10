import {JSX, ChangeEvent, useState} from "react";

interface Props {
    setName: (name: string) => void;
}

export default function SummonerData(props: Props): JSX.Element {
    const [name, setName] = useState("");

    function handleNameChange(event: ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    return (
        <>
            <div className="summoner-request">
                <label htmlFor="lon">Summoner name:</label>
                <input id="lon" type="text" onChange={handleNameChange}/>
                <button onClick={() => {
                    props.setName(name);}}>Submit
                </button>
            </div>
        </>
    )
}

import {JSX,ChangeEvent, useState} from "react";

interface Props {
    setName: (name: string) => void;
}
export default function GetSummoner(props: Props): JSX.Element {
    const [name, setName] = useState("");

    function handleNameChange(event: ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    return (
        <div>
            <div className="input-container">
                <label htmlFor="lon">Summoner name:</label>
                <input id="lon" type="text" onChange={handleNameChange}/>
            </div>

            <div>
                <button onClick={() => {
                    props.setName(name);
                }}>Submit
                </button>
            </div>
        </div>
    )
}

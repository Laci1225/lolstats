import {JSX, ChangeEvent, useState} from "react";

interface Props {
    setName: (name: string) => void;
}

export default function SummonerInput(props: Props): JSX.Element {
    const [name, setName] = useState("");

    function handleNameChange(event: ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    return (
        <div className={""}>
            <div className="block h-16"></div>
            <div className="max-w-screen-lg min-w-1024 p-5 mx-auto items-center justify-between flex">
                <label htmlFor="lon">Summoner name:</label>
                <input className="bg-white text-black" id="lon" type="text" onChange={handleNameChange}/>
                <button onClick={() => {
                    props.setName(name);}}>Submit
                </button>
            </div>
        </div>
    )
}

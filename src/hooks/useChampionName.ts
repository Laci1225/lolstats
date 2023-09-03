import {useEffect, useState} from "react";
import axios from "axios";
import {ChampionName} from "../models/championName";

export default function useChampionName(id: number) {
    const [cNames, setCNames] = useState<ChampionName | null>(null);

    useEffect(() => {
            axios.get("https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json",{timeout:4000})
                .then(value => {
                    const champNames = value.data.data;
                    for (const champNamesKey in champNames) {
                        if (champNames[champNamesKey].key == id) {
                            setCNames(champNames[champNamesKey])
                            break;
                        }
                    }
                }).catch(reason => alert(reason))
        }, [id]
    )
    console.log(id)
    console.log(cNames);
    return cNames;
}
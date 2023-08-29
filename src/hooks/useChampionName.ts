import {useEffect, useState} from "react";
import axios from "axios";
import {ChampionName} from "../models/championName";

export default function useChampionName(id) {
    const [champNames, setChampNames] = useState<ChampionName | null>(null);

    useEffect(() => {
            axios.get("https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json")
                .then(value => setChampNames(value.data))
        }, [id]
    )
    //console.log(champNames.data)
    for (const champNamesKey in champNames?.data) {
        if (champNames?.data[champNamesKey].key ==id.id){
            setChampNames(champNames?.data[champNamesKey])
            break;
        }
    }
    console.log(id)
    console.log(champNames);
    return champNames;
}
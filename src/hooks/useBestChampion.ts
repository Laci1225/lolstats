import {useEffect, useState} from "react";
import {httpClientEun1} from "../api/common";
import {Champion} from "../models/champion";

export default function useBestChampion(id: string | undefined): Champion | null {
    const [champData, setChampData] = useState<Champion | null>(null);

    useEffect(() => {
        httpClientEun1.get("champion-mastery/v4/champion-masteries/by-summoner/" +
            id, {timeout: 5000})
            .then(value =>
                setChampData(value.data[0]))
            .catch(reason => alert(reason))

    }, [id])
    return champData;
}
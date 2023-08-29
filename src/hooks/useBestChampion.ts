import {useEffect, useState} from "react";
import {httpClient} from "../api/common";
import {Champion} from "../models/champion";

export default function useBestChampion(id: string | undefined): Champion | null {
    const [champData, setChampData] = useState<Champion | null>(null);

    useEffect(() => {
            httpClient.get("champion-mastery/v4/champion-masteries/by-summoner/" +
                id +
                "/top?api_key=")//TODO
                .then(value =>
                    setChampData(value.data[0]))

    }, [id])
    return champData;
}
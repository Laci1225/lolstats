import useChampionName from "../hooks/useChampionName";

interface ChampionNameProps {
    id: number;
}

export default function ChampionName({id}: ChampionNameProps) {
    const championName = useChampionName(id);

    return (
        <>
            {championName && (<>
                {championName.name}
                <div className="indent">Title: {championName.title}</div>
            </>)}
        </>
    )
}
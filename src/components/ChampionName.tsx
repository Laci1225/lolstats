import useChampionName from "../hooks/useChampionName";

export default function ChampionName(championId: number | undefined) {
    const championName = useChampionName(championId);

    return (
        <>
            {championName?.name}
            <div className="indent">Title: {championName?.title}</div>
        </>
    )
}
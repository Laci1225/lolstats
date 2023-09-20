export interface Match {
    metadata: Metadata,
    info: Info
}

interface Metadata {
    participants: string[];
}

interface Info {
    gameCreation: number;
    gameDuration: number;
    gameEndTimestamp: number;
    participants: Participant[];

}

export interface Participant {
    win: boolean;
    kills: number;
    deaths: number;
    assists: number;
    puuid:string;
    championName: string;
}
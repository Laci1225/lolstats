export interface Match {
    metadata: Metadata,
    info: Info
}


interface Metadata {
    participants: string[];
}

interface Info {
    gameCreation: string;
    gameDuration: number;
    gameEndTimestamp: string;
    participants: Participant[];

}

export interface Participant {
    win: boolean;
    kills: number
    deaths: number
    assists: number
    puuid:string
}
export interface Match {
    metadata: Metadata,
    info: Info
}

interface Metadata {
    participants: string[];
}

interface Info {
    gameCreation: string;
    participants: Participant[];

}

interface Participant {
    win: boolean;
}
export interface Match {
    metadata: Metadata,
    info: Info
}

interface Metadata {
    participants: string[];
}

interface Info {
    gameCreation: string

}
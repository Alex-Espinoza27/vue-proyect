export interface ChatMessage {
    id: number;
    message: string;
    itsMine: boolean;
    image?: string;
    timestamp: Date;
}


export interface Greeter {
    greet(): string;
}

export interface Artist {
    greet(): string;
    songLink: string;
}

export interface ContainerConfig {
    coverArtist: boolean;
    shouldGreetPolitely: boolean;
}

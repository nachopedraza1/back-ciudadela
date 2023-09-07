export interface ApiResponse {
    data: Data;
}

export interface Data {
    characters: Characters;
}

export interface Characters {
    info: Info;
    results: Character[];
}

export interface Info {
    count: number;
    pages: number;
    next: number;
    prev: number;
}

export interface Character {
    id: string;
    name: string;
    species: string;
    image: string;
    status:string
}

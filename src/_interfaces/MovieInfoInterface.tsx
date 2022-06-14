export interface Item {
    Title: string,
    Poster: string,
    Type: string,
    Year: string,
    imdbID: string,
    is_new: boolean,
    is_favorite: boolean,
    is_watched: boolean
}

export interface MovieInterface {
    title: string,
    poster: string,
    type: string,
    year: string,
    imdb_id: string
    is_favorite: boolean
    is_watched: boolean
}

export interface MovieDefi {
    id: number,
    user: number,
    title: string,
    poster: string,
    type: string,
    year: string,
    imdb_id: string
    is_favorite: boolean
    is_watched: boolean,
    rated: string
    runtime: string
    genre: string
    director: string
    writer: string
    actors: string
    plot: string
    language: string
    country: string
    awards: string
    released: string
}
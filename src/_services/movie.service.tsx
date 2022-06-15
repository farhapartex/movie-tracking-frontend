import axios from "axios";
import { baseUrl, authHeader } from "../config/config";
import { MovieInterface } from "../_interfaces/MovieInfoInterface";

const searchMovieByTitle = (title: string) => {
    const url = `${baseUrl}api/v1/search-movie/`;
    return axios.post(url, JSON.stringify({ title: title }), { headers: authHeader() });
}

const submitMovieData = (movie: MovieInterface) => {
    const url = `${baseUrl}api/v1/add-movie/`;
    return axios.post(url, JSON.stringify(movie), { headers: authHeader() });
}

const getMovieList = (query: string) => {
    const url = `${baseUrl}api/v1/movies/?q=${query}`;
    return axios.get(url, { headers: authHeader() });
}

export const movieService = {
    searchMovieByTitle,
    submitMovieData,
    getMovieList
};
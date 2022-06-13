import axios from "axios";
import { baseRapidURL, rapidAPIHost, rapidAuthHeader, UserInfo } from "../config/config";

const searchMovieByName = (name: string) => {
    console.log("Working");
    const options = {
        method: 'GET',
        url: baseRapidURL,
        params: { s: name, r: 'json', page: '1' },
        headers: rapidAuthHeader()
    };

    return axios.request(options);
}

export const movieService = {
    searchMovieByName
};
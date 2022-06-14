import { movieService } from "../_services/movie.service";
import { movieConstants } from "../constants/movieConstant";
import { MovieInterface } from "../_interfaces/MovieInfoInterface";

const success = (response: any) => {
    return { type: movieConstants.GETALL_SUCCESS, response };
}

const handleError = (response: any) => {
    return { type: movieConstants.GETALL_FAILURE, response };
}

const clear = () => {
    return { type: movieConstants.CLEAR };
}

const searchMovieByName = (name: string) => {
    return (dispatch: any) => {
        return movieService.searchMovieByTitle(name);
    };
}

const submitMovieData = (movie: MovieInterface) => {
    return (dispatch: any) => {
        return movieService.submitMovieData(movie);
    };
}

const getMovieList = (query: string) => {
    return (dispatch: any) => {
        return movieService.getMovieList(query);
    };
}


export const movieActions = {
    searchMovieByName,
    submitMovieData,
    getMovieList
};
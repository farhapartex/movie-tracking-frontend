import { movieService } from "../_services/movie.service";
import { movieConstants } from "../constants/movieConstant";

const success = (response: any) => {
    return { type: movieConstants.GETALL_SUCCESS, response };
}

const handleError = (response: any) => {
    return { type: movieConstants.GETALL_FAILURE, response };
}

const clear = () => {
    return { type: movieConstants.CLEAR };
}

const response = {
    data: {
        Response: "True",
        Search: [
            {
                Title: '',
                Poster: '',
                Type: '',
                Year: '',
                imdbID: ''
            }
        ],
        totoalResult: 5,
        status: 200
    }
}

const searchMovieByName = (name: string) => {
    return (dispatch: any) => {
        console.log(name);
        return movieService.searchMovieByName(name);
        // .then(
        //     (response: any) => {
        //         console.log(response);
        //         let data = response.data;
        //         if (data.Response === "True") {
        //             dispatch(success(response.data.Search));
        //         }
        //         else {
        //             dispatch(handleError("Movie information not found"));

        //         }

        //     },
        //     (error: any) => {
        //         console.log(error);
        //         dispatch(handleError(error));
        //     }
        // );
    };
}

export const movieActions = {
    searchMovieByName
};